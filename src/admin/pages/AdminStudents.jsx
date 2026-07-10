import React, { useEffect, useState } from "react";
import { Download } from "lucide-react";

import { getAllUsers } from "../../services/adminService";
import { exportCSV } from "../../utils/exportCSV";

import useUserFilters from "../hooks/useUserFilters";

import StudentFilters from "../components/student/StudentFilters";
import StudentTable from "../components/student/StudentTable";
import StudentCard from "../components/student/StudentCard";

const Students = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const {
        filteredUsers,

        search,
        setSearch,

        college,
        setCollege,

        year,
        setYear,

        reward,
        setReward,

        colleges,
        years,

        resetFilters

    } = useUserFilters(users);

    useEffect(() => {

        const fetchUsers = async () => {

            try {

                setLoading(true);

                const res = await getAllUsers();

                setUsers(res?.users || []);

            } catch (error) {

                console.log(error);

                setUsers([]);

            } finally {

                setLoading(false);

            }

        };

        fetchUsers();

    }, []);

    const MAX_REFERRALS = 3;

    const renderDots = (count = 0) => {

        return (

            <div className="flex gap-1.5">

                {Array.from(
                    { length: MAX_REFERRALS },
                    (_, index) => (

                        <div
                            key={index}
                            className={`h-2.5 w-2.5 rounded-full ${index < count
                                ? "bg-green-500"
                                : "bg-gray-200"
                                }`}
                        />

                    )
                )}

            </div>

        );

    };

    const getBadgeStyle = (status) => {

        switch (status) {

            case "UNLOCKED":
                return "bg-green-100 text-green-700";

            case "PENDING":
                return "bg-yellow-100 text-yellow-700";

            case "FAILED":
                return "bg-red-100 text-red-700";

            case "PAID":
                return "bg-green-100 text-green-700";

            default:
                return "bg-gray-100 text-gray-600";

        }

    };

    if (loading) {

        return (

            <div className="min-h-screen flex justify-center items-center">

                Loading...

            </div>

        );

    }

    return (

        <div className="p-6 bg-slate-50 min-h-screen space-y-6">

            <div className="flex justify-between items-center">

                <StudentFilters

                    search={search}
                    setSearch={setSearch}

                    college={college}
                    setCollege={setCollege}

                    year={year}
                    setYear={setYear}

                    reward={reward}
                    setReward={setReward}

                    colleges={colleges}

                    years={years}

                    resetFilters={resetFilters}

                />

                <button
                    onClick={() => exportCSV(filteredUsers)}
                    className="flex items-center gap-2 bg-blue-950 text-white px-5 py-2 rounded-xl"
                >

                    <Download size={18} />

                    Export CSV

                </button>

            </div>

            {

                filteredUsers.length === 0 ?

                    (

                        <div className="bg-white rounded-2xl p-10 text-center text-gray-500">

                            No Students Found

                        </div>

                    )

                    :

                    (

                        <>

                            <StudentCard

                                students={filteredUsers}

                                renderDots={renderDots}

                                getBadgeStyle={getBadgeStyle}

                            />

                            <StudentTable

                                students={filteredUsers}

                                renderDots={renderDots}

                                getBadgeStyle={getBadgeStyle}

                            />

                        </>

                    )

            }

        </div>

    );

};

export default Students;