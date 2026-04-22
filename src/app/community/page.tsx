import Link from 'next/link'
import { ArrowRight, MessageCircle, Users, Calendar, Heart, Star, MapPin } from 'lucide-react'
import { PageShell } from '@/components/shared/page-shell'

export const revalidate = 3600

const groups = [
  { name: 'Premium Vendors', members: '2.4k', topic: 'Tips and best practices for listed businesses', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80' },
  { name: 'Discovery Seekers', members: '5.1k', topic: 'Share finds, ask for recommendations', img: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=600&q=80' },
  { name: 'Design & Craft', members: '1.8k', topic: 'Aesthetic conversations for creative listings', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80' },
  { name: 'Local Experts', members: '3.2k', topic: 'City guides and neighborhood knowledge', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80' },
]

const events = [
  { date: 'Apr 28', title: 'Vendor Spotlight: Spring 2026 Picks', type: 'Virtual', attendees: 184 },
  { date: 'May 12', title: 'Local Discovery Meetup — London', type: 'In person', attendees: 62 },
  { date: 'May 20', title: 'Listing Craft Workshop', type: 'Virtual', attendees: 340 },
]

const stats = [
  { icon: Users, label: 'Community members', value: '12,400+' },
  { icon: MessageCircle, label: 'Discussions monthly', value: '3,200' },
  { icon: Heart, label: 'Saved listings shared', value: '48k' },
]

export default function CommunityPage() {
  return (
    <PageShell
      eyebrow="Community"
      title="Where Our People Gather"
      description="A space for vendors, curators, and clients to talk, share, and learn from each other. Real conversations, thoughtful moderation, zero noise."
      actions={
        <Link
          href="/register"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#b88a5e] to-[#8b6240] px-6 py-3 text-sm font-medium text-white shadow-lg hover:scale-105"
        >
          Join the community
          <ArrowRight className="h-4 w-4" />
        </Link>
      }
    >
      <div className="grid gap-5 sm:grid-cols-3">
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

      <div className="mt-16">
        <div className="flex items-end justify-between border-b border-[#e6d5c2] pb-5">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b6240]">Groups</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-[#3d2a1c]">Find your tribe</h2>
          </div>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {groups.map((g) => (
            <Link
              key={g.name}
              href="#"
              className="group flex gap-5 rounded-2xl border border-[#e6d5c2] bg-white p-5 transition-all hover:shadow-lg"
            >
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
                <img src={g.img} alt={g.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold text-[#3d2a1c] group-hover:text-[#8b6240]">{g.name}</h3>
                <p className="mt-1 text-sm text-[#6e5547]">{g.topic}</p>
                <p className="mt-3 flex items-center gap-1.5 text-xs text-[#a08161]">
                  <Users className="h-3.5 w-3.5" />
                  {g.members} members
                </p>
              </div>
              <ArrowRight className="h-5 w-5 self-center text-[#8b6240] opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <div className="flex items-end justify-between border-b border-[#e6d5c2] pb-5">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b6240]">Upcoming</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-[#3d2a1c]">Events & Meetups</h2>
          </div>
          <Calendar className="h-6 w-6 text-[#8b6240]" />
        </div>
        <div className="mt-8 space-y-4">
          {events.map((e) => (
            <div
              key={e.title}
              className="group flex flex-col gap-4 rounded-2xl border border-[#e6d5c2] bg-white p-6 transition-all hover:border-[#c89c70] hover:shadow-lg sm:flex-row sm:items-center"
            >
              <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-[#fbf3e8] to-[#e6c9a8]">
                <span className="font-serif text-xs font-medium text-[#8b6240]">{e.date.split(' ')[0]}</span>
                <span className="font-serif text-xl font-semibold text-[#3d2a1c]">{e.date.split(' ')[1]}</span>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#fbf3e8] px-3 py-1 text-xs font-medium text-[#8b6240]">{e.type}</span>
                  <span className="text-xs text-[#a08161]">{e.attendees} attending</span>
                </div>
                <h3 className="mt-2 font-serif text-lg font-semibold text-[#3d2a1c] group-hover:text-[#8b6240]">{e.title}</h3>
              </div>
              <button className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#8b6240] px-5 py-2 text-sm font-medium text-[#8b6240] hover:bg-[#8b6240] hover:text-white">
                RSVP
              </button>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
