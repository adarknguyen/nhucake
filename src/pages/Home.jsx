import { Link } from 'react-router-dom'
import CakeGrid from '../components/CakeGrid'
import { cakes, formatPrice } from '../data/cakes'

// Home Page - Main landing page
function Home() {
  // Get best sellers (first 4 cakes)
  const bestSellers = cakes.slice(0, 4)

  const categories = [
    { id: 'all', name: 'Tất cả', icon: 'cake', href: '/cakes' },
    { id: 'birthday', name: 'Sinh nhật', icon: 'celebration', href: '/cakes' },
    { id: 'wedding', name: 'Đám cưới', icon: 'favorite', href: '/cakes' },
    { id: 'cupcakes', name: 'Cupcakes', icon: 'bakery_dining', href: '/cakes' },
    { id: 'vegan', name: 'Thuần chay', icon: 'eco', href: '/cakes' },
  ]

  return (
    <div>
      {/* Hero Section - Mobile */}
      <section className="relative overflow-hidden pt-6 md:pt-12 pb-10 md:pb-20 px-4">
        {/* Mobile Hero */}
        <div className="md:hidden relative overflow-hidden rounded-xl bg-primary/30 aspect-[16/10] flex flex-col justify-end p-6">
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 to-transparent z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuDGfxtJB9K8jse2c0lwbIGj_dcGzJNhIl9tvpgEi2yUS1S2G144wcrPIEiAzLU608B1gvaxZs-eKs-Gl9uZqtgZ7QZDPoZfGl5tuJuLBXfy1IDNfjaNqfQ12NPckt3IOUeDg8r_n5klAK_yKd-cqiCIsjNwjOKhMuVRRB7aDbf-WRYMsnRRg-S9OB5YrexDIgfIVh9NYJRwigFNGtisq8nRcrn5duFjC-OGPvQmCn1-5hSCOUxFu4ZX_7sN4wjSnsE_5GWuR7JiiWMD)' }}
          ></div>
          <div className="relative z-20 space-y-3">
            <h1 className="text-2xl font-bold text-white leading-tight">
              Khoảnh Khắc Ngọt Ngào, <br />Làm Từ Tâm Huyết.
            </h1>
            <div className="flex gap-2">
              <Link to="/checkout" className="bg-primary text-accent-pink px-5 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-primary/20">
                Đặt Ngay
              </Link>
              <Link to="/cakes" className="bg-white/20 backdrop-blur-md text-white px-5 py-2.5 rounded-lg font-bold text-sm border border-white/30">
                Xem Mẫu Bánh
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Hero */}
        <div className="hidden md:grid max-w-7xl mx-auto lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/30 rounded-full text-accent-pink font-bold text-sm">
              <span className="material-symbols-outlined text-base">verified</span> Làm Thủ Công Bằng Tình Yêu Tại Việt Nam
            </div>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight text-slate-900">
              Bánh Kem Đẹp Cho <span className="text-accent-pink italic">Mọi Dịp</span>
              <div className="text-3xl lg:text-4xl mt-4 font-bold opacity-80">
                Những Mẫu Bánh Tinh Tế Cho Mọi Ngày Kỷ Niệm
              </div>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Bánh kem thủ công cao cấp cho những khoảnh khắc đặc biệt của bạn. Tươi ngon mỗi ngày từ bàn tay người thợ với nguyên liệu chọn lọc nhất.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/checkout" className="bg-accent-pink text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all">
                Đặt Ngay
              </Link>
              <Link to="/cakes" className="bg-white border-2 border-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/10 transition-all">
                Xem Mẫu Bánh
              </Link>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
            <img
              alt="Elegant tiered cake with floral decorations"
              className="relative rounded-xl shadow-2xl w-full h-[500px] object-cover border-8 border-white"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcmJcLmCx760VrGV6pYHnRbjqo-XkjFsnemU4FpBpGaJB_IK7jNjWfj7jIFTOIxrgC7F0jkZ4L760xcYAMGj0kfDQj9mSkG_r4xCQCwfYT45x5VtuC5EMDGPYD4kLzLwj17auuIa2Pry_zQh2J5_myr5YDPJgR9HbBvH8eaiqa6aiG4F0G3u6tfbtz500qq3vJdTx3rUDugNju9iCH5PbLBT7fAkmfIfmboRSDxrIjL-AUt9_0Pgp6kqs2ntIrv-Hut4HcfZe_MALr"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-2 md:py-16 bg-white">
        {/* Mobile horizontal scroll */}
        <div className="md:hidden flex gap-3 px-4 overflow-x-auto no-scrollbar pb-2">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.href}
              className={`flex-none px-6 py-2 rounded-full text-sm font-medium ${
                cat.id === 'all'
                  ? 'bg-accent-pink text-white'
                  : 'bg-primary/20 text-accent-pink border border-primary/30'
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Desktop grid */}
        <div className="hidden md:block max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold">
              Danh Mục | <span className="text-accent-pink">Sản Phẩm</span>
            </h2>
            <Link to="/cakes" className="text-accent-pink font-bold flex items-center gap-2">
              Xem Tất Cả <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link to="/cakes" className="group cursor-pointer">
              <div className="bg-background-light rounded-xl p-8 flex flex-col items-center gap-4 transition-all hover:bg-primary/20">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl text-accent-pink">celebration</span>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg">Sinh Nhật</h3>
                  <p className="text-sm text-accent-pink/80 font-medium">Bánh Sinh Nhật</p>
                </div>
              </div>
            </Link>
            <Link to="/cakes" className="group cursor-pointer">
              <div className="bg-background-light rounded-xl p-8 flex flex-col items-center gap-4 transition-all hover:bg-primary/20 border-2 border-primary">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl text-accent-pink">edit_square</span>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg">Thiết Kế</h3>
                  <p className="text-sm text-accent-pink/80 font-medium">Theo Yêu Cầu</p>
                </div>
              </div>
            </Link>
            <Link to="/cakes" className="group cursor-pointer">
              <div className="bg-background-light rounded-xl p-8 flex flex-col items-center gap-4 transition-all hover:bg-primary/20">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl text-accent-pink">bakery_dining</span>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg">Bánh Mini</h3>
                  <p className="text-sm text-accent-pink/80 font-medium">Bánh Nhỏ Xinh</p>
                </div>
              </div>
            </Link>
            <Link to="/cakes" className="group cursor-pointer">
              <div className="bg-background-light rounded-xl p-8 flex flex-col items-center gap-4 transition-all hover:bg-primary/20">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl text-accent-pink">favorite</span>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg">Kỷ Niệm</h3>
                  <p className="text-sm text-accent-pink/80 font-medium">Dịp Đặc Biệt</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-6 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6 md:mb-10">
            <h2 className="text-lg md:text-3xl font-bold">
              <span className="hidden md:inline">Sản Phẩm | </span>
              <span className="text-accent-pink">Bán Chạy Nhất</span>
            </h2>
            <Link to="/cakes" className="text-accent-pink text-sm font-semibold">
              Xem tất cả
            </Link>
          </div>
          <CakeGrid cakes={bestSellers} />
        </div>
      </section>

      {/* Custom Order Form */}
      <section className="py-6 md:py-20 px-4 bg-primary/10">
        <div className="max-w-5xl mx-auto">
          {/* Mobile compact form */}
          <div className="md:hidden bg-primary/10 rounded-2xl p-6 space-y-4 border border-primary/30">
            <div className="text-center space-y-1">
              <h3 className="text-xl font-bold text-accent-pink">Bánh Theo Yêu Cầu</h3>
              <p className="text-sm text-slate-600">Thiết kế chiếc bánh trong mơ cho mọi dịp lễ</p>
            </div>
            <form className="space-y-3">
              <input
                className="w-full bg-white border-primary/20 rounded-lg px-4 py-3 text-sm focus:ring-accent-pink focus:border-accent-pink"
                placeholder="Tên của bạn"
                type="text"
              />
              <select className="w-full bg-white border-primary/20 rounded-lg px-4 py-3 text-sm focus:ring-accent-pink focus:border-accent-pink">
                <option>Dịp: Sinh nhật</option>
                <option>Dịp: Đám cưới</option>
                <option>Dịp: Kỷ niệm</option>
              </select>
              <textarea
                className="w-full bg-white border-primary/20 rounded-lg px-4 py-3 text-sm focus:ring-accent-pink focus:border-accent-pink"
                placeholder="Hãy kể cho chúng tôi ý tưởng của bạn..."
                rows="3"
              />
              <button className="w-full bg-accent-pink text-white py-3 rounded-lg font-bold shadow-md">
                Nhận Báo Giá
              </button>
            </form>
          </div>

          {/* Desktop split form */}
          <div className="hidden md:flex bg-white rounded-xl shadow-2xl overflow-hidden flex-row">
            <div className="md:w-1/3 bg-accent-pink p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">
                Đặt Bánh | <span className="block">Theo Yêu Cầu</span>
              </h2>
              <p className="mb-8 opacity-90 leading-relaxed">
                Hãy để chúng tôi hiện thực hóa chiếc bánh trong mơ của bạn.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined">palette</span>
                  <span>Chọn hương vị</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined">straighten</span>
                  <span>Chọn kích thước</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined">event</span>
                  <span>Hẹn ngày nhận bánh</span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 p-12">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Hương vị</label>
                  <select className="w-full border-primary/30 rounded-lg focus:ring-accent-pink focus:border-accent-pink p-3">
                    <option>Vani Dâu Tây</option>
                    <option>Socola Đậm Đà</option>
                    <option>Matcha Nhật Bản</option>
                    <option>Caramel Muối</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Kích thước</label>
                  <select className="w-full border-primary/30 rounded-lg focus:ring-accent-pink focus:border-accent-pink p-3">
                    <option>Mini (10cm)</option>
                    <option>Nhỏ (14cm)</option>
                    <option>Vừa (18cm)</option>
                    <option>Lớn (22cm)</option>
                  </select>
                </div>
                <div className="col-span-full">
                  <label className="block text-sm font-bold mb-2">Lời nhắn trên bánh</label>
                  <input
                    className="w-full border-primary/30 rounded-lg focus:ring-accent-pink focus:border-accent-pink p-3"
                    placeholder="Chúc mừng sinh nhật..."
                    type="text"
                  />
                </div>
                <div className="col-span-full">
                  <label className="block text-sm font-bold mb-2">Ngày nhận bánh</label>
                  <input
                    className="w-full border-primary/30 rounded-lg focus:ring-accent-pink focus:border-accent-pink p-3"
                    type="date"
                  />
                </div>
                <div className="col-span-full">
                  <button className="w-full bg-accent-pink text-white font-bold py-4 rounded-xl hover:bg-accent-pink/90 transition-all uppercase tracking-wide">
                    Gửi Yêu Cầu Tư Vấn
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-black mb-4">Tại Sao Chọn Nhu Cake?</h2>
            <p className="text-slate-500">Chất lượng và tâm huyết trong từng sản phẩm</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto text-accent-pink">
                <span className="material-symbols-outlined text-3xl md:text-4xl">eco</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold">Nguyên Liệu Tự Nhiên</h3>
              <p className="text-sm md:text-base text-slate-600">
                Chúng tôi chỉ sử dụng nguyên liệu cao cấp, tự nhiên, không chất bảo quản.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto text-accent-pink">
                <span className="material-symbols-outlined text-3xl md:text-4xl">artist</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold">Thiết Kế Độc Bản</h3>
              <p className="text-sm md:text-base text-slate-600">
                Mỗi chiếc bánh là một tác phẩm nghệ thuật duy nhất được thực hiện bởi các nghệ nhân.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto text-accent-pink">
                <span className="material-symbols-outlined text-3xl md:text-4xl">local_shipping</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold">Giao Hàng Tận Tâm</h3>
              <p className="text-sm md:text-base text-slate-600">
                Dịch vụ giao hàng nhanh chóng và cẩn thận, đảm bảo bánh đến tay bạn hoàn hảo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl md:text-3xl font-bold mb-8 md:mb-12 text-center italic">
            "Những chiếc bánh đẹp nhất thành phố"
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-6 md:p-8 bg-background-light rounded-xl border border-primary/10">
              <div className="flex gap-1 text-primary mb-4">
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
              </div>
              <p className="mb-4 md:mb-6 italic text-sm md:text-base">
                "Bánh rất ngon và đẹp, nhân viên tư vấn nhiệt tình. Sẽ ủng hộ shop dài dài!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full"></div>
                <div>
                  <p className="font-bold text-sm md:text-base">Minh Anh</p>
                  <p className="text-xs opacity-60">Khách hàng thân thiết</p>
                </div>
              </div>
            </div>
            <div className="p-6 md:p-8 bg-background-light rounded-xl border border-primary/10">
              <div className="flex gap-1 text-primary mb-4">
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
              </div>
              <p className="mb-4 md:mb-6 italic text-sm md:text-base">
                "Bánh thiết kế riêng vượt xa mong đợi. Vị ngọt vừa phải, cốt bánh mềm mịn!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full"></div>
                <div>
                  <p className="font-bold text-sm md:text-base">Jessica Trần</p>
                  <p className="text-xs opacity-60">Khách hàng thân thiết</p>
                </div>
              </div>
            </div>
            <div className="p-6 md:p-8 bg-background-light rounded-xl border border-primary/10">
              <div className="flex gap-1 text-primary mb-4">
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
              </div>
              <p className="mb-4 md:mb-6 italic text-sm md:text-base">
                "Giao hàng nhanh, đóng gói cẩn thận. Bánh mini rất xinh, ăn vừa miệng!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full"></div>
                <div>
                  <p className="font-bold text-sm md:text-base">Bảo Nam</p>
                  <p className="text-xs opacity-60">Khách hàng thân thiết</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery (Desktop only) */}
      <section className="hidden md:block py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="material-symbols-outlined text-accent-pink">photo_library</span> Khoảnh Khắc Cùng @NhuCake
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <img
                key={i}
                alt={`Gallery ${i}`}
                className="aspect-square object-cover rounded-lg hover:opacity-80 cursor-pointer"
                src={`https://lh3.googleusercontent.com/aida-public/AB6AXuD5XuF-JI1mDxSK0oEHOokM1TCbf54rSEFWTm9g2y1uSe9uy-B203Ky7bZMQawCyX1ou_pq8Sg1bSxU380BZhzxUghCKZ2wmddl88brU0uwx70fn7XQekdbWDtCxLlL8dQI2cibtk6GcWEHAOR7bDU9uIc0JcFldybp221Zsv3JT9_ov_Q6vVsW-h9C65sDHrc8dVMDG93vuRTF3i50S3seFlpwHxwMSPRLVeMJ4i2_BajdYugFGQ_n7vp2LJExW__uIaAeKOfmQFUu`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Support Strip */}
      <section className="bg-accent-pink py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-6 text-white text-xs md:text-sm font-bold uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined">call</span> Hotline: 0900.XXX.XXX
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined">chat</span> Zalo: Nhu Cake
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined">forum</span> Messenger: m.me/nhucake
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
