import { useState, useRef, useEffect } from 'react'
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps'
import styles from './FencingMap.module.css'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'
const US_STATES_URL = 'https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json'

const CATEGORIES = {
  Club:      { color: '#4db8f0', label: 'Club visited' },
  Competed:  { color: '#4ddd88', label: 'Competitor' },
  Referee:   { color: '#ffffff', label: 'Referee' },
  Spectator:     { color: '#f5a040', label: 'Spectator' },
}

const locations = [
  // Clubs
  { name: "Pittsburgh Fencers' Club",        category: 'Club', coords: [-79.8957099,  40.4482024] },
  { name: "Corsair Fencing Club",            category: 'Club', coords: [-79.9743644,  40.5927399] },
  { name: "Halberstadt Fencers' Club",       category: 'Club', coords: [-122.416939,  37.763187 ] },
  { name: "The Fencing Center",              category: 'Club', coords: [-121.8864498, 37.2472688] },
  { name: "TSC Eintracht Dortmund",          category: 'Club', coords: [7.4648828,    51.4931611] },
  { name: "SchermCentrum Amsterdam",         category: 'Club', coords: [4.8513364,    52.3393503] },
  { name: "Tim Morehouse Fencing Club",      category: 'Club', coords: [-73.9733647,  40.7910415] },
  { name: "Capital Fencing Academy",         category: 'Club', coords: [-77.1104835,  39.0514906] },
  { name: "Boston Fencing Club",             category: 'Club', coords: [-71.1380462,  42.3594703] },
  { name: "Moe Fencing Club",               category: 'Club', coords: [-71.092689,   42.3917148] },
  { name: "Forge Fencing Academy & Club",    category: 'Club', coords: [-78.9051337,  36.004316 ] },
  { name: "Oregon Fencing Alliance",         category: 'Club', coords: [-122.752194,  45.4719046] },
  { name: "CMU Fencing Club",                category: 'Club', coords: [-79.9416062,  40.4434912] },
  { name: "Pitt Fencing Club",               category: 'Club', coords: [-79.9651775,  40.4432476] },
  { name: "Vango Beijing Fencing Center",    category: 'Club', coords: [116.398099,   39.985743 ] },
  { name: "Globus Fencing Academy",          category: 'Club', coords: [-96.8309883,  32.9337434] },
  { name: "Gold Blade Fencing Center",       category: 'Club', coords: [-97.1169651,  32.9471732] },
  { name: "San Francisco Fencing Academy",   category: 'Club', coords: [-122.4118844, 37.8043599] },
  { name: "Tufts University Fencing Club",   category: 'Club', coords: [-71.1182729,  42.4085371] },
  { name: "Precision Athletics Fencing Club",category: 'Club', coords: [-118.3546641, 33.8252202] },
  // Competed
  { name: "The Greater Philadelphia Expo Center",    category: 'Competed', coords: [-75.4580644, 40.1238562], events: ["2021 — American Challenge"] },
  { name: "White Building Gym",                      category: 'Competed', coords: [-77.8588728, 40.7983417], events: ["2019 — Penn State Collegiate Club Scrimmage"] },
  { name: "Veale Center",                            category: 'Competed', coords: [-81.6056631, 41.5017299], events: ["2019 — Case Western Reserve University Dual Meet"] },
  { name: "Woodling Gymnasium",                      category: 'Competed', coords: [-81.6712674, 41.5033275], events: ["2019 — Cleveland State University Kiraly Open"] },
  { name: "Mitchell Recreation & Athletic Center",   category: 'Competed', coords: [-82.5196983, 40.0730716], events: ["2024, 2025 — Denison Open"] },
  { name: "French Field House",                      category: 'Competed', coords: [-83.0204083, 40.005423 ], events: ["2022, 2023, 2024 — Ohio State University Open"] },
  { name: "Chilhowee Park & Exposition Center",      category: 'Competed', coords: [-83.8840324, 35.9962958], events: ["2018 — USACFC Championships"] },
  { name: "The Sportsplex",                          category: 'Competed', coords: [-75.0027885, 40.1657737], events: ["2019 — USACFC Championships"] },
  { name: "Turnstone Center",                        category: 'Competed', coords: [-85.1370649, 41.1063123], events: ["2023 — USACFC Championships"] },
  { name: "Nazlymov Fencing",                        category: 'Competed', coords: [-77.0982193, 38.9875766], events: ["2019 — Nazlymov Summer Open"] },
  { name: "Cobra Fencing Club",                      category: 'Competed', coords: [-74.0410834, 40.733414 ], events: ["2019 — Cobra Open"] },
  { name: "Intramural Sports Building",              category: 'Competed', coords: [-83.7422564, 42.2694673], events: ["2022 — MFC Championships"] },
  { name: "Capital Fencing Academy",                 category: 'Competed', coords: [-77.1104835, 39.0514906], events: ["2024 — Capital Fencing Academy Open"] },
  // Refereed
  { name: "Dallas Market Hall",                        category: 'Referee', coords: [-96.8293608, 32.8032476], events: ["2024 — North Dallas Round Up"] },
  { name: "Kentucky International Convention Center",  category: 'Referee', coords: [-85.7566937, 38.2550791], events: ["2024 — NAC"] },
  { name: "Pennsylvania Convention Center",            category: 'Referee', coords: [-75.1626429, 39.9551235], events: ["2022 — Summer Nationals"] },
  { name: "Minneapolis Convention Center",             category: 'Referee', coords: [-93.2739777, 44.9696719], events: ["2022 — Summer Nationals", "2022 — October NAC"] },
  { name: "Fort Worth Convention Center",              category: 'Referee', coords: [-97.3276906, 32.7496989], events: ["2023 — March NAC", "2023 — November NAC"] },
  { name: "Columbus Convention Center",                category: 'Referee', coords: [-83.0024339, 39.9736690], events: ["2024 — Summer Nationals"] },
  { name: "Charlotte Convention Center",               category: 'Referee', coords: [-80.8464461, 35.2226882], events: ["2022 — April NAC", "2024 — Junior Olympics"] },
  { name: "Georgia International Convention Center",   category: 'Referee', coords: [-84.4575306, 33.6456265], events: ["2024 — December SJCC"] },
  { name: "Atlantic City Convention Center",           category: 'Referee', coords: [-74.4385634, 39.3630994], events: ["2024 — October NAC"] },
  { name: "Virginia Beach Convention Center",          category: 'Referee', coords: [-75.9872763, 36.8461695], events: ["2024 — USACFC Championships"] },
  { name: "Greater Richmond Convention Center",        category: 'Referee', coords: [-77.4368334, 37.5450707], events: ["2023 — December SJCC + Div I NAC"] },
  { name: "Ryan Fieldhouse",                           category: 'Referee', coords: [-87.6725064, 42.060229 ], events: ["2025 — Remenyik Open", "2026 — Schiller Duals"] },
  { name: "San José Convention Center & South Hall",   category: 'Referee', coords: [-121.8881933, 37.3284838], events: ["2024 — January NAC"] },
  { name: "Oregon Convention Center",                  category: 'Referee', coords: [-122.6618605, 45.5286606], events: ["2024 — March NAC"] },
  { name: "Denver Fencing Center",                     category: 'Referee', coords: [-105.0038051, 39.6817075], events: ["2023 — Denver Regional Event"] },
  { name: "Kansas City Convention Center",             category: 'Referee', coords: [-94.5874878, 39.0982534], events: ["2025 — January NAC"] },
  { name: "Huntington Convention Center of Cleveland", category: 'Referee', coords: [-81.6945448, 41.5036537], events: ["2025 — March NAC"] },
  { name: "Phoenix Convention Center",                 category: 'Referee', coords: [-112.0705366, 33.4498969], events: ["2023 — Summer Nationals"] },
  { name: "Salt Palace Convention Center",             category: 'Referee', coords: [-111.8961461, 40.7678827], events: ["2022 — December NAC", "2024 — April NAC", "2025 — October NAC"] },
  { name: "Olin Fitness Center",                       category: 'Referee', coords: [-72.6396303, 42.3148399], events: ["2024 — The Big One"] },
  { name: "MIT Recreation - Zesiger Center",           category: 'Referee', coords: [-71.096199,  42.358815 ], events: ["2024 — NEIFC Championships"] },
  { name: "AZS AGH Kraków",                           category: 'Referee', coords: [19.9006672,  50.0695855], events: ["2026 — EFC Cadet Circuit World Cup"] },
  { name: "Joyce Center",                              category: 'Referee', coords: [-86.2313438, 41.6984161], events: ["2026 — NCAA National Championships"] },
  { name: "The Liacouras Center",                      category: 'Referee', coords: [-75.1585544, 39.9798791], events: ["2025 — Temple Open"] },
  { name: "Wolstein Center",                           category: 'Referee', coords: [-81.6768646, 41.499382 ], events: ["2026 — NCAA Regional Championships"] },
  { name: "Renasant Convention Center",                category: 'Referee', coords: [-90.0510328, 35.1519617], events: ["2026 — January SJCC"] },
  { name: "Santa Clara Convention Center",            category: 'Referee', coords: [-121.975247,  37.4046706], events: ["2025 — AFM Super SYC"] },
  { name: "Duke Energy Convention Center",            category: 'Referee', coords: [-84.5179805,  39.1011667], events: ["2026 — February NAC"] },
  { name: "WSU Athletic Performance Center",          category: 'Referee', coords: [-83.0770172,  42.3547136], events: ["2025 — CCFC Championships"] },
  { name: "Kärntner Messen Klagenfurt",               category: 'Referee', coords: [14.3070548,   46.6174614], events: ["2025 — EFC Cadet Circuit World Cup"] },
  { name: "Prime F. Osborn III Convention Center",    category: 'Referee', coords: [-81.6720716,  30.3280748], events: ["2025 — Battle on the Beach Regional Event"] },
  { name: "Los Angeles Convention Center",            category: 'Referee', coords: [-118.2695624, 34.0403207], events: ["2025 — April NAC"] },
  { name: "IM West Fitness Center",                   category: 'Referee', coords: [-84.4871,     42.7288   ], events: ["2024 — Midwest Fencing Conference Championships"] },
  // Spectator
  { name: "Wuxi Sports Center",             category: 'Spectator', coords: [120.264328,   31.546871 ], events: ["2018 — Fencing World Championships"] },
  { name: "IGA Stadium (Montreal)",         category: 'Spectator', coords: [-73.6272889,  45.5332997], events: ["2020 — FIE Sabre Grand Prix"] },
  { name: "Walter E. Washington Conv. Ctr", category: 'Spectator', coords: [-77.0229934,  38.9048838], events: ["2024 — FIE Foil Grand Prix"] },
  { name: "Grand Palais (Paris)",           category: 'Spectator', coords: [2.3124544,    48.8661091], events: ["2024 — Olympic Games"] },
]

export default function FencingMap() {
  const [tooltip, setTooltip] = useState(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const mapRef = useRef(null)

  useEffect(() => {
    const el = mapRef.current
    if (!el) return
    const prevent = (e) => e.preventDefault()
    el.addEventListener('wheel', prevent, { passive: false })
    return () => el.removeEventListener('wheel', prevent)
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.legend}>
        {Object.entries(CATEGORIES).map(([key, { color, label }]) => (
          <div key={key} className={styles.legendItem}>
            <span className={styles.legendDot} style={{ background: color }} />
            <span className={styles.legendLabel}>{label}</span>
          </div>
        ))}
      </div>

      <div className={styles.mapContainer} ref={mapRef}>
        <ComposableMap
          projection="geoNaturalEarth1"
          projectionConfig={{ scale: 153 }}
          style={{ width: '100%', height: '100%' }}
        >
          <ZoomableGroup
            center={[0, 20]}
            zoom={1}
            maxZoom={128}
            onMoveEnd={({ zoom }) => setZoom(zoom)}
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map(geo => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#1a2d42"
                    stroke="#0d1b2a"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: 'none' },
                      hover:   { outline: 'none', fill: '#243b55' },
                      pressed: { outline: 'none' },
                    }}
                  />
                ))
              }
            </Geographies>

            <Geographies geography={US_STATES_URL}>
              {({ geographies }) =>
                geographies.map(geo => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="transparent"
                    stroke="rgba(126, 184, 212, 0.2)"
                    strokeWidth={0.4}
                    style={{
                      default: { outline: 'none' },
                      hover:   { outline: 'none' },
                      pressed: { outline: 'none' },
                    }}
                  />
                ))
              }
            </Geographies>

            {locations.map((loc, i) => (
              <Marker
                key={i}
                coordinates={loc.coords}
                onMouseEnter={(e) => {
                  const rect = e.target.closest('svg').parentElement.getBoundingClientRect()
                  setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
                  setTooltip(loc)
                }}
                onMouseMove={(e) => {
                  const rect = e.target.closest('svg').parentElement.getBoundingClientRect()
                  setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
                }}
                onMouseLeave={() => setTooltip(null)}
              >
                <circle
                  r={5 / zoom}
                  fill={CATEGORIES[loc.category].color}
                  fillOpacity={0.85}
                  stroke={CATEGORIES[loc.category].color}
                  strokeWidth={0.5 / zoom}
                  strokeOpacity={0.4}
                  style={{ cursor: 'pointer' }}
                />
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>

        {tooltip && (
          <div
            className={styles.tooltip}
            style={{ left: tooltipPos.x + 12, top: tooltipPos.y - 12 }}
          >
            <span className={styles.tooltipName}>{tooltip.name}</span>
            <span
              className={styles.tooltipCategory}
              style={{ color: CATEGORIES[tooltip.category].color }}
            >
              {CATEGORIES[tooltip.category].label}
            </span>
            {tooltip.events && (
              <div className={styles.tooltipEvents}>
                {tooltip.events.map((e, i) => (
                  <span key={i} className={styles.tooltipEvent}>{e}</span>
                ))}
              </div>
            )}
          </div>
        )}

        <div className={styles.zoomBar}>
          <span className={styles.zoomLabel}>{Math.round(zoom)}x</span>
          <div className={styles.zoomTrack}>
            <div
              className={styles.zoomFill}
              style={{ height: `${(Math.log2(zoom) / Math.log2(128)) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
