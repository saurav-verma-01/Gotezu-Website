import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import CtaBtn from "../components/CtaBtn.jsx";
import {Link} from "react-router-dom";

const NavBar = () => {
    const [showNav, setShowNav] = useState(false);

    // Prevent body scrolling when menu is open
    useEffect(() => {
        if (showNav) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [showNav]);

    return (
        <section className="border-b-2 border-purple-heart-950 w-full sticky top-0 left-0 bg-purple-heart-50 z-50">
            <div className="py-4 px-6 flex items-center justify-between relative text-purple-heart-950 sm:px-8 sm:py-6 md:py-4 md:px-5 lg:px-8 max-w-6xl mx-auto">
                {/* Logo */}
                <Link to="/">
                    <img src={Logo} alt="Gotezu Logo" className="w-32 h-auto sm:w-40" />
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="w-12 h-12 border-2 border-accent rounded-full flex items-center justify-center bg-gradient md:hidden"
                    onClick={() => setShowNav((prev) => !prev)}
                    aria-label="Toggle Menu"
                >
                    {showNav ? (
                        <MdClose className="w-10 h-10 text-accent sm:w-9 sm:h-9" />
                    ) : (
                        <FiMenu className="w-6 h-6 text-accent sm:w-9 sm:h-9" />
                    )}
                </button>

                {/* Mobile Menu */}
                {showNav && (
                        <nav className="absolute bg-gradient w-full h-[calc(100vh-80px)] sm:h-[calc(100vh-108px)] top-20 sm:top-28 left-0 z-50 flex items-center justify-start px-8 md:hidden">
                            <ul className="text-honeysuckle-100 font-semibold text-lg flex flex-col gap-8 px-4 border-b-3 border-accent pb-12 w-full max-w-sm mx-auto">
                                <li onClick={() => setShowNav(false)}>
                                    <a href="#" className="border-l-3 border-accent pl-10 py-2">About Us</a>
                                </li>
                                <li onClick={() => setShowNav(false)}>
                                    <a href="#" className="border-l-3 border-accent pl-10 py-2">Contact Us</a>
                                </li>
                                <li onClick={() => setShowNav(false)}>
                                    <a href="#" className="border-l-3 border-accent pl-10 py-2">Sign In / Sign Up</a>
                                </li>
                                <li onClick={() => setShowNav(false)}>
                                    <a href="#" className="border-l-3 border-accent pl-10 py-2">Hire Trainer</a>
                                </li>
                            </ul>
                        </nav>

                )}

                {/* Desktop Menu */}
                <nav className="hidden md:flex">
                    <ul className="flex items-center gap-4 lg:gap-8">
                        <Link to="/about"><li className="font-semibold lg:text-xl">About Us</li></Link>
                        <Link to="/contact"> <li className="font-semibold lg:text-xl">Contact Us</li> </Link>
                        <Link to="login"> <li className="font-semibold lg:text-xl">Log In</li></Link>
                        <Link to="/trainers">
                            <li>
                                <a href="#"><CtaBtn title="Hire Trainers" /></a>
                            </li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </section>
    );
};

export default NavBar;
