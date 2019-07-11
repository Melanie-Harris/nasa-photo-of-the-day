import React, { useState, useEffect } from "react";
import axios from 'axios';

import TitleHeader from "./components/header/TitleHeader";
import Image from "./components/body/Image"
import PicExplanation from "./components/footer/PicExplanation"
import "./App.css";






function App() {
  const [picture, setPicture] = useState({});

  useEffect(() => {
    console.log("return statement");
    axios
      
      .get("https://api.nasa.gov/planetary/apod?api_key=C1J9aPdkdxqgyQdQ1xvuGm9QrNB3T9jB7dycFdyc")
      .then(res => {
        setPicture(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

console.log(picture)
return (
  <div className="App">
      
      <TitleHeader value={picture.title} />
      <Image value={picture.url}/>
     <PicExplanation value={picture.explanation}/>
  </div>
);
}

export default App;
