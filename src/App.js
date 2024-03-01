import React, { useState } from 'react';
import './App.css'; // Import App.css for general styles
import SearchResults from './SearchResults'; // Import SearchResults component
import logo from './veritas_logo.png'; // Import Veritas logo image

function App() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  
    // Filter search results based on the query entered by the user
    const filteredResults = [
      {
        title: 'How to create an AWS account',
        url: 'https://example.com/aws-account-creation',
        description: 'Step-by-step guide to create an AWS account',
      },
      {
        title: 'How to access AWS',
        url: 'https://example.com/access-aws',
        description: 'Instructions on how to access your AWS account',
      },
      {
        title: 'How to create an instance in AWS',
        url: 'https://example.com/create-aws-instance',
        description: 'Guide to creating an EC2 instance in AWS',
      },
    ].filter(result =>
      result.title.toLowerCase().includes(query.toLowerCase()) || // Check if title contains the query
      result.description.toLowerCase().includes(query.toLowerCase()) // Check if description contains the query
    );
  
    // Set the filtered search results
    setSearchResults(filteredResults);
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