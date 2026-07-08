import React, { useState, useEffect } from 'react'
import StatCard from "../components/common/StatCard.jsx"
import ReferralGrowth from '../components/Dashboard/ReferralGrowth.jsx'
import SurveyResponseTrend from '../components/Dashboard/SurveyResponseTrend.jsx'
import RecentActivity from '../components/Dashboard/RecentActivity.jsx'
import LeaderboardTable from "../components/referrals/LeaderboardTable";
import {
  Users,
  FileText,
  Share2,
  Wallet,
} from "lucide-react";

import { getAllUsers } from "../../services/adminService.js"

const AdminDashboard = () => {
  const [users, setUsers] = useState({
    totalUsers: 0,
    users: [],
  });


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getAllUsers();
        // console.log(res);

        setUsers(res);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  const TotalReferrals =
    users.users?.reduce(
      (sum, user) => sum + user.referralCount,
      0
    ) ?? 0;





  return (
    <div className="p-6 bg-slate-50 min-h-screen space-y-8">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <StatCard
          title="Total Students"
          value={users.totalUsers}
          // subtitle={`↑${users.totalUsers}%  this month`}
          subtitleColor="text-green-500"
          Icon={Users}
        />

        <StatCard
          title="Responses"
          value="1,089"
          // subtitle="87.3% rate"
          subtitleColor="text-orange-500"
          Icon={FileText}
        />

        <StatCard
          title="Referrals"
          value={TotalReferrals}
          // subtitle="↑ 18% this month"
          subtitleColor="text-green-500"
          Icon={Share2}
        />

        <StatCard
          title="Revenue"
          value="₹24.5k"
          // subtitle="847 payments"
          subtitleColor="text-green-500"
          Icon={Wallet}
        />

      </div>
      {/* 2. Charts and Lists Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {/* Top Left: Referral Growth Chart */}
        <ReferralGrowth
          users={users.users || []}
        />

        {/* Top Right: Survey Response Trend */}
        <SurveyResponseTrend
          users={users.users || []}
        />

        {/* Bottom Left: Recent Activity */}
        <RecentActivity
          users={users.users || []}
        />

        {/* Bottom Right: Top Referrers */}
        <LeaderboardTable users={users.users || []} />
      </div>

    </div>
  )
}

export default AdminDashboard;