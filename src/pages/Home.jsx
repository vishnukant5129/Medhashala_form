import React from "react";
import SurveyButton from "../components/button/SurvayButton";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-5">

      {/* MAIN GRID CONTAINER */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* LEFT SIDE - HERO */}
        <section className="space-y-5">
          <div>
            <p className="text-sm font-semibold text-indigo-700 bg-indigo-50 inline-block px-3 py-1 rounded-full">
              MEDHASHALA ACCOUNTABILITY PARTNER
            </p>
          </div>

          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            MAP
          </h1>

          <h2 className="text-2xl font-semibold">
            Stay Consistent. <br />
            Stay Accountable.{" "}
            <span className="text-orange-500">Achieve Your Goals.</span>
          </h2>

          <p className="text-gray-600">
            We're building MAP to help students, professionals, founders, and learners
            stay productive, accountable, and consistent in achieving their goals.
          </p>

          <p className="text-gray-600">
            Take this quick 2-minute survey and help us understand the challenges people face
            while building better habits, routines, and productivity systems.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <SurveyButton />
            <button className="px-6 py-3 border border-indigo-700 text-indigo-700 rounded-lg font-medium">
              Learn More
            </button>
          </div>
        </section>

        {/* RIGHT SIDE - CARDS */}
        <section className="space-y-6">

          {/* Rewards Card */}
          <div className="bg-orange-50 border border-orange-100 p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold mb-3">🎁 Unlock Rewards</h3>

            <p className="text-sm text-gray-700 mb-4">
              Complete the survey and refer 3 friends:
            </p>

            <ul className="space-y-3 text-sm">
              <li>⚡ AI Prompt Template Pack</li>
              <li>📘 AI Tools Resource PDF</li>
              <li>🎯 MedhaShala AI Workshop Access</li>
            </ul>
          </div>

          {/* How it works */}
          <div className="bg-white border p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">🎯 How It Works</h3>

            <ol className="space-y-3 text-sm">
              <li>1. Complete the Survey</li>
              <li>2. Get Your Referral Code</li>
              <li>3. Invite 3 Friends</li>
              <li>4. Unlock Rewards</li>
            </ol>
          </div>

        </section>
      </div>
    </div>
  );
};

export default Home;