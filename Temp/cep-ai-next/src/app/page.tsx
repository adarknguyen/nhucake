import Link from "next/link";
import { Metadata } from "next";
import CTA from "@/components/CTA";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "CEP-AI - Tự động hóa đăng bài bằng trí tuệ nhân tạo",
  description: "Giải pháp marketing tự động bằng trí tuệ nhân tạo. Tiết kiệm 80% thời gian cho công việc marketing.",
};

const benefits = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    ),
    title: "AI Tạo Nội Dung",
    desc: "Tạo nội dung bài viết chất lượng cao từ từ khóa trong vài giây",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    title: "Auto Đăng Bài",
    desc: "Tự động đăng bài lên Facebook/Fanpage theo lịch đã thiết lập",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <circle cx="8.5" cy="8.5" r="1.5"></circle>
        <polyline points="21 15 16 10 5 21"></polyline>
      </svg>
    ),
    title: "Hình Ảnh Chuyên Nghiệp",
    desc: "Tìm kiếm và chuẩn bị hình ảnh phù hợp cho bài viết nhanh chóng",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"></polygon>
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
      </svg>
    ),
    title: "Video Thông Minh",
    desc: "Tải video hàng loạt từ TikTok, Douyin và chỉnh sửa nhanh",
  },
];

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
    ),
    title: "AI Tạo Nội Dung",
    desc: "Nhập từ khóa, AI tự động tạo nội dung bài viết chất lượng, phù hợp với ngành nghề và đối tượng khán giả của bạn.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
    ),
    title: "Auto Đăng Facebook",
    desc: "Thiết lập lịch đăng bài tự động lên trang cá nhân hoặc fanpage. Không cần ngồi máy, CEP-AI lo việc cho bạn.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
    ),
    title: "Tìm Hình Ảnh",
    desc: "Tìm kiếm hình ảnh chất lượng cao từ nguồn uy tín. Tự động resize và tối ưu cho từng nền tảng.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
    ),
    title: "Tải Video Hàng Loạt",
    desc: "Tải video từ TikTok, Douyin, YouTube và nhiều nền tảng khác. Hỗ trợ tải nhiều video cùng lúc.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
    ),
    title: "Chỉnh Sửa Video",
    desc: "Đổi định dạng, thêm watermark, điều chỉnh tốc độ, resize video nhanh chóng trong vài clicks.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
    ),
    title: "Chuẩn Bị Media Web",
    desc: "Tối ưu hình ảnh và video cho website. Thu hút thành viên và tăng engagement hiệu quả.",
  },
];

const processSteps = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
    ),
    title: "1. Nhập ý tưởng",
    desc: "Nhập từ khóa hoặc chủ đề bạn muốn viết về",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
    ),
    title: "2. AI tạo nội dung",
    desc: "CEP-AI tự động tạo bài viết chuyên nghiệp",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
    ),
    title: "3. Chọn media",
    desc: "Chọn hoặc tìm hình ảnh/video phù hợp",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
    ),
    title: "4. Lên lịch",
    desc: "Thiết lập thời gian đăng bài tự động",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    ),
    title: "5. Đăng bài",
    desc: "CEP-AI tự động đăng lên Facebook cho bạn",
  },
];

const applications = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
    ),
    title: "Chủ shop",
    desc: "Đăng bán sản phẩm tự động",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
    ),
    title: "Marketer",
    desc: "Content marketing hiệu quả",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    ),
    title: "Admin Fanpage",
    desc: "Quản lý nhiều fanpage",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
    ),
    title: "Team nội dung",
    desc: "Sản xuất content nhanh hơn",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>
    ),
    title: "MMO / Traffic",
    desc: "Tăng traffic tự động",
  },
];

const faqItems = [
  {
    question: "CEP-AI là gì?",
    answer: "CEP-AI là nền tảng hỗ trợ marketing tự động bằng trí tuệ nhân tạo. Giúp bạn tạo nội dung, chuẩn bị hình ảnh, tải video và đăng bài tự động lên Facebook/Fanpage một cách nhanh chóng và hiệu quả.",
  },
  {
    question: "CEP-AI có hỗ trợ đăng bài Facebook không?",
    answer: "Có. CEP-AI hỗ trợ đăng bài tự động lên trang cá nhân và fanpage Facebook. Bạn có thể thiết lập lịch đăng và CEP-AI sẽ tự động đăng bài theo thời gian đã thiết lập.",
  },
  {
    question: "Đăng bài tự động có an toàn không?",
    answer: "CEP-AI sử dụng API chính thức của Facebook và tuân thủ các quy định về an toàn. Hệ thống được thiết kế để hoạt động trong giới hạn cho phép của Facebook, đảm bảo an toàn cho tài khoản của bạn.",
  },
  {
    question: "CEP-AI có hỗ trợ tải video từ nền tảng nào?",
    answer: "CEP-AI hỗ trợ tải video từ nhiều nền tảng phổ biến bao gồm TikTok, Douyin (TikTok Trung Quốc), YouTube, và nhiều nền tảng khác.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-[72px] relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,102,255,0.15)_0%,transparent_50%),radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(124,58,237,0.1)_0%,transparent_50%),radial-gradient(ellipse_40%_30%_at_20%_80%,rgba(6,182,212,0.08)_0%,transparent_50%)]"></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[linear-gradient(rgba(0,102,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,102,255,0.03)_1px,transparent_1px)] bg-[length:60px_60px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/20 text-[#0066FF] text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
                Giải pháp Marketing tự động
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] leading-tight mb-6">
                <span className="bg-gradient-to-r from-[#0066FF] via-[#06B6D4] to-[#7C3AED] bg-clip-text text-transparent">
                  CEP-AI
                </span>
                <br />
                Tự động hóa đăng bài bằng trí tuệ nhân tạo
              </h1>
              <p className="text-lg text-[#94A3B8] mb-8 max-w-lg">
                Tạo nội dung, chuẩn bị hình ảnh, tải video, chỉnh sửa nhanh và đăng bài tự động lên Facebook. Tiết kiệm 80% thời gian cho công việc marketing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/bang-gia" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#0052CC] text-white font-semibold shadow-lg shadow-[#0066FF]/20 hover:shadow-[#0066FF]/40 transition-all duration-200 hover:-translate-y-1">
                  Xem bảng giá
                </Link>
                <Link href="/lien-he" className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-[#3D4A5C] text-[#F8FAFC] font-semibold hover:border-[#0066FF] hover:text-[#0066FF] transition-all duration-200">
                  Đặt hàng ngay
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl shadow-[#0066FF]/20">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNhhs5uCbIzNZd3Z79c0KPkI8RXKnsudgWP1lmMpEgVhIwRanDRPzDsD2IANIRnqkuejw2ZG_pMaRYOjUhzumWJuajJPBq8J2OxnuR0NaGI6OZrkB38Ny2p4ssXNtWRlxF4VocKJs_fhDzbnB5VYUx1CPSYFgGjRczNe-kk8Vo5nFs-eOIUk3qwg3p5sqZWKGrIPEvcCep2QEfSQCPGrZhFSrF6X8tBVbsK0H67AyrtxXaQBICv9ZhrN0fAPgf8ZTbpSd7tFbff-Bz"
                    alt="CEP-AI Robot Mascot"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                {/* Workflow steps */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#1A2234] px-4 py-3 rounded-xl border border-[#2D3748]">
                  <div className="flex items-center gap-1 text-xs text-[#64748B]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/></svg>
                    Tạo nội dung
                  </div>
                  <span className="text-[#64748B]">→</span>
                  <div className="flex items-center gap-1 text-xs text-[#64748B]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                    Chọn media
                  </div>
                  <span className="text-[#64748B]">→</span>
                  <div className="flex items-center gap-1 text-xs text-[#64748B]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    Lên lịch
                  </div>
                  <span className="text-[#64748B]">→</span>
                  <div className="flex items-center gap-1 text-xs text-[#64748B]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    Đăng bài
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">Tại sao chọn CEP-AI?</h2>
            <p className="text-[#94A3B8] text-lg">Tiết kiệm thời gian, tăng hiệu quả công việc với các tính năng thông minh của CEP-AI</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-[#1A2234] border border-[#2D3748] hover:border-[#3D4A5C] hover:bg-[#232D42] transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-[#0066FF]/10 flex items-center justify-center text-[#0066FF] mb-4 group-hover:bg-[#0066FF]/20 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2">{benefit.title}</h3>
                <p className="text-[#94A3B8] text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">Tính năng nổi bật</h2>
            <p className="text-[#94A3B8] text-lg">Tất cả công cụ bạn cần để tự động hóa marketing trên mạng xã hội</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-[#1A2234] border border-[#2D3748] hover:border-[#0066FF] hover:shadow-lg hover:shadow-[#0066FF]/10 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 flex items-center justify-center text-[#0066FF] mb-4 group-hover:bg-[#0066FF] group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2">{feature.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">Quy trình hoạt động</h2>
            <p className="text-[#94A3B8] text-lg">Đơn giản hóa việc marketing với 5 bước dễ dàng</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0066FF]/20 to-[#7C3AED]/20 flex items-center justify-center text-[#0066FF] mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-base font-semibold text-[#F8FAFC] mb-2">{step.title}</h3>
                <p className="text-[#94A3B8] text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">Ứng dụng thực tế</h2>
            <p className="text-[#94A3B8] text-lg">CEP-AI phù hợp với nhiều đối tượng và mục đích sử dụng</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {applications.map((app, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-[#1A2234] border border-[#2D3748] hover:border-[#3D4A5C] hover:bg-[#232D42] transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-[#0066FF]/10 flex items-center justify-center text-[#0066FF] mx-auto mb-4">
                  {app.icon}
                </div>
                <h3 className="text-base font-semibold text-[#F8FAFC] mb-2">{app.title}</h3>
                <p className="text-[#94A3B8] text-sm">{app.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/ung-dung-thuc-te" className="inline-flex items-center px-6 py-3 rounded-xl border border-[#3D4A5C] text-[#F8FAFC] font-medium hover:border-[#0066FF] hover:text-[#0066FF] transition-all duration-200">
              Xem chi tiết
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">Bảng giá</h2>
            <p className="text-[#94A3B8] text-lg">Chọn gói phù hợp với nhu cầu của bạn</p>
          </div>
          <Pricing />
          <div className="text-center mt-12">
            <Link href="/bang-gia" className="inline-flex items-center px-6 py-3 rounded-xl bg-white/5 text-[#F8FAFC] font-medium backdrop-blur-sm hover:bg-white/10 transition-all duration-200">
              Xem chi tiết so sánh
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#111827]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">Câu hỏi thường gặp</h2>
            <p className="text-[#94A3B8] text-lg">Giải đáp những thắc mắc phổ biến về CEP-AI</p>
          </div>
          <FAQ items={faqItems} />
          <div className="text-center mt-12">
            <Link href="/faq" className="inline-flex items-center px-6 py-3 rounded-xl bg-white/5 text-[#F8FAFC] font-medium backdrop-blur-sm hover:bg-white/10 transition-all duration-200">
              Xem tất cả FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Sẵn sàng tự động hóa marketing?"
        description="Tham gia cùng hàng ngàn khách hàng đã sử dụng CEP-AI để tiết kiệm thời gian và tăng hiệu quả công việc"
        primaryCta={{ label: "Xem bảng giá", href: "/bang-gia" }}
        secondaryCta={{ label: "Liên hệ tư vấn", href: "/lien-he" }}
      />
    </>
  );
}
