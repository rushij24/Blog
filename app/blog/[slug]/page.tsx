import { notFound } from 'next/navigation'
import { getPostBySlug, getBlogPosts } from '@/lib/posts'
import { getPostContentWithHtml } from '@/lib/posts'
import { format } from 'date-fns'
import Link from 'next/link'

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const content = await getPostContentWithHtml(params.slug)
  console.log('DEBUG CONTENT:', content.substring(0, 100))
  const postDate = post.date ? new Date(post.date) : new Date()

  return (
    <article className="min-h-screen bg-dark-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-pm-blue-400 hover:text-pm-blue-300 mb-8 font-medium"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Board
        </Link>

        {/* Post Header */}
        <header className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <span className={`pm-badge ${post.category === 'Methodology' ? 'bg-pm-blue-500/20 text-pm-blue-400 border border-pm-blue-500/30' :
              post.category === 'Tools' ? 'bg-pm-green-500/20 text-pm-green-400 border border-pm-green-500/30' :
                post.category === 'Agile' ? 'bg-pm-purple-500/20 text-pm-purple-400 border border-pm-purple-500/30' :
                  'bg-pm-orange-500/20 text-pm-orange-400 border border-pm-orange-500/30'
              }`}>
              {post.category}
            </span>
            {post.readingTime && (
              <span className="text-sm text-gray-400">
                {post.readingTime} min read
              </span>
            )}
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            {post.title}
          </h1>

          <div className="flex items-center text-gray-400">
            <time dateTime={post.date} className="text-sm">
              {format(postDate, 'MMMM dd, yyyy')}
            </time>
          </div>
        </header>

        {/* Post Content */}
        <div
          className="pm-card-light p-8 md:p-12 prose prose-lg prose-invert max-w-none
            prose-headings:font-display prose-headings:font-bold prose-headings:text-white
            prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
            prose-a:text-pm-blue-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white prose-strong:font-semibold
            prose-p:text-gray-300
            prose-code:bg-dark-800 prose-code:text-pm-blue-400 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
            prose-pre:bg-dark-900 prose-pre:text-gray-300 prose-pre:border prose-pre:border-dark-600
            prose-blockquote:border-l-4 prose-blockquote:border-pm-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-300
            prose-ul:list-disc prose-ol:list-decimal prose-li:text-gray-300
            prose-img:rounded-lg prose-img:border prose-img:border-dark-600
            prose-table:border-collapse prose-th:bg-dark-800 prose-th:text-gray-200 prose-th:p-3 prose-td:p-3 prose-th:border prose-td:border prose-th:border-dark-600 prose-td:border-dark-600 prose-td:text-gray-300"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </article>
  )
}
