import React from "react";
import { Search, RotateCcw } from "lucide-react";

const StudentFilters = ({
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

    resetFilters,
}) => {
    return (
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

            {/* Search */}
            <div className="relative w-full lg:w-80">
                <Search
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                    type="text"
                    placeholder="Search name, email, phone..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full border rounded-xl py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-900"
                />
            </div>

            <div className="flex flex-wrap gap-3">

                {/* College */}

                <select
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    className="border rounded-xl px-4 py-2"
                >
                    <option value="">All Colleges</option>

                    {colleges.map((item) => (
                        <option
                            key={item}
                            value={item}
                        >
                            {item}
                        </option>
                    ))}
                </select>

                {/* Year */}

                <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="border rounded-xl px-4 py-2"
                >
                    <option value="">All Years</option>

                    {years.map((item) => (
                        <option
                            key={item}
                            value={item}
                        >
                            {item}
                        </option>
                    ))}
                </select>

                {/* Reward */}

                <select
                    value={reward}
                    onChange={(e) => setReward(e.target.value)}
                    className="border rounded-xl px-4 py-2"
                >
                    <option value="">Reward Status</option>

                    <option value="PENDING">
                        Pending
                    </option>

                    <option value="UNLOCKED">
                        Unlocked
                    </option>
                </select>

                {/* Reset */}

                <button
                    onClick={resetFilters}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition"
                >
                    <RotateCcw size={16} />
                    Reset
                </button>

            </div>
        </div>
    );
};

export default StudentFilters;