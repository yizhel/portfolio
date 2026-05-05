import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}
import Nav from './components/Nav'
import Home from './pages/Home'
import Sign from './pages/Sign'
import WorkDetail from './pages/WorkDetail'
import Velop from './pages/Velop'
import Fense from './pages/Fense'
import Tails from './pages/Tails'
import Stinations from './pages/Stinations'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/sign/:id" element={<WorkDetail />} />
        <Route path="/velop" element={<Velop />} />
        <Route path="/fense" element={<Fense />} />
        <Route path="/tails" element={<Tails />} />
        <Route path="/stinations" element={<Stinations />} />
      </Routes>
    </BrowserRouter>
  )
}
