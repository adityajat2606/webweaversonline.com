import Link from 'next/link'
import { ArrowRight, BookOpen, CreditCard, HelpCircle, Search, Settings, ShieldCheck, Sparkles, Users } from 'lucide-react'
import { PageShell } from '@/components/shared/page-shell'

const topics = [
  {
    icon: Sparkles,
    title: 'Getting Started',
    count: 12,
    desc: 'Everything you need to set up your account and find your first listing.',
    color: 'from-[#fbf3e8] to-[#e6c9a8]',
  },
  {
    icon: ShieldCheck,
    title: 'Trust & Verification',
    count: 8,
    desc: 'How we verify listings and keep the platform safe for everyone.',
    color: 'from-[#f5e7d0] to-[#e6c9a8]',
  },
  {
    icon: CreditCard,
    title: 'Billing & Subscriptions',
    count: 15,
    desc: 'Manage your plan, payment methods, invoices, and upgrades.',
    color: 'from-[#fbf3e8] to-[#f5d9b8]',
  },
  {
    icon: Users,
    title: 'For Business Owners',
    count: 22,
    desc: 'List your business, manage your profile, and grow your visibility.',
    color: 'from-[#f5e7d0] to-[#f5d9b8]',
  },
  {
    icon: Search,
    title: 'Finding Listings',
    count: 9,
    desc: 'Search tips, filters, and how to discover the right service for you.',
    color: 'from-[#fbf3e8] to-[#e6c9a8]',
  },
  {
    icon: Settings,
    title: 'Account & Privacy',
    count: 11,
    desc: 'Update your profile, manage notifications, and control your data.',
    color: 'from-[#f5e7d0] to-[#e6c9a8]',
  },
]

const faqs = [
  {
    q: 'How do I list my business on the platform?',
    a: 'Create an account, head to your dashboard, and click "Add Listing." Our curation team reviews every submission within 48 hours — we want to make sure every listing meets our quality standards before it goes live.',
  },
  {
    q: 'What does it cost to list a business?',
    a: 'We offer a free Starter plan for up to one listing. Our Pro plan ($29/month) unlocks featured placement, multiple listings, analytics, and priority support. No hidden fees — ever.',
  },
  {
    q: 'How do you verify listings?',
    a: 'Every listing is reviewed by a real human on our curation team. We check business registration, read reviews, validate contact information, and — for premium categories — conduct a brief phone interview with the owner.',
  },
  {
    q: 'Can I edit my listing after it goes live?',
    a: 'Absolutely. You can update your listing anytime from your dashboard. Major changes (like category or location) may be re-reviewed by our team to keep our quality standards consistent.',
  },
  {
    q: 'How do I get featured on the homepage?',
    a: 'Featured placements are curated monthly by our editorial team based on quality, client feedback, and fit with our current themes. Pro subscribers are eligible — but even Starter listings occasionally get featured when they shine.',
  },
  {
    q: 'Do you offer refunds?',
    a: 'Yes. If you are not happy with your Pro subscription within the first 30 days, we will refund you in full — no questions asked. We would rather lose a subscription than keep someone who is not delighted.',
  },
]

export default function HelpPage() {
  return (
    <PageShell
      eyebrow="Help Center"
      title="How Can We Help?"
      description="Browse guides, answers, and resources — or reach out directly to our support team. We read every message personally and respond within 24 hours."
      actions={
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#b88a5e] to-[#8b6240] px-6 py-3 text-sm font-medium text-white shadow-lg hover:scale-105"
        >
          Contact support
          <ArrowRight className="h-4 w-4" />
        </Link>
      }
    >
      <div className="relative">
        <div className="flex items-center gap-3 rounded-full border border-[#e6d5c2] bg-white px-6 py-4 shadow-sm">
          <Search className="h-5 w-5 text-[#a08161]" />
          <input
            type="text"
            placeholder="Search for answers — try 'how to list a business'..."
            className="flex-1 border-0 bg-transparent text-sm text-[#3d2a1c] placeholder:text-[#a08161] focus:outline-none"
          />
          <button className="rounded-full bg-[#8b6240] px-5 py-2 text-sm font-medium text-white hover:bg-[#a87852]">
            Search
          </button>
        </div>
      </div>

      <div className="mt-16">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b6240]">Browse by topic</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-[#3d2a1c]">Popular Categories</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((t) => (
            <Link
              key={t.title}
              href="#"
              className={`group rounded-2xl bg-gradient-to-br ${t.color} p-7 transition-all hover:-translate-y-1 hover:shadow-xl`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-[#8b6240]">
                <t.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-lg font-semibold text-[#3d2a1c]">{t.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#6e5547]">{t.desc}</p>
              <p className="mt-4 text-xs font-medium text-[#8b6240]">{t.count} articles</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-20 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
        <div className="lg:sticky lg:top-24">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b6240]">FAQ</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-[#3d2a1c]">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#6e5547]">
            The questions our clients ask most often. Still not seeing what you need?
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#8b6240] hover:underline"
          >
            Reach out directly
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-[#e6d5c2] bg-white p-6 transition-colors open:border-[#c89c70] open:bg-[#fbf3e8]"
            >
              <summary className="flex cursor-pointer items-start justify-between gap-4 list-none">
                <div className="flex items-start gap-3">
                  <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#8b6240]" />
                  <h3 className="font-serif text-lg font-semibold text-[#3d2a1c]">{f.q}</h3>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-[#8b6240] transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-4 pl-8 text-sm leading-7 text-[#6e5547]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>

      <div className="mt-20 rounded-3xl bg-gradient-to-br from-[#8b6240] to-[#b88a5e] p-10 text-white sm:p-14">
        <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-center">
          <div>
            <BookOpen className="h-8 w-8 text-[#f5d9b8]" />
            <h2 className="mt-5 font-serif text-3xl font-semibold sm:text-4xl">
              Still need a hand?
            </h2>
            <p className="mt-3 max-w-lg text-sm text-white/85">
              Our support team is real people — not scripts, not bots. Tell us what you are trying to do and we will guide you through it.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#8b6240] hover:bg-[#fdf8f1]"
            >
              Contact support
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/community"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-medium text-white hover:bg-white/20"
            >
              Ask the community
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
