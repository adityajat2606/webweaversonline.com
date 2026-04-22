import { CheckCircle2, Activity, Clock, TrendingUp } from 'lucide-react'
import { PageShell } from '@/components/shared/page-shell'

const services = [
  { name: 'Website', status: 'Operational', uptime: '99.99%' },
  { name: 'Search API', status: 'Operational', uptime: '99.97%' },
  { name: 'Listings Directory', status: 'Operational', uptime: '99.99%' },
  { name: 'Image CDN', status: 'Operational', uptime: '100.00%' },
  { name: 'Authentication', status: 'Operational', uptime: '99.98%' },
  { name: 'Email Delivery', status: 'Operational', uptime: '99.95%' },
]

const incidents = [
  { date: 'March 12, 2026', title: 'Delayed email notifications', status: 'Resolved', duration: '42 min', note: 'Root cause identified and patched. No data loss.' },
  { date: 'February 22, 2026', title: 'Search indexing lag', status: 'Resolved', duration: '1h 15m', note: 'New listings took longer than usual to appear in search results.' },
  { date: 'January 08, 2026', title: 'Scheduled maintenance', status: 'Completed', duration: '30 min', note: 'Planned database upgrade. Read-only mode during window.' },
]

const metrics = [
  { label: '90-day uptime', value: '99.98%', icon: Activity },
  { label: 'Avg response', value: '142 ms', icon: Clock },
  { label: 'Requests / min', value: '12.4K', icon: TrendingUp },
]

export default function StatusPage() {
  return (
    <PageShell
      eyebrow="System Status"
      title="All Systems Operational"
      description="Real-time health of every service that powers the platform. Transparent, up-to-date, and honest."
    >
      <div className="flex items-center gap-4 rounded-2xl bg-gradient-to-r from-[#e6c9a8] to-[#fbf3e8] p-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md">
          <CheckCircle2 className="h-7 w-7 text-green-600" />
        </div>
        <div>
          <p className="font-serif text-xl font-semibold text-[#3d2a1c]">All services running smoothly</p>
          <p className="mt-1 text-sm text-[#6e5547]">Last checked 30 seconds ago · Updates every minute</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-2xl border border-[#e6d5c2] bg-white p-6">
            <m.icon className="h-5 w-5 text-[#8b6240]" />
            <p className="mt-4 font-serif text-3xl font-semibold text-[#3d2a1c]">{m.value}</p>
            <p className="mt-1 text-sm text-[#6e5547]">{m.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="font-serif text-2xl font-semibold text-[#3d2a1c]">Current Service Status</h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-[#e6d5c2] bg-white">
          {services.map((s, i) => (
            <div
              key={s.name}
              className={`flex items-center justify-between gap-4 p-5 ${
                i < services.length - 1 ? 'border-b border-[#e6d5c2]' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-2.5 w-2.5 items-center justify-center">
                  <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-green-400 opacity-60" />
                  <span className="relative h-2 w-2 rounded-full bg-green-500" />
                </span>
                <span className="font-serif font-medium text-[#3d2a1c]">{s.name}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-[#6e5547]">{s.uptime} uptime</span>
                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">{s.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="font-serif text-2xl font-semibold text-[#3d2a1c]">Recent Incidents</h2>
        <p className="mt-2 text-sm text-[#6e5547]">The last 90 days of platform events, fully transparent.</p>
        <div className="mt-6 space-y-4">
          {incidents.map((i) => (
            <div key={i.title} className="rounded-2xl border border-[#e6d5c2] bg-white p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#fbf3e8] px-3 py-1 text-xs font-medium text-[#8b6240]">{i.status}</span>
                <span className="text-xs text-[#a08161]">{i.date}</span>
                <span className="text-xs text-[#a08161]">·</span>
                <span className="text-xs text-[#a08161]">Duration: {i.duration}</span>
              </div>
              <h3 className="mt-3 font-serif text-lg font-semibold text-[#3d2a1c]">{i.title}</h3>
              <p className="mt-2 text-sm text-[#6e5547]">{i.note}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
