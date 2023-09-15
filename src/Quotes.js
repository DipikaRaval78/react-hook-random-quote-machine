import React,{useState, useEffect} from 'react';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Quotes = ({accentColor, handleNewQuote}) => {

    const [quote, setQuote] = useState('');
    const [source, setAuthor] = useState('');

    
    useEffect(() =>{
        getQuote();
    },[]);


    function getQuote() {
        let url = 'https://autumnchris-quotes-api.onrender.com/api/quotes';
        axios.get(url)
      .then(res => {
        // console.log(res.data)

        let dataQuotes = res.data;
        // console.log(dataQuotes);
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        // console.log(randomNum)
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.source);
        // console.log(randomQuote)
      })
      
      }
    
       const handleClick = () => {
        getQuote();
       
       }
   
    return(
        

<div id="wrapper body" style={{color: `${accentColor}` }} >
      <div id="quote-box">
      <div className='quote-text'>
      <i className="fa fa-quote-left"> </i>
      <span id="text" >{quote}</span>
      </div>
      <div className="quote-author" >- <span id="author">{source}</span>
      </div>

      <div className='buttons'>

      <a className="button"  style={{ backgroundColor: `${accentColor}` }} id="tweet-quote" title="Tweet this quote!" target="_top" href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22We%20become%20what%20we%20think%20about.%22%20Earl%20Nightingale">
          <i className="fa fa-twitter"></i>
      </a>
      <a className="button"  style={{ backgroundColor: `${accentColor}` }} id="tumblr-quote"  rel="noreferrer" title="Post this quote on tumblr!" target="_blank" href="https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=Earl%20Nightingale&amp;content=We%20become%20what%20we%20think%20about.&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button">
          <i className="fa fa-tumblr"></i>
      </a>
      <button onClick = {() => {handleClick();
                                handleNewQuote();}}  style={{ backgroundColor: `${accentColor}` }} className="button" id="new-quote" >New quote</button>
      </div>
      </div>
      {/* <div className="footer">by <a href="">Dipika</a></div> */}
      </div>
);
}

export default Quotes;