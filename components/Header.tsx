'use client'

import Link from 'next/link'
import { useCart } from '@/lib/cart-context'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const { cart } = useCart()

  return (
    <header className="bg-indigo-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link   href="/" className="text-2xl font-bold tracking-tight hover:text-indigo-300 transition-colors">
          TechTrove
        </Link>
        <Link href="/cart" className="flex items-center bg-indigo-700 px-4 py-2 rounded-full hover:bg-indigo-600 transition-colors">
          <ShoppingCartIcon className="h-6 w-6 mr-2" />
          <span className="font-semibold">{cart.length}</span>
        </Link>
      </div>
    </header>
  )
}