import React, { useState } from "react";
import {
    User,
    Mail,
    Lock,
    Eye,
    EyeOff,
    Gift
} from "lucide-react";
import { useNavigate } from "react-router-dom";

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

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        console.log(formData);
        // TODO: Call Register API here
        navigate("/");
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-[#f6f5f7] p-4 font-sans">
            {/* Split Card Container */}
            <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[550px]">

                {/* Left Side: Welcome Panel (Gradient Section) */}
                <div className="w-full md:w-1/2 bg-gradient-to-r from-[#ff4b2b] to-[#ff416c] text-white p-8 md:p-12 flex flex-col justify-center items-center text-center order-2 md:order-1">
                    <h2 className="text-3xl font-bold tracking-wide mb-3">
                        Welcome Back!
                    </h2>
                    <p className="text-sm opacity-90 max-w-xs leading-relaxed mb-8">
                        To keep connected with us please login with your personal info
                    </p>
                    <button
                        onClick={() => navigate("/")}
                        className="bg-transparent border border-white text-white text-xs font-bold uppercase tracking-wider py-3 px-12 rounded-full hover:bg-white hover:text-[#ff4b2b] transition-all duration-200 active:scale-95"
                    >
                        Sign In
                    </button>
                </div>

                {/* Right Side: Form (White Section) */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center order-1 md:order-2 max-h-[85vh] overflow-y-auto scrollbar-none">
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
                            Create Account
                        </h1>
                        <p className="text-xs text-gray-400 mt-2">
                            or use your email for registration
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3.5">
                        {/* Name Input */}
                        <div className="relative">
                            <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-2.5 bg-[#eee] border-none rounded-xl focus:ring-2 focus:ring-[#ff4b2b] outline-none transition text-sm text-gray-800"
                                required
                            />
                        </div>

                        {/* Email Input */}
                        <div className="relative">
                            <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-2.5 bg-[#eee] border-none rounded-xl focus:ring-2 focus:ring-[#ff4b2b] outline-none transition text-sm text-gray-800"
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full pl-12 pr-12 py-2.5 bg-[#eee] border-none rounded-xl focus:ring-2 focus:ring-[#ff4b2b] outline-none transition text-sm text-gray-800"
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

                        {/* Confirm Password Input */}
                        <div className="relative">
                            <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type={showConfirm ? "text" : "password"}
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full pl-12 pr-12 py-2.5 bg-[#eee] border-none rounded-xl focus:ring-2 focus:ring-[#ff4b2b] outline-none transition text-sm text-gray-800"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirm(!showConfirm)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>

                        {/* Referral Code Input */}
                        <div className="relative">
                            <Gift size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                name="referralCode"
                                placeholder="Referral Code (Optional)"
                                value={formData.referralCode}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-2.5 bg-[#eee] border-none rounded-xl focus:ring-2 focus:ring-[#ff4b2b] outline-none transition text-sm text-gray-800"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center pt-3">
                            <button
                                type="submit"
                                className="bg-[#ff4b2b] hover:bg-[#ff4122] text-white text-xs font-bold uppercase tracking-wider py-3 px-12 rounded-full shadow-md hover:shadow-lg transition-all duration-150 active:scale-95"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Signup;