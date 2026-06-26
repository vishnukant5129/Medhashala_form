import { useNavigate } from "react-router-dom";
import { COLORS } from "../../constants/colors";
import ShareCode from "../common/ShareCode.jsx"
import ReferralBox from "../common/ReferralBox.jsx";

export default function SubmitPage() {
    const navigate = useNavigate();

    return (
        <div
            className="min-h-screen flex items-center justify-center"
            style={{ backgroundColor: COLORS.background }}
        >
            <div
                className="max-w-2xl w-full bg-white rounded-3xl shadow-lg p-10 text-center"
                style={{ border: `1px solid ${COLORS.border}` }}
            >
                {/* Success Icon */}
                <div className="text-7xl mb-6">🎉</div>

                {/* Title */}
                <h1
                    className="text-4xl font-bold "
                    style={{ color: COLORS.primary }}
                >
                    Thank You!
                </h1>

                {/* Description */}
                <p className="text-slate-500 leading-relaxed mb-2">
                    Your survey has been submitted successfully.
                </p>

                <div>
                    <h1 className="mb-2">Here is your referral code</h1>
                    <ReferralBox ></ReferralBox>
                    <p className="text-slate-500 leading-relaxed ">
                        Share this code with 3 friends. When they fill the survey using your code, it will be counted as a referral.
                    </p>
                </div>


                <ShareCode />


                {/* Buttons */}
                <div className="flex flex-col md:flex-row gap-4 justify-center">

                    <button
                        onClick={() => navigate("/dashboard")}
                        className="px-8 py-3 text-white bg-[#1e2a78] rounded-2xl font-semibold"
                    >
                        Go To Dashboard
                    </button>


                </div>
            </div>
        </div>
    );
}