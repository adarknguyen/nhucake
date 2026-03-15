import { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Giới thiệu - CEP-AI",
  description: "Giới thiệu CEP-AI - Tự động hóa marketing bằng AI. Sứ mệnh và tầm nhìn của chúng tôi.",
};

const stats = [
  { number: "1000+", label: "Khách hàng" },
  { number: "50.000+", label: "Bài đăng/ngày" },
  { number: "95%", label: "Hài lòng" },
];

const targetGroups = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
    ),
    title: "Cá nhân",
    desc: "Người đi làm, sinh viên, freelancer muốn kinh doanh online hoặc quản lý fanpage cá nhân.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    ),
    title: "Doanh nghiệp nhỏ",
    desc: "Các shop online, cửa hàng nhỏ cần tự động hóa marketing với ngân sách hạn chế.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
    ),
    title: "Agency & Team",
    desc: "Các agency marketing, team content cần quản lý nhiều khách hàng và fanpage cùng lúc.",
  },
];

const problems = [
  {
    title: "Vấn đề 1: Mất quá nhiều thời gian",
    desc: "Marketer phải dành hàng giờ mỗi ngày để tạo nội dung, tìm hình ảnh, và đăng bài thủ công. Điều này khiến họ không có thời gian cho công việc sáng tạo và chiến lược.",
  },
  {
    title: "Vấn đề 2: Thiếu công cụ phù hợp",
    desc: "Các công cụ marketing hiện có trên thị trường thường quá phức tạp, giá quá cao, hoặc không phù hợp với thị trường Việt Nam.",
  },
  {
    title: "Vấn đề 3: Khó tiếp cận AI",
    desc: "Nhiều người muốn sử dụng AI nhưng không biết bắt đầu từ đâu, hoặc các giải pháp AI quốc tế không hỗ trợ tiếng Việt tốt.",
  },
  {
    title: "Giải pháp của CEP-AI",
    desc: "Chúng tôi xây dựng một nền tảng đơn giản, giá cả phải chăng, hỗ trợ tiếng Việt, giúp mọi người đều có thể tiếp cận và sử dụng AI trong marketing.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-[calc(72px+4rem)] pb-12 text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(0,102,255,0.1)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">Giới thiệu về CEP-AI</h1>
          <p className="text-lg text-[#94A3B8]">Tìm hiểu về sứ mệnh và tầm nhìn của chúng tôi trong việc đưa AI đến với marketing Việt Nam</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-6">CEP-AI là ai?</h2>
              <div className="space-y-4 text-[#94A3B8] leading-relaxed">
                <p>CEP-AI là nền tảng marketing tự động hóa bằng trí tuệ nhân tạo, được xây dựng dành riêng cho thị trường Việt Nam. Chúng tôi hiểu rằng việc quản lý content marketing trên mạng xã hội tốn nhiều thời gian và công sức, đặc biệt với các cá nhân và doanh nghiệp nhỏ.</p>
                <p>CEP-AI ra đời với mục tiêu đơn giản hóa quy trình marketing, giúp bạn tập trung vào việc xây dựng chiến lược thay vì những công việc lặp đi lặp lại.</p>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-[#0066FF] mb-2">Sứ mệnh</h3>
                <p className="text-[#94A3B8]">Democratize AI trong marketing - mang sức mạnh của trí tuệ nhân tạo đến với mọi người, từ cá nhân, marketer đến doanh nghiệp lớn tại Việt Nam. Chúng tôi tin rằng AI không chỉ dành cho big tech, mà ai cũng có thể sử dụng để tăng hiệu quả công việc.</p>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-[#0066FF] mb-2">Tầm nhìn</h3>
                <p className="text-[#94A3B8]">Trở thành nền tảng marketing AI hàng đầu tại Việt Nam, giúp hàng triệu người tiết kiệm thời gian và tăng trưởng doanh thu nhờ tự động hóa marketing.</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl shadow-[#0066FF]/20">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNhhs5uCbIzNZd3Z79c0KPkI8RXKnsudgWP1lmMpEgVhIwRanDRPzDsD2IANIRnqkuejw2ZG_pMaRYOjUhzumWJuajJPBq8J2OxnuR0NaGI6OZrkB38Ny2p4ssXNtWRlxF4VocKJs_fhDzbnB5VYUx1CPSYFgGjRczNe-kk8Vo5nFs-eOIUk3qwg3p5sqZWKGrIPEvcCep2QEfSQCPGrZhFSrF6X8tBVbsK0H67AyrtxXaQBICv9ZhrN0fAPgf8ZTbpSd7tFbff-Bz"
                  alt="CEP-AI Robot Mascot"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 rounded-2xl bg-[#1A2234] border border-[#2D3748]">
                <div className="text-4xl font-bold text-[#0066FF] mb-2">{stat.number}</div>
                <div className="text-[#94A3B8]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why CEP-AI Section */}
      <section className="py-20 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-4">Tại sao xây dựng CEP-AI?</h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto">Chúng tôi nhận thấy những vấn đề mà hàng triệu marketer Việt Nam đang gặp phải mỗi ngày</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="p-8 rounded-2xl bg-[#1A2234] border border-[#2D3748] hover:border-[#3D4A5C] transition-colors">
                <h3 className="text-lg font-semibold text-[#0066FF] mb-3">{problem.title}</h3>
                <p className="text-[#94A3B8]">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Market Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-4">Định hướng hỗ trợ</h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto">CEP-AI hỗ trợ đa dạng đối tượng khách hàng tại Việt Nam</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {targetGroups.map((group, index) => (
              <div key={index} className="p-8 rounded-2xl bg-[#1A2234] border border-[#2D3748] hover:border-[#3D4A5C] hover:bg-[#232D42] transition-all duration-300 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-[#0066FF]/10 to-[#06B6D4]/10 flex items-center justify-center text-[#0066FF]">
                  {group.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2">{group.title}</h3>
                <p className="text-[#94A3B8] text-sm">{group.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Sẵn sàng cùng CEP-AI?"
        description="Tham gia cùng hàng ngàn khách hàng đã tin tưởng và sử dụng CEP-AI"
        primaryCta={{ label: "Xem bảng giá", href: "/bang-gia" }}
        secondaryCta={{ label: "Liên hệ tư vấn", href: "/lien-he" }}
      />
    </>
  );
}
