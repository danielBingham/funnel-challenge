import { SatelliteAltitude } from '../types'

/**
 * A tracker used to poll the Satellite's data API and accumulate data on the
 * Satellite's altitude.
 */
export class SatelliteTracker {
  /** An array of SatelliteAltitude data points. **/
  data: SatelliteAltitude[]

  /** The id returned by `setTimeout`.  Can be used to cancel our polling. **/
  timeoutId: any

  constructor() {
    this.data = []

    this.timeoutId = null
  }

  /**
   * Poll the satelite data feed. If hte retrieved data is fresher than our
   * most recent previous poll, add it to our data array.
   *
   * @return {Promise<void>}
   */
  async poll(): Promise<void> {
    const response = await fetch(`http://nestio.space/api/satellite/data`)
    
    if ( ! response.ok ) {
      // Retries or errors.
    }

    const data = await response.json()
   
    const lastUpdatedInSeconds = new Date(data.last_updated).getTime()
    if ( this.data.length == 0 || lastUpdatedInSeconds > this.data[0].lastUpdated) {
      // Most recent result is going on the front of the array.
      this.data.unshift({
        lastUpdated: new Date(data.last_updated).getTime(),
        altitude: parseFloat(data.altitude)
      })

      // We only need to keep 5 minutes of data.  We're polling every 5 seconds, but
      // only storing the poll when the API updates.  The API updates every 10
      // seconds.  So 5 minutes * 60 seconds/minute = 300 seconds / 10 seconds
      // = 30 data points.
      //
      // If we have more than 30 data points, we have more than 5 minutes of
      // data, ditch the 31st oldest data point.
      if ( this.data.length >= 31) {
        this.data.pop()
      }
    }
  }

  /**
   * Begin polling on a 5 second interval.
   */
  track(): void {
    // Poll the endpoint every 5 seconds. 
    this.timeoutId = setTimeout(() => {
      this.poll()
      this.track()
    }, 5000)
  }

  /**
   * Cancel polling.
   */
  cancelTracking(): void {
    clearTimeout(this.timeoutId)
  }
}
