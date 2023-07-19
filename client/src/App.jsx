import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
