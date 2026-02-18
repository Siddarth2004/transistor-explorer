import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Timeline from './components/Timeline.jsx'
import Fabrication from './components/Fabrication.jsx'
import References from './components/References.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Timeline />
        <Fabrication />
        <References />
      </main>
      <footer className="footer">
        <div className="container">
          <p>
            Transistor Explorer is an educational resource.<br />
            All historical claims are cited — see the References section above.<br />
            Content does not represent the views of any institution or company.
          </p>
          <p style={{ marginTop: 12 }}>
            Built with curiosity. Hosted at{' '}
            <a href="https://transistor-explorer.com">transistor-explorer.com</a>
          </p>
        </div>
      </footer>
    </>
  )
}
