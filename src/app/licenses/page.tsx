import { ExternalLink, Code, Type, Image as ImageIcon, Package } from 'lucide-react'
import { PageShell } from '@/components/shared/page-shell'

const licenses = [
  { category: 'Framework', icon: Code, items: [
    { name: 'Next.js', license: 'MIT', url: 'https://github.com/vercel/next.js' },
    { name: 'React', license: 'MIT', url: 'https://github.com/facebook/react' },
    { name: 'Tailwind CSS', license: 'MIT', url: 'https://github.com/tailwindlabs/tailwindcss' },
  ]},
  { category: 'UI', icon: Package, items: [
    { name: 'Radix UI', license: 'MIT', url: 'https://github.com/radix-ui/primitives' },
    { name: 'Lucide Icons', license: 'ISC', url: 'https://github.com/lucide-icons/lucide' },
    { name: 'shadcn/ui', license: 'MIT', url: 'https://github.com/shadcn-ui/ui' },
  ]},
  { category: 'Typography', icon: Type, items: [
    { name: 'Fraunces', license: 'OFL-1.1', url: 'https://fonts.google.com/specimen/Fraunces' },
    { name: 'Manrope', license: 'OFL-1.1', url: 'https://fonts.google.com/specimen/Manrope' },
  ]},
  { category: 'Imagery', icon: ImageIcon, items: [
    { name: 'Unsplash Photography', license: 'Unsplash License', url: 'https://unsplash.com/license' },
    { name: 'Pravatar', license: 'Free for personal/commercial', url: 'https://pravatar.cc' },
  ]},
]

export default function LicensesPage() {
  return (
    <PageShell
      eyebrow="Licenses & Credits"
      title="Standing on Good Shoulders"
      description="This platform is built with — and indebted to — the open source community. Here is every library, font, and asset that helped us make it possible."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {licenses.map((cat) => (
          <div key={cat.category} className="rounded-2xl border border-[#e6d5c2] bg-white p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#fbf3e8] to-[#e6c9a8] text-[#8b6240]">
                <cat.icon className="h-5 w-5" />
              </div>
              <h2 className="font-serif text-xl font-semibold text-[#3d2a1c]">{cat.category}</h2>
            </div>
            <ul className="mt-5 divide-y divide-[#e6d5c2]">
              {cat.items.map((item) => (
                <li key={item.name} className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium text-[#3d2a1c]">{item.name}</p>
                    <p className="text-xs text-[#a08161]">{item.license}</p>
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full text-[#8b6240] transition-colors hover:bg-[#fbf3e8]"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#e6c9a8] to-[#fbf3e8] p-7 text-sm text-[#6e5547]">
        <p className="font-serif text-lg font-semibold text-[#3d2a1c]">A note of thanks</p>
        <p className="mt-3 leading-7">
          To every maintainer, contributor, and creator whose work appears above — thank you. This platform would not exist without you. If we have missed a credit or license, please let us know and we will add it immediately.
        </p>
      </div>
    </PageShell>
  )
}
