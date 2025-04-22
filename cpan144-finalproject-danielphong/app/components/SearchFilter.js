// CPAN 144 Final Project - Daniel and Phong
// SearchFilter Component

export default function SearchFilter({ searchTerm, setSearchTerm, filter, setFilter }) {
    return (
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="flex flex-col md:flex-row gap-4">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-gray-700 text-white px-4 py-2 rounded"
          >
            <option value="all">All Countries</option>
            <option value="name">By Name</option>
            <option value="region">By Region</option>
            <option value="currency">By Currency</option>
            <option value="language">By Language</option>
          </select>
  
          {filter !== 'all' && (
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={`Search by ${filter}...`}
              className="flex-grow bg-gray-700 text-white px-4 py-2 rounded"
            />
          )}
        </div>
      </div>
    )
  }