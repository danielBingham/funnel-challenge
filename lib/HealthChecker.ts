import { SatelliteAltitude } from '../types'
import { SatelliteStatsCalculator } from './SatelliteStatsCalculator'

/**
 * A class encapsulating health check logic for the Satellite.
 */
export class HealthChecker {
  constructor() {}

  /**
   * Check the health of the Satellite using the provided SatelliteAltitude
   * data.
   *
   * @param {SatelliteAltitude[]} data  An array of SatelliteAltitude data
   * points that will be used to determine the health of the Satellite.
   *
   * @return {string} A message indicating the health status of the Satellite.
   */
  checkHealth(data: SatelliteAltitude[]): string {
    const calculator = new SatelliteStatsCalculator(data)
    const currentMinute = calculator.getStats(60000)
    const previousMinute = calculator.getStats(60000,60000)

    if ( currentMinute.averageAltitude < 160 ) {
      return "WARNING: RAPID ORBITAL DECAY IMMINENT"
    } else if ( currentMinute.averageAltitude >= 160 && previousMinute.averageAltitude < 160 ) {
      return  "Sustained Low Earth Orbit Resumed" 
    } 
  
    return "Altitude is A-OK" 
  }
}

