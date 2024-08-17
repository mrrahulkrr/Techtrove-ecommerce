'use client'

import { useCart } from '@/lib/cart-context'
import { CartItem as CartItemType } from '@/lib/types'
import { TrashIcon } from '@heroicons/react/24/outline'

export default function CartItem({ item }: { item: CartItemType }) {
  const { updateQuantity, removeFromCart } = useCart()

  return (
    <div className="flex items-center border-b py-4">
      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-4 rounded" />
      <div className="flex-grow">
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="text-indigo-600 font-bold">${item.price.toFixed(2)}</p>
        <div className="flex items-center mt-2">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="bg-gray-200 px-3 py-1 rounded-l hover:bg-gray-300 transition-colors"
          >
            -
          </button>
          <span className="px-4 py-1 bg-gray-100">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="bg-gray-200 px-3 py-1 rounded-r hover:bg-gray-300 transition-colors"
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-600 hover:text-red-800 transition-colors"
      >
        <TrashIcon className="h-6 w-6" />
      </button>
    </div>
  )
}