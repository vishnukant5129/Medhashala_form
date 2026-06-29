// import { Box } from 'lucide-react'
import React from 'react'
import Box from "../components/common/Box.jsx"
import ReferralGrowth from '../components/Dashboard/ReferralGrowth.jsx'
import SurveyResponseTrend from '../components/Dashboard/SurveyResponseTrend.jsx'
import RecentActivity from '../components/Dashboard/RecentActivity.jsx'
import TopReferrers from '../components/Dashboard/TopReferrers.jsx'
import { Users, Share } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="p-6 bg-slate-50 min-h-screen space-y-8">

      {/* 1. Top Cards Section (Grid added for responsive alignment) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        <Box
          title="Total Students"
          amount="14,563"
          percentage="12%"
          isPositive={true}
          Icon={Users}
        />
        <Box
          title="Responses"
          amount="14,563"
          percentage="12%"
          isPositive={true}
          Icon={Share}
        />
        <Box
          title="Referrals"
          amount="14,563"
          percentage="12%"
          isPositive={true}
          Icon={Users}
        />
        <Box
          title="Revenue"
          amount="14,563"
          percentage="12%"
          isPositive={true}
          Icon={Users}
        />
      </div>

      {/* 2. Charts and Lists Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {/* Top Left: Referral Growth Chart */}
        <ReferralGrowth />

        {/* Top Right: Survey Response Trend */}
        <SurveyResponseTrend />

        {/* Bottom Left: Recent Activity */}
        <RecentActivity />

        {/* Bottom Right: Top Referrers */}
        <TopReferrers />
      </div>

    </div>
  )
}

export default AdminDashboard;