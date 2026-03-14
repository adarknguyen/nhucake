import { Link } from 'react-router-dom'
import { formatPrice } from '../data/cakes'
import { Cake } from '../types'

// CakeCard Component - Individual cake product card
interface CakeCardProps {
  cake: Cake
  showDescription?: boolean
}

function CakeCard({ cake, showDescription = true }: CakeCardProps) {
  return (
    <Link
      to={`/cake/${cake.slug}`}
      className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-primary/10 block"
    >
      <div className="aspect-square md:h-64 md:aspect-auto relative overflow-hidden group">
        {/* Product Image */}
        <img
          alt={cake.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          src={cake.image}
        />

        {/* Badges */}
        <div className="absolute top-2 right-2 md:top-3 md:right-3 flex flex-col gap-1">
          {cake.isHot && (
            <div className="bg-primary text-slate-900 text-[10px] font-black uppercase px-2 py-1 rounded-lg">
              HOT
            </div>
          )}
          {cake.isNew && (
            <div className="bg-accent-pink text-white text-[10px] font-black uppercase px-2 py-1 rounded-lg">
              Mới
            </div>
          )}
          {cake.isLimited && (
            <div className="bg-pink-400 text-white text-[10px] font-black uppercase px-2 py-1 rounded-lg">
              Giới hạn
            </div>
          )}
          {cake.isBestseller && (
            <div className="bg-primary text-slate-900 text-[10px] font-black uppercase px-2 py-1 rounded-lg">
              Bán chạy
            </div>
          )}
        </div>
      </div>

      <div className="p-3 md:p-6">
        <h3 className="font-bold text-sm md:text-lg mb-0 md:mb-1 truncate">{cake.name}</h3>
        {showDescription && (
          <p className="hidden md:block text-sm text-slate-500 mb-4">{cake.description}</p>
        )}
        <div className="flex items-center justify-between mt-1 md:mt-0">
          <div>
            <span className="text-sm md:text-xl font-bold text-accent-pink">
              {formatPrice(cake.price)}
            </span>
            {cake.originalPrice && cake.originalPrice > cake.price && (
              <span className="text-xs text-slate-400 line-through ml-2">
                {formatPrice(cake.originalPrice)}
              </span>
            )}
          </div>
          <button className="p-1.5 md:p-2 bg-primary rounded-lg text-accent-pink hover:bg-primary-dark transition-colors">
            <span className="material-symbols-outlined text-lg md:text-2xl">add_shopping_cart</span>
          </button>
        </div>
      </div>
    </Link>
  )
}

export default CakeCard
