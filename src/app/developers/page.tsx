import Link from 'next/link'
import { ArrowRight, Code2, Key, Terminal, BookOpen, Zap, Shield } from 'lucide-react'
import { PageShell } from '@/components/shared/page-shell'

export const revalidate = 3600

const features = [
  { icon: Zap, title: 'Fast, RESTful API', desc: 'Clean endpoints, predictable responses, generous rate limits.' },
  { icon: Key, title: 'Simple authentication', desc: 'Bearer tokens. No OAuth dance for basic read access.' },
  { icon: Shield, title: 'Built to last', desc: 'Versioned endpoints. Deprecation windows of 12 months.' },
  { icon: BookOpen, title: 'Readable docs', desc: 'Examples that actually work, in curl and your language.' },
]

const endpoints = [
  { method: 'GET', path: '/v1/listings', desc: 'List all verified listings with optional filters' },
  { method: 'GET', path: '/v1/listings/:slug', desc: 'Fetch a single listing by its slug' },
  { method: 'GET', path: '/v1/search', desc: 'Full-text search across the entire catalog' },
  { method: 'GET', path: '/v1/categories', desc: 'Retrieve the category taxonomy' },
]

export default function DevelopersPage() {
  return (
    <PageShell
      eyebrow="Developers"
      title="Build With Our API"
      description="A thoughtful, well-documented API for developers who want to integrate our curated listings into their own products. Free for personal projects, fair pricing for commercial use."
      actions={
        <>
          <Link
            href="#docs"
            className="inline-flex items-center gap-2 rounded-full border border-[#8b6240] px-6 py-3 text-sm font-medium text-[#8b6240] hover:bg-white"
          >
            Read the docs
          </Link>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#b88a5e] to-[#8b6240] px-6 py-3 text-sm font-medium text-white shadow-lg hover:scale-105"
          >
            Get API key
            <ArrowRight className="h-4 w-4" />
          </Link>
        </>
      }
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border border-[#e6d5c2] bg-white p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#fbf3e8] to-[#e6c9a8] text-[#8b6240]">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-serif text-lg font-semibold text-[#3d2a1c]">{f.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#6e5547]">{f.desc}</p>
          </div>
        ))}
      </div>

      <div id="docs" className="mt-16 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b6240]">Quick start</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-[#3d2a1c]">Your first request</h2>
          <p className="mt-4 text-sm leading-7 text-[#6e5547]">
            Authenticate with a bearer token, hit any endpoint, and parse the JSON. That is the whole onboarding — no SDK required unless you want one.
          </p>
          <ol className="mt-6 space-y-4 text-sm text-[#6e5547]">
            <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#8b6240] text-xs font-semibold text-white">1</span>Sign up and create an API key from your dashboard.</li>
            <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#8b6240] text-xs font-semibold text-white">2</span>Include it as a bearer token in the Authorization header.</li>
            <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#8b6240] text-xs font-semibold text-white">3</span>Query any endpoint and parse the JSON response.</li>
          </ol>
        </div>
        <div className="overflow-hidden rounded-2xl bg-[#2a1b11] p-6 font-mono text-xs leading-6 text-[#fbf3e8] shadow-xl">
          <div className="mb-4 flex items-center gap-2">
            <Terminal className="h-4 w-4 text-[#f5d9b8]" />
            <span className="text-[#f5d9b8]">Terminal</span>
          </div>
          <pre className="whitespace-pre-wrap">
            <span className="text-[#a08161]"># Fetch the latest verified listings</span>
            {'\n'}
            <span className="text-[#e6c9a8]">curl</span> https://api.webweaversonline.com/v1/listings \{'\n'}
            {'  '}-H <span className="text-[#f5d9b8]">"Authorization: Bearer YOUR_API_KEY"</span> \{'\n'}
            {'  '}-H <span className="text-[#f5d9b8]">"Accept: application/json"</span>
            {'\n\n'}
            <span className="text-[#a08161]"># Response</span>
            {'\n'}
            <span className="text-[#c89c70]">{'{'}</span>
            {'\n'}  <span className="text-[#e6c9a8]">"data"</span>: [...],
            {'\n'}  <span className="text-[#e6c9a8]">"total"</span>: 1467,
            {'\n'}  <span className="text-[#e6c9a8]">"page"</span>: 1
            {'\n'}<span className="text-[#c89c70]">{'}'}</span>
          </pre>
        </div>
      </div>

      <div className="mt-16">
        <div className="flex items-end justify-between border-b border-[#e6d5c2] pb-5">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b6240]">Reference</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-[#3d2a1c]">Core Endpoints</h2>
          </div>
          <Code2 className="h-6 w-6 text-[#8b6240]" />
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl border border-[#e6d5c2] bg-white">
          {endpoints.map((e, i) => (
            <div
              key={e.path}
              className={`flex items-center gap-4 p-5 ${i < endpoints.length - 1 ? 'border-b border-[#e6d5c2]' : ''}`}
            >
              <span className="rounded-md bg-[#fbf3e8] px-3 py-1 font-mono text-xs font-semibold text-[#8b6240]">{e.method}</span>
              <code className="flex-1 font-mono text-sm text-[#3d2a1c]">{e.path}</code>
              <span className="hidden text-sm text-[#6e5547] md:block">{e.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-3xl bg-gradient-to-br from-[#8b6240] to-[#b88a5e] p-10 text-white sm:p-14">
        <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Ready to build something?</h2>
        <p className="mt-3 max-w-lg text-sm text-white/85">
          Free tier includes 1,000 requests per day. No credit card required to start.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/register"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#8b6240] hover:bg-[#fdf8f1]"
          >
            Create API key
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-medium text-white hover:bg-white/20"
          >
            Talk to our team
          </Link>
        </div>
      </div>
    </PageShell>
  )
}
