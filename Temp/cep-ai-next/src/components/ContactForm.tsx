'use client';

import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  package: string;
  need: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    package: '',
    need: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        package: '',
        need: '',
        message: '',
      });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  const inputClasses = "w-full px-4 py-3 bg-[#111827] border border-[#2D3748] rounded-xl text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[#F8FAFC] mb-2">
          Họ và tên *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Nhập họ và tên của bạn"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#F8FAFC] mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Nhập địa chỉ email"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[#F8FAFC] mb-2">
          Số điện thoại *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Nhập số điện thoại"
          required
        />
      </div>

      <div>
        <label htmlFor="package" className="block text-sm font-medium text-[#F8FAFC] mb-2">
          Gói quan tâm
        </label>
        <select
          id="package"
          name="package"
          value={formData.package}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="">Chọn gói dịch vụ</option>
          <option value="starter">Starter - 299.000đ/tháng</option>
          <option value="pro">Pro - 599.000đ/tháng</option>
          <option value="business">Business - 1.299.000đ/tháng</option>
          <option value="custom">Tùy chỉnh theo nhu cầu</option>
        </select>
      </div>

      <div>
        <label htmlFor="need" className="block text-sm font-medium text-[#F8FAFC] mb-2">
          Nhu cầu của bạn
        </label>
        <select
          id="need"
          name="need"
          value={formData.need}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="">Chọn nhu cầu</option>
          <option value="tuvan">Tư vấn trước khi mua</option>
          <option value="dathang">Đặt hàng ngay</option>
          <option value="dungthu">Đăng ký dùng thử</option>
          <option value="hotro">Yêu cầu hỗ trợ kỹ thuật</option>
          <option value="khac">Khác</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#F8FAFC] mb-2">
          Nội dung thêm
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`${inputClasses} resize-none`}
          placeholder="Mô tả thêm về nhu cầu của bạn..."
          rows={4}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#0052CC] text-white font-semibold shadow-lg shadow-[#0066FF]/20 hover:shadow-[#0066FF]/40 transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0"
      >
        {status === 'loading' ? 'Đang gửi...' : status === 'success' ? 'Gửi thành công!' : 'Gửi yêu cầu'}
      </button>

      {status === 'success' && (
        <p className="text-center text-[#10B981] text-sm">
          Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm nhất.
        </p>
      )}
    </form>
  );
}
