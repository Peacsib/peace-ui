# Peace UI: Component Recipes & Implementation Patterns

Production-ready components and styling patterns adhering to the **Peace UI** specification across academic, fintech, and enterprise platforms.

---

## 1. Atmospheric Hero & Frosted Auth Card (LogMate Pattern)

A scenic environmental backdrop paired with editorial typography and an ultra-calm frosted glassmorphic card.

```tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { Lock, ArrowRight, User, BookOpen, Award, Upload } from 'lucide-react';

export function PeaceAtmosphericAuth() {
  const [activeTab, setActiveTab] = useState<'signin' | 'register'>('signin');

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-slate-950 font-sans">
      {/* 1. Atmospheric Photographic Background with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/background-scenic.webp')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/60 to-slate-950/75 backdrop-blur-[1px]" />
      </div>

      {/* 2. Top Bar with Anchor Institution & Brand */}
      <header className="relative z-10 px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 font-bold">
            LM
          </div>
          <span className="text-xl font-bold tracking-tight text-white font-display">
            LogMate
          </span>
        </div>
      </header>

      {/* 3. Main Split View: Editorial Pitch + Frosted Card */}
      <main className="relative z-10 px-8 py-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto w-full">
        {/* Left: Editorial Heading with Italic Serif Accents */}
        <div className="lg:col-span-7 space-y-6 text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15]">
            <span className="font-serif italic text-amber-400 font-normal">Your</span>{' '}
            Work-Related Learning Journey,{' '}
            <span className="font-serif italic text-amber-400 font-normal underline decoration-amber-400/40 decoration-wavy">
              Simplified.
            </span>
          </h1>
          <p className="text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
            Log your progress, document your activities, and track your growth.
            <span className="block text-slate-400 text-sm mt-1">All in one elegant platform.</span>
          </p>
        </div>

        {/* Right: Floating Frosted Card */}
        <div className="lg:col-span-5">
          <div className="p-8 rounded-3xl bg-slate-900/45 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.35)] space-y-6">
            <div className="text-center space-y-1">
              <h2 className="text-2xl font-light text-white">
                Welcome <span className="font-serif italic text-amber-400 font-medium">Back</span>
              </h2>
              <p className="text-[11px] font-semibold text-slate-300 tracking-wider uppercase">
                Work-Related Learning Platform
              </p>
            </div>

            {/* Segmented Pill Switcher */}
            <div className="p-1 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 grid grid-cols-2 text-xs font-semibold">
              <button
                onClick={() => setActiveTab('signin')}
                className={`py-2 rounded-lg transition-all ${
                  activeTab === 'signin'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                SIGN IN
              </button>
              <button
                onClick={() => setActiveTab('register')}
                className={`py-2 rounded-lg transition-all ${
                  activeTab === 'register'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                REGISTER
              </button>
            </div>

            {/* Form Fields with Contextual Focus */}
            <form className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-200 mb-1">
                  Email Address
                  <span className="text-[10px] text-slate-400 ml-2">Student ID or Email</span>
                </label>
                <input
                  type="email"
                  placeholder="regNumber@uofzmail.uz.ac.zw"
                  className="w-full px-4 py-2.5 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 text-sm border border-transparent focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-all"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-medium text-slate-200">Password</label>
                  <Link href="/forgot-password" className="text-xs text-amber-400/90 hover:text-amber-300">
                    Forgot password?
                  </Link>
                </div>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2.5 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 text-sm border border-transparent focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#0A3E94] hover:bg-[#0c4bb3] text-white font-semibold text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2 group active:scale-[0.99]"
              >
                <span>Sign In</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Quiet Security Signal */}
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-300">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Secure, encrypted connection</span>
              </div>
            </form>

            <p className="text-center text-[11px] text-slate-400">
              &copy; 2026 University of Zimbabwe &middot; LogMate
            </p>
          </div>
        </div>
      </main>

      {/* 4. Bottom Capability Dock & Attribution Footer */}
      <div className="relative z-10 px-8 py-6 space-y-4 max-w-7xl mx-auto w-full">
        <PeaceCapabilityDock />
        <PeaceCraftAttribution />
      </div>
    </div>
  );
}
```

---

## 2. Frosted Capability Dock

Floating capability cards anchored at the base of landing screens.

```tsx
import React from 'react';
import { GraduationCap, BookOpen, TrendingUp, UploadCloud } from 'lucide-react';

const CAPABILITIES = [
  {
    icon: GraduationCap,
    title: 'Track Placements',
    subtitle: 'Submit and manage your work details',
  },
  {
    icon: BookOpen,
    title: 'Keep Logbooks',
    subtitle: 'Record your activities, reflections and tasks',
  },
  {
    icon: TrendingUp,
    title: 'Build Skills',
    subtitle: 'Track and develop your professional capabilities',
  },
  {
    icon: UploadCloud,
    title: 'Upload Evidence',
    subtitle: 'Document your work with files and images',
  },
];

export function PeaceCapabilityDock() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {CAPABILITIES.map((cap, i) => {
        const Icon = cap.icon;
        return (
          <div
            key={i}
            className="p-3.5 rounded-2xl bg-white/[0.08] hover:bg-white/[0.12] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer group shadow-sm"
          >
            <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-amber-300 mb-2 group-hover:scale-105 transition-transform">
              <Icon className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-semibold text-white tracking-tight">
              {cap.title}
            </h3>
            <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
              {cap.subtitle}
            </p>
          </div>
        );
      })}
    </div>
  );
}
```

---

## 3. Dual-Ring Digital Verification Stamp

An authentic verification stamp for official receipts, bank vouchers, or approved academic logbooks.

```tsx
export function PeaceDigitalStamp({
  date = new Date().toLocaleDateString('en-GB'),
  reference = 'UZ-WRL-VERIF',
  institution = 'UNIVERSITY OF ZIMBABWE ELECTRONIC VERIFICATION',
  status = 'LOGBOOK OFFICIALLY APPROVED',
}: {
  date?: string;
  reference?: string;
  institution?: string;
  status?: string;
}) {
  return (
    <div
      className="relative flex flex-col items-center justify-center p-3 w-40 h-40 rounded-full border-2 border-dashed border-emerald-700/80 text-emerald-800 select-none transform -rotate-6 shadow-sm"
      aria-label="Digital Verification Stamp"
    >
      {/* Outer concentric ring */}
      <div className="absolute inset-1 rounded-full border border-emerald-700/40 pointer-events-none" />

      {/* Stamp Authority Headers */}
      <div className="text-[9px] font-bold tracking-widest text-center uppercase leading-tight px-2">
        {institution}
      </div>

      <div className="my-1 w-24 h-px bg-emerald-700/30" />

      {/* Core Stamp Status */}
      <div className="text-[10px] font-extrabold tracking-wider text-center uppercase text-emerald-900">
        {status}
      </div>

      {/* Date & Ref */}
      <div className="mt-1 text-[8px] font-mono tracking-tighter text-emerald-700">
        {date}
      </div>
      <div className="text-[7px] font-mono tracking-widest text-emerald-600">
        {reference}
      </div>

      <div className="my-1 w-20 h-px bg-emerald-700/30" />

      <div className="text-[7.5px] font-semibold tracking-wider uppercase text-emerald-800">
        AUTHORISED SIGN-OFF
      </div>
    </div>
  );
}
```

---

## 4. Multi-Step Form Capsule Progression

Clean progress indication for complex student or enterprise onboarding.

```tsx
export function PeaceStepProgress({
  currentStep,
  totalSteps,
  stepLabel,
}: {
  currentStep: number;
  totalSteps: number;
  stepLabel: string;
}) {
  return (
    <div className="space-y-2 text-center">
      <div className="text-xs font-medium text-slate-300">
        Step {currentStep} of {totalSteps} &middot;{' '}
        <span className="text-amber-400 font-semibold">{stepLabel}</span>
      </div>
      <div className="flex items-center justify-center gap-1.5">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i + 1 === currentStep
                ? 'w-8 bg-amber-400'
                : i + 1 < currentStep
                ? 'w-6 bg-white/60'
                : 'w-4 bg-white/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
```

---

## 5. Author Craft Attribution Footer

Dignified, understated creator signature.

```tsx
export function PeaceCraftAttribution() {
  return (
    <footer className="w-full text-center py-2 text-xs text-slate-400 font-normal">
      <span>Crafted with excellence by </span>
      <a
        href="https://www.linkedin.com/in/peacesibanda/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-slate-200 hover:text-amber-400 transition-colors underline decoration-slate-500/40 hover:decoration-amber-400"
      >
        Peace Sibanda
      </a>
    </footer>
  );
}
```
