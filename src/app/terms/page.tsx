import Link from 'next/link'
import { FileText, Users, AlertTriangle, Scale, Ban, Gavel } from 'lucide-react'
import { PageShell } from '@/components/shared/page-shell'

const sections = [
  {
    icon: FileText,
    title: 'Acceptance of Terms',
    body: 'By creating an account or using the platform, you agree to these terms. If you do not agree, please do not use the service. We keep these terms deliberately short and readable so everyone can understand them.',
  },
  {
    icon: Users,
    title: 'Your Account',
    body: 'You are responsible for keeping your account secure, for the content you submit, and for any activity under your login. Use a strong password. Do not share your credentials. Tell us immediately if you suspect unauthorized access.',
  },
  {
    icon: AlertTriangle,
    title: 'Acceptable Use',
    body: 'We curate this platform carefully. Do not submit false, misleading, or abusive content. Do not impersonate others. Do not scrape, spam, or abuse our APIs. Do not list anything illegal. We reserve the right to remove content that breaks these rules.',
  },
  {
    icon: Scale,
    title: 'Listings and Content',
    body: 'You retain ownership of everything you submit. You grant us a limited license to display, format, and distribute your content on our platform. We review every listing before publication — not every submission will be accepted.',
  },
  {
    icon: Ban,
    title: 'Termination',
    body: 'You can delete your account anytime from settings. We may suspend or terminate accounts that violate these terms, though we will always try to warn you first unless the violation is severe.',
  },
  {
    icon: Gavel,
    title: 'Disclaimers and Liability',
    body: 'The platform is provided "as is." We work hard to keep it reliable, but we cannot guarantee uninterrupted service. Our liability is limited to the amount you paid us in the 12 months before any claim — standard legal language, but in plain English.',
  },
]

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Terms of Service"
      title="The Rules We Play By"
      description="These terms govern how you use our platform. They are written in plain language because we believe legal agreements should be understandable, not intimidating."
    >
      <div className="rounded-2xl bg-gradient-to-r from-[#e6c9a8] to-[#fbf3e8] p-6 text-sm text-[#6e5547]">
        <p className="font-medium text-[#3d2a1c]">Last updated: March 16, 2026</p>
        <p className="mt-2">Please read these terms carefully. By using the platform, you agree to them.</p>
      </div>

      <div className="mt-10 space-y-5">
        {sections.map((s, i) => (
          <div key={s.title} className="rounded-2xl border border-[#e6d5c2] bg-white p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#fbf3e8] to-[#e6c9a8] text-[#8b6240]">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b6240]">Section {i + 1}</p>
                <h2 className="mt-1 font-serif text-xl font-semibold text-[#3d2a1c]">{s.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#6e5547]">{s.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#8b6240] to-[#b88a5e] p-10 text-white">
        <h2 className="font-serif text-2xl font-semibold">Have questions or concerns?</h2>
        <p className="mt-3 max-w-xl text-sm text-white/85">
          Write to our legal team. We respond to every inquiry personally.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#8b6240] hover:bg-[#fdf8f1]"
          >
            Contact legal
          </Link>
          <Link
            href="/privacy"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/20"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </PageShell>
  )
}
