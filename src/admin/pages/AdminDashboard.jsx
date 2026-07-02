// import { Box } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import StatCard from "../components/common/StatCard.jsx"
import ReferralGrowth from '../components/Dashboard/ReferralGrowth.jsx'
import SurveyResponseTrend from '../components/Dashboard/SurveyResponseTrend.jsx'
import RecentActivity from '../components/Dashboard/RecentActivity.jsx'
import TopReferrers from '../components/Dashboard/TopReferrers.jsx'
import {
  Users,
  FileText,
  Share2,
  Wallet,
} from "lucide-react";

import { getAllUsers } from "../../services/adminService.js"

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getAllUsers();
        console.log(res);

        setUsers(res);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);
  // console.log("users:", users.totalUsers)

  return (
    <div className="p-6 bg-slate-50 min-h-screen space-y-8">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <StatCard
          title="Total Students"
          value={users.totalUsers}
          subtitle="↑ 12% this month"
          subtitleColor="text-green-500"
          Icon={Users}
        />

        <StatCard
          title="Responses"
          value="1,089"
          subtitle="87.3% rate"
          subtitleColor="text-orange-500"
          Icon={FileText}
        />

        <StatCard
          title="Referrals"
          value="2,341"
          subtitle="↑ 18% this month"
          subtitleColor="text-green-500"
          Icon={Share2}
        />

        <StatCard
          title="Revenue"
          value="₹24.5k"
          subtitle="847 payments"
          subtitleColor="text-green-500"
          Icon={Wallet}
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