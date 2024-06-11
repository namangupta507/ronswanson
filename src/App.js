// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteCard from './QuoteCard';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      console.log(response.data);
      setQuote(response.data[0]);
    } catch (error) {
      console.error('Error fetching the quote', error);
    }
  };

  const saveQuote = (quote) => {
    if (!savedQuotes.includes(quote)) {
      setSavedQuotes((prevQuotes) => [...prevQuotes, quote]);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="app">
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
          <h1>Ron Swanson Quotes</h1>
          <QuoteCard quote={quote} onSave={saveQuote} onFetch={fetchQuote}/>
          </div>
          <div className='col-md-6'>
          <h2>Saved Quotes</h2>
      <div className="row">
       
      {savedQuotes.length > 0 ? (
  savedQuotes.map((q, index) => {
    const uniqueId = `accordion-${index}`;
    return (
      <div className="accordion" id={`${uniqueId}-parent`} key={index}>
        <div className="accordion-item">
          <h2 className="accordion-header" id={`heading-${uniqueId}`}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${uniqueId}`}
              aria-expanded="true"
              aria-controls={`collapse-${uniqueId}`}
            >
              {index}
            </button>
          </h2>
          <div
            id={`collapse-${uniqueId}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading-${uniqueId}`}
            data-bs-parent={`#${uniqueId}-parent`}
          >
            <div className="accordion-body">
              <p>{q}</p>
            </div>
          </div>
        </div>
      </div>
    );
  })
        ) : (
          <p className="no-saved-quotes">No saved quotes</p>
        )}
        
      </div>
          </div>
        </div>
     
     
    </div>
    </div>
  );
};

export default App;





