import { formatPrice, cakes } from '@/data/cakes'

// Checkout Page - Order form and cart summary
export default function Checkout() {
  // Mock cart items (in real app would come from cart state)
  const cartItems = [
    {
      ...cakes[0],
      quantity: 1,
      size: '15cm',
      flavor: 'Vani'
    },
    {
      ...cakes[2],
      quantity: 1,
      size: '18cm',
      flavor: 'Socola'
    }
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 30000
  const total = subtotal + shipping

  return (
    <>
      <main className="max-w-[1200px] mx-auto w-full px-4 py-4 md:py-8 lg:px-10 pb-40 md:pb-8">
        <div className="hidden md:block mb-8">
          <h1 className="text-3xl font-bold">Thanh toán</h1>
          <p className="text-slate-500 mt-1">Hoàn tất đơn hàng ngọt ngào của bạn bên dưới</p>
        </div>

        {/* Mobile: Order Summary first */}
        <section className="md:hidden mb-4">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-primary/10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Tóm tắt đơn hàng</h3>
              <span className="bg-primary/20 px-2 py-1 rounded text-xs font-bold">{cartItems.length} sản phẩm</span>
            </div>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div
                    className="size-20 bg-center bg-cover rounded-lg shrink-0"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  <div className="flex-1 flex flex-col justify-center">
                    <p className="font-bold text-base">{item.name}</p>
                    <p className="text-sm text-slate-500">SL: {item.quantity} • {item.size}</p>
                    <p className="text-sm font-bold text-primary mt-1">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-primary/10 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Tạm tính</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Phí giao hàng</span>
                <span>{formatPrice(shipping)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-2">
                <span>Tổng cộng</span>
                <span className="text-accent-pink">{formatPrice(total)}</span>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
          {/* Left: Forms */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            {/* Customer Info */}
            <section className="bg-white p-4 md:p-6 rounded-xl border border-primary/10 shadow-sm">
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <span className="material-symbols-outlined text-primary">person</span>
                <h3 className="text-lg font-bold">Thông tin khách hàng</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-wider md:tracking-normal md:normal-case">Họ và Tên</label>
                  <input
                    className="h-12 md:h-auto rounded-xl border-primary/20 bg-background-light focus:ring-primary focus:border-primary px-4"
                    placeholder="Nguyễn Văn A"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-wider md:tracking-normal md:normal-case">Số điện thoại</label>
                  <input
                    className="h-12 md:h-auto rounded-xl border-primary/20 bg-background-light focus:ring-primary focus:border-primary px-4"
                    placeholder="090 123 4567"
                    type="tel"
                  />
                </div>
                <div className="flex flex-col gap-1 md:col-span-2">
                  <label className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-wider md:tracking-normal md:normal-case">Địa chỉ giao hàng</label>
                  <input
                    className="h-12 md:h-auto rounded-xl border-primary/20 bg-background-light focus:ring-primary focus:border-primary px-4"
                    placeholder="123 Đường Bánh, Quận 1, TP.HCM"
                    type="text"
                  />
                </div>
                <div className="hidden md:flex flex-col gap-1">
                  <label className="text-sm font-medium text-slate-600">Ngày nhận bánh</label>
                  <input
                    className="rounded-xl border-primary/20 bg-background-light focus:ring-primary focus:border-primary p-3"
                    type="date"
                  />
                </div>
                <div className="hidden md:flex flex-col gap-1">
                  <label className="text-sm font-medium text-slate-600">Giờ nhận</label>
                  <input
                    className="rounded-xl border-primary/20 bg-background-light focus:ring-primary focus:border-primary p-3"
                    type="time"
                  />
                </div>
                <div className="flex flex-col gap-1 md:col-span-2">
                  <label className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-wider md:tracking-normal md:normal-case">Ghi chú</label>
                  <input
                    className="h-12 md:h-auto rounded-xl border-primary/20 bg-background-light focus:ring-primary focus:border-primary px-4"
                    placeholder="Ví dụ: Ghi 'Chúc mừng sinh nhật' lên bánh"
                    type="text"
                  />
                </div>
              </div>
            </section>

            {/* Payment Methods */}
            <section className="bg-white p-4 md:p-6 rounded-xl border border-primary/10 shadow-sm">
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <span className="material-symbols-outlined text-primary">payments</span>
                <h3 className="text-lg font-bold">Phương thức thanh toán</h3>
              </div>
              <div className="space-y-3">
                <label className="flex items-center p-4 rounded-xl border-2 border-primary bg-primary/5 cursor-pointer">
                  <input className="text-primary focus:ring-primary" name="payment" type="radio" defaultChecked />
                  <div className="ml-4 flex-1">
                    <p className="font-bold">Chuyển khoản ngân hàng</p>
                    <p className="text-xs text-slate-500">Nhanh chóng & An toàn</p>
                  </div>
                  <span className="material-symbols-outlined text-slate-400">account_balance</span>
                </label>
                <label className="flex items-center p-4 rounded-xl border border-primary/20 bg-background-light cursor-pointer hover:border-primary">
                  <input className="text-primary focus:ring-primary" name="payment" type="radio" />
                  <div className="ml-4 flex-1">
                    <p className="font-bold">Thanh toán khi nhận hàng (COD)</p>
                    <p className="text-xs text-slate-500">Trả tiền khi nhận bánh</p>
                  </div>
                  <span className="material-symbols-outlined text-slate-400">local_shipping</span>
                </label>
                <label className="flex items-center p-4 rounded-xl border border-primary/20 bg-background-light cursor-pointer hover:border-primary">
                  <input className="text-primary focus:ring-primary" name="payment" type="radio" />
                  <div className="ml-4 flex-1">
                    <p className="font-bold">Ví điện tử</p>
                    <p className="text-xs text-slate-500">MoMo, ZaloPay, VNPay</p>
                  </div>
                  <span className="material-symbols-outlined text-slate-400">credit_card</span>
                </label>
              </div>
            </section>
          </div>

          {/* Right: Order Summary (desktop) */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-24">
            <section className="bg-white p-6 rounded-xl border border-primary/10 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-primary">receipt_long</span>
                <h3 className="text-lg font-bold">Chi tiết đơn hàng</h3>
              </div>
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 p-2">
                    <div
                      className="w-20 h-20 rounded-xl bg-cover bg-center shrink-0 border border-primary/10"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h4 className="font-bold">{item.name}</h4>
                        <p className="font-bold">{formatPrice(item.price * item.quantity)}</p>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">Kích thước: {item.size} | SL: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-dashed border-primary/30 pt-4 space-y-3">
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Tạm tính</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Phí giao hàng</span>
                  <span>{formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between text-sm text-primary font-medium">
                  <span>Giảm giá</span>
                  <span>-0đ</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                  <span className="text-lg font-bold">Tổng cộng</span>
                  <span className="text-2xl font-bold">{formatPrice(total)}</span>
                </div>
              </div>
              <button className="w-full mt-8 bg-primary text-slate-900 font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">shopping_bag</span>
                <span>Đặt Hàng Ngay</span>
              </button>
              <p className="text-center text-xs text-slate-400 mt-4 px-6 leading-relaxed">
                Bằng cách đặt hàng, bạn đồng ý với các điều khoản dịch vụ của Nhu Cake.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Mobile bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-primary/20 p-4 pb-8 z-50">
        <div className="max-w-md mx-auto flex flex-col gap-3">
          <div className="flex justify-between items-center px-2">
            <div>
              <p className="text-xs text-slate-500 font-medium">Tổng tiền thanh toán</p>
              <p className="text-xl font-bold text-accent-pink">{formatPrice(total)}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-slate-400">Đã bao gồm các loại thuế</p>
            </div>
          </div>
          <button className="w-full bg-primary hover:opacity-90 text-slate-900 font-bold py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 active:scale-[0.98]">
            Đặt hàng ngay <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Desktop footer */}
      <footer className="hidden md:block mt-auto py-10 px-6 border-t border-primary/10 text-center">
        <p className="text-sm text-slate-500">© 2024 Nhu Cake Bakery. Lan tỏa vị ngọt từ năm 2015.</p>
      </footer>
    </>
  )
}
