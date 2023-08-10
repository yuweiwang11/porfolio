import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import axios from 'axios'
import ProjectOne from './ProjectOne'
import ProjectTwo from './ProjectTwo'

axios.defaults.baseURL = 'http://localhost:3000'

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/projectOne" element={<ProjectOne />} />
          <Route path="/projectTwo" element={<ProjectTwo />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
