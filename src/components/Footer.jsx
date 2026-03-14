import { Link } from 'react-router-dom'
import { contactInfo } from '../data/cakes'

// Footer Component - Site footer with links and contact info
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
              <li><Link to="/cakes" className="hover:text-primary transition-colors">Thực Đơn</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Liên Hệ</Link></li>
              <li><Link to="/checkout" className="hover:text-primary transition-colors">Đặt Hàng</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 md:mb-6">Hỗ Trợ</h4>
            <ul className="space-y-3 md:space-y-4 text-sm">
              <li><Link to="/contact" className="hover:text-primary transition-colors">Liên Hệ</Link></li>
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

export default Footer
