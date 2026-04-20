import Link from 'next/link'
import { ArrowRight, Clock, BookOpen, Sparkles } from 'lucide-react'
import { PageShell } from '@/components/shared/page-shell'
import { ContentImage } from '@/components/shared/content-image'

export const revalidate = 3600

const posts = [
  {
    slug: 'the-art-of-curation',
    title: 'The Quiet Art of Curation',
    excerpt: 'Why every listing on our platform is hand-picked — and why that still matters in 2026.',
    author: 'Elena Marchetti',
    date: 'March 10, 2026',
    readTime: '6 min',
    category: 'Philosophy',
    img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
  {
    slug: 'verification-is-a-commitment',
    title: 'Verification Is a Commitment, Not a Checkmark',
    excerpt: 'How we review every listing — and what happens when we find something that does not fit.',
    author: 'James Holloway',
    date: 'March 3, 2026',
    readTime: '5 min',
    category: 'Trust',
    img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'designing-for-slowness',
    title: 'Designing for Slowness',
    excerpt: 'The case for interfaces that encourage consideration over speed.',
    author: 'Priya Raman',
    date: 'February 24, 2026',
    readTime: '8 min',
    category: 'Design',
    img: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'what-small-teams-know',
    title: 'What Small Teams Know',
    excerpt: 'Lessons from building a product with ten people that feels like a hundred.',
    author: 'Marcus Chen',
    date: 'February 18, 2026',
    readTime: '4 min',
    category: 'Team',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'the-directory-reimagined',
    title: 'The Directory, Reimagined',
    excerpt: 'Why we believe the classic business directory deserves a second act.',
    author: 'Elena Marchetti',
    date: 'February 10, 2026',
    readTime: '7 min',
    category: 'Product',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  },
]

const categories = ['All', 'Philosophy', 'Product', 'Design', 'Trust', 'Team']

export default function BlogPage() {
  const featured = posts.find((p) => p.featured)
  const rest = posts.filter((p) => !p.featured)

  return (
    <PageShell
      eyebrow="Journal"
      title="Stories From Our Desk"
      description="Essays, field notes, and occasional rants from the team building a slower, more curated kind of directory."
      actions={
        <Link
          href="#subscribe"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#b88a5e] to-[#8b6240] px-6 py-3 text-sm font-medium text-white shadow-lg hover:scale-105"
        >
          Subscribe
          <ArrowRight className="h-4 w-4" />
        </Link>
      }
    >
      <div className="flex flex-wrap gap-2">
        {categories.map((c, i) => (
          <button
            key={c}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              i === 0
                ? 'bg-[#8b6240] text-white'
                : 'border border-[#e6d5c2] bg-white text-[#6e5547] hover:border-[#c89c70] hover:text-[#8b6240]'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {featured && (
        <Link
          href={`/blog/${featured.slug}`}
          className="group mt-10 grid gap-8 overflow-hidden rounded-3xl border border-[#e6d5c2] bg-white transition-all hover:shadow-xl lg:grid-cols-2"
        >
          <div className="relative h-64 overflow-hidden lg:h-auto">
            <ContentImage src={featured.img} alt={featured.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-10">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#8b6240]" />
              <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b6240]">Featured essay</span>
            </div>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-[#3d2a1c] group-hover:text-[#8b6240] sm:text-4xl">
              {featured.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#6e5547]">{featured.excerpt}</p>
            <div className="mt-6 flex items-center gap-3 text-xs text-[#a08161]">
              <span className="font-medium text-[#8b6240]">{featured.author}</span>
              <span>·</span>
              <span>{featured.date}</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{featured.readTime}</span>
            </div>
          </div>
        </Link>
      )}

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {rest.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group overflow-hidden rounded-2xl border border-[#e6d5c2] bg-white transition-all hover:shadow-lg"
          >
            <div className="relative h-52 overflow-hidden">
              <ContentImage src={p.img} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#8b6240] backdrop-blur">
                {p.category}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl font-semibold text-[#3d2a1c] group-hover:text-[#8b6240]">{p.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#6e5547]">{p.excerpt}</p>
              <div className="mt-4 flex items-center gap-3 text-xs text-[#a08161]">
                <span className="font-medium text-[#8b6240]">{p.author}</span>
                <span>·</span>
                <span>{p.date}</span>
                <span>·</span>
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{p.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div id="subscribe" className="mt-16 rounded-3xl bg-gradient-to-br from-[#8b6240] to-[#b88a5e] p-10 text-white sm:p-14">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <BookOpen className="h-8 w-8 text-[#f5d9b8]" />
            <h2 className="mt-5 font-serif text-3xl font-semibold sm:text-4xl">
              The Sunday Letter
            </h2>
            <p className="mt-3 max-w-lg text-sm text-white/85">
              One essay. Once a month. In your inbox on Sunday mornings. No marketing — just thoughtful writing from our team.
            </p>
          </div>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="you@example.com"
              className="h-12 w-full rounded-full border border-white/30 bg-white/10 px-5 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white text-sm font-medium text-[#8b6240] hover:bg-[#fdf8f1]"
            >
              Subscribe
              <ArrowRight className="h-4 w-4" />
            </button>
            <p className="text-center text-xs text-white/70">Unsubscribe anytime. We never share your email.</p>
          </form>
        </div>
      </div>
    </PageShell>
  )
}
