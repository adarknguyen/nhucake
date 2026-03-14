import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getCakeBySlug, getRelatedCakes, formatPrice, cakes } from '../data/cakes'
import CakeCard from '../components/CakeCard'

// CakeDetail Page - Individual product detail page
function CakeDetail() {
  const { slug } = useParams()
  const cake = getCakeBySlug(slug)

  const [selectedSize, setSelectedSize] = useState(cake?.sizes?.[0]?.size || '15cm')
  const [selectedFlavor, setSelectedFlavor] = useState(cake?.flavors?.[0] || 'Vani')
  const [quantity, setQuantity] = useState(1)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!cake) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Không tìm thấy sản phẩm</h1>
        <Link to="/cakes" className="text-accent-pink font-bold">Quay lại trang bánh</Link>
      </div>
    )
  }

  const relatedCakes = getRelatedCakes(slug, 4)
  const currentSizeData = cake.sizes?.find(s => s.size === selectedSize) || { size: selectedSize, price: cake.price }
  const totalPrice = currentSizeData.price * quantity

  // Sample images for gallery (in real app would come from cake data)
  const galleryImages = [
    cake.image,
    cakes[1]?.image,
    cakes[2]?.image,
    cakes[3]?.image,
  ]

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8 pb-32 md:pb-8">
      {/* Breadcrumbs (desktop) */}
      <nav className="hidden md:flex items-center gap-2 text-sm text-slate-500 mb-8">
        <Link to="/" className="hover:text-primary">Trang chủ</Link>
        <span className="material-symbols-outlined text-xs">chevron_right</span>
        <Link to="/cakes" className="hover:text-primary">Bánh Signature</Link>
        <span className="material-symbols-outlined text-xs">chevron_right</span>
        <span className="text-slate-900 font-medium">{cake.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12">
        {/* Product Gallery */}
        <div className="lg:col-span-7">
          {/* Mobile: single image with dots */}
          <div className="md:hidden relative">
            <div
              className="aspect-square w-full rounded-xl overflow-hidden bg-primary/20 bg-cover bg-center"
              style={{ backgroundImage: `url(${galleryImages[currentImageIndex]})` }}
            ></div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
              {galleryImages.map((_, idx) => (
                <div
                  key={idx}
                  className={`size-2 rounded-full ${idx === currentImageIndex ? 'bg-white' : 'bg-white/40'}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop: main + thumbnails */}
          <div className="hidden md:grid grid-cols-1 gap-4">
            <div className="aspect-square rounded-xl overflow-hidden bg-primary/10">
              <img
                className="w-full h-full object-cover"
                alt={cake.name}
                src={galleryImages[currentImageIndex]}
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 cursor-pointer ${
                    idx === currentImageIndex ? 'border-primary' : 'border-transparent hover:border-primary'
                  }`}
                >
                  <img className="w-full h-full object-cover" alt={`Thumbnail ${idx + 1}`} src={img} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:col-span-5 space-y-6 md:space-y-8">
          <div>
            {/* Mobile title/price */}
            <div className="md:hidden flex justify-between items-start">
              <div className="space-y-1">
                <h1 className="text-2xl font-bold">{cake.name}</h1>
                <p className="text-slate-500 text-sm">{cake.description}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-pink-600">{formatPrice(cake.price)}</p>
                {cake.originalPrice && (
                  <p className="text-xs text-slate-400 line-through">{formatPrice(cake.originalPrice)}</p>
                )}
              </div>
            </div>

            {/* Desktop title/price */}
            <div className="hidden md:block">
              <h1 className="text-4xl font-extrabold mb-1">{cake.name}</h1>
              <p className="text-xl text-primary font-medium italic">{cake.nameEn}</p>
              <div className="flex items-center gap-4 mt-4">
                <p className="text-3xl font-bold">{formatPrice(cake.price)}</p>
                <div className="flex items-center text-yellow-400">
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined">star_half</span>
                  <span className="ml-2 text-slate-500 text-sm">({cake.reviewCount} đánh giá)</span>
                </div>
              </div>
            </div>

            {/* Mobile stats bar */}
            <div className="md:hidden flex items-center gap-4 mt-4 py-3 border-y border-primary/20">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-yellow-500 text-[18px] fill-1">star</span>
                <span className="font-bold text-sm">{cake.rating}</span>
                <span className="text-slate-400 text-xs">({cake.reviewCount}+)</span>
              </div>
              <div className="h-4 w-[1px] bg-slate-200"></div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-pink-500 text-[18px]">schedule</span>
                <span className="text-sm font-medium">30-45 phút</span>
              </div>
            </div>
            <p className="hidden md:block mt-6 text-slate-600 leading-relaxed">
              Mềm mịn, tan ngay trong miệng với hương vị dâu tây tự nhiên và kem tươi vani Tahitian cao cấp.
              Lựa chọn hoàn hảo cho những dịp kỷ niệm nhẹ nhàng.
            </p>
          </div>

          {/* Size selector */}
          {cake.sizes && cake.sizes.length > 0 && (
            <div className="border-t border-primary/20 pt-6">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold">Kích Thước</label>
                <span className="md:hidden text-xs text-pink-500 font-medium">Bắt buộc</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {cake.sizes.map((sizeObj) => (
                  <button
                    key={sizeObj.size}
                    onClick={() => setSelectedSize(sizeObj.size)}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 ${
                      selectedSize === sizeObj.size
                        ? 'border-primary bg-primary/10'
                        : 'border-slate-200 hover:border-primary'
                    }`}
                  >
                    <span className="text-xs font-bold">{sizeObj.size}</span>
                    <span className="text-[10px] opacity-70">{sizeObj.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Flavor selector */}
          {cake.flavors && cake.flavors.length > 0 && (
            <div>
              <label className="block text-sm font-semibold mb-3">Cốt bánh</label>
              <div className="flex flex-wrap gap-3">
                {cake.flavors.map((flavor) => (
                  <button
                    key={flavor}
                    onClick={() => setSelectedFlavor(flavor)}
                    className={`px-4 md:px-5 py-2 md:py-2.5 rounded-full md:rounded-lg border-2 text-sm font-semibold ${
                      selectedFlavor === flavor
                        ? 'border-primary bg-primary/10'
                        : 'border-slate-200 hover:border-primary'
                    }`}
                  >
                    {flavor}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Description (mobile) */}
          <div className="md:hidden bg-primary/5 rounded-xl p-4">
            <h3 className="font-bold mb-2">Mô tả sản phẩm</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{cake.description}</p>
          </div>

          {/* Message + Date */}
          <div>
            <label className="block text-sm font-semibold mb-3">Lời nhắn trên bánh</label>
            <input
              className="w-full px-4 py-3 rounded-xl bg-slate-100 border-none focus:ring-2 focus:ring-primary"
              placeholder="Vd: Chúc mừng sinh nhật (Tối đa 20 ký tự)"
              type="text"
            />
          </div>
          <div className="hidden md:grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-3">Ngày nhận bánh</label>
              <input
                className="w-full px-4 py-3 rounded-xl bg-slate-100 border-none focus:ring-2 focus:ring-primary"
                type="date"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-3">Số lượng</label>
              <div className="flex items-center bg-slate-100 rounded-xl px-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 text-primary"
                >
                  <span className="material-symbols-outlined">remove</span>
                </button>
                <input
                  className="w-full bg-transparent border-none text-center focus:ring-0"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 text-primary"
                >
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
            </div>
          </div>

          {/* Desktop action buttons */}
          <div className="hidden md:block space-y-3 pt-4">
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-4 bg-primary text-slate-900 font-bold rounded-xl hover:opacity-90">
                <span className="material-symbols-outlined">shopping_bag</span> Thêm vào giỏ
              </button>
              <Link to="/checkout" className="flex items-center justify-center gap-2 py-4 bg-slate-900 text-white font-bold rounded-xl hover:opacity-90">
                Đặt hàng ngay
              </Link>
            </div>
            <button className="w-full flex items-center justify-center gap-2 py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary/5">
              <span className="material-symbols-outlined">chat</span> Chat để đặt hàng (Zalo/Messenger)
            </button>
          </div>
        </div>
      </div>

      {/* Detail Tabs (desktop) */}
      {cake.ingredients && (
        <section className="hidden md:block mt-20 border-t border-primary/20 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">restaurant</span> Thành phần
              </h3>
              <p className="text-sm text-slate-600 leading-loose">{cake.ingredients}</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">local_shipping</span> Giao hàng
              </h3>
              <p className="text-sm text-slate-600 leading-loose">{cake.deliveryInfo}</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">straighten</span> Hướng dẫn chọn size
              </h3>
              <p className="text-sm text-slate-600 leading-loose">{cake.sizeGuide}</p>
            </div>
          </div>
        </section>
      )}

      {/* Related Products */}
      <section className="mt-12 md:mt-24">
        <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Bánh tương tự</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {relatedCakes.map((relatedCake) => (
            <CakeCard key={relatedCake.id} cake={relatedCake} showDescription={false} />
          ))}
        </div>
      </section>

      {/* Reviews (desktop) */}
      <section className="hidden md:block mt-24 mb-20 bg-primary/5 rounded-3xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <h3 className="text-3xl font-bold">Khách hàng nói gì</h3>
            <p className="text-slate-500">Dựa trên {cake.reviewCount} đơn hàng đã xác thực</p>
          </div>
          <button className="px-8 py-3 bg-white border-2 border-primary rounded-xl font-bold hover:bg-primary/20">
            Viết đánh giá
          </button>
        </div>
        <div className="space-y-8">
          <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">AN</div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-bold">An Nguyễn</h5>
                <span className="text-xs text-slate-400">2 ngày trước</span>
              </div>
              <div className="flex text-yellow-400 mb-2">
                <span className="material-symbols-outlined text-sm fill-1">star</span>
                <span className="material-symbols-outlined text-sm fill-1">star</span>
                <span className="material-symbols-outlined text-sm fill-1">star</span>
                <span className="material-symbols-outlined text-sm fill-1">star</span>
                <span className="material-symbols-outlined text-sm fill-1">star</span>
              </div>
              <p className="text-sm text-slate-600">Bánh rất xốp mịn và không quá ngọt. Rất hợp cho dịp sinh nhật mẹ mình!</p>
            </div>
          </div>
          <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">BT</div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-bold">Bảo Trân</h5>
                <span className="text-xs text-slate-400">1 tuần trước</span>
              </div>
              <div className="flex text-yellow-400 mb-2">
                <span className="material-symbols-outlined text-sm fill-1">star</span>
                <span className="material-symbols-outlined text-sm fill-1">star</span>
                <span className="material-symbols-outlined text-sm fill-1">star</span>
                <span className="material-symbols-outlined text-sm fill-1">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
              </div>
              <p className="text-sm text-slate-600">Đóng gói rất đẹp và giao hàng nhanh. Vị dâu tây rất tươi và thơm.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile sticky bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-100 p-4 pb-8">
        <div className="flex gap-3 items-center max-w-lg mx-auto">
          <div className="flex items-center bg-slate-100 rounded-lg h-12 px-2 gap-3">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="size-8 flex items-center justify-center text-slate-400"
            >
              <span className="material-symbols-outlined text-[20px]">remove</span>
            </button>
            <span className="font-bold text-sm w-4 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="size-8 flex items-center justify-center text-pink-500"
            >
              <span className="material-symbols-outlined text-[20px]">add</span>
            </button>
          </div>
          <Link
            to="/checkout"
            className="flex-1 flex items-center justify-center gap-2 bg-primary text-slate-900 h-12 rounded-lg font-bold shadow-lg shadow-primary/20"
          >
            <span className="material-symbols-outlined text-[20px]">shopping_basket</span>
            <span>Đặt ngay - {formatPrice(totalPrice)}</span>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default CakeDetail
