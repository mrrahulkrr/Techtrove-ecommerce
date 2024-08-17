import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TechTrove',
  description: 'Your treasure trove of cutting-edge gadgets',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
            <footer className="bg-indigo-800 text-white p-4 text-center">
              <p>&copy; 2024 TechTrove. All rights reserved.</p>
              <p className="text-sm mt-2">Your treasure trove of cutting-edge technology.</p>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  )
}