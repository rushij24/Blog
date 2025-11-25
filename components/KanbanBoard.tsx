'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { BlogPost } from '@/lib/posts'

interface KanbanBoardProps {
  posts: BlogPost[]
}

type CategoryKey = 'published' | 'pmp_preparation' | 'resources' | 'tools'

const COLUMN_CONFIG: Record<CategoryKey, { title: string; icon: string; color: string }> = {
  published: { title: 'Published', icon: '🌐', color: 'text-green-400' },
  pmp_preparation: { title: 'PMP Preparation', icon: '💡', color: 'text-yellow-400' },
  resources: { title: 'Resources', icon: '📝', color: 'text-blue-400' },
  tools: { title: 'Tools', icon: '🛠️', color: 'text-gray-400' },
}

export default function KanbanBoard({ posts }: KanbanBoardProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return posts
    const query = searchQuery.toLowerCase()
    return posts.filter(post =>
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query) ||
      post.tags?.some(tag => tag.toLowerCase().includes(query))
    )
  }, [posts, searchQuery])

  const postsByCategory = useMemo(() => {
    const grouped: Record<CategoryKey, BlogPost[]> = {
      published: [],
      pmp_preparation: [],
      resources: [],
      tools: [],
    }

    filteredPosts.forEach(post => {
      const category = post.category.toLowerCase()

      if (category.includes('tool')) {
        grouped.tools.push(post)
      } else if (category.includes('resource')) {
        grouped.resources.push(post)
      } else if (category.includes('pmp') || category.includes('preparation')) {
        grouped.pmp_preparation.push(post)
      } else {
        // Default to Published for Agile, Methodology, General, etc.
        grouped.published.push(post)
      }
    })

    return grouped
  }, [filteredPosts])

  const getCategoryColor = (category: string) => {
    const cat = category.toLowerCase()
    if (cat.includes('tool')) return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    if (cat.includes('resource')) return 'bg-pm-blue-500/20 text-pm-blue-400 border-pm-blue-500/30'
    if (cat.includes('pmp')) return 'bg-pm-orange-500/20 text-pm-orange-400 border-pm-orange-500/30'
    return 'bg-pm-green-500/20 text-pm-green-400 border-pm-green-500/30'
  }

  return (
    <div className="min-h-screen bg-dark-900 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-2">
          My Blog Board
        </h1>
        <p className="text-gray-400 text-lg">
          Organize your blog posts visually. Click any card to read.
        </p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pm-input w-full"
        />
      </div>

      {/* Kanban Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {(Object.keys(COLUMN_CONFIG) as CategoryKey[]).map((key) => {
          const config = COLUMN_CONFIG[key]
          const columnPosts = postsByCategory[key] || []
          const displayPosts = columnPosts.slice(0, 3)
          const hasMore = columnPosts.length > 3

          return (
            <div key={key} className="kanban-column">
              {/* Column Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-dark-700">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{config.icon}</span>
                  <h2 className="font-semibold text-gray-200">{config.title}</h2>
                </div>
                <span className="px-2 py-1 bg-dark-700 rounded-full text-sm text-gray-400">
                  {columnPosts.length}
                </span>
              </div>

              {/* Column Content */}
              <div className="space-y-3">
                {columnPosts.length === 0 ? (
                  <div className="text-center py-8 text-gray-500 text-sm">
                    No posts yet
                  </div>
                ) : (
                  <>
                    {displayPosts.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="block kanban-card group"
                      >
                        <h3 className="font-semibold text-white mb-2 group-hover:text-pm-blue-400 transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        {post.excerpt && (
                          <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                            {post.excerpt}
                          </p>
                        )}

                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className={`px-2 py-0.5 rounded border text-xs ${getCategoryColor(post.category)}`}>
                            {post.category}
                          </span>
                          {post.tags?.slice(0, 2).map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 rounded bg-dark-600 text-gray-400 text-xs border border-dark-600"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {post.readingTime && (
                          <div className="text-xs text-gray-500">
                            {post.readingTime} min read
                          </div>
                        )}
                      </Link>
                    ))}

                    {hasMore && (
                      <Link
                        href={`/blog?category=${encodeURIComponent(config.title)}`}
                        className="block text-center py-3 text-pm-blue-400 hover:text-pm-blue-300 text-sm font-medium transition-colors"
                      >
                        Show More ({columnPosts.length - 3} more)
                      </Link>
                    )}
                  </>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
