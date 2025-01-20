"use client"

import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 text-center">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gradient">WorkPulse</h3>
        <p className="text-gray-400 text-sm mt-2">
          Empowering workplaces with AI-driven wellness solutions for healthier, more productive teams.
        </p>
      </div>
      
      <nav className="mb-4 flex justify-center space-x-6">
        <FooterLink href="/">Home</FooterLink>
        <FooterLink href="/about">About</FooterLink>
        <FooterLink href="/pricing">Pricing</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
      </nav>
      
      <p className="text-gray-400 text-sm">&copy; 2025 WorkPulse. All rights reserved.</p>
    </footer>
  )
}

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-gray-400 hover:text-white transition-colors duration-300">
    {children}
  </Link>
)

export default Footer