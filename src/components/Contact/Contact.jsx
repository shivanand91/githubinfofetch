import React from 'react'

export default function Contact() {
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 via-white to-orange-200 overflow-hidden">
            {/* Animated background blobs */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-10">
                <div className="bg-white/80 rounded-3xl shadow-2xl backdrop-blur-md p-8 md:p-12 transition-all duration-500 hover:shadow-orange-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Contact Info */}
                        <div className="flex flex-col justify-center animate-fade-in">
                            <h1 className="text-4xl md:text-5xl font-extrabold text-orange-700 mb-4 tracking-tight drop-shadow-lg animate-slide-down">
                                Get in touch
                            </h1>
                            <p className="text-lg md:text-xl font-medium text-gray-600 mb-6 animate-fade-in">
                                Fill in the form to start a conversation
                            </p>
                            <div className="space-y-5">
                                <div className="flex items-center text-gray-600 group hover:text-orange-600 transition">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-orange-400 group-hover:scale-110 transition-transform duration-300"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <span className="ml-4 text-md font-semibold">
                                        Bkt, Lucknow, Uttar Pradesh, India
                                    </span>
                                </div>
                                <div className="flex items-center text-gray-600 group hover:text-orange-600 transition">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-orange-400 group-hover:scale-110 transition-transform duration-300"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                    <span className="ml-4 text-md font-semibold">
                                        +91 9162320303
                                    </span>
                                </div>
                                <div className="flex items-center text-gray-600 group hover:text-orange-600 transition">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-orange-400 group-hover:scale-110 transition-transform duration-300"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span className="ml-4 text-md font-semibold break-all">
                                        shivanand916232@gmail.com
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Illustration and Form */}
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col items-center justify-center mb-4 animate-fade-in">
                                <img
                                    src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&q=80"
                                    alt="Contact Illustration"
                                    className="rounded-2xl shadow-xl w-40 h-40 md:w-56 md:h-56 object-cover mb-4 transition-transform duration-500 hover:scale-105"
                                />
                                <p className="text-base md:text-lg text-gray-700 font-medium text-center animate-slide-up">
                                    We value your feedback and inquiries.<br />
                                    Reach out and let's connect!
                                </p>
                            </div>
                            <form className="flex flex-col gap-4 animate-fade-in">
                                <div>
                                    <label htmlFor="name" className="sr-only">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Full Name"
                                        className="w-full py-3 px-4 rounded-lg bg-white border border-gray-300 text-gray-800 font-semibold focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none transition"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        className="w-full py-3 px-4 rounded-lg bg-white border border-gray-300 text-gray-800 font-semibold focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none transition"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="tel" className="sr-only">
                                        Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="tel"
                                        id="tel"
                                        placeholder="Telephone Number"
                                        className="w-full py-3 px-4 rounded-lg bg-white border border-gray-300 text-gray-800 font-semibold focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none transition"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full md:w-36 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg mt-2 shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-300"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Tailwind custom animation keyframes */}
            <style>
                {`
                @keyframes fade-in {
                    0% { opacity: 0; transform: translateY(20px);}
                    100% { opacity: 1; transform: translateY(0);}
                }
                .animate-fade-in {
                    animation: fade-in 1s ease-out;
                }
                @keyframes slide-up {
                    0% { opacity: 0; transform: translateY(40px);}
                    100% { opacity: 1; transform: translateY(0);}
                }
                .animate-slide-up {
                    animation: slide-up 1.2s cubic-bezier(.4,0,.2,1);
                }
                @keyframes slide-down {
                    0% { opacity: 0; transform: translateY(-40px);}
                    100% { opacity: 1; transform: translateY(0);}
                }
                .animate-slide-down {
                    animation: slide-down 1.2s cubic-bezier(.4,0,.2,1);
                }
                @keyframes blob {
                    0%, 100% {
                        transform: translateY(0px) scale(1);
                    }
                    33% {
                        transform: translateY(-20px) scale(1.1);
                    }
                    66% {
                        transform: translateY(10px) scale(0.9);
                    }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                `}
            </style>
        </div>
    );
}
