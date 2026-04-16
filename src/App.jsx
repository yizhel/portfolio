import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Sign from './pages/Sign'
import Velop from './pages/Velop'
import Fense from './pages/Fense'
import Tails from './pages/Tails'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/velop" element={<Velop />} />
        <Route path="/fense" element={<Fense />} />
        <Route path="/tails" element={<Tails />} />
      </Routes>
    </BrowserRouter>
  )
}
