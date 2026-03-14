import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

// Header Component - Navigation bar for desktop and mobile
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { path: '/', label: 'Trang chủ' },
    { path: '/cakes', label: 'Bánh kem' },
    { path: '/checkout', label: 'Đặt bánh' },
    { path: '/contact', label: 'Liên hệ' },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 bg-background-light/80 backdrop-blur-md border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 md:gap-3">
              <Link to="/" className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center text-accent-pink">
                  <span className="material-symbols-outlined text-2xl md:text-3xl">cake</span>
                </div>
                <span className="text-xl md:text-2xl font-black tracking-tight text-accent-pink">Nhu Cake</span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors ${
                    isActive(link.path)
                      ? 'text-accent-pink border-b-2 border-accent-pink pb-1'
                      : 'hover:text-accent-pink text-slate-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3 md:gap-4">
              <button className="p-2 text-accent-pink relative" aria-label="Giỏ hàng">
                <span className="material-symbols-outlined">shopping_cart</span>
                <span className="absolute top-0 right-0 bg-accent-pink text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">2</span>
              </button>
              <Link to="/checkout" className="hidden md:inline-block bg-primary hover:bg-primary-dark transition-all px-6 py-2.5 rounded-xl font-bold text-slate-900 text-sm">
                Đặt Hàng Ngay
              </Link>
              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-full hover:bg-primary/20"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Menu"
              >
                <span className="material-symbols-outlined text-accent-pink">menu</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search (inside header) */}
        <div className="md:hidden px-4 pb-3">
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-3 text-slate-400">search</span>
            <input
              className="w-full pl-10 pr-4 py-2.5 bg-white border-none rounded-xl text-sm focus:ring-2 focus:ring-primary shadow-sm placeholder:text-slate-400"
              placeholder="Tìm kiếm bánh ngon..."
              type="text"
            />
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay fixed inset-0 bg-black/50 z-40 ${isMenuOpen ? '' : 'hidden'}`}
        onClick={() => setIsMenuOpen(false)}
      />
      <div
        className={`mobile-menu-panel fixed top-0 left-0 w-72 h-full bg-background-light z-50 shadow-2xl p-6 ${isMenuOpen ? 'open' : ''}`}
      >
        <div className="flex justify-between items-center mb-8">
          <span className="text-xl font-black text-accent-pink">Nhu Cake</span>
          <button onClick={() => setIsMenuOpen(false)}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-base font-semibold ${
                isActive(link.path) ? 'text-accent-pink' : 'hover:text-accent-pink'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/cake/dau-tay-kem-tuoi" onClick={() => setIsMenuOpen(false)} className="text-base font-semibold hover:text-accent-pink">
            Chi tiết bánh
          </Link>
        </nav>
      </div>
    </>
  )
}

export default Header
