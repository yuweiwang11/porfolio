import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
