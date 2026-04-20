import Link from 'next/link'
import { ArrowRight, Sparkles, Filter, Grid3x3 } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { TaskListClient } from '@/components/tasks/task-list-client'
import { fetchTaskPosts } from '@/lib/task-data'
import { getTaskConfig, type TaskKey } from '@/lib/site-config'
import { CATEGORY_OPTIONS, normalizeCategory } from '@/lib/categories'

export const TASK_LIST_PAGE_OVERRIDE_ENABLED = true

const heroCopy: Record<string, { title: string; description: string }> = {
  listing: {
    title: 'Explore Premium Listings',
    description: 'A hand-picked collection of verified businesses and services, curated for quality and held to a standard we would set for ourselves.',
  },
  classified: {
    title: 'Timely Offers & Notices',
    description: 'The latest announcements, opportunities, and updates — all reviewed and posted with care.',
  },
  article: {
    title: 'Stories Worth Reading',
    description: 'Long-form essays, considered writing, and ideas that reward a slower pace of attention.',
  },
  image: {
    title: 'Visual Inspirations',
    description: 'A curated gallery where imagery leads and stories follow.',
  },
  profile: {
    title: 'Profiles & People',
    description: 'The creators, curators, and businesses behind the platform.',
  },
  org: {
    title: 'Organizations & Teams',
    description: 'Studios, agencies, and collectives who list their work with us.',
  },
  sbm: {
    title: 'Curated Collections',
    description: 'Saved resources, thoughtful references, and shelves of the useful.',
  },
  pdf: {
    title: 'Resource Library',
    description: 'Guides, reports, and downloads worth keeping.',
  },
}

export async function TaskListPageOverride({ task, category }: { task: TaskKey; category?: string }) {
  const taskConfig = getTaskConfig(task)
  const posts = await fetchTaskPosts(task, 30)
  const normalizedCategory = category ? normalizeCategory(category) : 'all'
  const copy = heroCopy[task] || {
    title: taskConfig?.label || 'Browse',
    description: taskConfig?.description || 'Explore the collection.',
  }

  return (
    <div className="min-h-screen bg-[#c89977]">
      <div className="mx-auto max-w-7xl bg-[#fdf8f1] shadow-2xl">
        <NavbarShell />
        <main>
          <section className="relative overflow-hidden border-b border-[#e6d5c2]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#fbf3e8] via-[#fdf8f1] to-[#f5e7d0]" />
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#e6c9a8]/50 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#c89c70]/30 blur-3xl" />
            <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#e6d5c2] bg-white/80 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.24em] text-[#8b6240] backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                {taskConfig?.label || 'Browse'}
              </div>
              <div className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
                <div>
                  <h1 className="font-serif text-5xl font-semibold leading-tight text-[#3d2a1c] sm:text-6xl">
                    {copy.title}
                  </h1>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-[#6e5547]">{copy.description}</p>
                </div>
                <div className="rounded-2xl border border-[#e6d5c2] bg-white/70 p-5 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-[#8b6240]">
                      <Grid3x3 className="h-3.5 w-3.5" />
                      Collection
                    </div>
                    <span className="font-serif text-2xl font-semibold text-[#3d2a1c]">{posts.length}</span>
                  </div>
                  <p className="mt-3 text-xs text-[#6e5547]">
                    {posts.length === 0
                      ? 'Listings coming soon.'
                      : `${posts.length} curated ${posts.length === 1 ? 'item' : 'items'} ready to explore.`}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {CATEGORY_OPTIONS.length > 0 && (
            <section className="border-b border-[#e6d5c2] bg-white/50">
              <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
                <div className="flex items-center gap-3 overflow-x-auto">
                  <div className="flex shrink-0 items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#8b6240]">
                    <Filter className="h-3.5 w-3.5" />
                    Filter
                  </div>
                  <Link
                    href={taskConfig?.route || '/'}
                    className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                      normalizedCategory === 'all'
                        ? 'bg-[#8b6240] text-white'
                        : 'border border-[#e6d5c2] bg-white text-[#6e5547] hover:border-[#c89c70] hover:text-[#8b6240]'
                    }`}
                  >
                    All
                  </Link>
                  {CATEGORY_OPTIONS.slice(0, 12).map((c) => {
                    const isActive = normalizedCategory === c.slug
                    return (
                      <Link
                        key={c.slug}
                        href={`${taskConfig?.route || '/'}?category=${encodeURIComponent(c.slug)}`}
                        className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                          isActive
                            ? 'bg-[#8b6240] text-white'
                            : 'border border-[#e6d5c2] bg-white text-[#6e5547] hover:border-[#c89c70] hover:text-[#8b6240]'
                        }`}
                      >
                        {c.name}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </section>
          )}

          <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            {posts.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-[#e6d5c2] bg-white/60 p-14 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#fbf3e8] to-[#e6c9a8] text-[#8b6240]">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-[#3d2a1c]">Coming soon</h3>
                <p className="mx-auto mt-3 max-w-md text-sm text-[#6e5547]">
                  We are curating the first batch of listings for this collection. Check back shortly — or reach out if you would like to submit one.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#b88a5e] to-[#8b6240] px-5 py-2.5 text-sm font-medium text-white shadow-md hover:scale-105"
                >
                  Submit a listing
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ) : (
              <TaskListClient task={task} initialPosts={posts} category={category} />
            )}
          </section>

          <section className="px-4 pb-16 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-[#e6c9a8] to-[#fbf3e8] p-10 text-center">
              <h2 className="font-serif text-3xl font-semibold text-[#3d2a1c] sm:text-4xl">
                Have something to list?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-[#6e5547]">
                We personally review every submission. Tell us about your business and we will guide you through the process.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#b88a5e] to-[#8b6240] px-6 py-3 text-sm font-medium text-white shadow-lg hover:scale-105"
              >
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  )
}
