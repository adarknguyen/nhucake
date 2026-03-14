import { Link, useLocation } from 'react-router-dom'

// MobileBottomNav - Bottom navigation bar for mobile
function MobileBottomNav() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const navItems = [
    { path: '/', label: 'Trang chủ', icon: 'home', iconType: 'fill' },
    { path: '/cakes', label: 'Thực đơn', icon: 'cake' },
    { path: '/checkout', label: 'Đơn hàng', icon: 'shopping_bag' },
    { path: '/contact', label: 'Liên hệ', icon: 'person' },
  ]

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-primary/20 px-6 py-2 flex items-center justify-between z-50">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`flex flex-col items-center gap-1 ${
            isActive(item.path) ? 'text-accent-pink' : 'text-slate-400'
          }`}
        >
          <span className={`material-symbols-outlined ${isActive(item.path) ? 'fill-1' : ''}`}>
            {item.icon}
          </span>
          <span className={`text-[10px] ${isActive(item.path) ? 'font-bold' : 'font-medium'}`}>
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  )
}

export default MobileBottomNav
