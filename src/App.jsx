import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Components/Landing'

function App() {
 

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path='/' element = {<Landing/>} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
