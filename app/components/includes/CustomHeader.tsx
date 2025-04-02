"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function CustomHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="fixed w-full z-50">
      {/* MAIN NAV */}
      <header className="w-full bg-white shadow-md">
        <nav className="flex justify-between items-center px-4 md:px-10 h-20">
          <div className="flex items-center space-x-2 md:space-x-3">
            {/* <motion.img
              src="/images/logo.png"
              alt="Logo"
              width={230}
              height={200}
              className="h-24 md:h-20 rounded-xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            /> */}
            <h1 className="text-green-700 font-mono">Devagauri</h1>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-lime-500 relative z-20"
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
            </button>
          </div>

          <ul
            className={`flex-col gap-8 absolute md:static top-8 left-0 w-full md:w-auto md:flex md:flex-row bg-white transition-transform duration-300  ${
              isMenuOpen ? "flex py-20" : "hidden"
            } text-green-500 font-semibold`}
          >
            {[
              { name: "Who We Are", href: "/academics/who-we-are" },
              { name: "Membership", href: "/membership" },
              { name: "Accreditation", href: "/accreditation" },
              { name: "Resources", href: "/resources" },
              { name: "Events", href: "/events" },
            ].map((item, index) => (
              <motion.li
                key={index}
                className="cursor-pointer hover:text-lime-500 p-2 md:p-0 text-center text-2xl md:text-base" // Adjusted text size for responsiveness
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href={item.href}>{item.name}</Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </header>
    </section>
  );
}
