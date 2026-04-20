'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Download, ExternalLink, Image as ImageIcon, FileText, Award, Quote } from 'lucide-react'
import { PageShell } from '@/components/shared/page-shell'

const assets = [
  { id: 'logo-pack', title: 'Logo Pack', description: 'Primary, horizontal, and mark variations in SVG and PNG.', fileType: 'ZIP', size: '2.4 MB' },
  { id: 'brand-guide', title: 'Brand Guidelines', description: 'Typography, color palette, spacing rules, and tone of voice.', fileType: 'PDF', size: '4.8 MB' },
  { id: 'screenshots', title: 'Product Screenshots', description: 'High-resolution UI captures for editorial use.', fileType: 'ZIP', size: '12.1 MB' },
  { id: 'founder-photos', title: 'Founder Photos', description: 'Headshots and candid team photography for features.', fileType: 'ZIP', size: '8.7 MB' },
]

const coverage = [
  { outlet: 'The New Yorker', headline: 'A Quieter Way to Find Things', date: 'March 2026', url: '#' },
  { outlet: 'Fast Company', headline: 'Why Curation Still Matters in the Age of AI', date: 'February 2026', url: '#' },
  { outlet: 'Monocle', headline: 'The Directory Reimagined', date: 'January 2026', url: '#' },
  { outlet: 'Kinfolk', headline: 'Discovery, Done Beautifully', date: 'December 2025', url: '#' },
  { outlet: 'Wallpaper*', headline: 'The Listing Platform That Reads Like a Magazine', date: 'November 2025', url: '#' },
]

const quotes = [
  { text: 'A refreshingly human take on the directory format.', source: 'The New Yorker' },
  { text: 'The rare platform that feels edited, not algorithmic.', source: 'Monocle' },
]

export default function PressPage() {
  const [copied, setCopied] = useState(false)

  return (
    <PageShell
      eyebrow="Press Room"
      title="Stories About Us"
      description="Media resources, brand assets, and the press coverage that has chronicled our quiet ascent. Journalists and editors welcome."
      actions={
        <a
          href="mailto:press@webweaversonline.com"
          onClick={(e) => {
            e.preventDefault()
            navigator.clipboard?.writeText('press@webweaversonline.com')
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
          }}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#b88a5e] to-[#8b6240] px-6 py-3 text-sm font-medium text-white shadow-lg hover:scale-105"
        >
          {copied ? 'Copied!' : 'press@webweaversonline.com'}
          <ArrowRight className="h-4 w-4" />
        </a>
      }
    >
      <div className="grid gap-6 md:grid-cols-2">
        {quotes.map((q, i) => (
          <div
            key={i}
            className={`relative rounded-3xl p-8 sm:p-10 ${
              i === 0
                ? 'bg-gradient-to-br from-[#8b6240] to-[#b88a5e] text-white'
                : 'bg-gradient-to-br from-[#fbf3e8] to-[#e6c9a8] text-[#3d2a1c]'
            }`}
          >
            <Quote className={`h-8 w-8 ${i === 0 ? 'text-[#f5d9b8]' : 'text-[#8b6240]'}`} />
            <p className="mt-5 font-serif text-2xl font-medium leading-snug">"{q.text}"</p>
            <p className={`mt-5 text-xs font-medium uppercase tracking-[0.24em] ${i === 0 ? 'text-[#f5d9b8]' : 'text-[#8b6240]'}`}>
              — {q.source}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <div className="flex items-end justify-between border-b border-[#e6d5c2] pb-5">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b6240]">Brand Assets</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-[#3d2a1c]">Download the Press Kit</h2>
          </div>
          <Download className="h-6 w-6 text-[#8b6240]" />
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {assets.map((a) => (
            <div
              key={a.id}
              className="group flex items-start gap-4 rounded-2xl border border-[#e6d5c2] bg-white p-6 transition-all hover:border-[#c89c70] hover:shadow-lg"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#fbf3e8] to-[#e6c9a8] text-[#8b6240]">
                {a.fileType === 'PDF' ? <FileText className="h-5 w-5" /> : <ImageIcon className="h-5 w-5" />}
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold text-[#3d2a1c]">{a.title}</h3>
                <p className="mt-1 text-sm text-[#6e5547]">{a.description}</p>
                <div className="mt-3 flex items-center gap-3 text-xs text-[#a08161]">
                  <span className="rounded-full bg-[#fbf3e8] px-2.5 py-0.5 font-medium text-[#8b6240]">{a.fileType}</span>
                  <span>{a.size}</span>
                </div>
              </div>
              <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fbf3e8] text-[#8b6240] transition-colors group-hover:bg-[#8b6240] group-hover:text-white">
                <Download className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <div className="border-b border-[#e6d5c2] pb-5">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b6240]">In the Press</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-[#3d2a1c]">Recent Coverage</h2>
        </div>
        <div className="mt-8 divide-y divide-[#e6d5c2] rounded-2xl border border-[#e6d5c2] bg-white">
          {coverage.map((c) => (
            <a
              key={c.headline}
              href={c.url}
              className="group flex items-center justify-between gap-4 p-6 transition-colors hover:bg-[#fbf3e8]"
            >
              <div className="flex-1">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b6240]">{c.outlet}</p>
                <h3 className="mt-2 font-serif text-lg font-semibold text-[#3d2a1c] group-hover:text-[#8b6240]">{c.headline}</h3>
                <p className="mt-1 text-xs text-[#a08161]">{c.date}</p>
              </div>
              <ExternalLink className="h-5 w-5 text-[#8b6240]" />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#e6c9a8] to-[#fbf3e8] p-10 text-center">
        <Award className="mx-auto h-8 w-8 text-[#8b6240]" />
        <h2 className="mt-5 font-serif text-3xl font-semibold text-[#3d2a1c] sm:text-4xl">
          Working on a story?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-[#6e5547]">
          We are always happy to speak with journalists, editors, and researchers. Expect a thoughtful response within one business day.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#b88a5e] to-[#8b6240] px-6 py-3 text-sm font-medium text-white shadow-lg hover:scale-105"
        >
          Get in touch
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </PageShell>
  )
}
