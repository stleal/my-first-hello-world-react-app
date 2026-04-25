import AirPressure from './AirPressure'
import Rainfall from './Rainfall'
import WindSpeed from './WindSpeed'

const summaryCards = [
  {
    title: 'Storm Summary',
    value: 'Hurricane Iris',
    detail: 'Atlantic basin operational snapshot',
    href: '#storm-summary',
  },
  {
    title: 'Current Category',
    value: 'Category 4',
    detail: 'Major hurricane strength',
    href: '#current-category',
  },
  {
    title: 'Wind Speed',
    value: '132 mph',
    detail: 'Sustained winds at analysis time',
    href: '#wind-speed',
  },
  {
    title: 'Pressure',
    value: '948 mb',
    detail: 'Low pressure intensification zone',
    href: '#pressure',
  },
  {
    title: 'Rainfall',
    value: '6.8 in',
    detail: 'Projected 24-hour accumulation',
    href: '#rainfall',
  },
  {
    title: 'Alert State',
    value: 'Warning',
    detail: 'Coastal evacuation readiness',
    href: '#alert-state',
  },
]

const windSpeedData = [
  { day: 'Mon', speedMph: 64, gustMph: 78 },
  { day: 'Tue', speedMph: 71, gustMph: 84 },
  { day: 'Wed', speedMph: 82, gustMph: 97 },
  { day: 'Thu', speedMph: 95, gustMph: 110 },
  { day: 'Fri', speedMph: 108, gustMph: 124 },
  { day: 'Sat', speedMph: 119, gustMph: 136 },
  { day: 'Sun', speedMph: 132, gustMph: 148 },
]

const airPressureData = [
  { day: 'Mon', pressureMb: 995, zone: 'Outer high-pressure edge' },
  { day: 'Tue', pressureMb: 988, zone: 'Pressure gradient forming' },
  { day: 'Wed', pressureMb: 980, zone: 'Tropical low intensifying' },
  { day: 'Thu', pressureMb: 972, zone: 'Coastal low-pressure lane' },
  { day: 'Fri', pressureMb: 964, zone: 'Rapid deepening phase' },
  { day: 'Sat', pressureMb: 955, zone: 'Major hurricane core' },
  { day: 'Sun', pressureMb: 948, zone: 'Peak low-pressure center' },
]

const rainfallData = [
  { day: 'Mon', inches: 0.8, advisory: 'Normal monitoring' },
  { day: 'Tue', inches: 1.3, advisory: 'Localized ponding' },
  { day: 'Wed', inches: 2.1, advisory: 'Urban flood watch' },
  { day: 'Thu', inches: 3.4, advisory: 'Street flooding possible' },
  { day: 'Fri', inches: 4.6, advisory: 'Flash flood watch' },
  { day: 'Sat', inches: 5.9, advisory: 'Flash flood warning' },
  { day: 'Sun', inches: 6.8, advisory: 'Major runoff concern' },
]

const alertItems = [
  { county: 'Suffolk County', level: 'Warning', note: 'Storm surge barriers may be needed.' },
  { county: 'Norfolk County', level: 'Watch', note: 'Monitor shoreline wind-field expansion.' },
  { county: 'Plymouth County', level: 'Evacuate', note: 'Prepare staged coastal evacuation routes.' },
]

function Dashboard() {
  return (
    <section id="dashboard" className="section-anchor mt-4 mt-md-5">
      <div className="d-flex flex-column flex-lg-row align-items-lg-end justify-content-between gap-3 mb-4">
        <div>
          <span className="badge text-bg-dark rounded-pill px-3 py-2 mb-2">Dashboard</span>
          <h2 className="display-6 fw-bold mb-2">Storm Operations Dashboard</h2>
          <p className="text-body-secondary mb-0">
            Navigation cards jump to the summary panels for category, wind speed, pressure, rainfall, and alert state.
          </p>
        </div>
        <a className="btn btn-outline-primary rounded-pill px-4" href="#storm-summary">
          Review Summary
        </a>
      </div>

      <div className="row g-3 mb-4">
        {summaryCards.map((card) => (
          <div key={card.title} className="col-sm-6 col-xl-4">
            <a className="card h-100 border-0 shadow-sm text-reset dashboard-link" href={card.href}>
              <div className="card-body p-4">
                <p className="text-uppercase small fw-semibold text-body-secondary mb-2">{card.title}</p>
                <h3 className="h4 mb-2">{card.value}</h3>
                <p className="mb-0 text-body-secondary">{card.detail}</p>
              </div>
            </a>
          </div>
        ))}
      </div>

      <div className="row g-4 mb-4">
        <div className="col-lg-8">
          <section id="storm-summary" className="card border-0 shadow-sm section-anchor h-100">
            <div className="card-body p-4">
              <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 mb-4">
                <div>
                  <h3 className="h4 mb-1">Storm Summary Cards</h3>
                  <p className="text-body-secondary mb-0">
                    Snapshot of the current system before drilling into each data series.
                  </p>
                </div>
                <span className="badge text-bg-danger rounded-pill px-3 py-2">Landfall risk elevated</span>
              </div>

              <div className="row g-3">
                <div className="col-sm-6 col-xl-3">
                  <div id="current-category" className="border rounded-4 p-3 h-100 bg-primary-subtle section-anchor">
                    <p className="small text-uppercase fw-semibold text-body-secondary mb-2">Current Category</p>
                    <h4 className="h3 mb-1">4</h4>
                    <p className="mb-0 text-body-secondary">Major hurricane with rapid intensification potential.</p>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                  <div className="border rounded-4 p-3 h-100 bg-info-subtle">
                    <p className="small text-uppercase fw-semibold text-body-secondary mb-2">Wind Speed</p>
                    <h4 className="h3 mb-1">132 mph</h4>
                    <p className="mb-0 text-body-secondary">Sustained winds with 148 mph gusts.</p>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                  <div className="border rounded-4 p-3 h-100 bg-warning-subtle">
                    <p className="small text-uppercase fw-semibold text-body-secondary mb-2">Pressure</p>
                    <h4 className="h3 mb-1">948 mb</h4>
                    <p className="mb-0 text-body-secondary">Core pressure remains in a dangerous low zone.</p>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                  <div className="border rounded-4 p-3 h-100 bg-success-subtle">
                    <p className="small text-uppercase fw-semibold text-body-secondary mb-2">Rainfall</p>
                    <h4 className="h3 mb-1">6.8 in</h4>
                    <p className="mb-0 text-body-secondary">Flash flooding likely in low-lying areas.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="col-lg-4">
          <section id="alert-state" className="card border-0 shadow-sm section-anchor h-100">
            <div className="card-body p-4">
              <h3 className="h4 mb-3">Alert State</h3>
              <div className="alert alert-warning d-flex align-items-center justify-content-between gap-3" role="alert">
                <div>
                  <strong>Warning</strong>
                  <div className="small">Protective actions should begin now.</div>
                </div>
                <span className="badge text-bg-danger rounded-pill">Critical</span>
              </div>

              <div className="list-group list-group-flush">
                {alertItems.map((item) => (
                  <div key={item.county} className="list-group-item px-0">
                    <div className="d-flex justify-content-between align-items-start gap-3">
                      <div>
                        <h4 className="h6 mb-1">{item.county}</h4>
                        <p className="mb-0 text-body-secondary small">{item.note}</p>
                      </div>
                      <span className="badge text-bg-secondary rounded-pill">{item.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-12 col-xl-4">
          <WindSpeed data={windSpeedData} />
        </div>
        <div className="col-12 col-xl-4">
          <AirPressure data={airPressureData} />
        </div>
        <div className="col-12 col-xl-4">
          <Rainfall data={rainfallData} />
        </div>
      </div>
    </section>
  )
}

export default Dashboard