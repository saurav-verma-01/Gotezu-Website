import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import Logo from "../assets/Logo.png";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import CtaBtn from "../components/CtaBtn.jsx";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import FlipLink from "./FlipLink.jsx";
import { RiLogoutCircleRLine } from "react-icons/ri";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (showNav) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showNav]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

//   console.log(user && user.displayName)
//   console.log(user && user.displayName.split(" ")[0])
  return (
    <header className="border-b-2 border-purple-heart-950 w-full sticky top-0 left-0 bg-purple-heart-50 z-50">
      <div className="py-4 px-6 flex items-center justify-between relative text-purple-heart-950 sm:px-8 sm:py-6 md:py-4 md:px-5 lg:px-8 max-w-[1440px] mx-auto">
        <Link to="/">
          <img src={Logo} alt="Gotezu Logo" className="w-32 h-auto sm:w-40 lg:w-48 xl:w-56" />
        </Link>

        <button
          className="w-12 h-12 border-2 border-accent rounded-full flex items-center justify-center bg-gradient lg:hidden"
          onClick={() => setShowNav((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {showNav ? (
            <MdClose className="w-10 h-10 text-accent sm:w-9 sm:h-9" />
          ) : (
            <FiMenu className="w-6 h-6 text-accent sm:w-9 sm:h-9" />
          )}
        </button>

        {showNav && (
          <nav className="absolute bg-gradient w-full h-[calc(100vh-80px)] sm:h-[calc(100vh-108px)] md:h-[calc(100vh-90px)] top-20 sm:top-28 md:top-[93px] left-0 z-50 flex items-center justify-start px-8 lg:hidden">
            <ul className="text-honeysuckle-100 font-semibold text-lg flex flex-col gap-8 px-4 border-b-3 border-accent pb-12 w-full max-w-sm mx-auto">
              <li onClick={() => setShowNav(false)}>
                <Link to="/about" className="border-l-3 border-accent pl-10 py-2">About Us</Link>
              </li>
              <li onClick={() => setShowNav(false)}>
                <Link to="/contact" className="border-l-3 border-accent pl-10 py-2">Contact Us</Link>
              </li>
              <li onClick={() => setShowNav(false)}>
                <Link to="/signin" className="border-l-3 border-accent pl-10 py-2">Sign In / Sign Up</Link>
              </li>
              <li onClick={() => setShowNav(false)}>
                <Link className="border-l-3 border-accent pl-10 py-2" to="/trainers">Hire Trainers</Link>
              </li>
            </ul>
          </nav>
        )}

        <nav className="hidden lg:flex">
          <ul className="flex items-center gap-6 perspective-[1000px] transform-style-preserve-3d">
            <FlipLink title="About Us" path="/about" />
            <FlipLink title="Contact Us" path="/contact" />
            <FlipLink title="Pricing" path="/pricing" />
            <Link to="/trainers">
              <li>
                <CtaBtn title="Hire Trainers" path='/trainers' />
              </li>
            </Link>
            {user ? (
              <div className="flex items-center gap-3 cursor-pointer">
                
                <div className="flex items-center flex-col justify-center rounded-full">
                <div className="w-12.5 h-12.5 bg-gradient rounded-full flex items-center justify-center ">
                  <RxAvatar className="w-10 h-10 text-accent hover:text-gray-800" />
                </div>
                  <span className="text-purple-heart-950 font-medium">
                    {`Hi, ${user.displayName.split(" ")[0]}`} 
                  </span>
                </div>

                <button 
                  onClick={() => signOut(auth)} 
                  className="bg-red-500 text-white p-1.5 rounded-full hover:bg-red-400 hover:text-purple-heart-100 cursor-pointer"
               >
                  <RiLogoutCircleRLine className="w-8 h-8" />
                </button>
              </div>
            ) : (
              <Link to="/signin">
                <div className="w-14 h-14 bg-gradient rounded-full flex items-center justify-center hover:bg-accent">
                  <RxAvatar className="w-10 h-10 text-accent hover:text-white" />
                </div>
              </Link>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;