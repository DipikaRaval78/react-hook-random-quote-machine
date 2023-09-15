import React from 'react';
 import {useState} from 'react';

import Quotes from './Quotes.js'
import './App.scss';

const colorsArr = ['4FC1FF', "E8B9AB", 'CB769E', '69995D', 'D2D7DF', '3AA7A3', 'ECA400', '006992', 'AFECE7', '81F499', '890620', 'B6465F', '8ACDEA']

const randomArrVal = (arr) => {
  // console.log(arr)
  let randomNum = Math.floor(Math.random() * arr.length)
  // console.log(arr[randomNum])
  return arr[randomNum]
}
function App() {
  const [accentColor, setAccentColor] = useState('#4FC1FF');


  const handleNewQuote = () => {
    setAccentColor(`#${randomArrVal(colorsArr)}`)
    console.log(accentColor)
  }

  return (
    <div className="App" style={{ backgroundColor: `${accentColor}`, color: `${accentColor}` }}>
      <Quotes accentColor={accentColor} handleNewQuote={handleNewQuote} />
    </div>
  );
}

export default App;
