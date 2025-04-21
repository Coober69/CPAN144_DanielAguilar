//CPAN 144 - FINAL EXAM - Daniel Aguilar
//Components > DogBreeds.jsx

'use client';
import { useState, useEffect } from 'react';

/**
Component that fetches and displays dog breed data from API
- Demonstrates API data fetching
- Includes loading and error states
**/

const DogBreeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        //Add random offset to get different breeds on each load
        const randomOffset = Math.floor(Math.random() * 50);
        const response = await fetch(`https://api.api-ninjas.com/v1/dogs?min_life_expectancy=1&offset=${randomOffset}`, {
          headers: {
            'X-Api-Key': 'WetXxGfs5Nu36RfXD7PFuw==UJvyWH92RNMD9X93'
          }
        });
        
        if (!response.ok) throw new Error('Failed to fetch dog breeds');
        const data = await response.json();
        //Shuffle and pick 5 random breeds
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        setBreeds(shuffled.slice(0, 5)); //Display random 5 breeds
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBreeds();
  }, []);

  if (loading) return <p>Loading dog breeds...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div style={{ display: 'grid', gap: '15px' }}>
      {breeds.map((breed, index) => (
        <div key={index} style={{ padding: '15px', border: '1px solid #eee', borderRadius: '5px' }}>
          <h3 style={{ marginTop: 0 }}>{breed.name}</h3>
          
          {/* Height Categories */}
          <div style={{ marginBottom: '10px' }}>
            <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Height (inches):</p>
            <div style={{ marginLeft: '15px' }}>
              <p style={{ margin: '5px 0' }}><strong>Male:</strong> {breed.min_height_male || 'N/A'} to {breed.max_height_male || 'N/A'}</p>
              <p style={{ margin: '5px 0' }}><strong>Female:</strong> {breed.min_height_female || 'N/A'} to {breed.max_height_female || 'N/A'}</p>
            </div>
          </div>
          
          {/* Weight Categories */}
          <div style={{ marginBottom: '10px' }}>
            <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Weight (lbs):</p>
            <div style={{ marginLeft: '15px' }}>
              <p style={{ margin: '5px 0' }}><strong>Male:</strong> {breed.min_weight_male || 'N/A'} to {breed.max_weight_male || 'N/A'}</p>
              <p style={{ margin: '5px 0' }}><strong>Female:</strong> {breed.min_weight_female || 'N/A'} to {breed.max_weight_female || 'N/A'}</p>
            </div>
          </div>
          
          {/* Other Information */}
          <p>Life Span: {breed.min_life_expectancy} to {breed.max_life_expectancy} years</p>
          <p>Shedding Level: {breed.shedding}/5</p>
          <p>Energy Level: {breed.energy}/5</p>
        </div>
      ))}
    </div>
  );
};

export default DogBreeds;