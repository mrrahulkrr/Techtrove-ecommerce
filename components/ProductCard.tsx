'use client'

import { useCart } from '@/lib/cart-context'
import { Product } from '@/lib/types'
import { useState } from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addToCart(product)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 1000)
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h2>
        <p className="text-indigo-600 font-bold mb-4">${product.price.toFixed(2)}</p>
        <button
          onClick={handleAddToCart}
          className={`w-full flex items-center justify-center px-4 py-2 rounded transition-colors ${
            isAdded ? 'bg-green-500' : 'bg-indigo-600 hover:bg-indigo-700'
          } text-white`}
        >
          <ShoppingCartIcon className="h-5 w-5 mr-2" />
          {isAdded ? 'Added!' : 'Add to Cart'}
        </button>
      </div>
      {isAdded && (
        <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full animate-bounce">
          ✓
        </div>
      )}
    </div>
  )
}