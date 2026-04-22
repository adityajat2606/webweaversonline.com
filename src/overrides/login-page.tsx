'use client'

import { Suspense, useState, type FormEvent } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { Mail, Lock, ArrowRight, Sparkles, AlertCircle } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'

export const LOGIN_PAGE_OVERRIDE_ENABLED = true

export function LoginPageOverride() {
  return (
    <Suspense fallback={null}>
      <LoginInner />
    </Suspense>
  )
}

function LoginInner() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { login, isLoading } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password.')
      return
    }
    try {
      await login(email.trim(), password)
      const redirect = searchParams?.get('redirect') || '/dashboard'
      router.push(redirect)
    } catch (err) {
      setError('Unable to sign in. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-[#c89977]">
      <div className="mx-auto max-w-7xl bg-[#fdf8f1] shadow-2xl">
        <main className="flex min-h-screen items-center px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto grid w-full max-w-5xl gap-0 overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_rgba(139,98,64,0.2)] lg:grid-cols-2">
            <div className="relative hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80"
                alt="Welcome back"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#3d2a1c]/70 via-[#8b6240]/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-10 text-white">
                <Sparkles className="h-7 w-7 text-[#f5d9b8]" />
                <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight">
                  Welcome back to<br />your discovery journey
                </h2>
                <p className="mt-3 max-w-sm text-sm text-white/85">
                  Pick up where you left off. Your saved listings and personalized recommendations are waiting.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-12">
              <Link href="/" className="mb-8 inline-flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e6d5c2] bg-white p-1.5">
                  <img src="/favicon.png?v=20260401" alt="Logo" className="h-full w-full object-contain" />
                </div>
                <span className="font-serif text-lg font-semibold text-[#8b6240]">Sign in</span>
              </Link>

              <h1 className="font-serif text-3xl font-semibold text-[#3d2a1c]">Hello, welcome back</h1>
              <p className="mt-2 text-sm text-[#6e5547]">Enter your details to access your account.</p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                {error && (
                  <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

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
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-[#8b6240]">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#a08161]" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="h-12 w-full rounded-full border border-[#e6d5c2] bg-[#fbf3e8] pl-11 pr-4 text-sm text-[#3d2a1c] placeholder:text-[#a08161] focus:border-[#8b6240] focus:outline-none"
                      autoComplete="current-password"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-[#6e5547]">
                    <input type="checkbox" className="h-4 w-4 rounded border-[#e6d5c2] text-[#8b6240]" />
                    Remember me
                  </label>
                  <Link href="/forgot-password" className="font-medium text-[#8b6240] hover:underline">
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#b88a5e] to-[#8b6240] text-sm font-medium text-white shadow-lg transition-transform hover:scale-[1.02] disabled:opacity-60"
                >
                  {isLoading ? 'Signing in...' : (<>Sign in <ArrowRight className="h-4 w-4" /></>)}
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-[#6e5547]">
                Don't have an account?{' '}
                <Link href="/register" className="font-medium text-[#8b6240] hover:underline">
                  Create one
                </Link>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
