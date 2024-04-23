import { SatelliteAltitude } from '../../types'

interface Fixtures {
  stable: SatelliteAltitude[]
  stabilizedDecay: SatelliteAltitude[]
  rapidDecay: SatelliteAltitude[]
}

const fixtures: Fixtures = {
  stable: [
    {
      lastUpdated: -5,
      altitude: 160 
    },
    {
      lastUpdated:  - 15,
      altitude: 161 
    },
    {
      lastUpdated:  - 25,
      altitude: 162 
    },
    {
      lastUpdated:  - 35,
      altitude: 165
    },
    {
      lastUpdated:  - 45,
      altitude: 160 
    },
    {
      lastUpdated:  - 55,
      altitude: 161
    },
    {
      lastUpdated: - 65,
      altitude: 160 
    },
    {
      lastUpdated:  - 75,
      altitude: 165 
    },
    {
      lastUpdated:  - 85,
      altitude: 160 
    },
    {
      lastUpdated:  - 95,
      altitude: 168 
    },
    {
      lastUpdated:  - 105,
      altitude: 167 
    },
    {
      lastUpdated:  - 115,
      altitude: 168
    }
  ],
  stabilizedDecay: [
    {
      lastUpdated: -5,
      altitude: 160 
    },
    {
      lastUpdated:  - 15,
      altitude: 161 
    },
    {
      lastUpdated:  - 25,
      altitude: 162 
    },
    {
      lastUpdated:  - 35,
      altitude: 165
    },
    {
      lastUpdated:  - 45,
      altitude: 160 
    },
    {
      lastUpdated:  - 55,
      altitude: 161
    },
    {
      lastUpdated: - 65,
      altitude: 160 
    },
    {
      lastUpdated:  - 75,
      altitude: 155 
    },
    {
      lastUpdated:  - 85,
      altitude: 160 
    },
    {
      lastUpdated:  - 95,
      altitude: 158 
    },
    {
      lastUpdated:  - 105,
      altitude: 157 
    },
    {
      lastUpdated:  - 115,
      altitude: 158
    }
  ],

  rapidDecay: [
    {
      lastUpdated: -5,
      altitude: 150 
    },
    {
      lastUpdated:  - 15,
      altitude: 151 
    },
    {
      lastUpdated:  - 25,
      altitude: 152 
    },
    {
      lastUpdated:  - 35,
      altitude: 155
    },
    {
      lastUpdated:  - 45,
      altitude: 150 
    },
    {
      lastUpdated:  - 55,
      altitude: 151
    },
    {
      lastUpdated: - 65,
      altitude: 160 
    },
    {
      lastUpdated:  - 75,
      altitude: 165 
    },
    {
      lastUpdated:  - 85,
      altitude: 160 
    },
    {
      lastUpdated:  - 95,
      altitude: 168 
    },
    {
      lastUpdated:  - 105,
      altitude: 167 
    },
    {
      lastUpdated:  - 115,
      altitude: 168
    }
  ]
}

export function getFixture(name: string, timestamp: number): SatelliteAltitude[] {
    const fixture: SatelliteAltitude[] =  []
    for (const altitude of fixtures[name as keyof Fixtures]) {
      fixture.push({
        lastUpdated: altitude.lastUpdated + timestamp,
        altitude: altitude.altitude
      })
    }
    return fixture
}

