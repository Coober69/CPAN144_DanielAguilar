// CPAN 144 Final Project - Daniel and Phong
// About Page

'use client'

import { useState } from 'react'

export default function About() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    setErrors({ ...errors, [name]: '' })
  }

  const validate = () => {
    const newErrors = {}

    if (!form.name.trim()) newErrors.name = 'Name is required.'
    if (!form.email.includes('@') || !form.email.includes('.')) newErrors.email = 'Enter a valid email.'
    if (!/^\d{10,15}$/.test(form.phone)) newErrors.phone = 'Phone must be 10-15 digits.'

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else {
      setSubmitted(true)
      setForm({ name: '', email: '', phone: '' })
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Country Explorer</h1>

      <div className="space-y-6 mb-10">
        <section>
          <h2 className="text-2xl font-semibold mb-2">What is this?</h2>
          <p className="text-gray-300">
            Country Explorer is a web application that allows you to explore information about countries around the world using the free RestCountries API.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">The API</h2>
          <p className="text-gray-300">
            The RestCountries API provides detailed information about countries including:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-300 space-y-1">
            <li>Basic country information (name, capital, region)</li>
            <li>Population data</li>
            <li>Currency and language information</li>
            <li>Country flags and maps</li>
          </ul>
          <p className="text-gray-300 mt-4">
            You can explore the API directly through our API Explorer page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Features</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-1">
            <li>Browse countries with key information</li>
            <li>Search by name, region, currency, or language</li>
            <li>Responsive design that works on all devices</li>
            <li>Dark theme for comfortable browsing</li>
          </ul>
        </section>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        {submitted ? (
          <p className="text-green-400">Thank you for contacting us!</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Name:</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-gray-700 text-white"
              />
              {errors.name && <p className="text-red-400">{errors.name}</p>}
            </div>

            <div>
              <label className="block mb-1">Email:</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-gray-700 text-white"
              />
              {errors.email && <p className="text-red-400">{errors.email}</p>}
            </div>

            <div>
              <label className="block mb-1">Phone Number:</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-gray-700 text-white"
              />
              {errors.phone && <p className="text-red-400">{errors.phone}</p>}
            </div>

            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  )
}