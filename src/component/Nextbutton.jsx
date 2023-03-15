import React, { useState} from "react";
import quotes from '../quote'

function Nextbutton() {
  const randomNumber = Math.floor(Math.random() * quotes.length)
  const [quote, setQuote] = useState(quotes[randomNumber])
  
  function nextQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length)
    console.log(randomNumber);
    setQuote(quotes[randomNumber])
  }
  console.log(quotes)
  return (
    <div>
      <p id="text">"{quote["text"]}"</p>
      <p id="author">-{quote["source"]}</p>
      <buttom type="button" className="btn btn-warning mr-5"><a href="twitter.com/intent/tweet" id="tweet-quote"target="_blank">Twitter</a></buttom>
      <button type="button" className="btn btn-primary mr-5" id="new-quote" onClick={nextQuote} >
        New quote
      </button>
  
    </div>
  );
}
export default Nextbutton;


