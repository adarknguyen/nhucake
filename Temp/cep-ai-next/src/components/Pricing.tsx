import Link from 'next/link';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  cta: string;
  featured?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '299.000',
    period: '/tháng',
    description: 'Phù hợp cho cá nhân',
    features: [
      { text: 'AI tạo nội dung', included: true },
      { text: 'Auto đăng Facebook/Fanpage', included: true },
      { text: 'Tìm hình ảnh', included: true },
      { text: 'Tải 10 video/ngày', included: true },
      { text: 'Quản lý 1 fanpage', included: true },
      { text: 'Hỗ trợ qua email', included: true },
    ],
    cta: 'Đăng ký ngay',
    featured: false,
  },
  {
    name: 'Pro',
    price: '599.000',
    period: '/tháng',
    description: 'Phù hợp cho marketer chuyên nghiệp',
    features: [
      { text: 'Tất cả tính năng Starter', included: true },
      { text: 'Chỉnh sửa video', included: true },
      { text: 'Tải 50 video/ngày', included: true },
      { text: 'Quản lý 3 fanpage', included: true },
      { text: 'Lên lịch đăng bài nâng cao', included: true },
      { text: 'Hỗ trợ qua Zalo', included: true },
    ],
    cta: 'Đăng ký ngay',
    featured: true,
  },
  {
    name: 'Business',
    price: '1.299.000',
    period: '/tháng',
    description: 'Phù hợp cho doanh nghiệp',
    features: [
      { text: 'Tất cả tính năng Pro', included: true },
      { text: 'Tải video không giới hạn', included: true },
      { text: 'Quản lý 10 fanpage', included: true },
      { text: 'API riêng', included: true },
      { text: 'Team access (5 users)', included: true },
      { text: 'Hỗ trợ ưu tiên 24/7', included: true },
    ],
    cta: 'Liên hệ ngay',
    featured: false,
  },
];

export default function Pricing() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {pricingPlans.map((plan) => (
        <div
          key={plan.name}
          className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
            plan.featured
              ? 'bg-gradient-to-b from-[#0066FF]/20 to-[#1A2234] border-[#0066FF] shadow-lg shadow-[#0066FF]/20'
              : 'bg-[#1A2234] border-[#2D3748] hover:border-[#3D4A5C] hover:shadow-lg'
          }`}
        >
          {plan.featured && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#0066FF] to-[#7C3AED] rounded-full text-white text-xs font-semibold">
              Khuyên dùng
            </div>
          )}
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-[#F8FAFC] mb-2">{plan.name}</h3>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl font-bold text-[#F8FAFC]">{plan.price}</span>
              <span className="text-[#94A3B8]">{plan.period}</span>
            </div>
            <p className="text-[#94A3B8] text-sm mt-2">{plan.description}</p>
          </div>
          <ul className="space-y-3 mb-8">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-sm">
                {feature.included ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                )}
                <span className={feature.included ? 'text-[#F8FAFC]' : 'text-[#64748B]'}>
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
          <Link
            href="/lien-he"
            className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-200 ${
              plan.featured
                ? 'bg-gradient-to-r from-[#0066FF] to-[#0052CC] text-white hover:shadow-lg hover:shadow-[#0066FF]/30'
                : 'border border-[#3D4A5C] text-[#F8FAFC] hover:border-[#0066FF] hover:text-[#0066FF]'
            }`}
          >
            {plan.cta}
          </Link>
        </div>
      ))}
    </div>
  );
}
