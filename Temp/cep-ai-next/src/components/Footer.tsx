import Link from 'next/link';

const footerLinks = {
  product: [
    { href: '/tinh-nang', label: 'Tính năng' },
    { href: '/bang-gia', label: 'Bảng giá' },
    { href: '/ung-dung-thuc-te', label: 'Ứng dụng' },
  ],
  support: [
    { href: '/faq', label: 'FAQ' },
    { href: '/lien-he', label: 'Liên hệ' },
    { href: '/gioi-thieu', label: 'Giới thiệu' },
  ],
  legal: [
    { href: '#', label: 'Điều khoản' },
    { href: '#', label: 'Chính sách' },
    { href: '#', label: 'Bảo mật' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0A0E17] border-t border-[#2D3748] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#7C3AED] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-[#F8FAFC]">CEP-AI</span>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Giải pháp marketing tự động bằng trí tuệ nhân tạo hàng đầu Việt Nam.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-[#F8FAFC] font-semibold mb-4">Sản phẩm</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#94A3B8] text-sm hover:text-[#0066FF] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[#F8FAFC] font-semibold mb-4">Hỗ trợ</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#94A3B8] text-sm hover:text-[#0066FF] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[#F8FAFC] font-semibold mb-4">Pháp lý</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#94A3B8] text-sm hover:text-[#0066FF] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[#2D3748] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#64748B] text-sm">
            &copy; 2026 CEP-AI. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#64748B] hover:text-[#0066FF] transition-colors" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="text-[#64748B] hover:text-[#0066FF] transition-colors" aria-label="Zalo">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
