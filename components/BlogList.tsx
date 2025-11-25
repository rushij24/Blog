'use client'

import Link from 'next/link'
import { BlogPost } from '@/lib/posts'
import { format } from 'date-fns'
import { useSearchParams } from 'next/navigation'

export default function BlogList({ allPosts }: { allPosts: BlogPost[] }) {
    const searchParams = useSearchParams()
    const category = searchParams.get('category')

    const posts = category
        ? allPosts.filter(post => post.category === category)
        : allPosts

    return (
        <>
            <div className="text-center mb-12">
                <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
                    {category ? `${category} Posts` : 'All Blog Posts'}
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    {category
                        ? `Browse all posts in the ${category} category`
                        : 'Browse all blog posts in a traditional list view'
                    }
                </p>
            </div>

            {posts.length === 0 ? (
                <div className="text-center py-12">
                    <div className="pm-card-light p-8 max-w-md mx-auto">
                        <svg className="w-16 h-16 text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <h3 className="text-lg font-semibold text-white mb-2">No posts yet</h3>
                        <p className="text-gray-400">
                            {category
                                ? `No posts found in the ${category} category.`
                                : 'Start writing your first blog post in the content/blog directory!'
                            }
                        </p>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => {
                        const postDate = post.date ? new Date(post.date) : new Date()
                        return (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="pm-card-light p-6 group hover:border-pm-blue-500 transition-all duration-200"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <span className={`pm-badge ${post.category === 'Methodology' ? 'bg-pm-blue-500/20 text-pm-blue-400 border border-pm-blue-500/30' :
                                            post.category === 'Tools' ? 'bg-pm-green-500/20 text-pm-green-400 border border-pm-green-500/30' :
                                                post.category === 'Agile' ? 'bg-pm-purple-500/20 text-pm-purple-400 border border-pm-purple-500/30' :
                                                    'bg-pm-orange-500/20 text-pm-orange-400 border border-pm-orange-500/30'
                                        }`}>
                                        {post.category}
                                    </span>
                                    {post.readingTime && (
                                        <span className="text-xs text-gray-500">
                                            {post.readingTime} min read
                                        </span>
                                    )}
                                </div>

                                <h2 className="font-semibold text-xl mb-2 group-hover:text-pm-blue-400 transition-colors line-clamp-2 text-white">
                                    {post.title}
                                </h2>

                                {post.excerpt && (
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                )}

                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <span>{format(postDate, 'MMM dd, yyyy')}</span>
                                    <span className="text-pm-blue-400 group-hover:text-pm-blue-300 font-medium">
                                        Read more →
                                    </span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            )}
        </>
    )
}
