'use client'

import { useState } from 'react'
import { ContentImage } from '@/components/shared/content-image'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'

export function ClickablePhotoGrid({ images, title }: { images: string[]; title: string }) {
  const [activeImage, setActiveImage] = useState<string | null>(null)

  return (
    <>
      <div className="grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-3">
        {images.slice(0, 6).map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setActiveImage(image)}
            className="relative h-44 overflow-hidden rounded-lg border border-slate-200 bg-slate-100 transition hover:scale-[1.01] hover:shadow-md"
          >
            <ContentImage src={image} alt={`${title} photo ${index + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>

      <Dialog open={Boolean(activeImage)} onOpenChange={(open) => !open && setActiveImage(null)}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none" showCloseButton>
          <DialogTitle className="sr-only">{title} photo preview</DialogTitle>
          {activeImage ? (
            <div className="relative h-[70vh] w-full overflow-hidden rounded-lg bg-black">
              <ContentImage src={activeImage} alt={`${title} enlarged photo`} fill className="object-contain" />
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  )
}
