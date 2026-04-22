'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { Mail, ArrowLeft, CheckCircle2, Sparkles } from 'lucide-react'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setSent(true)
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#c89977]">
      <div className="mx-auto max-w-7xl bg-[#fdf8f1] shadow-2xl">
        <main className="flex min-h-screen items-center px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-md">
            <Link
              href="/login"
              className="mb-8 inline-flex items-center gap-2 text-sm text-[#6e5547] transition-colors hover:text-[#8b6240]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to sign in
            </Link>

            <div className="rounded-3xl border border-[#e6d5c2] bg-white p-8 shadow-[0_30px_80px_rgba(139,98,64,0.15)] sm:p-10">
              <div className="mb-8 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e6d5c2] bg-white p-1.5">
                  <img src="/favicon.png?v=20260401" alt="Logo" className="h-full w-full object-contain" />
                </div>
                <span className="font-serif text-lg font-semibold text-[#8b6240]">Reset password</span>
              </div>

              {!sent ? (
                <>
                  <h1 className="font-serif text-3xl font-semibold text-[#3d2a1c]">Forgot it happens</h1>
                  <p className="mt-2 text-sm text-[#6e5547]">
                    Enter your email and we will send you a secure link to set a new password.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                    <div>
                      <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-[#8b6240]">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#a08161]" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com"
                          className="h-12 w-full rounded-full border border-[#e6d5c2] bg-[#fbf3e8] pl-11 pr-4 text-sm text-[#3d2a1c] placeholder:text-[#a08161] focus:border-[#8b6240] focus:outline-none"
                          autoComplete="email"
                          required
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#b88a5e] to-[#8b6240] text-sm font-medium text-white shadow-lg transition-transform hover:scale-[1.02] disabled:opacity-60"
                    >
                      {loading ? 'Sending...' : 'Send reset link'}
                    </button>
                  </form>

                  <p className="mt-6 text-center text-sm text-[#6e5547]">
                    Remembered it?{' '}
                    <Link href="/login" className="font-medium text-[#8b6240] hover:underline">
                      Sign in
                    </Link>
                  </p>
                </>
              ) : (
                <div className="py-4 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#b88a5e] to-[#8b6240] text-white shadow-lg">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h1 className="mt-6 font-serif text-2xl font-semibold text-[#3d2a1c]">Check your email</h1>
                  <p className="mt-3 text-sm text-[#6e5547]">
                    We sent a reset link to <span className="font-medium text-[#8b6240]">{email}</span>
                  </p>
                  <p className="mt-2 text-xs text-[#a08161]">
                    The link expires in 30 minutes. Check your spam folder if you do not see it.
                  </p>
                  <Link
                    href="/login"
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#e6d5c2] px-6 py-3 text-sm font-medium text-[#8b6240] hover:bg-[#fbf3e8]"
                  >
                    Back to sign in
                  </Link>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-4 text-xs text-[#a08161] hover:text-[#8b6240] hover:underline"
                  >
                    Try a different email
                  </button>
                </div>
              )}
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#6e5547]">
              <Sparkles className="h-3.5 w-3.5 text-[#8b6240]" />
              Your account is always secured with end-to-end encryption
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
