import { SatelliteAltitude } from '../../types'

interface Fixtures {
  stable: SatelliteAltitude[]
  stabilizedDecay: SatelliteAltitude[]
  rapidDecay: SatelliteAltitude[]
}

const fixtures: Fixtures = {
  stable: [
    {
      lastUpdated: -5000,
      altitude: 160 
    },
    {
      lastUpdated:  - 15000,
      altitude: 161 
    },
    {
      lastUpdated:  - 25000,
      altitude: 162 
    },
    {
      lastUpdated:  - 35000,
      altitude: 165
    },
    {
      lastUpdated:  - 45000,
      altitude: 160 
    },
    {
      lastUpdated:  - 55000,
      altitude: 161
    },
    {
      lastUpdated: - 65000,
      altitude: 160 
    },
    {
      lastUpdated:  - 75000,
      altitude: 165 
    },
    {
      lastUpdated:  - 85000,
      altitude: 160 
    },
    {
      lastUpdated:  - 95000,
      altitude: 168 
    },
    {
      lastUpdated:  - 105000,
      altitude: 167 
    },
    {
      lastUpdated:  - 115000,
      altitude: 168
    }
  ],
  stabilizedDecay: [
    {
      lastUpdated: -5000,
      altitude: 160 
    },
    {
      lastUpdated:  - 15000,
      altitude: 161 
    },
    {
      lastUpdated:  - 25000,
      altitude: 162 
    },
    {
      lastUpdated:  - 35000,
      altitude: 165
    },
    {
      lastUpdated:  - 45000,
      altitude: 160 
    },
    {
      lastUpdated:  - 55000,
      altitude: 161
    },
    {
      lastUpdated: - 65000,
      altitude: 160 
    },
    {
      lastUpdated:  - 75000,
      altitude: 155 
    },
    {
      lastUpdated:  - 85000,
      altitude: 160 
    },
    {
      lastUpdated:  - 95000,
      altitude: 158 
    },
    {
      lastUpdated:  - 105000,
      altitude: 157 
    },
    {
      lastUpdated:  - 115000,
      altitude: 158
    }
  ],

  rapidDecay: [
    {
      lastUpdated: -5000,
      altitude: 150 
    },
    {
      lastUpdated:  - 15000,
      altitude: 151 
    },
    {
      lastUpdated:  - 25000,
      altitude: 152 
    },
    {
      lastUpdated:  - 35000,
      altitude: 155
    },
    {
      lastUpdated:  - 45000,
      altitude: 150 
    },
    {
      lastUpdated:  - 55000,
      altitude: 151
    },
    {
      lastUpdated: - 65000,
      altitude: 160 
    },
    {
      lastUpdated:  - 75000,
      altitude: 165 
    },
    {
      lastUpdated:  - 85000,
      altitude: 160 
    },
    {
      lastUpdated:  - 95000,
      altitude: 168 
    },
    {
      lastUpdated:  - 105000,
      altitude: 167 
    },
    {
      lastUpdated:  - 115000,
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

