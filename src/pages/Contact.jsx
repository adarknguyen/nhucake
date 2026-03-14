import { Link } from 'react-router-dom'
import { contactInfo } from '../data/cakes'

// Contact Page - Contact form and store information
function Contact() {
  return (
    <main className="flex-grow pb-24 md:pb-0">
      {/* Mobile hero image */}
      <div className="md:hidden px-4 py-4">
        <div
          className="w-full h-48 rounded-xl bg-primary/20 bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuDTK4DJrlsw-cdMR5Zbj28w62ya2DVKAyom-xVFjYKKVZRPn_b07uoGyKqYgPSXWjMmn8pZvA0m6bqR_4_FRP3i9scqEI4xIpIVh3UhebyUtGev1lVNh4QMb1bENBClLF4JcuCUbLKyoWa3ERlagv-H8e7EGdS8jQI_cpKwnuQPQKMeXe4zD4P8eJawa-43_G7ORDeh1g5cEEX9lVQ_W5I8w0yOPkgxxHqJ-STiUlrwSsfTijwgWkqJ257HyQvw6PIoRlLcnaV-Iodq)' }}
        ></div>
      </div>

      {/* Title */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10 py-4 md:py-12 text-center md:text-left">
        <div className="max-w-3xl">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-black leading-tight tracking-tight">
            <span className="md:hidden">Chúng tôi luôn sẵn sàng lắng nghe bạn</span>
            <span className="hidden md:inline">Liên hệ với <span className="text-primary">Nhu Cake</span></span>
          </h1>
          <p className="mt-2 md:mt-4 text-sm md:text-lg text-slate-600 italic md:not-italic">
            <span className="md:hidden">Hãy kết nối với Nhu Cake Studio</span>
            <span className="hidden md:inline">
              Chúng tôi rất mong nhận được phản hồi từ bạn. Liên hệ ngay với Nhu Cake để đặt bánh theo yêu cầu, gửi góp ý hoặc giải đáp thắc mắc.
            </span>
          </p>
        </div>
      </section>

      {/* Map Card (mobile) */}
      <div className="md:hidden px-4 mb-6">
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-primary/10">
          <div className="h-40 w-full bg-slate-200 relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuCzjQAAr99RaKmMfWSiRgwrtHTqeeQyRIzX-kUToayKxiNnsdVrXzpwI4MRlN_unsixTKa9h2DFL8u1L0s3I5SBjYj4VmywA5tz_XAWCXJb9oKYJ7iV1ULw6Hk4nJKvDz4hdEiycV621O-tvguxXDCa2CuwEoNrPXlVu_INgraz3UtDiD8PwFBkTv_vBhzd3Um0iC1f8O7r9MkHjqvSNswgGz7enfS4m3mXUuPaD5rH10ctxgxiNPh-lFFIcSE5ZaLzKwAZdjMq4HM4)' }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-primary text-slate-900 px-3 py-1 rounded-full shadow-lg font-bold text-xs flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">location_on</span> Nhu Cake Studio
              </div>
            </div>
          </div>
          <div className="p-4">
            <p className="font-bold text-sm">{contactInfo.address}</p>
            <p className="text-xs text-slate-500">Thành phố Hồ Chí Minh, Việt Nam</p>
          </div>
        </div>
      </div>

      {/* Contact Cards - Desktop: 5-col grid */}
      <section className="hidden md:block mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/30 text-slate-800">
              <span className="material-symbols-outlined text-3xl">location_on</span>
            </div>
            <h3 className="font-bold">Địa chỉ</h3>
            <p className="text-sm text-slate-500">{contactInfo.address}</p>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm border-2 border-primary/20">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-slate-800">
              <span className="material-symbols-outlined text-3xl">call</span>
            </div>
            <h3 className="font-bold">Hotline</h3>
            <p className="text-sm font-semibold">{contactInfo.phone}</p>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/30 text-slate-800">
              <span className="material-symbols-outlined text-3xl">chat_bubble</span>
            </div>
            <h3 className="font-bold">Zalo</h3>
            <p className="text-sm text-slate-500">{contactInfo.zalo}</p>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/30 text-slate-800">
              <span className="material-symbols-outlined text-3xl">send</span>
            </div>
            <h3 className="font-bold">Messenger</h3>
            <p className="text-sm text-slate-500">{contactInfo.messenger}</p>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/30 text-slate-800">
              <span className="material-symbols-outlined text-3xl">mail</span>
            </div>
            <h3 className="font-bold">Email</h3>
            <p className="text-sm text-slate-500">{contactInfo.email}</p>
          </div>
        </div>
      </section>

      {/* Mobile: stacked contact cards */}
      <div className="md:hidden px-4 space-y-4 mb-8">
        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-primary/10 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-primary/20 p-3 rounded-lg text-primary">
              <span className="material-symbols-outlined">call</span>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase">Gọi ngay</p>
              <p className="text-lg font-bold">{contactInfo.phone}</p>
            </div>
          </div>
          <a className="bg-primary text-slate-900 px-6 py-3 rounded-lg font-bold text-sm shadow-md active:scale-95" href={`tel:${contactInfo.phone}`}>
            Gọi
          </a>
        </div>
        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-primary/10 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-primary/20 p-3 rounded-lg text-primary">
              <span className="material-symbols-outlined">chat_bubble</span>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase">Zalo / WhatsApp</p>
              <p className="text-lg font-bold">Trò chuyện trực tiếp</p>
            </div>
          </div>
          <a href="https://zalo.me/123456789" className="bg-primary/30 text-slate-900 px-6 py-3 rounded-lg font-bold text-sm shadow-sm active:scale-95">
            Nhắn tin
          </a>
        </div>
      </div>

      {/* Map + Contact Form (desktop side-by-side) */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 py-4 md:py-12 lg:px-10">
        <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-xl bg-white p-6 md:p-8 shadow-sm">
            <h2 className="mb-4 md:mb-6 text-lg md:text-2xl font-bold">
              <span className="md:hidden">Gửi yêu cầu tư vấn</span>
              <span className="hidden md:inline">Gửi tin nhắn cho chúng tôi</span>
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs md:text-sm font-medium">Họ và tên</label>
                  <input
                    className="rounded-lg border-slate-200 bg-background-light focus:border-primary focus:ring-primary p-3"
                    placeholder="Nhập tên của bạn"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs md:text-sm font-medium">Số điện thoại</label>
                  <input
                    className="rounded-lg border-slate-200 bg-background-light focus:border-primary focus:ring-primary p-3"
                    placeholder="090..."
                    type="tel"
                  />
                </div>
              </div>
              <div className="hidden md:flex flex-col gap-1.5">
                <label className="text-sm font-medium">Email</label>
                <input
                  className="rounded-lg border-slate-200 bg-background-light focus:border-primary focus:ring-primary p-3"
                  placeholder="email@vi-du.com"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs md:text-sm font-medium">Lời nhắn</label>
                <textarea
                  className="rounded-lg border-slate-200 bg-background-light focus:border-primary focus:ring-primary p-3"
                  placeholder="Chúng tôi có thể giúp gì cho bạn?"
                  rows="3"
                />
              </div>
              <button
                className="w-full rounded-xl bg-primary py-3 font-bold text-slate-900 hover:opacity-90 shadow-sm"
                type="submit"
              >
                Gửi lời nhắn
              </button>
            </form>
          </div>

          {/* Map (desktop) */}
          <div className="hidden md:flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Vị trí cửa hàng</h2>
              <span className="text-sm text-slate-500 flex items-center gap-1">
                <span className="material-symbols-outlined text-base">directions_walk</span> Cách Bến Thành 10 phút đi bộ
              </span>
            </div>
            <div className="h-[400px] w-full overflow-hidden rounded-xl bg-slate-200 relative">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuBetjjq_SPgqv2yUiz-JLGSxV2IBHaAFioA4pJf8p-KzoYaxV2qSe4_5i4pABEJYPNtVp58l5R313bt6pYI_2AKreXQfj39_HKRFWTqvYUA02QACqAm5RrfY1aGxJPD8ynQw9gH8QyoEhUpUruLkiHgWsPb-YPWR_bhSfZE_04bLdlxBcOWvlE3iUvMagffJq5ccs0L6xDlLnItgnMqDYvjRAeWfRNj9nVYzUd3VE3VMR-q9pvVF9jomzVgT4LCn-2CAmOOOd8CrJWY)' }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1 text-xs font-bold text-white shadow-xl">
                    Nhu Cake ở đây nè!
                    <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-slate-900"></div>
                  </div>
                  <span className="material-symbols-outlined text-5xl text-red-500 drop-shadow-lg">location_on</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile footer info */}
      <div className="md:hidden px-4 text-center mt-4">
        <p className="text-xs text-slate-400">Mở cửa hàng ngày: 09:00 - 21:00</p>
        <p className="text-[10px] text-slate-400 mt-2">© 2024 Nhu Cake Studio. Bảo lưu mọi quyền.</p>
      </div>

      {/* Mobile floating bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background-light via-background-light to-transparent z-50">
        <div className="max-w-md mx-auto flex gap-3">
          <Link
            to="/checkout"
            className="flex-1 bg-primary text-slate-900 h-14 rounded-xl font-bold flex items-center justify-center gap-2 shadow-xl border border-white/20"
          >
            <span className="material-symbols-outlined">shopping_cart</span>
            <span>ĐẶT BÁNH NGAY</span>
          </Link>
          <button className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg border border-primary/20 text-primary">
            <span className="material-symbols-outlined fill-1">favorite</span>
          </button>
        </div>
      </div>
    </main>
  )
}

export default Contact
