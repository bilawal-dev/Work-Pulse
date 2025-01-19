"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white bg-opacity-90 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <motion.svg
              className="h-8 w-8 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </motion.svg>
            <span className="ml-2 text-xl font-semibold text-gradient">WorkPulse</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <NavLink href="/login">Login</NavLink>
            <Link
              href="/get-started"
              className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-primary transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="/about">About</MobileNavLink>
            <MobileNavLink href="/pricing">Pricing</MobileNavLink>
            <MobileNavLink href="/contact">Contact</MobileNavLink>
            <MobileNavLink href="/login">Login</MobileNavLink>
            <Link
              href="/get-started"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-primary hover:bg-primary/90"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

const NavLink = ({ href, children }) => (
  <Link href={href} className="text-gray-600 hover:text-primary transition-colors duration-300 relative group">
    {children}
    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
  </Link>
)

const MobileNavLink = ({ href, children }) => (
  <Link
    href={href}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
  >
    {children}
  </Link>
)

export default Header

