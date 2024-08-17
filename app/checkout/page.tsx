'use client'

import { useCart } from '@/lib/cart-context'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import PaymentForm from '@/components/PaymentForm'

export default function Checkout() {
  const { cart, clearCart } = useCart()
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)
  const [showPaymentForm, setShowPaymentForm] = useState(false)

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowPaymentForm(true)
  }

  const handlePaymentComplete = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      clearCart()
      alert('Order placed successfully!')
      router.push('/')
    }, 1000)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold mb-8 text-indigo-800">Checkout</h1>
      {!showPaymentForm ? (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-semibold">Full Name</label>
            <input type="text" id="name" required className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
            <input type="email" id="email" required className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block mb-2 font-semibold">Address</label>
            <textarea id="address" required className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
          </div>
          <div className="mb-6">
            <p className="font-bold text-xl text-indigo-800">Total: ${total.toFixed(2)}</p>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-white rounded text-lg font-semibold bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            Proceed to Payment
          </button>
        </form>
      ) : (
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Payment Details</h2>
          <p className="mb-4 text-gray-600">Please enter your payment information to complete your order.</p>
          <PaymentForm onPaymentComplete={handlePaymentComplete} />
        </div>
      )}
    </div>
  )
}