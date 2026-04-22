import Link from 'next/link'
import { ArrowRight, MapPin, Briefcase, Heart, Coffee, Leaf, Users, Clock, Sparkles } from 'lucide-react'
import { PageShell } from '@/components/shared/page-shell'
import { SITE_CONFIG } from '@/lib/site-config'

const roles = [
  {
    title: 'Senior Product Designer',
    department: 'Design',
    location: 'Remote · Global',
    type: 'Full-time',
    description: 'Shape the quiet craft of our interface — from discovery flows to vendor onboarding.',
  },
  {
    title: 'Frontend Engineer',
    department: 'Engineering',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'Build the elegant, performant surfaces our clients rely on every day.',
  },
  {
    title: 'Curation Specialist',
    department: 'Editorial',
    location: 'London, UK',
    type: 'Full-time',
    description: 'Hand-pick the listings that define our standard of quality and trust.',
  },
  {
    title: 'Community Lead',
    department: 'Community',
    location: 'Remote',
    type: 'Part-time',
    description: 'Nurture the relationships between our vendors and the clients who find them.',
  },
  {
    title: 'Content Writer',
    department: 'Marketing',
    location: 'Remote · Americas',
    type: 'Contract',
    description: 'Tell the stories behind our best listings with warmth and precision.',
  },
]

const benefits = [
  { icon: Leaf, title: 'Remote-first', desc: 'Work from wherever you do your best thinking.' },
  { icon: Heart, title: 'Full health coverage', desc: 'Medical, dental, vision — for you and your family.' },
  { icon: Coffee, title: 'Learning stipend', desc: '$2,000 annually for books, courses, and conferences.' },
  { icon: Users, title: 'Quarterly retreats', desc: 'Meet the team in beautiful places, twice a year.' },
  { icon: Clock, title: 'Flexible hours', desc: 'Deep work matters more than clocked hours.' },
  { icon: Sparkles, title: 'Equity for all', desc: 'Every team member shares in what we build together.' },
]

const principles = [
  { title: 'Craft over speed', text: 'We ship when it is right, not when it is due.' },
  { title: 'Care over clever', text: 'Kindness is a professional skill.' },
  { title: 'Depth over breadth', text: 'Knowing one thing well beats knowing ten things poorly.' },
]

export default function CareersPage() {
  return (
    <PageShell
      eyebrow="Careers"
      title="Build the Future of Discovery"
      description={`We are a small, deliberate team at ${SITE_CONFIG.name} — and we are growing carefully. If you care about craft, quality, and quiet excellence, you might be home here.`}
      actions={
        <Link
          href="#roles"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#b88a5e] to-[#8b6240] px-6 py-3 text-sm font-medium text-white shadow-lg hover:scale-105"
        >
          See open roles
          <ArrowRight className="h-4 w-4" />
        </Link>
      }
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="rounded-3xl bg-gradient-to-br from-[#fbf3e8] to-[#e6c9a8] p-8 sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b6240]">Our principles</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-[#3d2a1c] sm:text-4xl">
            How we work together
          </h2>
          <div className="mt-8 space-y-5">
            {principles.map((p) => (
              <div key={p.title} className="border-l-2 border-[#8b6240] pl-5">
                <h3 className="font-serif text-lg font-semibold text-[#3d2a1c]">{p.title}</h3>
                <p className="mt-1 text-sm text-[#6e5547]">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b6240]">Benefits & perks</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-[#3d2a1c] sm:text-4xl">
            What we offer
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#6e5547]">
            We invest in our people the way we invest in our product — thoughtfully, generously, and for the long term.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-xl border border-[#e6d5c2] bg-white p-4">
                <b.icon className="h-5 w-5 text-[#8b6240]" />
                <p className="mt-3 font-serif text-sm font-semibold text-[#3d2a1c]">{b.title}</p>
                <p className="mt-1 text-xs text-[#6e5547]">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="roles" className="mt-20">
        <div className="flex flex-col items-start justify-between gap-4 border-b border-[#e6d5c2] pb-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b6240]">Open positions</p>
            <h2 className="mt-2 font-serif text-4xl font-semibold text-[#3d2a1c]">Find your seat</h2>
          </div>
          <p className="text-sm text-[#6e5547]">{roles.length} roles currently open</p>
        </div>

        <div className="mt-8 space-y-4">
          {roles.map((r) => (
            <div
              key={r.title}
              className="group flex flex-col gap-4 rounded-2xl border border-[#e6d5c2] bg-white p-6 transition-all hover:border-[#c89c70] hover:shadow-lg sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="rounded-full bg-[#fbf3e8] px-3 py-1 font-medium text-[#8b6240]">{r.department}</span>
                  <span className="rounded-full border border-[#e6d5c2] px-3 py-1 text-[#6e5547]">{r.type}</span>
                </div>
                <h3 className="mt-3 font-serif text-xl font-semibold text-[#3d2a1c] group-hover:text-[#8b6240]">{r.title}</h3>
                <p className="mt-2 text-sm text-[#6e5547]">{r.description}</p>
                <p className="mt-3 flex items-center gap-1.5 text-xs text-[#a08161]">
                  <MapPin className="h-3.5 w-3.5" />
                  {r.location}
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-[#b88a5e] to-[#8b6240] px-5 py-2.5 text-sm font-medium text-white hover:scale-105"
              >
                Apply
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 rounded-3xl bg-gradient-to-br from-[#8b6240] to-[#b88a5e] p-10 text-center text-white sm:p-14">
        <Briefcase className="mx-auto h-8 w-8 text-[#f5d9b8]" />
        <h2 className="mt-5 font-serif text-3xl font-semibold sm:text-4xl">
          Don't see the right role?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-white/85">
          We are always open to hearing from thoughtful people. Send us your story and we will keep it on file for when the right seat opens up.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#8b6240] hover:bg-[#fdf8f1]"
        >
          Introduce yourself
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </PageShell>
  )
}
