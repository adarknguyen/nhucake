import { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Ứng dụng thực tế - CEP-AI",
  description: "Ứng dụng thực tế CEP-AI - Xem cách CEP-AI giúp đỡ chủ shop, marketer, admin fanpage và nhiều đối tượng khác.",
};

const useCases = [
  {
    title: "Chủ shop Online",
    sections: [
      { title: "Vấn đề", content: "Mất nhiều thời gian đăng sản phẩm mới lên fanpage mỗi ngày. Khó tạo nội dung hấp dẫn, thiếu hình ảnh chuyên nghiệp." },
      { title: "Giải pháp CEP-AI", content: "AI tự động tạo nội dung bán hàng. Tìm kiếm hình ảnh sản phẩm chất lượng. Đăng bài tự động theo lịch đã thiết lập." },
      { title: "Kết quả", content: "Tiết kiệm 5-7 giờ mỗi tuần. Tăng 40% lượng đăng bài. Nội dung nhất quán và chuyên nghiệp hơn." },
    ],
  },
  {
    title: "Marketing Agency",
    sections: [
      { title: "Vấn đề", content: "Quản lý nhiều khách hàng cùng lúc. Mỗi khách hàng cần content riêng. Khó theo dõi và đăng bài đều đặn." },
      { title: "Giải pháp CEP-AI", content: "Quản lý nhiều fanpage trên một dashboard. Lên lịch content cho từng khách hàng. AI hỗ trợ tạo nội dung đa dạng." },
      { title: "Kết quả", content: "Phục vụ được nhiều khách hàng hơn. Tiết kiệm 60% thời gian cho công việc routine. Tăng doanh thu agency." },
    ],
  },
  {
    title: "Admin Fanpage",
    sections: [
      { title: "Vấn đề", content: "Phải đăng bài thủ công mỗi ngày. Khó duy trì tần suất đăng đều đặn. Công việc lặp đi lặp lại tốn nhiều thời gian." },
      { title: "Giải pháp CEP-AI", content: "Thiết lập lịch đăng bài tự động. Tạo content hàng loạt với AI. Quản lý nhiều fanpage cùng lúc." },
      { title: "Kết quả", content: "Đăng bài đều đặn mà không cần ngồi máy. Tập trung vào chiến lược thay vì công việc thủ công." },
    ],
  },
  {
    title: "Team Nội dung",
    sections: [
      { title: "Vấn đề", content: "Cần sản xuất content với số lượng lớn. Khó đảm bảo chất lượng đồng đều. Mất thời gian vào công việc sáng tạo nhỏ." },
      { title: "Giải pháp CEP-AI", content: "AI hỗ trợ brainstorm ý tưởng. Tạo draft nội dung nhanh chóng. Tự động hóa quy trình đăng bài." },
      { title: "Kết quả", content: "Tăng năng suất content lên 3-5 lần. Team tập trung vào sáng tạo và chiến lược. Chất lượng content đồng đều hơn." },
    ],
  },
  {
    title: "Người làm MMO / Traffic",
    sections: [
      { title: "Vấn đề", content: "Cần tạo và đăng content với số lượng lớn. Khó tìm kiếm và tải video hàng loạt. Cần tăng traffic nhanh chóng." },
      { title: "Giải pháp CEP-AI", content: "Tải video hàng loạt từ TikTok, YouTube. Tạo nội dung SEO nhanh chóng. Đăng bài tự động lên nhiều tài khoản." },
      { title: "Kết quả", content: "Tăng năng suất đăng bài gấp 10 lần. Tiết kiệm thời gian tải và xử lý video. Tăng traffic một cách hệ thống." },
    ],
  },
  {
    title: "Doanh nghiệp",
    sections: [
      { title: "Vấn đề", content: "Cần quản lý marketing đa kênh. Muốn tự động hóa quy trình. Cần báo cáo và theo dõi hiệu quả." },
      { title: "Giải pháp CEP-AI", content: "Giải pháp Enterprise với API riêng. Quản lý team và phân quyền. Tích hợp với hệ thống hiện có." },
      { title: "Kết quả", content: "Tối ưu chi phí marketing. Quy trình nhất quán và chuyên nghiệp. Đo lường hiệu quả dễ dàng." },
    ],
  },
];

const stats = [
  { number: "1000+", label: "Khách hàng" },
  { number: "50.000+", label: "Bài đăng/ngày" },
  { number: "95%", label: "Hài lòng" },
];

export default function ApplicationsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-[calc(72px+4rem)] pb-12 text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(0,102,255,0.1)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">Ứng dụng thực tế</h1>
          <p className="text-lg text-[#94A3B8]">Khám phá cách CEP-AI giúp đỡ các đối tượng khác nhau trong công việc marketing</p>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="p-6 rounded-2xl bg-[#1A2234] border border-[#2D3748] hover:border-[#3D4A5C] hover:bg-[#232D42] transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#F8FAFC] mb-4">{useCase.title}</h3>
                {useCase.sections.map((section, i) => (
                  <div key={i} className="mb-4 last:mb-0">
                    <div className="text-sm font-medium text-[#0066FF] mb-1">{section.title}</div>
                    <p className="text-sm text-[#94A3B8] leading-relaxed">{section.content}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-[#0066FF] mb-2">{stat.number}</div>
                <div className="text-[#94A3B8]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Bạn thuộc đối tượng nào?"
        description="Liên hệ với chúng tôi để được tư vấn giải pháp phù hợp nhất với nhu cầu của bạn"
        primaryCta={{ label: "Liên hệ tư vấn", href: "/lien-he" }}
        secondaryCta={{ label: "Xem bảng giá", href: "/bang-gia" }}
      />
    </>
  );
}
