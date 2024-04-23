import { getFixture } from '../fixtures/fixture'
import { SatelliteStatsCalculator } from '../../lib/SatelliteStatsCalculator'

describe('SatelliteStatsCalculator', function() {
  describe('getStats()', function() {
    it('should calculate the minimum, maximum, and average altitudes in a given window', function() {
      const fixture = getFixture('stable', Date.now())
      const calculator = new SatelliteStatsCalculator(fixture)
      const stats = calculator.getStats(60)

      expect(stats.minimumAltitude).toEqual(160)
      expect(stats.maximumAltitude).toEqual(165)
      expect(stats.averageAltitude).toEqual(161.5)
    })

    it('should only calculate the stats using altitudes with in the window', function() {
      const fixture = getFixture('stable', Date.now())
      const calculator = new SatelliteStatsCalculator(fixture)
      const stats = calculator.getStats(30)

      expect(stats.minimumAltitude).toEqual(160)
      expect(stats.maximumAltitude).toEqual(162)
      expect(stats.averageAltitude).toEqual(161)
    })

    it('should handle an offset accurately', function() {
      const fixture = getFixture('stable', Date.now())
      const calculator = new SatelliteStatsCalculator(fixture)
      const stats = calculator.getStats(30, 30)

      expect(stats.minimumAltitude).toEqual(160)
      expect(stats.maximumAltitude).toEqual(165)
      expect(stats.averageAltitude).toEqual(162)
    })
  })
})
