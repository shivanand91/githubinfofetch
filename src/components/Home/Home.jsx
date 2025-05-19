import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl font-sans bg-gradient-to-br from-orange-50 via-white to-orange-100 min-h-screen">
            <aside className="relative overflow-hidden text-black rounded-3xl shadow-2xl sm:mx-16 mx-2 sm:py-16 py-10 my-8 bg-white animate-fade-in">
                {/* Decorative background blobs */}
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-200 rounded-full opacity-30 blur-3xl animate-blob"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-300 rounded-full opacity-20 blur-3xl animate-blob animation-delay-2000"></div>

                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-10">
                    {/* Text Section */}
                    <div className="max-w-xl space-y-8 text-center sm:text-left sm:ml-0 animate-slide-in-left">
                        <h2 className="text-4xl font-extrabold sm:text-5xl bg-gradient-to-r from-orange-600 via-orange-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg transition-all duration-500">
                            Download Now
                            <span className="block text-3xl sm:text-4xl mt-2 font-semibold text-orange-700">Lorem Ipsum</span>
                        </h2>
                        <p className="text-lg text-gray-600 font-medium">
                            Experience the next generation of productivity. Fast, beautiful, and responsive.
                        </p>
                        <Link
                            className="inline-flex items-center gap-2 px-8 py-3 font-semibold bg-gradient-to-r from-orange-600 to-yellow-500 text-white rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300"
                            to="/"
                        >
                            {/* Logo SVG (kept as per instruction) */}
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            Download now
                        </Link>
                    </div>
                    {/* Hero Image */}
                    <div className="w-full flex justify-center sm:justify-end animate-slide-in-right">
                        <img
                            className="w-64 sm:w-96 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
                            alt="hero"
                        />
                    </div>
                </div>
            </aside>

            <div className="grid place-items-center sm:mt-20 mt-10 animate-fade-in-up">
                <img
                    className="sm:w-96 w-48 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
                    alt="feature"
                />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-bold text-orange-700 animate-fade-in-down">
                Lorem Ipsum Yojo
            </h1>

            {/* Animations (Tailwind CSS custom classes) */}
            <style>
                {`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in {
                    animation: fade-in 1s ease-in;
                }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(40px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                .animate-fade-in-up {
                    animation: fade-in-up 1s 0.2s both;
                }
                @keyframes fade-in-down {
                    from { opacity: 0; transform: translateY(-40px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                .animate-fade-in-down {
                    animation: fade-in-down 1s 0.4s both;
                }
                @keyframes slide-in-left {
                    from { opacity: 0; transform: translateX(-60px);}
                    to { opacity: 1; transform: translateX(0);}
                }
                .animate-slide-in-left {
                    animation: slide-in-left 1s 0.2s both;
                }
                @keyframes slide-in-right {
                    from { opacity: 0; transform: translateX(60px);}
                    to { opacity: 1; transform: translateX(0);}
                }
                .animate-slide-in-right {
                    animation: slide-in-right 1s 0.2s both;
                }
                @keyframes blob {
                    0%, 100% { transform: scale(1) translateY(0px);}
                    33% { transform: scale(1.1, 0.9) translateY(10px);}
                    66% { transform: scale(0.9, 1.1) translateY(-10px);}
                }
                .animate-blob {
                    animation: blob 8s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                `}
            </style>
        </div>
    );
}
