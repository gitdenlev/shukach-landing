import { marked } from 'marked'

export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  category: string
  readTime: number
  excerpt: string
  image: string
  imageAlt: string
  tags: string[]
  content: string
  formattedDate: string
}

// Configure marked for nice output
marked.setOptions({
  gfm: true,
  breaks: true,
})

function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }

  const yamlStr = match[1]
  const content = match[2]
  const data: Record<string, unknown> = {}

  for (const line of yamlStr.split('\n')) {
    const colonIdx = line.indexOf(':')
    if (colonIdx === -1) continue
    const key = line.slice(0, colonIdx).trim()
    let value: string | string[] | number = line.slice(colonIdx + 1).trim()

    // Remove quotes
    value = value.replace(/^["']|["']$/g, '')

    // Parse arrays like: ["tag1", "tag2"]
    if (value.startsWith('[') && value.endsWith(']')) {
      const arr = value
        .slice(1, -1)
        .split(',')
        .map(s => s.trim().replace(/^["']|["']$/g, ''))
      data[key] = arr
    } else if (!isNaN(Number(value)) && value !== '') {
      data[key] = Number(value)
    } else {
      data[key] = value
    }
  }

  return { data, content }
}

function formatDate(dateStr: string): string {
  const months = [
    'січня', 'лютого', 'березня', 'квітня', 'травня', 'червня',
    'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'
  ]
  const date = new Date(dateStr)
  const day = date.getDate()
  const month = months[date.getMonth()]
  const year = date.getFullYear()
  return `${day} ${month} ${year}`
}

// Vite's import.meta.glob to load all md files
const modules = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default', eager: true })

export function getAllPosts(): BlogPost[] {
  const posts: BlogPost[] = []

  for (const path in modules) {
    const raw = modules[path] as string
    const { data, content } = parseFrontmatter(raw)

    // Extract slug from filename if not in frontmatter
    const slug = (data.slug as string) || path.split('/').pop()?.replace('.md', '') || ''

    posts.push({
      slug,
      title: (data.title as string) || '',
      date: (data.date as string) || '',
      author: (data.author as string) || '',
      category: (data.category as string) || '',
      readTime: (data.readTime as number) || 5,
      excerpt: (data.excerpt as string) || '',
      image: (data.image as string) || '',
      imageAlt: (data.imageAlt as string) || '',
      tags: (data.tags as string[]) || [],
      content: marked(content) as string,
      formattedDate: formatDate((data.date as string) || ''),
    })
  }

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find(p => p.slug === slug)
}
