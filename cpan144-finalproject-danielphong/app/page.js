// CPAN 144 Final Project - Daniel and Phong
// Main Page

import CountryCard from './components/CountryCard'
import styles from './globals.css'

async function getCountries() {
  const res = await fetch('https://restcountries.com/v3.1/all')
  if (!res.ok) {
    throw new Error('Failed to fetch countries')
  }
  return res.json()
}

function shuffleArray(array) {
  // Create a copy of the array to avoid fucking up the original one
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export default async function Home() {
  const countries = await getCountries()
  const randomCountries = shuffleArray(countries).slice(0, 12)

  return (
    <div className="container">
      <h1>Explore Countries</h1>
      <div className="country-grid">
        {randomCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  )
}