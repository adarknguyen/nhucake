import { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Tính năng - CEP-AI",
  description: "Tính năng CEP-AI - Tự động hóa đăng bài bằng AI. AI tạo nội dung, auto đăng Facebook, tải video, chỉnh sửa video.",
};

const features = [
  {
    title: "AI Tạo Nội Dung Thông Minh",
    desc: "Với CEP-AI, bạn chỉ cần nhập từ khóa hoặc chủ đề mong muốn. AI sẽ tự động tạo ra nội dung bài viết chất lượng cao, phù hợp với ngành nghề và đối tượng khán giả của bạn.",
    items: [
      "Tạo nội dung từ từ khóa trong vài giây",
      "Hỗ trợ nhiều ngành nghề và lĩnh vực",
      "Tối ưu SEO cho bài viết",
      "Điều chỉnh giọng văn và độ dài dễ dàng",
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7U5YQ1cxjc0bQlyc4geCXLCYmladXhFXL71Qw_-zuvTV2ttzEsYZi2uFcOr03M4gZaRGAJrY__lBQxLMu5YakNq1lGRdvw2QmB-tjCXhk0eWYflbemiJLqhTdYORtwoGRNrMtEZlMOtyqZkd2t2OPvZeIjCKD7G7F5fV7yU2y0Ax24DP_38Jf9yFPwIjGed4UONswlcK-tnlPblqRVSwzE2zGe5ICnY_mrpRmbtIdA6w9s9yVRMecNtDTvGgemE6U4F510mwfKOlW",
    imageAlt: "AI Tạo Nội Dung - CEP-AI",
    reverse: false,
  },
  {
    title: "Tự Động Đăng Bài Facebook",
    desc: "Thiết lập lịch đăng bài tự động và CEP-AI sẽ lo việc còn lại. Không cần ngồi máy hay lo lắng về việc quên đăng bài đúng giờ.",
    items: [
      "Đăng lên trang cá nhân và fanpage",
      "Lên lịch đăng bài linh hoạt",
      "Hỗ trợ đăng text, hình ảnh, video",
      "Quản lý nhiều fanpage cùng lúc",
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSEqPqg2Z9O-9WzJcOjQM7XRjq0DIp1GVguMuSF3eznsuUmSMS_rk2EBiPwH8Iepzt_4ejIV3TMNX3wGzaR8WhKvcWDP5IN8yT0neefweGizqjKaaOGqls6o97W3QS047FfIxBZ3MC4JmM9iu9RYrM43SyTo68FTfFa5ms5f1sw2rDXGi8DTtQgnhnyYMc0k0CsjBcieF1fFRanw1woV9fQBqUj_zDrUCD9Ndd1umc98trQQ9GfAdObM9IbChH_9pl3dkTapzciTDz",
    imageAlt: "Robot mascot CEP-AI",
    reverse: true,
  },
  {
    title: "Tìm Kiếm Hình Ảnh Chuyên Nghiệp",
    desc: "CEP-AI giúp bạn tìm kiếm và chuẩn bị hình ảnh phù hợp cho bài viết một cách nhanh chóng. Tự động resize và tối ưu cho từng nền tảng.",
    items: [
      "Tìm kiếm hình ảnh chất lượng cao",
      "Tự động resize theo tiêu chuẩn nền tảng",
      "Tối ưu kích thước và chất lượng ảnh",
      "Hỗ trợ nhiều định dạng ảnh phổ biến",
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCHeFA0EgdAq3kdsxMU0y1EZTxWK39huwjHxQMmCF0pH-qcIfeqiUTHWGyCsPTTeCTR6BlsByylA_zTNDdrIF8bvetlKZ2zZuLydUnrDpiebOFKMaKGlk9TRZxf_EwjNWJuCAX69udpGuQt_hFGskUUAClWdQm-QL0Qdop_hr4WeFxPuNnnXmq5okGkUnzoo4i9Zo00kDE0bBRFVdloO16BTB6hi4xoUltNA49HiUlL8G2blfiCNZKoWw93thfIjKVR_z2YZMVJcwW",
    imageAlt: "Social Media Dashboard",
    reverse: false,
  },
  {
    title: "Tải Video Hàng Loạt",
    desc: "Tải video từ TikTok, Douyin, YouTube và nhiều nền tảng khác một cách dễ dàng. Hỗ trợ tải nhiều video cùng lúc với tốc độ cao.",
    items: [
      "Hỗ trợ TikTok, Douyin, YouTube",
      "Tải hàng loạt cùng lúc",
      "Giữ nguyên chất lượng video",
      "Tự động tải caption/nội dung kèm theo",
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDR9ftqPwsnFuJ-Ca9J9WOTkRx6OP1N5Z2dUR5KOvKeS0kwID8OwpueeptLNkvFIaMBBa0Y32LtECCrJn0Si735B94TIfFclSzLXAHJRgwQJQWzFc3ZLPfWY2M_G1stftKQRa3xXqJEcqbXPJppva1kNW-LUl_HyuYxO91NUxYurMxW65kLbWJNopuUekSFGZeGuUzBBFLjAz_Htx76OyjDUqVCIA2sBdAOFd2lN67pnW-EW7wd9Kd2jm4IlrgmOz9F4eq43J_MzLpX",
    imageAlt: "Creative Workspace",
    reverse: true,
  },
  {
    title: "Chỉnh Sửa Video Nhanh",
    desc: "Các công cụ chỉnh sửa video mạnh mẽ được tích hợp sẵn. Thay đổi định dạng, thêm watermark, điều chỉnh tốc độ và resize trong vài clicks.",
    items: [
      "Chuyển đổi định dạng video dễ dàng",
      "Thêm watermark/logo cá nhân",
      "Điều chỉnh tốc độ video",
      "Resize theo kích thước nền tảng",
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaxTQSZ2eNC1GKGC_1l7iQa_sxQ6plEjRwrRs-rfznGwTb_Sol4ZDSJtHp0xYA69OIVvl9bEZaIELAXYb76qm7pRp8VpWhrPNjNOEbJMovAGTy_GUjpGa_CrMy87UeJk8N6bhgstkA7ZhJPfT1_h6saLKdO0amOZKt0O7-8wQ41Mg4MjW0keX7dGYJz9kjVIlrNDvz1cEsQ6qcKi_4iwdCB4Tg5kcYafo6bfeN8Cv63zgP6zCUQJkio22Kt9Vfpz2E-ZFh0GfEMh4h",
    imageAlt: "Digital Marketing Team",
    reverse: false,
  },
  {
    title: "Chuẩn Bị Media Cho Website",
    desc: "Tối ưu hình ảnh và video cho website của bạn. Thu hút thành viên và tăng engagement hiệu quả với nội dung được chuẩn bị chuyên nghiệp.",
    items: [
      "Tối ưu hình ảnh cho web",
      "Nén file mà không giảm chất lượng",
      "Tạo thumbnail chuyên nghiệp",
      "Hỗ trợ nhiều định dạng web",
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7U5YQ1cxjc0bQlyc4geCXLCYmladXhFXL71Qw_-zuvTV2ttzEsYZi2uFcOr03M4gZaRGAJrY__lBQxLMu5YakNq1lGRdvw2QmB-tjCXhk0eWYflbemiJLqhTdYORtwoGRNrMtEZlMOtyqZkd2t2OPvZeIjCKD7G7F5fV7yU2y0Ax24DP_38Jf9yFPwIjGed4UONswlcK-tnlPblqRVSwzE2zGe5ICnY_mrpRmbtIdA6w9s9yVRMecNtDTvGgemE6U4F510mwfKOlW",
    imageAlt: "AI Neural Networks",
    reverse: true,
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-[calc(72px+4rem)] pb-12 text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(0,102,255,0.1)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">Tính năng nổi bật</h1>
          <p className="text-lg text-[#94A3B8]">Tất cả công cụ bạn cần để tự động hóa marketing trên mạng xã hội</p>
        </div>
      </section>

      {/* Features */}
      {features.map((feature, index) => (
        <section key={index} className={`py-20 ${index % 2 === 1 ? 'bg-[#111827]' : ''}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${feature.reverse ? 'lg:flex-row-reverse' : ''}`}>
              {/* Text */}
              <div className={feature.reverse ? 'lg:order-2' : ''}>
                <h2 className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-6">{feature.title}</h2>
                <p className="text-[#94A3B8] text-base leading-relaxed mb-6">{feature.desc}</p>
                <ul className="space-y-3">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#94A3B8]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Image */}
              <div className={feature.reverse ? 'lg:order-1' : ''}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={feature.image}
                    alt={feature.imageAlt}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <CTA
        title="Sẵn sàng trải nghiệm?"
        description="Đăng ký ngay để được tư vấn và dùng thử miễn phí"
        primaryCta={{ label: "Xem bảng giá", href: "/bang-gia" }}
        secondaryCta={{ label: "Liên hệ tư vấn", href: "/lien-he" }}
      />
    </>
  );
}
