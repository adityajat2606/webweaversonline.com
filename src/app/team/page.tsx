import Link from 'next/link'
import { ArrowRight, Mail, Twitter, Linkedin, Sparkles } from 'lucide-react'
import { PageShell } from '@/components/shared/page-shell'

const leadership = [
  {
    name: 'Elena Marchetti',
    role: 'Founder & CEO',
    bio: 'Former architect turned product builder. Believes good directories are edited, not scraped.',
    img: 'https://i.pravatar.cc/400?img=45',
  },
  {
    name: 'James Holloway',
    role: 'Head of Curation',
    bio: 'Spent a decade as a magazine editor before bringing editorial thinking to listings.',
    img: 'https://i.pravatar.cc/400?img=12',
  },
  {
    name: 'Priya Raman',
    role: 'Design Director',
    bio: 'Obsessed with the quiet moments of an interface. Painter on weekends.',
    img: 'https://i.pravatar.cc/400?img=47',
  },
]

const team = [
  { name: 'Marcus Chen', role: 'Client Experience Lead', img: 'https://i.pravatar.cc/240?img=33' },
  { name: 'Sofia Álvarez', role: 'Senior Engineer', img: 'https://i.pravatar.cc/240?img=49' },
  { name: 'David Okonkwo', role: 'Curation Specialist', img: 'https://i.pravatar.cc/240?img=14' },
  { name: 'Lin Tanaka', role: 'Product Designer', img: 'https://i.pravatar.cc/240?img=44' },
  { name: 'Omar Yilmaz', role: 'Engineering Lead', img: 'https://i.pravatar.cc/240?img=15' },
  { name: 'Ava Thornton', role: 'Community Manager', img: 'https://i.pravatar.cc/240?img=48' },
  { name: 'Ravi Kapoor', role: 'Operations', img: 'https://i.pravatar.cc/240?img=16' },
  { name: 'Mei Nakamura', role: 'Marketing', img: 'https://i.pravatar.cc/240?img=46' },
]

export default function TeamPage() {
  return (
    <PageShell
      eyebrow="Our Team"
      title="The People Behind the Work"
      description="A small, deliberate group of designers, editors, engineers, and curators — united by a belief that discovery should feel considered."
      actions={
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#b88a5e] to-[#8b6240] px-6 py-3 text-sm font-medium text-white shadow-lg hover:scale-105"
        >
          Join the team
          <ArrowRight className="h-4 w-4" />
        </Link>
      }
    >
      <div>
        <div className="flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-[#8b6240]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b6240]">Leadership</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {leadership.map((p) => (
            <div key={p.name} className="group overflow-hidden rounded-3xl border border-[#e6d5c2] bg-white transition-all hover:shadow-xl">
              <div className="relative h-64 overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3d2a1c]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-[#3d2a1c]">{p.name}</h3>
                <p className="mt-1 text-sm font-medium text-[#8b6240]">{p.role}</p>
                <p className="mt-3 text-sm leading-6 text-[#6e5547]">{p.bio}</p>
                <div className="mt-5 flex gap-2">
                  {[Mail, Twitter, Linkedin].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fbf3e8] text-[#8b6240] transition-colors hover:bg-[#8b6240] hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <div className="flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-[#8b6240]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b6240]">The wider team</p>
        </div>
        <h2 className="mt-3 font-serif text-3xl font-semibold text-[#3d2a1c]">And the rest of the crew</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {team.map((p) => (
            <div key={p.name} className="text-center">
              <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border-4 border-[#fbf3e8] shadow-md">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-4 font-serif text-base font-semibold text-[#3d2a1c]">{p.name}</h3>
              <p className="mt-0.5 text-xs text-[#8b6240]">{p.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 rounded-3xl bg-gradient-to-br from-[#8b6240] to-[#b88a5e] p-10 text-center text-white sm:p-14">
        <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Want to work with us?</h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-white/85">
          We are always looking for thoughtful people who care deeply about craft.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#8b6240] hover:bg-[#fdf8f1]"
          >
            See open roles
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-medium text-white hover:bg-white/20"
          >
            Say hello
          </Link>
        </div>
      </div>
    </PageShell>
  )
}
