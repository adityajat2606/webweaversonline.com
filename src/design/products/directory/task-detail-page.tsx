import Link from 'next/link'
import { Camera, Clock3, Globe, Mail, MapPin, Phone, Tag } from 'lucide-react'
import { ContentImage } from '@/components/shared/content-image'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { TaskPostCard } from '@/components/shared/task-post-card'
import { RichContent, formatRichHtml } from '@/components/shared/rich-content'
import { ClickablePhotoGrid } from '@/components/tasks/clickable-photo-grid'
import type { SitePost } from '@/lib/site-connector'
import type { TaskKey } from '@/lib/site-config'

export function DirectoryTaskDetailPage({
  task,
  taskLabel,
  taskRoute,
  post,
  description,
  category,
  images,
  mapEmbedUrl,
  related,
}: {
  task: TaskKey
  taskLabel: string
  taskRoute: string
  post: SitePost
  description: string
  category: string
  images: string[]
  mapEmbedUrl: string | null
  related: SitePost[]
}) {
  const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const location = typeof content.address === 'string' ? content.address : typeof content.location === 'string' ? content.location : ''
  const website = typeof content.website === 'string' ? content.website : ''
  const phone = typeof content.phone === 'string' ? content.phone : ''
  const email = typeof content.email === 'string' ? content.email : ''
  const highlights = Array.isArray(content.highlights) ? content.highlights.filter((item): item is string => typeof item === 'string') : []
  const logo = typeof content.logo === 'string' ? content.logo : images[0]
  const tags = Array.isArray(post.tags) ? post.tags.filter((item): item is string => typeof item === 'string') : []
  const aboutHtml = formatRichHtml(description, 'Details coming soon.')

  const schemaPayload = {
    '@context': 'https://schema.org',
    '@type': task === 'profile' ? 'Organization' : 'LocalBusiness',
    name: post.title,
    description,
    image: images[0],
    url: `${taskRoute}/${post.slug}`,
    address: location || undefined,
    telephone: phone || undefined,
    email: email || undefined,
  }

  return (
    <div className="min-h-screen bg-[#f8fbff] text-slate-950">
      <SchemaJsonLd data={schemaPayload} />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Link href={taskRoute} className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-950">
          ← Back to {taskLabel}
        </Link>

        <section className="overflow-hidden rounded-2xl border border-[#c8d3e0] bg-white shadow-[0_14px_38px_rgba(15,23,42,0.08)]">
          <div className="bg-[linear-gradient(125deg,#d7e2ef_0%,#c6d5e5_45%,#b8cadf_100%)] px-6 py-7 md:px-8 md:py-8">
            <div className="grid items-center gap-5 md:grid-cols-[220px_1fr]">
              <div className="relative h-[180px] overflow-hidden rounded-xl border border-white/70 bg-white/85 shadow-sm">
                <ContentImage src={logo} alt={post.title} fill className="object-contain p-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2f527f]">{category || taskLabel}</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#244676] md:text-5xl">{post.title}</h1>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 bg-white px-6 py-4 md:px-8">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-slate-700">
              {location ? (
                <div className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#4f78ad]" />
                  <span>{location}</span>
                </div>
              ) : null}
              <div className="inline-flex items-center gap-2">
                <Tag className="h-4 w-4 text-[#4f78ad]" />
                <span>{taskLabel}</span>
              </div>
            </div>
          </div>

        </section>

        <section className="mt-7 space-y-6">
          <article className="rounded-xl border border-slate-200 bg-white">
            <h2 className="border-b border-slate-200 px-5 py-4 text-[26px] font-semibold text-[#f08a00]">About</h2>
            <div className="px-5 py-5">
              <RichContent html={aboutHtml} className="text-sm leading-8 text-slate-700" />
            </div>
            <h3 className="border-y border-slate-200 px-5 py-4 text-[26px] font-semibold text-[#f08a00]">Category</h3>
            <div className="px-5 py-5">
              <p className="text-sm font-medium text-slate-800">{category}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {(tags.length ? tags : [taskLabel]).slice(0, 5).map((item) => (
                  <span key={item} className="rounded-full bg-[#e3ebf4] px-3 py-1 text-xs font-medium text-slate-700">{item}</span>
                ))}
              </div>
              {highlights.length ? (
                <div className="mt-4 space-y-2 border-t border-slate-200 pt-4 text-sm text-slate-700">
                  {highlights.slice(0, 4).map((item) => (
                    <p key={item}>• {item}</p>
                  ))}
                </div>
              ) : null}
            </div>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white">
            <h2 className="border-b border-slate-200 px-5 py-4 text-[26px] font-semibold text-[#f08a00]">Operating Hours</h2>
            <div className="px-5 py-5">
              <div className="inline-flex items-center gap-2 text-sm text-slate-700">
                <Clock3 className="h-4 w-4 text-[#4f78ad]" />
                <span>Now: <strong className="text-[#3b8a2c]">Open</strong> All day</span>
              </div>
              <p className="mt-3 text-xs text-[#3467d2]">+ View all days</p>
            </div>
          </article>

          {mapEmbedUrl ? (
            <article className="rounded-xl border border-slate-200 bg-white">
              <h2 className="border-b border-slate-200 px-5 py-4 text-[26px] font-semibold text-[#f08a00]">Location</h2>
              <div className="p-5">
                <div className="overflow-hidden rounded-md border border-slate-200">
                  <iframe src={mapEmbedUrl} title={`${post.title} map`} className="h-[350px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
                <a
                  href={location ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}` : '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-[#f08a00] px-4 py-3 text-sm font-semibold text-white hover:bg-[#de7d00]"
                >
                  Get direction
                </a>
              </div>
            </article>
          ) : null}

          <article className="rounded-xl border border-slate-200 bg-white">
            <h2 className="border-b border-slate-200 px-5 py-4 text-[26px] font-semibold text-[#f08a00]">Contact details</h2>
            <div className="space-y-4 px-5 py-5 text-sm text-slate-700">
              {location ? (
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-[#4f78ad]" />
                  <span>{location}</span>
                </div>
              ) : null}
              {email ? (
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-[#4f78ad]" />
                  <a href={`mailto:${email}`} className="text-slate-800 hover:underline">{email}</a>
                </div>
              ) : null}
              {phone ? (
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-[#4f78ad]" />
                  <a href={`tel:${phone}`} className="text-slate-800 hover:underline">{phone}</a>
                </div>
              ) : null}
              {website ? (
                <div className="flex items-start gap-3">
                  <Globe className="mt-0.5 h-4 w-4 text-[#4f78ad]" />
                  <a href={website} target="_blank" rel="noreferrer" className="break-all text-slate-800 hover:underline">{website}</a>
                </div>
              ) : null}
            </div>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white">
            <h2 className="border-b border-slate-200 px-5 py-4 text-[26px] font-semibold text-[#f08a00]">Photos</h2>
            {images.length ? <ClickablePhotoGrid images={images} title={post.title} /> : null}
            {!images.length ? (
              <div className="col-span-full rounded-lg border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-600">
                <Camera className="mx-auto h-8 w-8 text-slate-400" />
                <p className="mt-2 text-sm font-medium">No photos yet</p>
              </div>
            ) : null}
          </article>
        </section>

        {related.length ? (
          <section className="mt-12">
            <div className="flex items-end justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">More in this section</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">Keep browsing similar places.</h2>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                <Tag className="h-3.5 w-3.5" /> {taskLabel}
              </span>
            </div>
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {related.map((item) => (
                <TaskPostCard key={item.id} post={item} href={`${taskRoute}/${item.slug}`} taskKey={task} />
              ))}
            </div>
          </section>
        ) : null}
      </main>
    </div>
  )
}
