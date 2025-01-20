"use client"

import { useState } from "react"
import Link from "next/link"
import toast, { Toaster } from "react-hot-toast"
import { useRouter } from "next/navigation"

export default function GetStarted() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    companyName: "",
    employeeCount: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate registration logic
    setTimeout(() => {
      toast.success("Account Created Successfully");
      setLoading(false)
      setFormData({
        name: "",
        email: "",
        password: "",
        companyName: "",
        employeeCount: "",
      })
    }, 1500)  // Simulating a delay for registration

    setTimeout(() => {
      router.push('/');
    }, 2500)
  }

  return (
    <div className="min-h-screen pt-20 pb-10 bg-gradient-to-br from-teal-50 to-blue-50">

      <Toaster />

      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-3xl font-bold text-center mb-6">Create Your Account</h2>
          <p className="text-center text-gray-600 mb-6">
            Start your journey to a healthier, more productive workplace.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-200 outline-none border-b"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-200 outline-none border-b"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-200 outline-none border-b"
              />
            </div>
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-200 outline-none border-b"
              />
            </div>
            <div>
              <label htmlFor="employeeCount" className="block text-sm font-medium text-gray-700">
                Number of Employees
              </label>
              <select
                id="employeeCount"
                name="employeeCount"
                value={formData.employeeCount}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-200 outline-none border-b"
              >
                <option value="">Select...</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="501+">501+</option>
              </select>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-primary text-white px-4 py-2 rounded-md font-semibold hover:bg-primary/90 transition-colors duration-300 flex justify-center items-center"
                disabled={loading}
              >
                {loading ? (
                  <div className="animate-spin h-5 w-5 border-t-2 border-white border-solid rounded-full"></div>
                ) : (
                  "Create Account"
                )}
              </button>
            </div>
          </form>
        </div>
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-semibold hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}