import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingContactButtons from './components/FloatingContactButtons'
import MobileBottomNav from './components/MobileBottomNav'

import Home from './pages/Home'
import CakeListing from './pages/CakeListing'
import CakeDetail from './pages/CakeDetail'
import Checkout from './pages/Checkout'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background-light font-display text-slate-900 flex flex-col">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cakes" element={<CakeListing />} />
            <Route path="/cake/:slug" element={<CakeDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />

        {/* Mobile-specific components */}
        <FloatingContactButtons />
        <MobileBottomNav />
      </div>
    </Router>
  )
}

export default App
