import React from "react";

const StudentCard = ({
    students,
    renderDots,
    getBadgeStyle,
}) => {
    return (
        <div className="block md:hidden space-y-4">

            {students.map((student) => (

                <div
                    key={student._id}
                    className="bg-white rounded-3xl border border-gray-100 shadow-sm p-5"
                >

                    <div className="flex items-center gap-3">

                        <div className="w-11 h-11 rounded-full bg-blue-950 text-white flex items-center justify-center font-bold">

                            {student.name?.charAt(0).toUpperCase()}

                        </div>

                        <div>

                            <h3 className="font-bold">

                                {student.name}

                            </h3>

                            <p className="text-sm text-gray-400">

                                {student.college}

                            </p>

                        </div>

                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-5">

                        <div>

                            <p className="text-xs text-gray-400">
                                Email
                            </p>

                            <p className="text-sm">
                                {student.email}
                            </p>

                        </div>

                        <div>

                            <p className="text-xs text-gray-400">
                                Phone
                            </p>

                            <p className="text-sm">
                                {student.phone}
                            </p>

                        </div>

                    </div>

                    <div className="flex justify-between items-center mt-5">

                        <div className="flex items-center gap-2">

                            {renderDots(student.referralCount)}

                            <span className="text-sm">

                                {student.referralCount}/3

                            </span>

                        </div>

                        <div className="flex gap-2">

                            <span
                                className={`px-3 py-1 rounded-full text-xs font-semibold ${getBadgeStyle(
                                    student.rewardStatus
                                )}`}
                            >
                                {student.rewardStatus}
                            </span>

                            <span
                                className={`px-3 py-1 rounded-full text-xs ${getBadgeStyle(
                                    student.payment || "Pending"
                                )}`}
                            >
                                {student.payment || "Pending"}
                            </span>

                        </div>

                    </div>

                </div>

            ))}

        </div>
    );
};

export default StudentCard;