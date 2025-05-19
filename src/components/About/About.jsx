import React from 'react';

export default function About() {
    return (
        <div className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-100 min-h-screen">
            <div className="container mx-auto px-6 text-gray-700 md:px-12 xl:px-6">
                <div className="flex flex-col-reverse md:flex-row items-center gap-12">
                    <div
                        className="w-full md:w-5/12"
                        data-aos="fade-right"
                        data-aos-duration="1200"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
                            alt="Team working"
                            className="rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div
                        className="w-full md:w-7/12 space-y-6"
                        data-aos="fade-left"
                        data-aos-duration="1200"
                    >
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
                            Passionate React Development
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed animate-fadeInUp">
                            Our team crafts modern, interactive, and scalable web applications using the latest React technologies. We focus on delivering seamless user experiences with beautiful interfaces and smooth animations.
                        </p>
                        <p className="text-md text-gray-600 animate-fadeInUp delay-100">
                            From concept to deployment, we ensure every detail is polished. Join us on a journey to build something amazing together!
                        </p>
                        <button className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 animate-bounce">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            {/* Animations using Tailwind CSS and AOS (Animate On Scroll) */}
            <style>
                {`
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease-in-out infinite;
                }
                .animate-fadeInUp {
                    opacity: 0;
                    transform: translateY(20px);
                    animation: fadeInUp 1s forwards;
                }
                .animate-fadeInUp.delay-100 {
                    animation-delay: 0.2s;
                }
                @keyframes fadeInUp {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                `}
            </style>
        </div>
    );
}