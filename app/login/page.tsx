"use client"

import { useState } from "react"
import Link from "next/link"
import toast, { Toaster } from "react-hot-toast"
import { useRouter } from "next/navigation"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)

    setTimeout(() => {
      toast.success("Successfully Login")
    }, 1000)

    setTimeout(() => {
      router.push("/")
      setEmail("")
      setPassword("")
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-teal-50 to-blue-50">
      <Toaster />

      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-gray-300 outline-none border-b"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-gray-300 outline-none border-b"
              />
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
                  "Log In"
                )}
              </button>
            </div>
          </form>
        </div>
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
          <p className="text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <Link href="/get-started" className="text-primary font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}