## Country Search Engine 

## CPAN144 Final Project — Daniel & Phong

Country Search Engine, created by Daniel and Phong, is an API powered database that allows users to search for and discover new
countries, and their regions and capitals.

## Project Structure
## Components

| Component      | Description |
| `Header.js`    | Top navigation bar with links to Home, API Explorer, and About |
| `Footer.js`    | Footer with credit to Daniel and Phong |
| `CountryCard.js` | Card displaying individual country info (name, region, capital, population, flag) |
| `SearchFilter.js` | Dropdown and input used for dynamic API search filters (name, region, etc.) |

## Routes

| Route         | Description |
| `/`           | Home page displaying 12 random countries every time the page is refreshed |
| `/api`        | API Explorer with dynamic filtering and country display |
| `/about`      | About page with project description and contact form |

## State Management

- **React State Hooks** (`useState`) are used throughout the application for:
  - Form input tracking and validation in the contact form
  - Search term and filter handling in the API Explorer
  - API data management for dynamically rendering countries

- **State Lifting** is implemented in `ApiExplorer.js`, where `searchTerm` and `filter` are passed to `SearchFilter`.

## API Integration

Our app uses **RestCountries V3 API** for live data on:
- Country name, region, capital
- Population
- Flags and map data
- Currencies and languages

API endpoints used:
- `/v3.1/all`
- `/v3.1/name/{name}`
- `/v3.1/region/{region}`
- `/v3.1/currency/{currency}`
- `/v3.1/lang/{language}`

## Features

- Browse countries with key information
- Search by name, region, currency, or language
- Fully responsive layout with dark theme
- Contact form with validation