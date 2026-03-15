import { Metadata } from "next";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "FAQ - CEP-AI",
  description: "FAQ CEP-AI - Câu hỏi thường gặp về CEP-AI, tự động hóa marketing bằng AI.",
};

const faqItems = [
  {
    question: "CEP-AI là gì?",
    answer: "CEP-AI là nền tảng hỗ trợ marketing tự động bằng trí tuệ nhân tạo. Giúp bạn tạo nội dung, chuẩn bị hình ảnh, tải video và đăng bài tự động lên Facebook/Fanpage một cách nhanh chóng và hiệu quả. Với CEP-AI, bạn có thể tiết kiệm đến 80% thời gian cho công việc marketing hàng ngày.",
  },
  {
    question: "CEP-AI có hỗ trợ đăng bài Facebook không?",
    answer: "Có. CEP-AI hỗ trợ đăng bài tự động lên trang cá nhân và fanpage Facebook. Bạn có thể thiết lập lịch đăng và CEP-AI sẽ tự động đăng bài theo thời gian đã thiết lập. Hệ thống sử dụng API chính thức của Facebook, đảm bảo an toàn và tuân thủ các quy định của nền tảng.",
  },
  {
    question: "Đăng bài tự động có an toàn không?",
    answer: "Rất an toàn. CEP-AI sử dụng API chính thức của Facebook và tuân thủ các quy định về an toàn. Hệ thống được thiết kế để hoạt động trong giới hạn cho phép của Facebook, đảm bảo an toàn cho tài khoản của bạn. Ngoài ra, chúng tôi cũng cung cấp các tính năng bảo mật như xác thực hai yếu tố và mã hóa dữ liệu.",
  },
  {
    question: "CEP-AI có hỗ trợ tải video từ nền tảng nào?",
    answer: "CEP-AI hỗ trợ tải video từ nhiều nền tảng phổ biến bao gồm TikTok, Douyin (TikTok Trung Quốc), YouTube, Facebook, Instagram, Vimeo, và nhiều nền tảng khác. Tính năng tải video có sẵn trong cả gói Starter, Pro và Business (với giới hạn khác nhau tùy gói).",
  },
  {
    question: "Tôi có thể quản lý nhiều fanpage cùng lúc không?",
    answer: "Có. Số lượng fanpage bạn có thể quản lý phụ thuộc vào gói bạn chọn: Starter (1 fanpage), Pro (3 fanpage), và Business (10 fanpage). Bạn có thể quản lý tất cả fanpage từ một dashboard duy nhất, giúp việc theo dõi và đăng bài trở nên dễ dàng hơn.",
  },
  {
    question: "CEP-AI có hỗ trợ tiếng Việt không?",
    answer: "Có. CEP-AI được phát triển với trọng tâm là thị trường Việt Nam. Giao diện hoàn toàn bằng tiếng Việt. AI tạo nội dung cũng hỗ trợ tốt tiếng Việt, giúp tạo ra nội dung tự nhiên và phù hợp với văn hóa đọc của người Việt.",
  },
  {
    question: "Mua CEP-AI như thế nào?",
    answer: "Bạn có thể mua CEP-AI trực tiếp trên website của chúng tôi. Chọn gói phù hợp với nhu cầu, điền thông tin và thanh toán. Chúng tôi hỗ trợ nhiều phương thức thanh toán: chuyển khoản ngân hàng, MoMo, ZaloPay, và thẻ tín dụng. Sau khi thanh toán, bạn sẽ nhận được thông tin đăng nhập qua email.",
  },
  {
    question: "Có chính sách hoàn tiền không?",
    answer: "Có. Chúng tôi cung cấp chính sách hoàn tiền trong 30 ngày nếu bạn không hài lòng với dịch vụ. Ngoài ra, tất cả khách hàng mới đều được dùng thử miễn phí 7 ngày với đầy đủ tính năng của gói Pro để trải nghiệm trước khi quyết định mua.",
  },
  {
    question: "Làm sao để được hỗ trợ khi gặp vấn đề?",
    answer: "Bạn có thể liên hệ với đội ngũ hỗ trợ của chúng tôi qua nhiều kênh: email, Zalo, hoặc fanpage Facebook. Tùy theo gói bạn chọn, thời gian phản hồi sẽ khác nhau: Starter (qua email, 24-48h), Pro (qua Zalo, trong ngày), và Business (hỗ trợ ưu tiên 24/7).",
  },
  {
    question: "CEP-AI có thể tích hợp với các công cụ khác không?",
    answer: "Gói Business cung cấp API riêng cho phép tích hợp với các hệ thống và công cụ khác theo nhu cầu. Nếu bạn cần tích hợp với CRM, hệ thống quản lý nội dung, hoặc các công cụ marketing khác, vui lòng liên hệ để được tư vấn chi tiết.",
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-[calc(72px+4rem)] pb-12 text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(0,102,255,0.1)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">Câu hỏi thường gặp</h1>
          <p className="text-lg text-[#94A3B8]">Tìm câu trả lời cho những thắc mắc phổ biến về CEP-AI</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Vẫn còn thắc mắc?"
        description="Liên hệ với chúng tôi để được giải đáp và tư vấn miễn phí"
        primaryCta={{ label: "Liên hệ ngay", href: "/lien-he" }}
        secondaryCta={{ label: "Xem bảng giá", href: "/bang-gia" }}
      />
    </>
  );
}
