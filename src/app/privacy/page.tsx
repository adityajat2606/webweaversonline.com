import Link from 'next/link'
import { ShieldCheck, Lock, Eye, Database, Mail, UserCheck } from 'lucide-react'
import { PageShell } from '@/components/shared/page-shell'

const sections = [
  {
    icon: Database,
    title: 'Information We Collect',
    body: 'We collect only what we need: your account details (name, email), the content you submit (listings, messages), and basic usage data (pages visited, search queries). We do not sell or share this information with advertisers.',
  },
  {
    icon: Eye,
    title: 'How We Use Your Data',
    body: 'Your data helps us personalize your experience, improve search results, verify listings, and keep the platform secure. We use aggregated, anonymized analytics to understand how the product is working — never individual tracking.',
  },
  {
    icon: Lock,
    title: 'How We Protect It',
    body: 'All data is encrypted in transit and at rest. We use industry-standard authentication, regular security audits, and strict access controls. Only the engineers who need access have it — and every access is logged.',
  },
  {
    icon: UserCheck,
    title: 'Your Rights and Choices',
    body: 'You can download, edit, or permanently delete your data at any time from your account settings. You can opt out of marketing emails with a single click. You can request a full export of everything we have on you within 24 hours.',
  },
  {
    icon: Mail,
    title: 'Communications',
    body: 'We send three kinds of email: account notifications (always), product updates (opt-in), and occasional editorial picks (opt-in). You can manage every preference from your settings page.',
  },
  {
    icon: ShieldCheck,
    title: 'Changes to This Policy',
    body: 'If we ever change how we handle your data, we will tell you clearly and give you time to decide. No silent updates, no fine-print surprises.',
  },
]

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Privacy Policy"
      title="Your Privacy, Plainly Explained"
      description="We believe privacy policies should be readable, not performative. Here is exactly what we collect, why we collect it, and what you can do about it."
    >
      <div className="rounded-2xl bg-gradient-to-r from-[#e6c9a8] to-[#fbf3e8] p-6 text-sm text-[#6e5547]">
        <p className="font-medium text-[#3d2a1c]">Last updated: March 16, 2026</p>
        <p className="mt-2">Effective for all accounts and visitors worldwide.</p>
      </div>

      <div className="mt-10 space-y-5">
        {sections.map((s) => (
          <div key={s.title} className="rounded-2xl border border-[#e6d5c2] bg-white p-7 transition-all hover:shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#fbf3e8] to-[#e6c9a8] text-[#8b6240]">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-xl font-semibold text-[#3d2a1c]">{s.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#6e5547]">{s.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#8b6240] to-[#b88a5e] p-10 text-white">
        <h2 className="font-serif text-2xl font-semibold">Questions about your data?</h2>
        <p className="mt-3 max-w-xl text-sm text-white/85">
          Write to our data protection officer — a real human who will respond within 72 hours.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#8b6240] hover:bg-[#fdf8f1]"
          >
            Contact privacy team
          </Link>
          <Link
            href="/terms"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/20"
          >
            Read Terms
          </Link>
        </div>
      </div>
    </PageShell>
  )
}
