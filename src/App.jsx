import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Projects />
      </div>
    </>
  )
}

export default App
