import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/contact", label: "Contact" },
        { to: "/github", label: "Github" },
    ];

    return (
        <header className="shadow sticky z-50 top-0 bg-white/80 backdrop-blur transition-all duration-300">
            <nav className="border-b border-gray-200 px-4 lg:px-8 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center gap-2 group">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12 transition-transform duration-300 group-hover:scale-110"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2 gap-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 transition-all duration-200"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 shadow-md transition-all duration-200"
                        >
                            Get started
                        </Link>
                        <button
                            onClick={() => setMenuOpen((prev) => !prev)}
                            className="inline-flex items-center p-2 ml-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition"
                            aria-controls="mobile-menu"
                            aria-expanded={menuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={`w-6 h-6 transition-transform duration-300 ${menuOpen ? "rotate-90" : ""}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {menuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`w-full lg:flex lg:w-auto lg:order-1 transition-all duration-300 ${
                            menuOpen
                                ? "block animate-fade-in"
                                : "hidden lg:block"
                        }`}
                        id="mobile-menu"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            {navLinks.map(({ to, label }) => (
                                <li key={to}>
                                    <NavLink
                                        to={to}
                                        end={to === "/"}
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-orange-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 transition-all
                                            ${
                                                isActive
                                                    ? "text-orange-700 font-semibold scale-105"
                                                    : "text-gray-900"
                                            }`
                                        }
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Animation keyframes for fade-in */}
            <style>
                {`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-10px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease;
                }
                `}
            </style>
        </header>
    );
}
