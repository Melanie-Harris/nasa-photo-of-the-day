import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";



function App() {
  const [picture, setPicture] = useState([]);

  useEffect(() => {
    console.log("return statement");
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14")
      .then(res => {
        setPicture(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

return (
  <div className="App">
    <h1>NASA's Awesome Photo Of The Day</h1>
    <p>
      <h2>{picture.title}</h2>
     
    <img src={picture.url} alt="Nasa Picture" />
    </p>
    <p>
      {picture.explanation}
    </p>
    </div>
);
}

export default App;
