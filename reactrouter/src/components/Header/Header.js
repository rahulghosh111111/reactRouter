import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// import { RainbowButton } from "@/components/magicui/rainbow-button";
export default function Header() {
    return (
        <header className="shadow-xl shadow-cyan-400 sticky z-50 top-0 bg-">
            <nav className="bg-gradient-to-r from-gray-700 to-black border-gray-100 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-white bg-cyan-600 shadow-lg shadow-cyan-500/50 ... px-4 lg:px-5 py-1 lg:py-2.5 mr-2  rounded-lg text-sm duration-300   ease-in-out transform hover:scale-105 hover:bg-cyan-500 hover:shadow-cyan-500"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="inline-block bg-orange-600 hover:bg-orange-700 hover:shadow-orange-700 text-white font-semibold text-sm px-6 py-2 rounded-xl shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Get Started
                        </Link>

                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-700' : 'text-white'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 duration-300   ease-in-out transform hover:scale-105`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-700' : 'text-white'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 duration-300   ease-in-out transform hover:scale-105`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-700' : 'text-white'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 duration-300   ease-in-out transform hover:scale-105`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Github"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-700' : 'text-white'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 duration-300   ease-in-out transform hover:scale-105`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}


