import "./globals.css"
import type { Metadata } from "next"
import React from "react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Naqash's Blog",
  description: "A simple personal blog built with Next.js"
}

export default function RootLayout({ children }: { 
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white">
        <header className="border-b py-4 mb-6 shadow-sm">
          <div className="max-w-2xl mx-auto px-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-700">
              Naqash Blog
            </Link>
            <nav>
              <Link href="/" className="hover:underline ml-4">
                Home
              </Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>
      </body>
    </html>
  )
}