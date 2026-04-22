import Link from 'next/link'
import { ArrowRight, Heart, ShieldCheck, Sparkles, Users, Globe, Award, Target, Compass } from 'lucide-react'
import { PageShell } from '@/components/shared/page-shell'
import { ContentImage } from '@/components/shared/content-image'
import { SITE_CONFIG } from '@/lib/site-config'

const stats = [
  { value: '12K+', label: 'Happy Clients', icon: Heart },
  { value: '1,467', label: 'Verified Listings', icon: ShieldCheck },
  { value: '679+', label: 'Unique Categories', icon: Compass },
  { value: '1,608', label: 'Global Locations', icon: Globe },
]

const values = [
  {
    icon: ShieldCheck,
    title: 'Trust, Above All',
    description: 'Every listing is reviewed, verified, and held to standards we would apply to our own doorstep. Trust is not a feature — it is the foundation.',
  },
  {
    icon: Heart,
    title: 'Curation with Care',
    description: 'We believe thoughtful recommendations beat endless feeds. Our team hand-picks what appears because quality deserves attention.',
  },
  {
    icon: Sparkles,
    title: 'Elegance in Every Detail',
    description: 'From the first search to the final decision, we design experiences that feel calm, considered, and quietly beautiful.',
  },
  {
    icon: Users,
    title: 'People, Then Pixels',
    description: 'Behind every listing is a person. Behind every search, another. We build for connection — real humans meeting real opportunities.',
  },
]

const milestones = [
  { year: '2019', title: 'The spark', text: 'Founded on the belief that discovery deserves better than algorithms alone.' },
  { year: '2021', title: 'First thousand', text: 'Crossed 1,000 verified listings and learned what quality curation really means.' },
  { year: '2023', title: 'Going global', text: 'Expanded across 40+ countries while keeping every listing personally reviewed.' },
  { year: '2025', title: 'Today', text: '12,000+ clients served and growing — one thoughtful connection at a time.' },
]

const team = [
  { name: 'Elena Marchetti', role: 'Founder & CEO', img: 'https://i.pravatar.cc/240?img=45' },
  { name: 'James Holloway', role: 'Head of Curation', img: 'https://i.pravatar.cc/240?img=12' },
  { name: 'Priya Raman', role: 'Design Director', img: 'https://i.pravatar.cc/240?img=47' },
  { name: 'Marcus Chen', role: 'Client Experience', img: 'https://i.pravatar.cc/240?img=33' },
]

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About Us"
      title="A Home for Thoughtful Discovery"
      description={`${SITE_CONFIG.name} was built on a simple idea — that finding the right service, vendor, or business should feel as considered as the choice itself. We are a small team obsessed with quality, curation, and the quiet craft of making discovery beautiful.`}
      actions={
        <>
          <Link
            href="/team"
            className="inline-flex items-center gap-2 rounded-full border border-[#8b6240] px-6 py-3 text-sm font-medium text-[#8b6240] hover:bg-white"
          >
            Meet the Team
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#b88a5e] to-[#8b6240] px-6 py-3 text-sm font-medium text-white shadow-lg hover:scale-105"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl bg-gradient-to-br from-[#fbf3e8] to-[#e6c9a8] p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-[#8b6240]">
              <s.icon className="h-5 w-5" />
            </div>
            <p className="mt-4 font-serif text-3xl font-semibold text-[#8b6240]">{s.value}</p>
            <p className="mt-1 text-sm text-[#6e5547]">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative col-span-2 h-64 overflow-hidden rounded-2xl">
            <ContentImage
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
              alt="Our team at work"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-2xl">
            <ContentImage
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
              alt="Craft and detail"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-2xl">
            <ContentImage
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
              alt="Collaboration"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b6240]">Our Story</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-[#3d2a1c] sm:text-5xl">
            Built slowly,<br />with intention
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-[#6e5547]">
            <p>
              {SITE_CONFIG.name} started as a small side project between friends who were tired of scrolling through endless, unfiltered directories. We wanted something different — a place where every listing earned its spot.
            </p>
            <p>
              Six years later, that principle still holds. We review every submission personally. We talk to our vendors. We listen to our clients. And we treat each category as a craft worth honoring.
            </p>
            <p>
              This is not the biggest platform on the internet. It is the one we would use ourselves — and that is the only metric that matters to us.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b6240]">What We Stand For</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-[#3d2a1c] sm:text-5xl">Our Values</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-[#6e5547]">
            Four quiet commitments that shape every decision we make.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-[#e6d5c2] bg-white p-7 transition-all hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#fbf3e8] to-[#e6c9a8] text-[#8b6240]">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-[#3d2a1c]">{v.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#6e5547]">{v.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 rounded-3xl bg-gradient-to-br from-[#8b6240] to-[#b88a5e] p-10 text-white sm:p-14">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#f5d9b8]">Our Journey</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">A Quiet Ascent</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-4">
          {milestones.map((m, i) => (
            <div key={m.year} className="relative">
              {i < milestones.length - 1 && (
                <div className="absolute left-8 top-4 hidden h-px w-full bg-white/20 md:block" />
              )}
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#f5d9b8] bg-white/10 backdrop-blur">
                <span className="font-serif text-sm font-semibold text-[#f5d9b8]">{m.year}</span>
              </div>
              <h3 className="mt-5 font-serif text-lg font-semibold">{m.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/80">{m.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b6240]">The Humans</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-[#3d2a1c] sm:text-5xl">Meet the Team</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-[#6e5547]">
            Small, deliberate, and deeply invested in the work.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div key={m.name} className="group text-center">
              <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full border-4 border-[#fbf3e8] shadow-md">
                <img src={m.img} alt={m.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h3 className="mt-5 font-serif text-lg font-semibold text-[#3d2a1c]">{m.name}</h3>
              <p className="mt-1 text-sm text-[#8b6240]">{m.role}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 rounded-full border border-[#8b6240] px-6 py-3 text-sm font-medium text-[#8b6240] hover:bg-white"
          >
            Join our team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </PageShell>
  )
}
