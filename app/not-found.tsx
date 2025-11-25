import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-display font-bold text-6xl md:text-7xl text-white mb-4">404</h1>
        <h2 className="font-semibold text-2xl md:text-3xl text-gray-300 mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block pm-button-primary"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}
