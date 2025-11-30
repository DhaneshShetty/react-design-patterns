import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <Card>
        <Card.Header message="Vite + React"/>
        <Card.Body>
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
        </Card.Body>
        <Card.Footer>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </Card.Footer>
      </Card>
    </>
  )
}

export default App
