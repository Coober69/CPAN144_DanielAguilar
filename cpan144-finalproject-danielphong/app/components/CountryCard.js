// CPAN 144 Final Project - Daniel and Phong
// Country Card Component

export default function CountryCard({ country }) {
    return (
      <div className="country-card">
        <img 
          src={country.flags?.png} 
          alt={`Flag of ${country.name?.common}`} 
          className="country-flag"
        />
        <div className="country-info">
          <h2 className="country-name">{country.name?.common}</h2>
          <p className="country-detail">Capital: {country.capital?.[0] || 'N/A'}</p>
          <p className="country-detail">Population: {country.population?.toLocaleString()}</p>
          <p className="country-detail">Region: {country.region}</p>
        </div>
      </div>
    )
  }