import { Search as SearchIcon, Sparkles, Filter } from 'lucide-react'
import { PageShell } from '@/components/shared/page-shell'
import { fetchSiteFeed } from '@/lib/site-connector'
import { buildPostUrl, getPostTaskKey } from '@/lib/task-data'
import { getMockPostsForTask } from '@/lib/mock-posts'
import { SITE_CONFIG } from '@/lib/site-config'
import { TaskPostCard } from '@/components/shared/task-post-card'

export const revalidate = 3

const matchText = (value: string, query: string) => value.toLowerCase().includes(query)
const stripHtml = (value: string) => value.replace(/<[^>]*>/g, ' ')
const compactText = (value: unknown) => {
  if (typeof value !== 'string') return ''
  return stripHtml(value).replace(/\s+/g, ' ').trim().toLowerCase()
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string; category?: string; task?: string; master?: string }>
}) {
  const resolved = (await searchParams) || {}
  const query = (resolved.q || '').trim()
  const normalized = query.toLowerCase()
  const category = (resolved.category || '').trim().toLowerCase()
  const task = (resolved.task || '').trim().toLowerCase()
  const useMaster = resolved.master !== '0'
  const feed = await fetchSiteFeed(
    useMaster ? 1000 : 300,
    useMaster ? { fresh: true, category: category || undefined, task: task || undefined } : undefined
  )
  const posts = feed?.posts?.length
    ? feed.posts
    : useMaster
      ? []
      : SITE_CONFIG.tasks.flatMap((t) => getMockPostsForTask(t.key))

  const filtered = posts.filter((post) => {
    const content = post.content && typeof post.content === 'object' ? post.content : {}
    const typeText = compactText((content as any).type)
    if (typeText === 'comment') return false
    const description = compactText((content as any).description)
    const body = compactText((content as any).body)
    const excerpt = compactText((content as any).excerpt)
    const categoryText = compactText((content as any).category)
    const tags = Array.isArray(post.tags) ? post.tags.join(' ') : ''
    const tagsText = compactText(tags)
    const derivedCategory = categoryText || tagsText
    if (category && !derivedCategory.includes(category)) return false
    if (task && typeText && typeText !== task) return false
    if (!normalized.length) return true
    return (
      matchText(compactText(post.title || ''), normalized) ||
      matchText(compactText(post.summary || ''), normalized) ||
      matchText(description, normalized) ||
      matchText(body, normalized) ||
      matchText(excerpt, normalized) ||
      matchText(tagsText, normalized)
    )
  })

  const results = normalized.length > 0 ? filtered : filtered.slice(0, 24)

  const suggestions = ['Spa & Wellness', 'Fine Dining', 'Premium Events', 'Boutique Hotels', 'Photographers']

  return (
    <PageShell
      eyebrow="Search"
      title={query ? `Results for "${query}"` : 'What are you looking for?'}
      description={
        query
          ? `We found ${results.length} ${results.length === 1 ? 'match' : 'matches'} across our curated collection.`
          : 'Search across every listing, category, and location in our directory. Clean, fast, and verified.'
      }
    >
      <form action="/search" className="rounded-3xl border border-[#e6d5c2] bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3 rounded-full border border-[#e6d5c2] bg-[#fbf3e8] px-6 py-3">
          <SearchIcon className="h-5 w-5 text-[#8b6240]" />
          <input
            type="hidden"
            name="master"
            value="1"
          />
          <input
            name="q"
            defaultValue={query}
            placeholder="Try 'spa near London' or 'wedding photographers'..."
            className="flex-1 border-0 bg-transparent text-sm text-[#3d2a1c] placeholder:text-[#a08161] focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-gradient-to-r from-[#b88a5e] to-[#8b6240] px-5 py-2 text-sm font-medium text-white hover:scale-105"
          >
            Search
          </button>
        </div>

        {!query && (
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1 text-xs font-medium uppercase tracking-[0.2em] text-[#8b6240]">
              <Sparkles className="h-3.5 w-3.5" />
              Try
            </span>
            {suggestions.map((s) => (
              <a
                key={s}
                href={`/search?q=${encodeURIComponent(s)}`}
                className="rounded-full border border-[#e6d5c2] bg-white px-3 py-1.5 text-xs text-[#6e5547] transition-colors hover:border-[#c89c70] hover:text-[#8b6240]"
              >
                {s}
              </a>
            ))}
          </div>
        )}

        {(category || task) && (
          <div className="mt-4 flex items-center gap-2 text-xs">
            <Filter className="h-3.5 w-3.5 text-[#8b6240]" />
            <span className="text-[#6e5547]">Filtering by:</span>
            {category && (
              <span className="rounded-full bg-[#fbf3e8] px-3 py-1 font-medium text-[#8b6240]">{category}</span>
            )}
            {task && (
              <span className="rounded-full bg-[#fbf3e8] px-3 py-1 font-medium text-[#8b6240]">{task}</span>
            )}
          </div>
        )}
      </form>

      <div className="mt-10">
        {results.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((post) => {
              const tKey = getPostTaskKey(post)
              const href = tKey ? buildPostUrl(tKey, post.slug) : `/posts/${post.slug}`
              return <TaskPostCard key={post.id} post={post} href={href} />
            })}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-[#e6d5c2] bg-white/60 p-14 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#fbf3e8] to-[#e6c9a8] text-[#8b6240]">
              <SearchIcon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-serif text-2xl font-semibold text-[#3d2a1c]">
              {query ? 'Nothing matched' : 'Start your search'}
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm text-[#6e5547]">
              {query
                ? `We could not find any listings for "${query}". Try a different keyword, or browse our full collection.`
                : 'Type a keyword above to find the perfect match from our curated directory.'}
            </p>
          </div>
        )}
      </div>
    </PageShell>
  )
}
