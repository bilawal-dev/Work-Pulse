"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import toast, { Toaster } from "react-hot-toast"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    toast.success("Response Submitted Successfully!");

    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-teal-50">

        <Toaster />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're here to answer any questions you have about WorkPulse. Reach out to us and we'll respond as soon as
              we can.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mt-16">
            <Card className="shadow-lg border border-gray-200 rounded-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border-gray-300 focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border-gray-300 focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full border-gray-300 focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary text-white font-medium py-3 rounded-lg shadow-md hover:bg-primary-dark transition">
                    Send Message
                  </Button>

                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

