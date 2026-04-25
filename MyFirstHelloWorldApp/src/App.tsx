const forecastHighlights = [
  '7-day forecast and 7-day futurecast',
  'Current wind speed and pressure-zone tracking',
  'Storm alert concepts inspired by regional weather coverage',
  'Futurecast and projectile motion experiments',
]

const modelingLab = [
  'Counterclockwise spinning-top simulation',
  'Mini physics engine prototype with Copilot',
  'Chart.js scatterplot and bar graph concepts',
  'Catastrophe modeling sandbox for phase-by-phase demos',
]

const deliveryRoadmap = ['Phase 1', 'Phase 2', 'Phase 3', 'Go live with KCC development handoff']

function App() {
  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-xl-10">
          <section className="card border-0 shadow-lg overflow-hidden">
            <div className="card-body p-4 p-md-5">
              <span className="badge text-bg-primary rounded-pill px-3 py-2 mb-3">
                React + TypeScript Base App
              </span>
              <h1 className="display-5 fw-bold text-primary-emphasis mb-3">
                Natural Disaster Catastrophe Modeling Demo
              </h1>
              <p className="lead text-body-secondary mb-4">
                This Hello World sandbox is the starting point for a weather-focused modeling application built with React,
                TypeScript, and TSX. The goal is to combine forecast storytelling, storm tracking, and interactive data
                visualization in one place.
              </p>

              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <div className="h-100 p-4 bg-body-tertiary border rounded-4">
                    <h2 className="h4 mb-3">Weather and Alert Focus</h2>
                    <ul className="mb-0 ps-3">
                      {forecastHighlights.map((item) => (
                        <li key={item} className="mb-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="h-100 p-4 bg-body-tertiary border rounded-4">
                    <h2 className="h4 mb-3">Modeling and Physics Lab</h2>
                    <ul className="mb-0 ps-3">
                      {modelingLab.map((item) => (
                        <li key={item} className="mb-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="row g-4 align-items-stretch">
                <div className="col-lg-7">
                  <div className="h-100 p-4 border rounded-4 bg-primary-subtle">
                    <h2 className="h4 mb-3">What This App Is About</h2>
                    <p className="mb-3">
                      Think of this as a demonstration platform for storm alerts, futurecast thinking, and catastrophe
                      modeling ideas similar to what viewers expect from regional weather coverage in Boston and other
                      coastal markets.
                    </p>
                    <p className="mb-0">
                      It is also a safe sandbox for experimenting with charts, simulation ideas, and UI concepts before
                      handing a more mature build to a development team.
                    </p>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="h-100 p-4 border rounded-4">
                    <h2 className="h4 mb-3">Demo Roadmap</h2>
                    <ol className="mb-0 ps-3">
                      {deliveryRoadmap.map((item) => (
                        <li key={item} className="mb-2">
                          {item}
                        </li>
                      ))}
                    </ol>
                    <div className="alert alert-info mt-4 mb-0" role="alert">
                      End state: a go-live ready concept package to send to the KCC development team.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default App
