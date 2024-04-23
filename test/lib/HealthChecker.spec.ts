import { getFixture } from '../fixtures/fixture'
import { HealthChecker } from '../../lib/HealthChecker'

describe('HealthChecker', function() {

  describe('checkHealth()', function() {

    it('should return "WARNING: RAPID ORBITAL DECAY IMMINENT" when the average altitude over the last minute dips below 160', 
       function() {

         const checker = new HealthChecker()

         const fixture = getFixture('rapidDecay', Date.now())
         const message = checker.checkHealth(fixture)

         expect(message).toEqual("WARNING: RAPID ORBITAL DECAY IMMINENT")
      })

      it('should return "Sustained Low Earth Orbit Resumed" when the average altitude over the last minute dips below 160', function() {
        const checker = new HealthChecker()

        const fixture = getFixture('stabilizedDecay', Date.now())
        const message = checker.checkHealth(fixture)

        expect(message).toEqual("Sustained Low Earth Orbit Resumed")
      })

  })
})
