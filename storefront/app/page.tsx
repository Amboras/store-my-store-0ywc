'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import {
  ArrowRight,
  Truck,
  Shield,
  RotateCcw,
  Zap,
  Headphones,
  Cpu,
  Wifi,
  Star,
  ChevronRight,
  Package,
  BadgeCheck,
} from 'lucide-react'
import CollectionSection from '@/components/marketing/collection-section'
import { useCollections } from '@/hooks/use-collections'
import { HERO_PLACEHOLDER, LIFESTYLE_PLACEHOLDER } from '@/lib/utils/placeholder-images'

const FEATURES = [
  {
    icon: Headphones,
    title: 'Premium Audio',
    desc: 'Engineered for audiophiles who demand clarity.',
  },
  {
    icon: Cpu,
    title: 'Latest Chips',
    desc: 'Powered by next-gen processors for seamless performance.',
  },
  {
    icon: Wifi,
    title: 'Always Connected',
    desc: 'Advanced wireless technology for zero-lag experiences.',
  },
  {
    icon: Shield,
    title: '2-Year Warranty',
    desc: 'Every product backed by our premium protection plan.',
  },
]

const TRUST_STATS = [
  { value: '50K+', label: 'Happy Customers' },
  { value: '4.9', label: 'Average Rating' },
  { value: '2-Year', label: 'Warranty' },
  { value: '30-Day', label: 'Free Returns' },
]

export default function HomePage() {
  const { data: collections, isLoading } = useCollections()
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.trim()) return
    setSubmitted(true)
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-[#0d1520] overflow-hidden">
        {/* Background grid texture */}
        <div className="absolute inset-0 tech-grid opacity-60" />
        {/* Blue radial glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative grid lg:grid-cols-2 gap-10 items-center py-20 lg:py-32">
          {/* Text */}
          <div className="space-y-7 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5">
              <Zap className="h-3.5 w-3.5 text-blue-400" />
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">New Arrivals 2025</span>
            </div>
            <h1 className="text-[3.25rem] lg:text-[4.5rem] font-heading font-bold text-white leading-[1.05] tracking-tight">
              Sound That<br />
              <span className="text-blue-400">Moves You.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-md leading-relaxed">
              Discover precision-engineered audio and smart electronics built for the way you live, work, and play.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide transition-all rounded-sm shadow-lg shadow-blue-500/25"
                prefetch={true}
              >
                Shop Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-slate-600 text-slate-300 hover:border-blue-400 hover:text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide transition-all rounded-sm"
                prefetch={true}
              >
                Our Story
              </Link>
            </div>
            {/* Mini trust bar */}
            <div className="flex items-center gap-1 pt-2">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-sm text-slate-400">4.9/5 from 50,000+ customers</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden bg-[#141e2d] glow-blue">
              <Image
                src={HERO_PLACEHOLDER}
                alt="VoltEdge — Premium Electronics"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-90"
                priority
              />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3.5 text-white">
                <p className="text-xs text-slate-300 uppercase tracking-widest">Limited Stock</p>
                <p className="text-lg font-bold mt-0.5">Only 14 left</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-blue-500">
        <div className="container-custom py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-white font-heading">{stat.value}</p>
                <p className="text-sm text-blue-100 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section className="py-section bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-500 font-semibold mb-3">Why VoltEdge</p>
            <h2 className="text-h2 font-heading font-bold text-balance">
              Built Different. Priced Right.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feat) => (
              <div
                key={feat.title}
                className="group p-6 rounded-xl border border-border hover:border-blue-400/50 bg-muted/30 hover:bg-blue-500/5 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <feat.icon className="h-5 w-5 text-blue-500" strokeWidth={1.75} />
                </div>
                <h3 className="font-heading font-semibold text-base mb-1.5">{feat.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Collections ── */}
      {isLoading ? (
        <section className="py-section">
          <div className="container-custom">
            <div className="animate-pulse space-y-4 text-center">
              <div className="h-3 w-20 bg-muted rounded mx-auto" />
              <div className="h-8 w-64 bg-muted rounded mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-[3/4] bg-muted rounded animate-pulse" />
              ))}
            </div>
          </div>
        </section>
      ) : collections && collections.length > 0 ? (
        <>
          {collections.map((collection: { id: string; handle: string; title: string; metadata?: Record<string, unknown> }, index: number) => (
            <CollectionSection
              key={collection.id}
              collection={collection}
              alternate={index % 2 === 1}
            />
          ))}
        </>
      ) : null}

      {/* ── Brand Editorial ── */}
      <section className="py-section bg-[#0d1520] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="aspect-[4/5] rounded-xl overflow-hidden relative bg-[#141e2d]">
              <Image
                src={LIFESTYLE_PLACEHOLDER}
                alt="VoltEdge — Engineered for Life"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-80"
              />
            </div>
            <div className="space-y-6 text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold">Our Philosophy</p>
              <h2 className="text-h2 font-heading font-bold leading-tight">
                Engineered for<br />Real Life.
              </h2>
              <p className="text-slate-400 leading-relaxed">
                We believe great technology should be accessible. Every VoltEdge product is built with premium components, rigorously tested, and priced for the everyday tech enthusiast — not just the elite.
              </p>
              <ul className="space-y-3">
                {['Premium components at honest prices', 'Tested to last 5+ years', 'Backed by real customer support'].map((pt) => (
                  <li key={pt} className="flex items-center gap-3 text-sm text-slate-300">
                    <BadgeCheck className="h-4 w-4 text-blue-400 flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors pt-2"
                prefetch={true}
              >
                Our Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust / Shipping Bar ── */}
      <section className="py-section-sm border-y bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            <div className="flex items-center gap-4 justify-center text-center md:text-left md:justify-start">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <Truck className="h-5 w-5 text-blue-500" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-semibold">Free Shipping</p>
                <p className="text-xs text-muted-foreground">On orders over ₹999</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <RotateCcw className="h-5 w-5 text-blue-500" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-semibold">30-Day Returns</p>
                <p className="text-xs text-muted-foreground">No questions asked</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-end text-center md:text-right">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-blue-500" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-semibold">Secure Checkout</p>
                <p className="text-xs text-muted-foreground">256-bit SSL encryption</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Shop CTA ── */}
      <section className="py-section bg-muted/30">
        <div className="container-custom">
          <div className="rounded-2xl bg-gradient-to-br from-[#0d1520] to-[#0f2240] border border-blue-500/20 overflow-hidden relative px-8 py-14 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-4">Limited Time</p>
              <h2 className="text-h2 font-heading font-bold text-white mb-4">
                Up to 25% Off Select Models
              </h2>
              <p className="text-slate-400 mb-8 max-w-md mx-auto">
                Stock is limited. Grab the electronics you have been waiting for before they sell out.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 text-sm font-semibold uppercase tracking-wide transition-all rounded-sm shadow-lg shadow-blue-500/30"
                prefetch={true}
              >
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-section border-t bg-background">
        <div className="container-custom max-w-xl text-center">
          <Package className="h-8 w-8 mx-auto text-blue-500 mb-4" strokeWidth={1.5} />
          <h2 className="text-h2 font-heading font-bold">Stay in the Loop</h2>
          <p className="mt-3 text-muted-foreground">
            Early access to new drops, exclusive deals, and tech tips straight to your inbox.
          </p>
          {submitted ? (
            <div className="mt-8 flex items-center justify-center gap-2 text-blue-500 font-semibold">
              <BadgeCheck className="h-5 w-5" />
              You are on the list!
            </div>
          ) : (
            <form className="mt-8 flex gap-2" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 border border-border bg-transparent px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-blue-500 focus:outline-none transition-colors rounded-sm"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors whitespace-nowrap rounded-sm"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
