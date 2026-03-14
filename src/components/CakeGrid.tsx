import CakeCard from './CakeCard'
import { Cake } from '../types'

// CakeGrid Component - Grid layout for displaying multiple cake cards
interface CakeGridProps {
  cakes: Cake[]
  columns?: 2 | 3 | 4
}

function CakeGrid({ cakes, columns = 4 }: CakeGridProps) {
  const gridCols: Record<number, string> = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <div className={`grid ${gridCols[columns] || gridCols[4]} gap-4 md:gap-8`}>
      {cakes.map((cake) => (
        <CakeCard key={cake.id} cake={cake} />
      ))}
    </div>
  )
}

export default CakeGrid
