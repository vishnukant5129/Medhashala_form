import React, { useState } from "react";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import {
    Mail,
    Lock,
    Loader2,
    AlertCircle,
    LogIn,
    UserPlus,
    Eye,
    EyeOff,
} from "lucide-react";

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
            const data = await loginUser({ email });

            localStorage.setItem("token", data.token);

            navigate("/home");
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
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-50 via-gray-100 to-indigo-100 p-6">

            <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">

                {/* Header */}

                <div className="text-center mb-8">

                    <div className="w-16 h-16 rounded-full bg-indigo-100 mx-auto flex items-center justify-center mb-4">

                        <LogIn
                            className="text-indigo-600"
                            size={30}
                        />

                    </div>

                    <h1 className="text-3xl font-bold text-gray-800">
                        Welcome Back
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Login to continue your journey.
                    </p>

                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    {/* Email */}

                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                        </label>

                        <div className="relative">

                            <Mail
                                size={20}
                                className="absolute left-4 top-3.5 text-gray-400"
                            />

                            <input
                                type="email"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 border rounded-xl bg-gray-50 border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                                required
                            />

                        </div>

                    </div>

                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>

                        <div className="relative">

                            <Lock
                                size={20}
                                className="absolute left-4 top-3.5 text-gray-400"
                            />

                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-12 pr-12 py-3 border rounded-xl bg-gray-50 border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                                required
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-3.5 text-gray-400 hover:text-indigo-600"
                            >
                                {showPassword ? (
                                    <EyeOff size={20} />
                                ) : (
                                    <Eye size={20} />
                                )}
                            </button>

                        </div>

                    </div>

                    {/* Login Button */}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition flex justify-center items-center gap-2 disabled:opacity-70"
                    >

                        {loading ? (
                            <>
                                <Loader2
                                    className="animate-spin"
                                    size={20}
                                />
                                Log In...
                            </>
                        ) : (
                            <>
                                <LogIn size={20} />
                                Log In
                            </>
                        )}

                    </button>

                    {/* Error */}

                    {message && (

                        <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg text-sm">

                            <AlertCircle
                                size={18}
                                className="mt-0.5 shrink-0"
                            />

                            <span>{message}</span>

                        </div>

                    )}

                </form>

                {/* Divider */}

                <div className="flex items-center my-6">

                    <div className="flex-1 border-t"></div>

                    <span className="px-3 text-sm text-gray-400">
                        OR
                    </span>

                    <div className="flex-1 border-t"></div>

                </div>

                {/* Signup */}

                <p className="text-center text-gray-500 text-sm mt-6">
                    Don't have an account?
                    <span
                        onClick={() => navigate("/signup")}
                        className="text-indigo-600 font-semibold cursor-pointer hover:underline ml-1"
                    >
                        Sign Up
                    </span>
                </p>

            </div>

        </div>
    );
};

export default Login;