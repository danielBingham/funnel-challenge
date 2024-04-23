/**
 * The status of the satellite at a point in time.
 */
export interface SatelliteAltitude {
  lastUpdated: number,
  altitude: number 
}

/**
 * Stats about the Satellite's altitude, calculated from a dataset.
 */
export interface SatelliteStats {
  minimumAltitude: number,
  averageAltitude: number,
  maximumAltitude: number
}


