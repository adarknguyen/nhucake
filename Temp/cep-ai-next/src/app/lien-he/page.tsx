import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Liên hệ - CEP-AI",
  description: "Liên hệ CEP-AI - Đặt hàng và tư vấn dịch vụ. Liên hệ qua email, Zalo, Facebook.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-[calc(72px+4rem)] pb-12 text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(0,102,255,0.1)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">Liên hệ & Đặt hàng</h1>
          <p className="text-lg text-[#94A3B8]">Điền thông tin bên dưới, đội ngũ CEP-AI sẽ liên hệ tư vấn cho bạn trong thời gian sớm nhất</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#F8FAFC] mb-6">Gửi yêu cầu</h2>
              <div className="p-8 rounded-2xl bg-[#1A2234] border border-[#2D3748]">
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#F8FAFC] mb-2">Thông tin liên hệ</h2>
              <p className="text-[#94A3B8] mb-8">Bạn cũng có thể liên hệ trực tiếp qua các kênh dưới đây:</p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1A2234] border border-[#2D3748]">
                  <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 flex items-center justify-center text-[#0066FF] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <div className="text-sm text-[#64748B] mb-1">Email</div>
                    <div className="text-[#F8FAFC] font-medium">support@cep-ai.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1A2234] border border-[#2D3748]">
                  <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 flex items-center justify-center text-[#0066FF] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <div className="text-sm text-[#64748B] mb-1">Zalo</div>
                    <div className="text-[#F8FAFC] font-medium">0123 456 789</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1A2234] border border-[#2D3748]">
                  <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 flex items-center justify-center text-[#0066FF] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </div>
                  <div>
                    <div className="text-sm text-[#64748B] mb-1">Facebook</div>
                    <div className="text-[#F8FAFC] font-medium">facebook.com/cepai</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1A2234] border border-[#2D3748]">
                  <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 flex items-center justify-center text-[#0066FF] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <div>
                    <div className="text-sm text-[#64748B] mb-1">Giờ làm việc</div>
                    <div className="text-[#F8FAFC] font-medium">Thứ 2 - Thứ 6 (8:00 - 18:00)</div>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="mt-8 p-4 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20">
                <p className="text-sm text-[#94A3B8]">
                  <strong className="text-[#F8FAFC]">Lưu ý:</strong> Sau khi gửi yêu cầu, đội ngũ CEP-AI sẽ liên hệ xác nhận qua Email / Zalo / Facebook trong vòng 24 giờ làm việc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
