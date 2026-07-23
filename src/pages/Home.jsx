import React from "react";
import SurveyButton from "../components/button/SurvayButton";

const Home = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fafafa] text-gray-900">
      {/* Background Decorations */}
      <div className="absolute left-0 top-0 -z-0 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl" />
      <div className="absolute right-0 top-40 -z-0 h-96 w-96 rounded-full bg-orange-100/40 blur-3xl" />

      {/* Hero Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-5 sm:px-8 lg:px-10 lg:pt-20">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

          {/* Left Content */}
          <div className="max-w-2xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/80 px-4 py-2 text-xs font-semibold text-indigo-700 shadow-sm sm:text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>

              MEDHASHALA ACCOUNTABILITY PARTNER
            </div>

            {/* Heading */}
            <h1 className="mt-7 text-5xl font-black leading-[1.02] tracking-[-0.04em] text-gray-950 sm:text-6xl lg:text-7xl">
              Build Better
              <span className="block bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                Habits.
              </span>
              Achieve More.
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              MAP helps students, professionals, founders, and learners stay
              consistent, productive, and accountable while working toward
              their goals.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <SurveyButton />
            </div>

            {/* Trust Stats */}
            <div className="mt-12 grid max-w-lg grid-cols-3 border-t border-gray-200 pt-8">
              <div className="border-r border-gray-200">
                <p className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
                  2 Min
                </p>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Quick Survey
                </p>
              </div>

              <div className="border-r border-gray-200 px-5">
                <p className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
                  3
                </p>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Friends to Invite
                </p>
              </div>

              <div className="pl-5">
                <p className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
                  100%
                </p>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Free Rewards
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">

            {/* Soft Glow */}
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-indigo-100/60 via-transparent to-orange-100/60 blur-2xl" />

            {/* Main Card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-[0_25px_80px_-25px_rgba(79,70,229,0.25)] backdrop-blur-xl sm:p-8">

              {/* Decorative Gradient */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-100/50 blur-3xl" />

              {/* Header */}
              <div className="relative mb-8">
                <p className="text-sm font-medium text-gray-500">
                  Your journey starts here
                </p>

                <h2 className="mt-1 text-xl font-bold tracking-tight text-gray-950 sm:text-2xl">
                  How to Unlock Your Rewards
                </h2>

                <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
                  Complete these simple steps and unlock exclusive AI learning
                  resources.
                </p>
              </div>

              {/* Steps */}
              <div className="relative">

                {/* Connecting Line */}
                <div className="absolute bottom-6 left-[22px] top-6 w-px bg-gray-200" />

                {/* Step 1 */}
                <div className="relative flex gap-4 pb-5">
                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white shadow-md shadow-indigo-200">
                    1
                  </div>

                  <div className="flex-1 rounded-2xl border border-indigo-100 bg-indigo-50/80 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-gray-900">
                          Complete the Survey
                        </p>

                        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                          Tell us about your habits, goals, and productivity
                          challenges.
                        </p>
                      </div>

                      <span className="rounded-full bg-indigo-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-indigo-600">
                        Start
                      </span>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex gap-4 pb-5">
                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white font-bold text-gray-400 shadow-sm">
                    2
                  </div>

                  <div className="flex-1 rounded-2xl border border-gray-100 bg-gray-50/80 p-4">
                    <p className="font-semibold text-gray-700">
                      Get Your Referral Code
                    </p>

                    <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                      After completing the survey, receive your unique referral
                      code.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex gap-4 pb-5">
                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white font-bold text-gray-400 shadow-sm">
                    3
                  </div>

                  <div className="flex-1 rounded-2xl border border-gray-100 bg-gray-50/80 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-gray-700">
                          Invite 3 Friends
                        </p>

                        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                          Share your referral code with three friends.
                        </p>
                      </div>

                      <span className="shrink-0 rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-bold text-gray-500">
                        3 INVITES
                      </span>
                    </div>
                  </div>
                </div>

                {/* Final Reward */}
                <div className="relative flex gap-4">
                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-xl text-white shadow-md shadow-orange-200">
                    🎁
                  </div>

                  <div className="flex-1 rounded-2xl border border-orange-100 bg-gradient-to-r from-orange-50 to-amber-50 p-4">
                    <p className="font-semibold text-orange-700">
                      Unlock Your Rewards
                    </p>

                    <p className="mt-1 text-xs text-gray-600 sm:text-sm">
                      Get access to exclusive AI resources and learning
                      benefits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="relative z-10 border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">

          {/* Section Header */}
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              What You'll Unlock
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Learn More. Grow Faster.
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-gray-500">
              Complete the survey and invite three friends to unlock valuable
              resources designed to help you grow.
            </p>
          </div>

          {/* Reward Cards */}
          <div className="grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-6 transition-all hover:-translate-y-1">
              <div className="mb-4 text-3xl">⚡</div>

              <h3 className="text-lg font-bold">
                AI Prompt Template Pack
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Ready-to-use AI prompts to improve your productivity.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-100 bg-orange-50 p-6 transition-all hover:-translate-y-1">
              <div className="mb-4 text-3xl">📘</div>

              <h3 className="text-lg font-bold">
                AI Tools Resource PDF
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Discover useful AI tools for learning and productivity.
              </p>
            </div>

            <div className="rounded-2xl border border-green-100 bg-green-50 p-6 transition-all hover:-translate-y-1">
              <div className="mb-4 text-3xl">🎯</div>

              <h3 className="text-lg font-bold">
                AI Workshop Access
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Get access to an exclusive MedhaShala AI workshop.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

