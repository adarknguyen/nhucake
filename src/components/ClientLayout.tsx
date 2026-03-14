'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavLink } from '../types'

// Header Component - Navigation bar for desktop and mobile
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const navLinks: NavLink[] = [
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
              <Link href="/" className="flex items-center gap-2 md:gap-3">
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
                  href={link.path}
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
              <Link href="/checkout" className="hidden md:inline-block bg-primary hover:bg-primary-dark transition-all px-6 py-2.5 rounded-xl font-bold text-slate-900 text-sm">
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
              href={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-base font-semibold ${
                isActive(link.path) ? 'text-accent-pink' : 'hover:text-accent-pink'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/cake/dau-tay-kem-tuoi" onClick={() => setIsMenuOpen(false)} className="text-base font-semibold hover:text-accent-pink">
            Chi tiết bánh
          </Link>
        </nav>
      </div>
    </>
  )
}

// Footer Component
function Footer() {
  return (
    <>
      {/* Desktop Footer */}
      <footer className="hidden md:block bg-background-dark text-slate-300 py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-accent-pink">
                <span className="material-symbols-outlined">cake</span>
              </div>
              <span className="text-xl font-black text-white">Nhu Cake</span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Nâng tầm những khoảnh khắc đời thường bằng những chiếc bánh thủ công. Trụ sở tại TP. Hồ Chí Minh, Việt Nam.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 md:mb-6">Liên Kết Nhanh</h4>
            <ul className="space-y-3 md:space-y-4 text-sm">
              <li><Link href="/cakes" className="hover:text-primary transition-colors">Thực Đơn</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Liên Hệ</Link></li>
              <li><Link href="/checkout" className="hover:text-primary transition-colors">Đặt Hàng</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 md:mb-6">Hỗ Trợ</h4>
            <ul className="space-y-3 md:space-y-4 text-sm">
              <li><Link href="/contact" className="hover:text-primary transition-colors">Liên Hệ</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Câu Hỏi Thường Gặp</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Chính Sách Bảo Mật</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 md:mb-6">Bản Tin</h4>
            <p className="text-sm opacity-70 mb-4">Đăng ký để nhận ưu đãi đặc biệt.</p>
            <form className="flex">
              <input
                className="bg-slate-800 border-none rounded-l-lg px-4 py-2 w-full focus:ring-primary text-slate-100"
                placeholder="Email của bạn"
                type="email"
              />
              <button className="bg-primary text-accent-pink px-4 py-2 rounded-r-lg font-bold">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </form>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-slate-800 mt-12 md:mt-16 pt-6 md:pt-8 text-center text-xs opacity-50">
          <p>© 2024 Nhu Cake. Tất cả quyền được bảo lưu.</p>
        </div>
      </footer>

      {/* Mobile Footer - Simple version */}
      <div className="md:hidden px-4 text-center py-4 text-xs text-slate-400">
        <p>Mở cửa hàng ngày: 09:00 - 21:00</p>
        <p className="mt-1">© 2024 Nhu Cake. Bảo lưu mọi quyền.</p>
      </div>
    </>
  )
}

// Floating Contact Buttons
function FloatingContactButtons() {
  return (
    <div className="fixed bottom-20 right-4 z-30 flex flex-col gap-3 md:hidden">
      <a
        href="https://zalo.me/0123456789"
        className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <span className="material-symbols-outlined text-white text-2xl">chat</span>
      </a>
      <a
        href="tel:+84123456789"
        className="w-12 h-12 bg-accent-pink rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <span className="material-symbols-outlined text-white text-2xl">call</span>
      </a>
    </div>
  )
}

// Mobile Bottom Navigation
function MobileBottomNav() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
      <div className="flex justify-around py-2">
        <Link href="/" className={`flex flex-col items-center gap-1 px-3 py-1 ${isActive('/') ? 'text-accent-pink' : 'text-slate-500'}`}>
          <span className="material-symbols-outlined text-xl">home</span>
          <span className="text-[10px] font-medium">Trang chủ</span>
        </Link>
        <Link href="/cakes" className={`flex flex-col items-center gap-1 px-3 py-1 ${isActive('/cakes') ? 'text-accent-pink' : 'text-slate-500'}`}>
          <span className="material-symbols-outlined text-xl">cake</span>
          <span className="text-[10px] font-medium">Bánh</span>
        </Link>
        <Link href="/checkout" className={`flex flex-col items-center gap-1 px-3 py-1 ${isActive('/checkout') ? 'text-accent-pink' : 'text-slate-500'}`}>
          <span className="material-symbols-outlined text-xl">shopping_cart</span>
          <span className="text-[10px] font-medium">Đặt hàng</span>
        </Link>
        <Link href="/contact" className={`flex flex-col items-center gap-1 px-3 py-1 ${isActive('/contact') ? 'text-accent-pink' : 'text-slate-500'}`}>
          <span className="material-symbols-outlined text-xl">contact_phone</span>
          <span className="text-[10px] font-medium">Liên hệ</span>
        </Link>
      </div>
    </nav>
  )
}

// Client Layout Component - wraps all pages with common components
export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background-light font-display text-slate-900 flex flex-col">
      <Header />

      <main className="flex-1">
        {children}
      </main>

      <Footer />
      <FloatingContactButtons />
      <MobileBottomNav />
    </div>
  )
}
