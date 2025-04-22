// CPAN 144 Final Project - Daniel and Phong
// API Explorer Page

'use client'

import { useState, useEffect } from 'react'
import SearchFilter from '../components/SearchFilter'

export default function ApiExplorer() {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    fetchCountries()
  }, [filter, searchTerm])

  const fetchCountries = async () => {
    setLoading(true)
    try {
      let url = 'https://restcountries.com/v3.1/'
      
      if (filter === 'name' && searchTerm) {
        url += `name/${searchTerm}`
      } else if (filter === 'region' && searchTerm) {
        url += `region/${searchTerm}`
      } else if (filter === 'currency' && searchTerm) {
        url += `currency/${searchTerm}`
      } else if (filter === 'language' && searchTerm) {
        url += `lang/${searchTerm}`
      } else {
        url += 'all'
      }

      const response = await fetch(url)
      const data = await response.json()
      if (Array.isArray(data) && data.length > 0) {
        setCountries(data)
      } else {
        setCountries([])
      }
    } catch (error) {
      console.error('Error fetching countries:', error)
      setCountries([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">API Explorer</h1>
      
      <SearchFilter 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filter={filter}
        setFilter={setFilter}
      />

      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : countries.length === 0 ? (
        <div className="text-center py-8 text-red-400">No countries found. Please try a different search.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {countries.map((country) => (
            <div key={country.cca3} className="country-card p-4">
              <h2 className="text-xl font-bold">{country.name?.common}</h2>
              <p className="text-gray-300">Region: {country.region}</p>
              <p className="text-gray-300">Capital: {country.capital?.[0] || 'N/A'}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}