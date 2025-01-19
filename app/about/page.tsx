"use client"

import Image from "next/image"
import Link from "next/link"
import { Activity, Users, TrendingUp, Award } from "lucide-react"
import { motion } from "framer-motion"

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
              Our Mission
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
              To empower organizations and individuals with AI-driven wellness solutions, fostering happier, healthier,
              and more productive workplaces.
            </p>
          </motion.div>
          <motion.div
            className="mt-12 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-gradient-to-br from-teal-50 to-blue-50 text-lg font-medium text-gray-900">
                Trusted by industry leaders
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Our Story</h2>
              <p className="mt-6 max-w-3xl text-xl text-gray-500">
                WorkPulse was born from a simple idea: what if we could use the power of AI to make workplaces healthier
                and happier? Founded in 2020 by a team of health professionals, data scientists, and HR experts, we set
                out to revolutionize workplace wellness.
              </p>
              <p className="mt-6 max-w-3xl text-xl text-gray-500">
                Today, we're proud to serve thousands of organizations worldwide, helping them create cultures of
                well-being and productivity. Our journey is just beginning, and we're excited to continue innovating and
                improving workplace wellness for years to come.
              </p>
            </motion.div>
            <motion.div
              className="mt-12 lg:mt-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="pl-4 -ml-4 relative lg:pl-12 lg:-ml-12">
                <Image
                  src="/placeholder.svg"
                  alt="Our Story"
                  width={550}
                  height={550}
                  className="rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Our Values</h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              These core principles guide everything we do at WorkPulse.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <ValueCard
              icon={<Activity className="h-8 w-8 text-primary" />}
              title="Innovation"
              description="We constantly push the boundaries of what's possible in workplace wellness."
            />
            <ValueCard
              icon={<Users className="h-8 w-8 text-primary" />}
              title="Empathy"
              description="We put people first, understanding and addressing their unique needs."
            />
            <ValueCard
              icon={<TrendingUp className="h-8 w-8 text-primary" />}
              title="Growth"
              description="We believe in continuous improvement, both for ourselves and our clients."
            />
            <ValueCard
              icon={<Award className="h-8 w-8 text-primary" />}
              title="Excellence"
              description="We strive for the highest quality in everything we do."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ready to Transform Your Workplace?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-white max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join thousands of companies that have already improved their employees' well-being with WorkPulse.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/get-started"
              className="inline-block bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const ValueCard = ({ icon, title, description }: any) => (
  <motion.div
    className="bg-white rounded-lg p-6 shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center justify-center w-12 h-12 bg-primary bg-opacity-10 rounded-full mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
)

