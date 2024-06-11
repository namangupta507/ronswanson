// src/QuoteCard.js
import React from 'react';
import './QuoteCard.css';

const QuoteCard = ({ quote, onSave, onFetch }) => {
  return (
   
       
            
            
            <div className="quote-card">
            <p>{quote}</p>
            <div className='buttons'>
            <button className='new-quote-button' onClick={() => onFetch(quote)}>Get New Quote</button>
            <button className='save-quote-button' onClick={() => onSave(quote)}>Save to List</button>
            </div>
            </div>
            
       
  );
};

export default QuoteCard;
