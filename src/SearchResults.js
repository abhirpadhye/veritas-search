import React from 'react';

function SearchResults({ results }) {
  return (
    <div className="search-results">
      {results.map((result, index) => (
        <div key={index} className="search-result">
          <h3><a href={result.url} target="_blank" rel="noopener noreferrer">{result.title}</a></h3>
          <p>{result.description}</p>
          <a href={result.url} className="url" target="_blank" rel="noopener noreferrer">{result.url}</a>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
