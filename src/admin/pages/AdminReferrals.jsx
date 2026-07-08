import React, { useEffect, useState } from "react";

import {
    getAllUsers,
    getAnalytics,
} from "../../services/adminService";

import MetricCards from "../components/referrals/MetricCards";
import ReferralGrowthChart from "../components/referrals/ReferralGrowthChart";
import ReferralStatusChart from "../components/referrals/ReferralStatusChart";
import LeaderboardTable from "../components/referrals/LeaderboardTable";
import ProgressBreakdown from "../components/referrals/ProgressBreakdown";

const Referrals = () => {

    const [users, setUsers] = useState([]);
    const [analytics, setAnalytics] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchData = async () => {

            try {

                const [usersRes, analyticsRes] =
                    await Promise.all([
                        getAllUsers(),
                        getAnalytics(),
                    ]);

                setUsers(usersRes.users || []);
                setAnalytics(analyticsRes);

            } catch (err) {

                console.log(err);

            } finally {

                setLoading(false);

            }

        };

        fetchData();

    }, []);

    if (loading) {

        return (
            <div className="h-screen flex items-center justify-center">
                Loading...
            </div>
        );

    }

    return (

        <div className="space-y-6">

            <MetricCards analytics={analytics} />

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

                <div className="xl:col-span-2">
                    <ReferralGrowthChart analytics={analytics} />
                </div>

                <ReferralStatusChart users={users} />

            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                <LeaderboardTable users={users} />

                <ProgressBreakdown users={users} />

            </div>

        </div>

    );
};

export default Referrals;