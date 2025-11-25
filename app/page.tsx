import { getBlogPosts } from '@/lib/posts'
import KanbanBoard from '@/components/KanbanBoard'

export default async function Home() {
  const posts = getBlogPosts()

  return (
    <div className="min-h-screen bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <KanbanBoard posts={posts} />
      </div>
    </div>
  )
}
