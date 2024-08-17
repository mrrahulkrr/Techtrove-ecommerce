'use client'

import CartItem from '@/components/CartItem'
import { useCart } from '@/lib/cart-context'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Cart() {
  const { cart } = useCart()
  const [discount, setDiscount] = useState(0)
  const router = useRouter()

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const total = subtotal - discount

  const applyDiscount = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const code = (e.currentTarget.elements.namedItem('discountCode') as HTMLInputElement).value
    if (code === 'SAVE10') {
      setDiscount(subtotal * 0.1)
    } else {
      alert('Invalid discount code')
    }
  }

  const handleCheckout = () => {
    router.push('/checkout')
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold mb-8 text-indigo-800">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="mt-8 bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-indigo-800">Cart Summary</h2>
            <p className="flex justify-between"><span>Subtotal:</span> <span>${subtotal.toFixed(2)}</span></p>
            <p className="flex justify-between"><span>Discount:</span> <span>${discount.toFixed(2)}</span></p>
            <p className="flex justify-between font-bold text-lg mt-2"><span>Total:</span> <span>${total.toFixed(2)}</span></p>
            <form onSubmit={applyDiscount} className="mt-4">
            <p className='text-gray-600 text-sm'>Dummy DiscountCode : SAVE10</p>
              <input
                type="text"
                name="discountCode"
                placeholder="Enter discount code"
                className="w-full border p-2 rounded mb-2"
              />
              
              <button type="submit" className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
                Apply Discount
              </button>
            </form>

            <button
              onClick={handleCheckout}
              className="w-full mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  )
}