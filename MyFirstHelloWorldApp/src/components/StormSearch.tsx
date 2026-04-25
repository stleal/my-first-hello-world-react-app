import { useState } from 'react'

type StormRecord = {
  id: string
  name: string
  basin: string
  category: string
  maxWindMph: number
  pressureMb: number
  advisory: string
  landfallRisk: string
}

const stormData: StormRecord[] = [
  { id: 'ATL-001', name: 'Alex', basin: 'Atlantic', category: 'Tropical Storm', maxWindMph: 52, pressureMb: 1002, advisory: 'Monitoring coastal showers', landfallRisk: 'Low' },
  { id: 'ATL-002', name: 'Bonnie', basin: 'Atlantic', category: 'Category 1', maxWindMph: 82, pressureMb: 984, advisory: 'Outer bands nearing Bermuda', landfallRisk: 'Moderate' },
  { id: 'ATL-003', name: 'Colin', basin: 'Atlantic', category: 'Tropical Depression', maxWindMph: 33, pressureMb: 1007, advisory: 'Weak circulation drifting east', landfallRisk: 'Low' },
  { id: 'ATL-004', name: 'Danielle', basin: 'Atlantic', category: 'Category 2', maxWindMph: 101, pressureMb: 968, advisory: 'Rapid strengthening overnight', landfallRisk: 'High' },
  { id: 'ATL-005', name: 'Earl', basin: 'Atlantic', category: 'Category 3', maxWindMph: 121, pressureMb: 952, advisory: 'Major hurricane core expanding', landfallRisk: 'High' },
  { id: 'ATL-006', name: 'Fiona', basin: 'Atlantic', category: 'Category 4', maxWindMph: 138, pressureMb: 941, advisory: 'Storm surge risk rising', landfallRisk: 'Extreme' },
  { id: 'ATL-007', name: 'Gaston', basin: 'Atlantic', category: 'Tropical Storm', maxWindMph: 61, pressureMb: 997, advisory: 'Heavy rain bands on approach', landfallRisk: 'Moderate' },
  { id: 'ATL-008', name: 'Hermine', basin: 'Atlantic', category: 'Category 1', maxWindMph: 77, pressureMb: 987, advisory: 'Coastal wind alerts posted', landfallRisk: 'Moderate' },
  { id: 'ATL-009', name: 'Ian', basin: 'Atlantic', category: 'Category 5', maxWindMph: 157, pressureMb: 928, advisory: 'Catastrophic eyewall intact', landfallRisk: 'Extreme' },
  { id: 'ATL-010', name: 'Julia', basin: 'Atlantic', category: 'Category 1', maxWindMph: 79, pressureMb: 985, advisory: 'Land interaction beginning', landfallRisk: 'Moderate' },
  { id: 'PAC-011', name: 'Kay', basin: 'East Pacific', category: 'Category 2', maxWindMph: 104, pressureMb: 965, advisory: 'Strong surf and rainfall likely', landfallRisk: 'High' },
  { id: 'PAC-012', name: 'Lester', basin: 'East Pacific', category: 'Tropical Storm', maxWindMph: 57, pressureMb: 998, advisory: 'Watching for organized convection', landfallRisk: 'Low' },
  { id: 'PAC-013', name: 'Madeline', basin: 'East Pacific', category: 'Category 1', maxWindMph: 86, pressureMb: 981, advisory: 'Track bending north-northwest', landfallRisk: 'Moderate' },
  { id: 'PAC-014', name: 'Newton', basin: 'East Pacific', category: 'Tropical Storm', maxWindMph: 49, pressureMb: 1001, advisory: 'Localized flooding possible', landfallRisk: 'Low' },
  { id: 'PAC-015', name: 'Orlene', basin: 'East Pacific', category: 'Category 4', maxWindMph: 144, pressureMb: 936, advisory: 'Major hurricane near peak intensity', landfallRisk: 'Extreme' },
  { id: 'PAC-016', name: 'Paine', basin: 'East Pacific', category: 'Tropical Depression', maxWindMph: 30, pressureMb: 1009, advisory: 'Remnant moisture plume spreading inland', landfallRisk: 'Low' },
  { id: 'PAC-017', name: 'Roslyn', basin: 'East Pacific', category: 'Category 3', maxWindMph: 128, pressureMb: 948, advisory: 'Dangerous surf and surge signal', landfallRisk: 'High' },
  { id: 'PAC-018', name: 'Seymour', basin: 'East Pacific', category: 'Category 4', maxWindMph: 141, pressureMb: 938, advisory: 'Well-defined eye feature visible', landfallRisk: 'Moderate' },
  { id: 'IND-019', name: 'Tara', basin: 'North Indian', category: 'Cyclonic Storm', maxWindMph: 68, pressureMb: 992, advisory: 'Port conditions worsening', landfallRisk: 'Moderate' },
  { id: 'IND-020', name: 'Uma', basin: 'North Indian', category: 'Severe Cyclonic Storm', maxWindMph: 97, pressureMb: 972, advisory: 'Heavy rainfall across delta region', landfallRisk: 'High' },
  { id: 'IND-021', name: 'Varun', basin: 'North Indian', category: 'Depression', maxWindMph: 29, pressureMb: 1008, advisory: 'Low-end monsoon circulation', landfallRisk: 'Low' },
  { id: 'SHEM-022', name: 'Willa', basin: 'South Pacific', category: 'Category 2', maxWindMph: 109, pressureMb: 962, advisory: 'Marine warning extended eastward', landfallRisk: 'Moderate' },
  { id: 'SHEM-023', name: 'Xena', basin: 'South Pacific', category: 'Tropical Cyclone', maxWindMph: 73, pressureMb: 989, advisory: 'Squalls impacting island chain', landfallRisk: 'Moderate' },
  { id: 'SHEM-024', name: 'Yara', basin: 'South Indian', category: 'Category 3', maxWindMph: 126, pressureMb: 950, advisory: 'Eyewall replacement underway', landfallRisk: 'High' },
  { id: 'SHEM-025', name: 'Zane', basin: 'South Indian', category: 'Tropical Storm', maxWindMph: 58, pressureMb: 999, advisory: 'Open-ocean system under review', landfallRisk: 'Low' },
]

function StormSearch() {
  const [searchTerm, setSearchTerm] = useState('')
  const [rowsToShow, setRowsToShow] = useState(10)

  const normalizedSearch = searchTerm.trim().toLowerCase()
  const filteredStorms = stormData.filter((storm) => {
    const searchableText = [storm.id, storm.name, storm.basin, storm.category, storm.advisory, storm.landfallRisk]
      .join(' ')
      .toLowerCase()

    return searchableText.includes(normalizedSearch)
  })
  const visibleStorms = filteredStorms.slice(0, rowsToShow)

  return (
    <section id="storm-search" className="section-anchor mt-4 mt-md-5">
      <div className="card border-0 shadow-lg overflow-hidden storm-search-panel">
        <div className="card-body p-4 p-md-5">
          <div className="d-flex flex-column flex-lg-row align-items-lg-end justify-content-between gap-3 mb-4">
            <div>
              <span className="badge text-bg-primary rounded-pill px-3 py-2 mb-3">Storm Search</span>
              <h2 className="display-6 fw-bold mb-2">Storm Advisory Search Desk</h2>
              <p className="lead text-body-secondary mb-0">
                Search across 25 sample storm records and control how many rows are visible in the advisory table.
              </p>
            </div>
            <div className="storm-results-chip">
              Showing {visibleStorms.length} of {filteredStorms.length} matching storms
            </div>
          </div>

          <div className="row g-3 align-items-end mb-4">
            <div className="col-lg-8">
              <label className="form-label fw-semibold" htmlFor="storm-search-input">
                Search storms
              </label>
              <input
                id="storm-search-input"
                type="search"
                className="form-control form-control-lg storm-search-input"
                placeholder="Search by name, basin, category, advisory, or risk"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>
            <div className="col-sm-6 col-lg-4">
              <label className="form-label fw-semibold" htmlFor="storm-row-filter">
                Rows to view
              </label>
              <select
                id="storm-row-filter"
                className="form-select form-select-lg storm-row-filter"
                value={rowsToShow}
                onChange={(event) => setRowsToShow(Number(event.target.value))}
              >
                <option value={5}>5 rows</option>
                <option value={10}>10 rows</option>
                <option value={25}>25 rows</option>
              </select>
            </div>
          </div>

          <div id="storm-search-table" className="table-responsive storm-table-wrap">
            <table className="table align-middle mb-0 storm-table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Storm</th>
                  <th scope="col">Basin</th>
                  <th scope="col">Category</th>
                  <th scope="col">Max Wind</th>
                  <th scope="col">Pressure</th>
                  <th scope="col">Landfall Risk</th>
                  <th scope="col">Advisory</th>
                </tr>
              </thead>
              <tbody>
                {visibleStorms.map((storm) => (
                  <tr key={storm.id}>
                    <td className="fw-semibold">{storm.id}</td>
                    <td>{storm.name}</td>
                    <td>{storm.basin}</td>
                    <td>{storm.category}</td>
                    <td>{storm.maxWindMph} mph</td>
                    <td>{storm.pressureMb} mb</td>
                    <td>
                      <span className="badge rounded-pill text-bg-light border storm-risk-badge">{storm.landfallRisk}</span>
                    </td>
                    <td>{storm.advisory}</td>
                  </tr>
                ))}
                {visibleStorms.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="text-center py-5 text-body-secondary">
                      No storms matched your search.
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StormSearch