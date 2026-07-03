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
        <div className="min-h-screen flex justify-center items-center  p-4 font-sans">
            {/* Split Card Container */}
            <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px]">

                {/* Left Side: Form (White Section) */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
                            Sign in
                        </h1>
                        <p className="text-xs text-gray-400 mt-2">
                            or use your account
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Error Message */}
                        {message && (
                            <div className="flex items-start gap-2 bg-red-50 border border-red-100 text-red-600 p-3 rounded-xl text-xs">
                                <AlertCircle size={16} className="mt-0.5 shrink-0" />
                                <span>{message}</span>
                            </div>
                        )}

                        {/* Email Input */}
                        <div className="relative">
                            <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-[#eee] border-none rounded-xl focus:ring-2 focus:ring-[#ff4b2b] outline-none transition text-sm text-gray-800"
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-12 pr-12 py-3 bg-[#eee] border-none rounded-xl focus:ring-2 focus:ring-[#ff4b2b] outline-none transition text-sm text-gray-800"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>

                        <div className="text-center">
                            <a href="#forgot" className="text-xs text-gray-500 hover:text-gray-800 transition underline decoration-dotted">
                                Forgot your password?
                            </a>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center pt-2">
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-[#ff4b2b] hover:bg-[#ff4122] text-white text-xs font-bold uppercase tracking-wider py-3 px-12 rounded-full shadow-md hover:shadow-lg transition-all duration-150 active:scale-95 disabled:opacity-70 flex items-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="animate-spin" size={16} />
                                        Signing In...
                                    </>
                                ) : (
                                    "Sign In"
                                )}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right Side: Welcome Panel (Gradient Section) */}
                <div className="w-full md:w-1/2 bg-gradient-to-r from-[#ff4b2b] to-[#ff416c] text-white p-8 md:p-12 flex flex-col justify-center items-center text-center">
                    <h2 className="text-3xl font-bold tracking-wide mb-3">
                        Hello, Friend!
                    </h2>
                    <p className="text-sm opacity-90 max-w-xs leading-relaxed mb-8">
                        Enter your personal details and start your journey with us
                    </p>
                    <button
                        onClick={() => navigate("/signup")}
                        className="bg-transparent border border-white text-white text-xs font-bold uppercase tracking-wider py-3 px-12 rounded-full hover:bg-white hover:text-[#ff4b2b] transition-all duration-200 active:scale-95"
                    >
                        Sign Up
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Login;