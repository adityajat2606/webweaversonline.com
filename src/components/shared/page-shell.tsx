'use client'

import type { ReactNode } from 'react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { Sparkles } from 'lucide-react'

export function PageShell({
  title,
  description,
  actions,
  eyebrow,
  children,
}: {
  title: string
  description?: string
  actions?: ReactNode
  eyebrow?: string
  children?: ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#c89977]">
      <div className="mx-auto max-w-7xl bg-[#fdf8f1] shadow-2xl">
        <NavbarShell />
        <main>
          <section className="relative overflow-hidden border-b border-[#e6d5c2]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#fbf3e8] via-[#fdf8f1] to-[#f5e7d0] opacity-70" />
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#e6c9a8]/40 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#c89c70]/30 blur-3xl" />
            <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#e6d5c2] bg-white/80 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.24em] text-[#8b6240] backdrop-blur">
                    <Sparkles className="h-3.5 w-3.5" />
                    {eyebrow || 'Webweaversonline'}
                  </div>
                  <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-[#3d2a1c] sm:text-5xl">
                    {title}
                  </h1>
                  {description && (
                    <p className="mt-4 max-w-2xl text-base leading-7 text-[#6e5547]">{description}</p>
                  )}
                </div>
                {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
              </div>
            </div>
          </section>
          <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            {children}
          </section>
        </main>
        <Footer />
      </div>
    </div>
  )
}
