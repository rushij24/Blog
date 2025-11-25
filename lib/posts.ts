import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { parse } from 'marked'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export type PostStatus = 'ideas' | 'drafts' | 'published' | 'archive'

export interface BlogPost {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  content: string
  readingTime?: number
  status?: PostStatus
  tags?: string[]
}

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || '',
        category: data.category || 'General',
        excerpt: data.excerpt || '',
        content: '',
        readingTime: Math.ceil(content.split(/\s+/).length / 200), // Assuming 200 words per minute
        status: (data.status || 'published') as PostStatus,
        tags: data.tags || [],
      }
    })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title || 'Untitled',
    date: data.date || '',
    category: data.category || 'General',
    excerpt: data.excerpt || '',
    content,
    readingTime: Math.ceil(content.split(/\s+/).length / 200),
    status: (data.status || 'published') as PostStatus,
    tags: data.tags || [],
  }
}

export async function getPostContentWithHtml(slug: string): Promise<string> {
  const post = getPostBySlug(slug)

  if (!post) {
    return ''
  }

  const processedContent = await parse(post.content)

  return `<!-- MARKED DEBUG --> ${processedContent}`
}
