import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-dark-800 border-b border-dark-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-pm-blue-500 to-pm-blue-600 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-lg">PM</span>
            </div>
            <span className="font-display font-bold text-xl text-white">BlogBoard</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-pm-blue-400 font-medium transition-colors">
              Dashboard
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-pm-blue-400 font-medium transition-colors">
              All Posts
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-pm-blue-400 font-medium transition-colors">
              About
            </Link>
          </nav>
          
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-pm-blue-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
