import CakeCard from './CakeCard'

// CakeGrid Component - Grid layout for displaying multiple cake cards
function CakeGrid({ cakes, columns = 4 }) {
  const gridCols = {
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
