// CPAN 144 Final Project - Daniel and Phong
// Header Component

import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-4xl font-extrabold text-blue-400 hover:text-blue-300 transition-colors">
        Country Explorer
        </Link>
        <nav className="flex space-x-2">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/api" className="nav-link">API Explorer</Link>
          <Link href="/about" className="nav-link">About</Link>
        </nav>
      </div>
    </header>
  )
}