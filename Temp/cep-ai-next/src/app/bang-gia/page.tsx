import { Metadata } from "next";
import Link from "next/link";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Bảng giá - CEP-AI",
  description: "Bảng giá CEP-AI - Chọn gói phù hợp với nhu cầu của bạn. Starter, Pro, Business.",
};

const pricingFaqItems = [
  {
    question: "Tôi có được dùng thử miễn phí không?",
    answer: "Có. Tất cả khách hàng mới đều được dùng thử miễn phí 7 ngày với đầy đủ tính năng của gói Pro. Bạn có thể hủy bất kỳ lúc nào trong thời gian dùng thử mà không mất phí.",
  },
  {
    question: "Tôi có thể nâng cấp hoặc hạ gói không?",
    answer: "Có. Bạn có thể nâng cấp hoặc hạ gói bất kỳ lúc nào. Khi nâng cấp, bạn sẽ được tính phí chênh lệch. Khi hạ gói, phần tiền còn lại sẽ được quy đổi sang tháng tiếp theo.",
  },
  {
    question: "Phương thức thanh toán như thế nào?",
    answer: "Chúng tôi hỗ trợ nhiều phương thức thanh toán: chuyển khoản ngân hàng, MoMo, ZaloPay, và thẻ tín dụng/ghi nợ. Thanh toán có thể theo tháng hoặc theo năm (giảm 20%).",
  },
  {
    question: "CEP-AI có hoàn tiền không?",
    answer: "Chúng tôi cung cấp chính sách hoàn tiền trong 30 ngày nếu bạn không hài lòng với dịch vụ. Vui lòng liên hệ đội ngũ hỗ trợ để được hướng dẫn.",
  },
];

const comparisonData = [
  { feature: "AI tạo nội dung", starter: true, pro: true, business: true },
  { feature: "Auto đăng Facebook/Fanpage", starter: true, pro: true, business: true },
  { feature: "Tìm hình ảnh", starter: true, pro: true, business: true },
  { feature: "Tải video/ngày", starter: "10", pro: "50", business: "Không giới hạn" },
  { feature: "Chỉnh sửa video", starter: false, pro: true, business: true },
  { feature: "Số fanpage quản lý", starter: "1", pro: "3", business: "10" },
  { feature: "Team members", starter: "1", pro: "1", business: "5" },
  { feature: "API riêng", starter: false, pro: false, business: true },
  { feature: "Hỗ trợ", starter: "Email", pro: "Zalo", business: "24/7 ưu tiên" },
];

export default function PricingPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-[calc(72px+4rem)] pb-12 text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(0,102,255,0.1)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">Bảng giá CEP-AI</h1>
          <p className="text-lg text-[#94A3B8]">Chọn gói phù hợp với nhu cầu của bạn. Tất cả gói đều được dùng thử miễn phí 7 ngày.</p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Pricing />

          {/* Comparison Table */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-[#F8FAFC] text-center mb-8">So sánh chi tiết</h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-[#2D3748]">
                    <th className="text-left py-4 px-4 text-[#F8FAFC] font-semibold">Tính năng</th>
                    <th className="text-center py-4 px-4 text-[#0066FF] font-semibold">Starter</th>
                    <th className="text-center py-4 px-4 text-[#0066FF] font-semibold">Pro</th>
                    <th className="text-center py-4 px-4 text-[#0066FF] font-semibold">Business</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b border-[#2D3748]">
                      <td className="py-4 px-4 text-[#94A3B8]">{row.feature}</td>
                      <td className="py-4 px-4 text-center">
                        {typeof row.starter === "boolean" ? (
                          row.starter ? (
                            <span className="text-[#10B981]">✓</span>
                          ) : (
                            <span className="text-[#64748B]">✗</span>
                          )
                        ) : (
                          <span className="text-[#F8FAFC]">{row.starter}</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {typeof row.pro === "boolean" ? (
                          row.pro ? (
                            <span className="text-[#10B981]">✓</span>
                          ) : (
                            <span className="text-[#64748B]">✗</span>
                          )
                        ) : (
                          <span className="text-[#F8FAFC]">{row.pro}</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {typeof row.business === "boolean" ? (
                          row.business ? (
                            <span className="text-[#10B981]">✓</span>
                          ) : (
                            <span className="text-[#64748B]">✗</span>
                          )
                        ) : (
                          <span className="text-[#F8FAFC]">{row.business}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#111827]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#F8FAFC] text-center mb-8">Câu hỏi về bảng giá</h2>
          <FAQ items={pricingFaqItems} />
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Cần tư vấn thêm?"
        description="Liên hệ với chúng tôi để được tư vấn gói phù hợp với nhu cầu của bạn"
        primaryCta={{ label: "Liên hệ ngay", href: "/lien-he" }}
        secondaryCta={{ label: "Xem FAQ", href: "/faq" }}
      />
    </>
  );
}
