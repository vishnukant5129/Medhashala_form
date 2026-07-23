import React, { useState } from "react";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import {
    Mail,
    Lock,
    Loader2,
    AlertCircle,
    Eye,
    EyeOff,
} from "lucide-react";
import { COLORS } from "../constants/colors.js";

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setMessage("");

        try {
            const response = await loginUser({
                email,
                password,
            });

            const { token } = response;

            if (!token) {
                throw new Error("Login token not received.");
            }

            localStorage.setItem("token", token);

            navigate("/home");
        } catch (error) {
            const errorMessage =
                error.response?.data?.message ||
                error.message ||
                "Something went wrong. Please try again.";

            setMessage(errorMessage);
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
                className="w-full max-w-5xl min-h-[560px] overflow-hidden rounded-3xl bg-white flex flex-col md:flex-row"
                style={{
                    border: `1px solid ${COLORS.border}`,
                    boxShadow: "0 20px 60px rgba(11, 31, 58, 0.12)",
                }}
            >
                {/* Left Side - Login Form */}
                <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                    {/* Header */}
                    <div className="mb-8">
                        <div
                            className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                            style={{
                                backgroundColor: `${COLORS.accent}20`,
                                color: COLORS.accent,
                            }}
                        >
                            <Lock size={22} />
                        </div>

                        <h1
                            className="text-3xl font-bold tracking-tight"
                            style={{ color: COLORS.primary }}
                        >
                            Welcome Back
                        </h1>

                        <p
                            className="mt-2 text-sm"
                            style={{ color: "#64748B" }}
                        >
                            Sign in to continue to your account
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
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

                        {/* Email */}
                        <div className="space-y-2">
                            <label
                                className="text-sm font-medium"
                                style={{ color: COLORS.text }}
                            >
                                Email Address
                            </label>

                            <div className="relative">
                                <Mail
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2"
                                    style={{ color: "#94A3B8" }}
                                />

                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    className="w-full rounded-xl py-3.5 pl-12 pr-4 text-sm outline-none transition-all"
                                    style={{
                                        color: COLORS.text,
                                        backgroundColor: COLORS.background,
                                        border: `1px solid ${COLORS.border}`,
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor =
                                            COLORS.accent;
                                        e.target.style.boxShadow = `0 0 0 3px ${COLORS.accent}25`;
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor =
                                            COLORS.border;
                                        e.target.style.boxShadow = "none";
                                    }}
                                    required
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <label
                                className="text-sm font-medium"
                                style={{ color: COLORS.text }}
                            >
                                Password
                            </label>

                            <div className="relative">
                                <Lock
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2"
                                    style={{ color: "#94A3B8" }}
                                />

                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="w-full rounded-xl py-3.5 pl-12 pr-12 text-sm outline-none transition-all"
                                    style={{
                                        color: COLORS.text,
                                        backgroundColor: COLORS.background,
                                        border: `1px solid ${COLORS.border}`,
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor =
                                            COLORS.accent;
                                        e.target.style.boxShadow = `0 0 0 3px ${COLORS.accent}25`;
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor =
                                            COLORS.border;
                                        e.target.style.boxShadow = "none";
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
                                    onMouseEnter={(e) =>
                                    (e.currentTarget.style.color =
                                        COLORS.primary)
                                    }
                                    onMouseLeave={(e) =>
                                    (e.currentTarget.style.color =
                                        "#94A3B8")
                                    }
                                >
                                    {showPassword ? (
                                        <EyeOff size={18} />
                                    ) : (
                                        <Eye size={18} />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Forgot Password */}
                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="text-sm font-medium transition-colors"
                                style={{ color: COLORS.primary }}
                            >
                                Forgot password?
                            </button>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                            style={{
                                backgroundColor: COLORS.primary,
                                boxShadow: `0 8px 20px ${COLORS.primary}25`,
                            }}
                            onMouseEnter={(e) => {
                                if (!loading) {
                                    e.currentTarget.style.backgroundColor =
                                        "#132D50";
                                }
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor =
                                    COLORS.primary;
                            }}
                        >
                            {loading ? (
                                <>
                                    <Loader2
                                        className="animate-spin"
                                        size={18}
                                    />
                                    Signing In...
                                </>
                            ) : (
                                "Sign In"
                            )}
                        </button>
                    </form>

                    {/* Mobile Signup */}
                    <p
                        className="mt-8 text-center text-sm md:hidden"
                        style={{ color: "#64748B" }}
                    >
                        Don't have an account?{" "}
                        <button
                            onClick={() => navigate("/signup")}
                            className="font-semibold"
                            style={{ color: COLORS.primary }}
                        >
                            Sign Up
                        </button>
                    </p>
                </div>

                {/* Right Side - Welcome Panel */}
                <div
                    className="relative hidden w-1/2 overflow-hidden md:flex flex-col items-center justify-center p-12 text-center"
                    style={{ backgroundColor: COLORS.primary }}
                >
                    {/* Decorative Circles */}
                    <div
                        className="absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-10"
                        style={{ backgroundColor: COLORS.accent }}
                    />

                    <div
                        className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full opacity-10"
                        style={{ backgroundColor: COLORS.accent }}
                    />

                    <div className="relative z-10 max-w-sm">
                        {/* Logo Icon */}
                        <div
                            className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl"
                            style={{
                                backgroundColor: COLORS.accent,
                                color: COLORS.primary,
                                boxShadow: `0 10px 30px ${COLORS.accent}35`,
                            }}
                        >
                            <Mail size={28} />
                        </div>

                        <h2 className="mb-4 text-4xl font-bold text-white">
                            Hello, Friend!
                        </h2>

                        <p className="mb-9 text-sm leading-7 text-slate-300">
                            New here? Create an account and start your journey
                            with us today.
                        </p>

                        <button
                            onClick={() => navigate("/signup")}
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
                            Create Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;