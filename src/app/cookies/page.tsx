import { Cookie, Settings, BarChart3, ShieldCheck } from 'lucide-react'
import { PageShell } from '@/components/shared/page-shell'

const cookieTypes = [
  {
    icon: ShieldCheck,
    name: 'Essential Cookies',
    required: true,
    desc: 'These keep the site running — authentication, security, and basic preferences. They cannot be turned off because the platform will not work without them.',
    examples: ['session_id', 'auth_token', 'csrf_token'],
  },
  {
    icon: Settings,
    name: 'Preference Cookies',
    required: false,
    desc: 'Remember your settings like theme, language, and layout preferences. Optional, but they make return visits feel more familiar.',
    examples: ['theme_preference', 'locale', 'saved_filters'],
  },
  {
    icon: BarChart3,
    name: 'Analytics Cookies',
    required: false,
    desc: 'Help us understand how visitors use the platform — aggregated, anonymous, and never sold to third parties. Turning these off will not affect your experience.',
    examples: ['visit_duration', 'page_views', 'feature_usage'],
  },
]

export default function CookiesPage() {
  return (
    <PageShell
      eyebrow="Cookie Policy"
      title="Small Files, Clear Rules"
      description="We use a small number of cookies — only the ones we actually need. Here is exactly what each one does and how you can control them."
    >
      <div className="flex items-start gap-5 rounded-2xl bg-gradient-to-r from-[#e6c9a8] to-[#fbf3e8] p-7">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-md">
          <Cookie className="h-7 w-7 text-[#8b6240]" />
        </div>
        <div>
          <h2 className="font-serif text-xl font-semibold text-[#3d2a1c]">What is a cookie?</h2>
          <p className="mt-2 text-sm leading-7 text-[#6e5547]">
            A cookie is a tiny text file a website stores in your browser to remember things about you — like whether you are logged in or what theme you prefer. They are harmless, standard, and every modern website uses them.
          </p>
        </div>
      </div>

      <div className="mt-10 space-y-5">
        {cookieTypes.map((c) => (
          <div key={c.name} className="rounded-2xl border border-[#e6d5c2] bg-white p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#fbf3e8] to-[#e6c9a8] text-[#8b6240]">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="font-serif text-xl font-semibold text-[#3d2a1c]">{c.name}</h2>
                  {c.required ? (
                    <span className="rounded-full bg-[#8b6240] px-3 py-1 text-xs font-medium text-white">Required</span>
                  ) : (
                    <span className="rounded-full border border-[#e6d5c2] bg-[#fbf3e8] px-3 py-1 text-xs font-medium text-[#8b6240]">Optional</span>
                  )}
                </div>
                <p className="mt-3 text-sm leading-7 text-[#6e5547]">{c.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.examples.map((e) => (
                    <code key={e} className="rounded-md bg-[#fbf3e8] px-2.5 py-1 text-xs text-[#8b6240]">{e}</code>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-[#e6d5c2] bg-white p-7">
        <h2 className="font-serif text-xl font-semibold text-[#3d2a1c]">Managing your cookies</h2>
        <p className="mt-3 text-sm leading-7 text-[#6e5547]">
          You can disable optional cookies from your browser settings at any time. Most browsers let you block cookies entirely — just know that essential cookies are needed for login and core features. If you clear your cookies, you will simply need to sign in again.
        </p>
      </div>
    </PageShell>
  )
}
