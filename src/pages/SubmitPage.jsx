import { useNavigate } from "react-router-dom";
import { COLORS } from "../constants/colors";

export default function SubmitPage() {
    const navigate = useNavigate();

    return (
        <div
            className="min-h-screen flex items-center justify-center px-4"
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
                    className="text-4xl font-bold mb-4"
                    style={{ color: COLORS.primary }}
                >
                    Thank You!
                </h1>

                {/* Description */}
                <p className="text-slate-500 text-lg leading-relaxed mb-8">
                    Your response has been submitted successfully.
                    <br />
                    Thank you for helping MedhaShala improve AI learning for students.
                </p>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row gap-4 justify-center">

                    <button
                        onClick={() => navigate("/")}
                        className="px-8 py-3 rounded-2xl font-semibold"
                        style={{
                            backgroundColor: COLORS.accent,
                            color: COLORS.primary,
                        }}
                    >
                        Go To Home
                    </button>

                    <button
                        onClick={() => navigate("/survey")}
                        className="px-8 py-3 rounded-2xl border"
                        style={{
                            borderColor: COLORS.border,
                            color: COLORS.primary,
                        }}
                    >
                        Submit Another Response
                    </button>

                </div>
            </div>
        </div>
    );
}