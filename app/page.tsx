"use client"

import Link from "next/link"
import { Activity, Brain, Heart, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="relative z-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
              Empower Your Team with Personalized Wellness
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-3xl mx-auto">
              Track mental and physical health metrics with AI-driven wellness programs
            </p>
            <div className="space-x-4">
              <Link
                href="/get-started"
                className="inline-block bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform"
              >
                Get Started for Free
              </Link>
              <Link
                href="/about"
                className="inline-block bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#00B5B8"
              d="M44.9,-76.8C58.1,-69.3,68.7,-56.3,76.3,-41.9C83.9,-27.5,88.5,-11.7,87.8,3.9C87.1,19.5,81,34.9,71.6,47.5C62.2,60.1,49.5,69.9,35.4,76.4C21.3,82.9,5.8,86.1,-9.4,85.1C-24.6,84.1,-39.5,78.9,-52.4,70.3C-65.3,61.7,-76.2,49.7,-82.6,35.3C-89,20.9,-90.9,4.1,-87.7,-11.3C-84.5,-26.7,-76.2,-40.7,-65,-52.5C-53.8,-64.3,-39.7,-73.9,-24.9,-79.8C-10.1,-85.7,5.4,-87.9,20.3,-85.2C35.2,-82.5,49.5,-74.9,44.9,-76.8Z"
              transform="translate(100 100)"
            />
          </svg>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Revolutionize Workplace Wellness
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureItem
              icon={<Activity className="w-12 h-12 text-white" />}
              title="Real-time Health Tracking"
              description="Monitor vital health metrics and receive instant insights to improve overall well-being."
            />
            <FeatureItem
              icon={<Brain className="w-12 h-12 text-white" />}
              title="AI-Powered Recommendations"
              description="Get personalized wellness programs tailored to individual needs and goals."
            />
            <FeatureItem
              icon={<Heart className="w-12 h-12 text-white" />}
              title="Work-Life Balance"
              description="Foster a healthy balance between professional and personal life with smart scheduling."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            How WorkPulse Works
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            <TimelineItem
              number={1}
              title="Connect Your Team"
              description="Easily onboard your employees and integrate with existing tools. Our seamless integration process ensures quick adoption across your organization."
            />
            <TimelineItem
              number={2}
              title="Gather Insights"
              description="Our AI analyzes data from various sources to understand your team's wellness needs and identify areas for improvement."
            />
            <TimelineItem
              number={3}
              title="Personalized Recommendations"
              description="Receive tailored wellness programs and actionable insights customized for each team member's unique needs."
            />
            <TimelineItem
              number={4}
              title="Track Progress"
              description="Monitor improvements in productivity, engagement, and overall well-being through our comprehensive analytics dashboard."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ready to Transform Your Workplace?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-3xl mx-auto"
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
              Start Your Free Trial
            </Link>
          </motion.div>
        </div>
      </section>
      
    </div>
  )
}

const FeatureItem = ({ icon, title, description }: any) => (
  <motion.div
    className="flex flex-col items-center text-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="mb-4 p-4 bg-primary bg-opacity-10 rounded-full">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
)

const TimelineItem = ({ number, title, description }: any) => (
  <motion.div
    className="relative pl-16"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white text-xl font-semibold">
      {number}
    </div>
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
)