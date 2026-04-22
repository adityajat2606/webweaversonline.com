import Link from 'next/link'
import { ArrowRight, MapPin, Star, Quote, Calendar, Sparkles, Heart, ShieldCheck } from 'lucide-react'
import { ContentImage } from '@/components/shared/content-image'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import { SITE_CONFIG } from '@/lib/site-config'
import type { SitePost } from '@/lib/site-connector'

export const HOME_PAGE_OVERRIDE_ENABLED = true

function getImage(post?: SitePost | null) {
  const media = Array.isArray(post?.media) ? post?.media : []
  const mediaUrl = media.find((m) => typeof m?.url === 'string' && m.url)?.url
  const content = (post?.content && typeof post.content === 'object' ? post.content : {}) as Record<string, unknown>
  const contentImage = Array.isArray((content as any).images)
    ? (content as any).images.find((u: unknown) => typeof u === 'string' && u)
    : null
  const logo = typeof content.logo === 'string' ? content.logo : null
  return mediaUrl || contentImage || logo || '/placeholder.svg?height=900&width=1400'
}

function getMeta(post?: SitePost | null) {
  if (!post || typeof post.content !== 'object' || !post.content) return { location: '', category: '' }
  const c = post.content as Record<string, unknown>
  return {
    location: (typeof c.address === 'string' && c.address) || (typeof c.location === 'string' && c.location) || '',
    category: (typeof c.category === 'string' && c.category) || (typeof post.tags?.[0] === 'string' ? post.tags[0] : '') || 'Featured',
  }
}

const HERO_IMAGE = 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80'
const ABOUT_IMAGE = 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80'
const TOGETHER_IMAGE = 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1600&q=80'

const stats = [
  { value: '1200+', label: 'Happy Clients' },
  { value: '1467+', label: 'Listings' },
  { value: '679+', label: 'Categories' },
  { value: '1608+', label: 'Locations' },
]

const services = [
  { id: 'featured', title: 'Featured Listings', desc: 'Hand-picked premium listings curated for quality and trust.' },
  { id: 'verified', title: 'Verified Vendors', desc: 'Every listing is reviewed and verified before going live.' },
  { id: 'support', title: 'Dedicated Support', desc: 'Personal assistance from discovery to deal closure.' },
  { id: 'global', title: 'Global Reach', desc: 'Listings spanning hundreds of locations worldwide.' },
]

const testimonials = [
  { name: 'Emily & James', text: 'The listing platform connected us with the perfect vendor. Seamless, elegant, and trustworthy from start to finish.', avatar: 'https://i.pravatar.cc/100?img=47' },
  { name: 'Sophia Carter', text: 'I found exactly what I was looking for in minutes. The verified listings made the choice easy.', avatar: 'https://i.pravatar.cc/100?img=32' },
]

export async function HomePageOverride() {
  const posts = await fetchTaskPosts('listing', 6, { allowMockFallback: true, fresh: true })
  const featured = posts.slice(0, 4)
  const projects = posts.slice(0, 4)

  return (
    <div className="min-h-screen bg-[#c89977] text-[#3d2a1c]">
      <div className="mx-auto max-w-7xl bg-[#fdf8f1] shadow-2xl">
        <NavbarShell />

        {/* HERO */}
        <section className="relative">
          <div className="relative mx-4 mt-4 overflow-hidden rounded-3xl sm:mx-6 lg:mx-8">
            <div className="relative h-[560px] w-full">
              <ContentImage src={HERO_IMAGE} alt="Premium listings" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-2xl px-8 py-10 text-white sm:px-14">
                  <p className="flex items-center gap-2 text-sm font-medium text-[#f5d9b8]">
                    <Sparkles className="h-4 w-4" />
                    Hi, We Are Your Premium Listing Platform
                  </p>
                  <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight sm:text-6xl">
                    International Luxury<br />Listings Discovery
                  </h1>
                  <p className="mt-5 max-w-lg text-base leading-7 text-white/85">
                    {SITE_CONFIG.description} We bring together verified vendors, curated services, and trusted businesses in one elegant directory you can rely on.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#c89c70] to-[#b88a5e] px-6 py-3 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105"
                    >
                      Contact Us
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/listings"
                      className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/20"
                    >
                      See Listings
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="px-4 pt-10 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#e6c9a8] px-6 py-8 sm:px-10">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-serif text-3xl font-semibold text-[#8b6240] sm:text-4xl">{s.value}</p>
                  <p className="mt-1 text-sm text-[#5a4231]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXCLUSIVE SERVICE */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-medium text-[#8b6240]">Hi, We're Here For You</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#8b6240] sm:text-5xl">
                Exclusive Service For<br />Your Discovery Journey
              </h2>
              <p className="mt-5 text-sm leading-7 text-[#6e5547]">
                We know finding the right service or vendor is one of the most important decisions you'll make. Our curated platform connects you with verified, trusted listings — so you can choose with confidence.
              </p>
              <div className="mt-8 flex items-center gap-6">
                <div>
                  <p className="font-serif text-4xl font-semibold text-[#8b6240]">15+</p>
                  <p className="text-sm text-[#6e5547]">Years Experience</p>
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#b88a5e] to-[#8b6240] px-6 py-3 text-sm font-medium text-white shadow-md hover:scale-105"
                >
                  About Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[ABOUT_IMAGE, HERO_IMAGE, TOGETHER_IMAGE, ABOUT_IMAGE].map((src, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-2xl ${i === 0 ? 'col-span-2 h-48' : 'h-40'}`}
                >
                  <ContentImage src={src} alt="Gallery" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TOGETHER BANNER */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="relative h-72 w-full">
              <ContentImage src={TOGETHER_IMAGE} alt="Beautiful together" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#3d2a1c]/80 via-[#3d2a1c]/40 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-xl px-8 sm:px-14 text-white">
                  <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
                    We Can Make Beautiful<br />Things Together
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-7 text-white/85">
                    Join thousands of clients who discovered the perfect match through our premium listing experience.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#8b6240] hover:bg-[#fdf8f1]"
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES TABS */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium text-[#8b6240]">Services Offered By Us</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#8b6240]">
              Let's Plan Your Next Discovery Together
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <div
                key={s.id}
                className={`rounded-2xl p-6 transition-all hover:shadow-lg ${
                  i === 0 ? 'bg-[#e6c9a8]' : 'bg-[#fbf3e8] hover:bg-[#f5e7d0]'
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-[#8b6240]">
                  {i === 0 ? <Sparkles className="h-5 w-5" /> : i === 1 ? <ShieldCheck className="h-5 w-5" /> : i === 2 ? <Heart className="h-5 w-5" /> : <MapPin className="h-5 w-5" />}
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-[#3d2a1c]">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6e5547]">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* LATEST PROJECTS / LISTINGS */}
        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium text-[#8b6240]">Our Latest Listings</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#8b6240]">Discover Featured Picks</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {(projects.length ? projects : Array.from({ length: 4 })).map((post: any, i: number) => {
              const meta = post ? getMeta(post) : { location: 'Premium Location', category: 'Featured' }
              const title = post?.title || `Featured Listing ${i + 1}`
              const slug = post?.slug || ''
              const img = post ? getImage(post) : [HERO_IMAGE, ABOUT_IMAGE, TOGETHER_IMAGE, HERO_IMAGE][i % 4]
              return (
                <Link
                  key={i}
                  href={slug ? `/listings/${slug}` : '/listings'}
                  className="group relative block overflow-hidden rounded-2xl bg-[#fbf3e8] shadow-sm transition-all hover:shadow-xl"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <ContentImage src={img} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#8b6240]">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-medium uppercase tracking-wider text-[#a08161]">{meta.category}</p>
                    <h3 className="mt-2 font-serif text-xl font-semibold text-[#3d2a1c]">{title}</h3>
                    {meta.location && (
                      <p className="mt-2 flex items-center gap-1.5 text-xs text-[#6e5547]">
                        <MapPin className="h-3.5 w-3.5" />
                        {meta.location}
                      </p>
                    )}
                  </div>
                  <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#8b6240] text-white opacity-0 transition-opacity group-hover:opacity-100">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              )
            })}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/listings"
              className="inline-flex items-center gap-2 rounded-full border border-[#c89c70] px-6 py-3 text-sm font-medium text-[#8b6240] hover:bg-[#fbf3e8]"
            >
              View All Listings
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#fbf3e8] p-8 sm:p-12">
            <div className="text-center">
              <p className="text-sm font-medium text-[#8b6240]">Testimonials</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold text-[#8b6240]">What Our Clients Say</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {testimonials.map((t) => (
                <div key={t.name} className="rounded-2xl bg-white p-6 shadow-sm">
                  <Quote className="h-6 w-6 text-[#c89c70]" />
                  <p className="mt-4 text-sm leading-7 text-[#5a4231]">"{t.text}"</p>
                  <div className="mt-5 flex items-center gap-3">
                    <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                    <div>
                      <p className="font-serif font-semibold text-[#3d2a1c]">{t.name}</p>
                      <div className="flex gap-0.5 text-[#c89c70]">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
