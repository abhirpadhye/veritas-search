import React, { useState } from 'react';
import './App.css'; // Import App.css for general styles
import SearchResults from './SearchResults'; // Import SearchResults component
import logo from './veritas_logo.png'; // Import Veritas logo image

function App() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log('Performing search for:', query); // Log the search query to verify if the function is called

    // Simulate search results for demonstration purposes
    setSearchResults([...Array(10).keys()].map(i => ({
      title: `Search Result ${i+1}`,
      url: `https://example.com/result-${i+1}`,
      description: `Description of search result ${i+1}`
    })));
  }

  return (
    <div className="App">
      <header>
        <img src={logo} alt="Veritas Logo" />
        <form onSubmit={handleSearch} className="search-form">
          <input 
            type="text" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            placeholder="Search Veritas" 
            required 
          />
          <button type="submit">Search</button>
        </form>
      </header>
      <main>
        <SearchResults results={searchResults} />
      </main>
      <footer>
        <p>&copy; 2024 Veritas Technologies LLC. All rights reserved.</p>
        <nav>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default App;
