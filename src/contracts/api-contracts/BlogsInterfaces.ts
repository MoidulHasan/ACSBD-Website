export interface Blog {
  category: string
  created_at: string
  description: string
  image: string
  slug: string
  sub_title: string
  tags: string[]
  title: string
  comments: string | number
  views: string | number
  next_blog?: { slug: string, title: string } | null
}
