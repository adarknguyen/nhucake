import { useState } from 'react'
import { Link } from 'react-router-dom'
import CakeCard from '../components/CakeCard'
import { cakes } from '../data/cakes'

// CakeListing Page - Product listing with filters
function CakeListing() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [sortBy, setSortBy] = useState('popular')

  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'best-seller', name: 'Sinh Nhật' },
    { id: 'signature', name: 'Signature' },
    { id: 'premium', name: 'Cưới' },
    { id: 'mini', name: 'Mini' },
  ]

  const sortOptions = [
    { value: 'popular', label: 'Phổ biến nhất' },
    { value: 'newest', label: 'Mới nhất' },
    { value: 'price-low', label: 'Giá: Thấp đến Cao' },
    { value: 'price-high', label: 'Giá: Cao đến Thấp' },
  ]

  // Filter and sort cakes
  const filteredCakes = cakes.filter((cake) => {
    if (activeCategory === 'all') return true
    return cake.category === activeCategory
  })

  const sortedCakes = [...filteredCakes].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'newest':
        return b.id - a.id
      default:
        return 0
    }
  })

  return (
    <main className="flex-1 px-4 md:px-6 lg:px-40 py-4 md:py-8 pb-24 md:pb-8">
      {/* Breadcrumbs (desktop) */}
      <nav className="hidden md:flex items-center gap-2 text-sm text-slate-500 mb-6">
        <Link to="/" className="hover:text-primary transition-colors">Trang chủ</Link>
        <span className="material-symbols-outlined text-xs">chevron_right</span>
        <span className="text-slate-900 font-medium">Bánh Ngọt</span>
      </nav>

      {/* Page Title (desktop) */}
      <div className="hidden md:block mb-8">
        <h1 className="text-4xl lg:text-5xl font-black mb-3">Những Mẫu Bánh Tuyệt Vời</h1>
        <p className="text-slate-500 max-w-2xl">
          Được làm thủ công từ những nguyên liệu cao cấp nhất, mang đến hương vị ngọt ngào cho mọi dịp kỷ niệm.
        </p>
      </div>

      {/* Desktop Tabs + Sort */}
      <div className="hidden md:flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-primary/20 mb-8 overflow-x-auto">
        <div className="flex gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to="#"
              onClick={(e) => {
                e.preventDefault()
                setActiveCategory(cat.id)
              }}
              className={`pb-4 border-b-2 whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'border-primary text-slate-900 font-bold'
                  : 'border-transparent hover:border-primary/50 text-slate-500 font-medium'
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <span className="material-symbols-outlined text-lg">sort</span>
          <select
            className="bg-transparent border-none focus:ring-0 text-sm font-bold text-slate-900 cursor-pointer"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Mobile sort */}
      <div className="md:hidden flex items-center justify-between py-2 mb-2">
        <span className="text-sm font-medium text-slate-500">{sortedCakes.length} sản phẩm</span>
        <button className="flex items-center gap-1.5 text-sm font-semibold text-slate-800">
          <span className="material-symbols-outlined text-lg">swap_vert</span> Mới nhất
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar (desktop only) */}
        <aside className="hidden lg:block space-y-8 col-span-1">
          <div>
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">filter_list</span> Bộ lọc
            </h3>
            <div className="space-y-6">
              {/* Price Range */}
              <div>
                <p className="text-sm font-bold mb-3 uppercase tracking-wider text-slate-400">Khoảng giá</p>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 text-sm cursor-pointer">
                    <input className="rounded border-primary/50 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                    <span>Dưới 500.000đ</span>
                  </label>
                  <label className="flex items-center gap-3 text-sm cursor-pointer">
                    <input className="rounded border-primary/50 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                    <span>500.000đ - 1.000.000đ</span>
                  </label>
                  <label className="flex items-center gap-3 text-sm cursor-pointer">
                    <input className="rounded border-primary/50 text-primary focus:ring-primary h-4 w-4" type="checkbox" defaultChecked />
                    <span>1.000.000đ - 2.000.000đ</span>
                  </label>
                  <label className="flex items-center gap-3 text-sm cursor-pointer">
                    <input className="rounded border-primary/50 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                    <span>Trên 2.000.000đ</span>
                  </label>
                </div>
              </div>

              {/* Size */}
              <div>
                <p className="text-sm font-bold mb-3 uppercase tracking-wider text-slate-400">Kích thước</p>
                <div className="grid grid-cols-3 gap-2">
                  <button className="py-2 px-1 text-xs font-bold border border-primary rounded hover:bg-primary transition-colors">15 cm</button>
                  <button className="py-2 px-1 text-xs font-bold bg-primary rounded">20 cm</button>
                  <button className="py-2 px-1 text-xs font-bold border border-primary rounded hover:bg-primary transition-colors">25 cm</button>
                </div>
              </div>

              {/* Flavor */}
              <div>
                <p className="text-sm font-bold mb-3 uppercase tracking-wider text-slate-400">Hương vị</p>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 text-sm cursor-pointer">
                    <input className="rounded-full border-primary/50 text-primary focus:ring-primary h-4 w-4" name="flavor" type="radio" />
                    <span>Socola Truffle</span>
                  </label>
                  <label className="flex items-center gap-3 text-sm cursor-pointer">
                    <input className="rounded-full border-primary/50 text-primary focus:ring-primary h-4 w-4" name="flavor" type="radio" />
                    <span>Red Velvet</span>
                  </label>
                  <label className="flex items-center gap-3 text-sm cursor-pointer">
                    <input className="rounded-full border-primary/50 text-primary focus:ring-primary h-4 w-4" name="flavor" type="radio" />
                    <span>Vanilla Pháp</span>
                  </label>
                  <label className="flex items-center gap-3 text-sm cursor-pointer">
                    <input className="rounded-full border-primary/50 text-primary focus:ring-primary h-4 w-4" name="flavor" type="radio" />
                    <span>Kem Dâu Tây</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Cake Grid */}
        <div className="col-span-1 lg:col-span-3">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
            {sortedCakes.map((cake) => (
              <CakeCard key={cake.id} cake={cake} />
            ))}
          </div>

          {/* Pagination (desktop) */}
          <div className="hidden md:flex justify-center mt-12 gap-2">
            <button className="size-10 flex items-center justify-center rounded-lg border border-primary/20 hover:bg-primary/20">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="size-10 flex items-center justify-center rounded-lg bg-primary text-slate-900 font-bold">1</button>
            <button className="size-10 flex items-center justify-center rounded-lg border border-primary/20 hover:bg-primary/20">2</button>
            <button className="size-10 flex items-center justify-center rounded-lg border border-primary/20 hover:bg-primary/20">3</button>
            <button className="size-10 flex items-center justify-center rounded-lg border border-primary/20 hover:bg-primary/20">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CakeListing
