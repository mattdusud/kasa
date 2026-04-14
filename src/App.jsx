import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Error from './pages/Error/Error'
import Layout from './components/Layout/Layout'
import Logement from './pages/Logement/Logement'
import './App.css'

function App() {

  return (
    <Routes>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
  )
}

export default App
