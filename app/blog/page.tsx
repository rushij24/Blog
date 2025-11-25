import Link from 'next/link'
import { getBlogPosts } from '@/lib/posts'
import { Suspense } from 'react'
import BlogList from '@/components/BlogList'

export default function BlogPage() {
  const allPosts = getBlogPosts()

  return (
    <div className="min-h-screen bg-dark-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center text-pm-blue-400 hover:text-pm-blue-300 mb-6 font-medium"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Board
        </Link>

        <Suspense fallback={<div>Loading posts...</div>}>
          <BlogList allPosts={allPosts} />
        </Suspense>
      </div>
    </div>
  )
}
