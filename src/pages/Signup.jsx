import React, { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff, UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
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
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex justify-center items-center p-6">

            <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">

                <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-full bg-indigo-100 mx-auto flex items-center justify-center mb-4">
                        <UserPlus className="text-indigo-600" size={30} />
                    </div>

                    <h1 className="text-3xl font-bold text-gray-800">
                        Create Account
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Join MAP and start your journey today.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Name */}

                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Full Name
                        </label>

                        <div className="relative mt-2">
                            <User
                                className="absolute left-4 top-3.5 text-gray-400"
                                size={20}
                            />

                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                                required
                            />
                        </div>
                    </div>

                    {/* Email */}

                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Email
                        </label>

                        <div className="relative mt-2">
                            <Mail
                                className="absolute left-4 top-3.5 text-gray-400"
                                size={20}
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                                required
                            />
                        </div>
                    </div>

                    {/* Password */}

                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Password
                        </label>

                        <div className="relative mt-2">

                            <Lock
                                className="absolute left-4 top-3.5 text-gray-400"
                                size={20}
                            />

                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full pl-12 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                                required
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                                className="absolute right-4 top-3.5 text-gray-400"
                            >
                                {showPassword ? (
                                    <EyeOff size={20} />
                                ) : (
                                    <Eye size={20} />
                                )}
                            </button>

                        </div>
                    </div>

                    {/* Confirm Password */}

                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>

                        <div className="relative mt-2">

                            <Lock
                                className="absolute left-4 top-3.5 text-gray-400"
                                size={20}
                            />

                            <input
                                type={showConfirm ? "text" : "password"}
                                name="confirmPassword"
                                placeholder="Confirm password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full pl-12 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                                required
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowConfirm(!showConfirm)
                                }
                                className="absolute right-4 top-3.5 text-gray-400"
                            >
                                {showConfirm ? (
                                    <EyeOff size={20} />
                                ) : (
                                    <Eye size={20} />
                                )}
                            </button>

                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition"
                    >
                        Create Account
                    </button>

                </form>

                <div className="flex items-center my-6">

                    <div className="flex-1 border-t"></div>

                    <span className="px-3 text-sm text-gray-400">
                        OR
                    </span>

                    <div className="flex-1 border-t"></div>

                </div>

                <div className="mt-6 text-center">

                    <p className="text-gray-600">
                        Already have an account?
                    </p>

                    <button
                        onClick={() => navigate("/")}
                        className="mt-2 text-indigo-600 font-semibold hover:underline"
                    >
                        Login
                    </button>

                </div>

            </div>

        </div>
    );
};

export default Signup;