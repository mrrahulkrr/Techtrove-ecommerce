import ProductCard from '@/components/ProductCard'
import products from '@/public/products.json'

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-800">Welcome to TechTrove</h1>
      <p className="text-center text-gray-600 mb-8">Discover your next favorite gadget in our tech treasure trove</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}