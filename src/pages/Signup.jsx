import React, { useState } from "react";
import {
    User,
    Mail,
    Lock,
    Eye,
    EyeOff,
    Gift,
    UserPlus,
    AlertCircle,
    Loader2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../constants/colors";
import { registerUser } from "../services/authService";

const Signup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        referralCode: "",
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setMessage("");

        if (formData.password !== formData.confirmPassword) {
            setMessage("Passwords do not match.");
            setLoading(false);
            return;
        }

        try {
            const response = await registerUser({
                name: formData.name,
                email: formData.email,
                password: formData.password,
                referralCode: formData.referralCode,
            });

            console.log("Registration successful:", response);

            navigate("/");
        } catch (error) {
            setMessage(
                error.response?.data?.message ||
                error.message ||
                "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center px-4 py-8 font-sans"
            style={{ backgroundColor: COLORS.background }}
        >
            {/* Main Card */}
            <div
                className="w-full max-w-5xl min-h-[580px] overflow-hidden rounded-3xl bg-white flex flex-col md:flex-row"
                style={{
                    border: `1px solid ${COLORS.border}`,
                    boxShadow: "0 20px 60px rgba(11, 31, 58, 0.12)",
                }}
            >
                {/* Left Side - Welcome Panel */}
                <div
                    className="relative hidden w-1/2 overflow-hidden md:flex flex-col items-center justify-center p-12 text-center"
                    style={{ backgroundColor: COLORS.primary }}
                >
                    {/* Decorative Circles */}
                    <div
                        className="absolute -left-24 -top-24 h-72 w-72 rounded-full opacity-10"
                        style={{ backgroundColor: COLORS.accent }}
                    />

                    <div
                        className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full opacity-10"
                        style={{ backgroundColor: COLORS.accent }}
                    />

                    <div className="relative z-10 max-w-sm">
                        {/* Icon */}
                        <div
                            className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl"
                            style={{
                                backgroundColor: COLORS.accent,
                                color: COLORS.primary,
                                boxShadow: `0 10px 30px ${COLORS.accent}35`,
                            }}
                        >
                            <UserPlus size={28} />
                        </div>

                        <h2 className="mb-4 text-4xl font-bold text-white">
                            Welcome Back!
                        </h2>

                        <p className="mb-9 text-sm leading-7 text-slate-300">
                            Already have an account? Sign in and continue your
                            journey with us.
                        </p>

                        <button
                            onClick={() => navigate("/")}
                            className="rounded-xl border-2 px-10 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                            style={{
                                borderColor: COLORS.accent,
                                color: COLORS.accent,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor =
                                    COLORS.accent;
                                e.currentTarget.style.color =
                                    COLORS.primary;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor =
                                    "transparent";
                                e.currentTarget.style.color = COLORS.accent;
                            }}
                        >
                            Sign In
                        </button>
                    </div>
                </div>

                {/* Right Side - Signup Form */}
                <div className="order-1 flex max-h-[90vh] w-full flex-col justify-center overflow-y-auto p-8 md:order-2 md:w-1/2 md:p-12 lg:p-16">
                    {/* Header */}
                    <div className="mb-7">
                        <div
                            className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                            style={{
                                backgroundColor: `${COLORS.accent}20`,
                                color: COLORS.accent,
                            }}
                        >
                            <UserPlus size={22} />
                        </div>

                        <h1
                            className="text-3xl font-bold tracking-tight"
                            style={{ color: COLORS.primary }}
                        >
                            Create Account
                        </h1>

                        <p
                            className="mt-2 text-sm"
                            style={{ color: "#64748B" }}
                        >
                            Join us and start your journey today
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Error Message */}
                        {message && (
                            <div
                                className="flex items-start gap-3 rounded-xl p-3 text-sm"
                                style={{
                                    backgroundColor: "#FEF2F2",
                                    color: "#DC2626",
                                    border: "1px solid #FECACA",
                                }}
                            >
                                <AlertCircle
                                    size={18}
                                    className="mt-0.5 shrink-0"
                                />

                                <span>{message}</span>
                            </div>
                        )}

                        {/* Full Name */}
                        <div className="relative">
                            <User
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2"
                                style={{ color: "#94A3B8" }}
                            />

                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full rounded-xl py-3.5 pl-12 pr-4 text-sm outline-none transition-all"
                                style={{
                                    color: COLORS.text,
                                    backgroundColor: COLORS.background,
                                    border: `1px solid ${COLORS.border}`,
                                }}
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <Mail
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2"
                                style={{ color: "#94A3B8" }}
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full rounded-xl py-3.5 pl-12 pr-4 text-sm outline-none transition-all"
                                style={{
                                    color: COLORS.text,
                                    backgroundColor: COLORS.background,
                                    border: `1px solid ${COLORS.border}`,
                                }}
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <Lock
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2"
                                style={{ color: "#94A3B8" }}
                            />

                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full rounded-xl py-3.5 pl-12 pr-12 text-sm outline-none transition-all"
                                style={{
                                    color: COLORS.text,
                                    backgroundColor: COLORS.background,
                                    border: `1px solid ${COLORS.border}`,
                                }}
                                required
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                                className="absolute right-4 top-1/2 -translate-y-1/2 transition-colors"
                                style={{ color: "#94A3B8" }}
                            >
                                {showPassword ? (
                                    <EyeOff size={18} />
                                ) : (
                                    <Eye size={18} />
                                )}
                            </button>
                        </div>

                        {/* Confirm Password */}
                        <div className="relative">
                            <Lock
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2"
                                style={{ color: "#94A3B8" }}
                            />

                            <input
                                type={showConfirm ? "text" : "password"}
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full rounded-xl py-3.5 pl-12 pr-12 text-sm outline-none transition-all"
                                style={{
                                    color: COLORS.text,
                                    backgroundColor: COLORS.background,
                                    border: `1px solid ${COLORS.border}`,
                                }}
                                required
                            />

                            <button
                                type="button"
                                onClick={() => setShowConfirm(!showConfirm)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 transition-colors"
                                style={{ color: "#94A3B8" }}
                            >
                                {showConfirm ? (
                                    <EyeOff size={18} />
                                ) : (
                                    <Eye size={18} />
                                )}
                            </button>
                        </div>

                        {/* Referral Code */}
                        <div className="relative">
                            <Gift
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2"
                                style={{ color: "#94A3B8" }}
                            />

                            <input
                                type="text"
                                name="referralCode"
                                placeholder="Referral Code (Optional)"
                                value={formData.referralCode}
                                onChange={handleChange}
                                className="w-full rounded-xl py-3.5 pl-12 pr-4 text-sm outline-none transition-all"
                                style={{
                                    color: COLORS.text,
                                    backgroundColor: COLORS.background,
                                    border: `1px solid ${COLORS.border}`,
                                }}
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                            style={{
                                backgroundColor: COLORS.primary,
                                boxShadow: `0 8px 20px ${COLORS.primary}25`,
                            }}
                        >
                            {loading ? (
                                <>
                                    <Loader2
                                        size={18}
                                        className="animate-spin"
                                    />
                                    Creating Account...
                                </>
                            ) : (
                                "Create Account"
                            )}
                        </button>
                    </form>

                    {/* Mobile Login */}
                    <p
                        className="mt-7 text-center text-sm md:hidden"
                        style={{ color: "#64748B" }}
                    >
                        Already have an account?{" "}
                        <button
                            onClick={() => navigate("/")}
                            className="font-semibold"
                            style={{ color: COLORS.primary }}
                        >
                            Sign In
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;