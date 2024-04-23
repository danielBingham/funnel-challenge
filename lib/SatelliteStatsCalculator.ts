import { SatelliteAltitude, SatelliteStats } from '../types'

/**
 * Calculate stats for the data collected by the SateliteTracker.
 */
export class SatelliteStatsCalculator {
  data: SatelliteAltitude[] 

  constructor(data: SatelliteAltitude[]) {
    this.data = data 
  }

  /**
   * Get the minimum, average, and maximum altitudes from the data in
   * `this.tracker` for the window of time defined by `offset` and `length`,
   * where `offset` is how long ago we want to start the window in seconds from
   * now() and `length` is how long a window we want to calculate stats for in
   * seconds.
   *
   * @param {number} length   The length in seconds of the window we want to calculate stats for.
   * @param {number} offset   (Optional) An offset from now in seconds. (How far back in seconds do we want to start the window?)
   *
   * @return {SatelliteStats} An object containing the calculated minimum,
   * maximum and average altitudes for the window.
   */
  getStats(length: number, offset?: number): SatelliteStats {
    offset = offset || 0
 
    if ( offset + length > 300 ) {
      throw new Error('Window out of range.  We only keep 5 minutes of data.') 
    }

    const stats: SatelliteStats = {
      minimumAltitude: 0,
      averageAltitude: 0,
      maximumAltitude: 0
    }

    const now = Date.now()

    // Start of the window we'll calculate stats for.
    const start = now - offset

    // End of the stats calculation period.
    const end = now - offset - length

    const altitudes: number[] = []
    for(const dataPoint of this.data) {
      if ( dataPoint.lastUpdated < start && dataPoint.lastUpdated > end) {
        altitudes.push(dataPoint.altitude)
      } else if ( dataPoint.lastUpdated <= end ) {
        break
      }
    }

    stats.minimumAltitude = Math.min(...altitudes)
    stats.maximumAltitude = Math.max(...altitudes)
    stats.averageAltitude = altitudes.reduce((sum, altitude) => sum+altitude, 0) / altitudes.length

    return stats 
  }
}
