"use client"

import Link from "next/link"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

export default function Pricing() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-center mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Choose the plan that's right for your organization and start improving workplace wellness today.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              title="Starter"
              price="$99"
              description="Perfect for small teams just getting started with workplace wellness."
              features={["Up to 50 employees", "Basic health tracking", "Weekly wellness reports", "Email support"]}
              ctaText="Start Free Trial"
              ctaLink="/get-started"
              highlighted={false}
            />
            <PricingCard
              title="Professional"
              price="$299"
              description="Ideal for growing companies serious about employee wellness."
              features={[
                "Up to 250 employees",
                "Advanced health tracking",
                "Daily wellness insights",
                "AI-powered recommendations",
                "24/7 chat support",
              ]}
              ctaText="Start Free Trial"
              ctaLink="/get-started"
              highlighted={true}
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              description="Tailored solutions for large organizations with complex needs."
              features={[
                "Unlimited employees",
                "Custom integrations",
                "Dedicated account manager",
                "On-site wellness consultations",
                "Advanced analytics and reporting",
              ]}
              ctaText="Contact Sales"
              ctaLink="/contact"
              highlighted={false}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <FAQItem
              question="How does the free trial work?"
              answer="Our 14-day free trial gives you full access to all features of the Professional plan. No credit card required, and you can cancel anytime."
            />
            <FAQItem
              question="Can I switch plans later?"
              answer="You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
            />
            <FAQItem
              question="Is there a long-term contract?"
              answer="No long-term contracts required. Our plans are billed monthly, and you can cancel anytime without penalty."
            />
            <FAQItem
              question="Do you offer discounts for non-profits?"
              answer="Yes, we offer special pricing for non-profit organizations. Please contact our sales team for more information."
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
            Start your free trial today and experience the WorkPulse difference.
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

const PricingCard = ({ title, price, description, features, ctaText, ctaLink, highlighted }: any) => (
  <motion.div
    className={`bg-white rounded-lg p-8 shadow-lg ${highlighted ? "ring-2 ring-primary" : ""}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-4xl font-bold mb-4">
      {price}
      <span className="text-xl text-gray-500">/month</span>
    </p>
    <p className="text-gray-600 mb-6">{description}</p>
    <ul className="mb-8 space-y-2">
      {features.map((feature: string, index: number) => (
        <li key={index} className="flex items-center">
          <Check className="w-5 h-5 text-primary mr-2" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Link
      href={ctaLink}
      className={`block w-full text-center py-2 px-4 rounded-full font-semibold ${highlighted ? "bg-primary text-white hover:bg-primary/90" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        } transition-colors duration-300`}
    >
      {ctaText}
    </Link>
  </motion.div>
)

const FAQItem = ({ question, answer }: any) => (
  <motion.div
    className="bg-gradient-to-br from-white to-gray-100 rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.5 }}
  >
    <h4 className="text-xl font-semibold mb-2 text-primary">{question}</h4>
    <p className="text-gray-700 leading-relaxed">{answer}</p>
  </motion.div>
)