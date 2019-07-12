import React, { useState, useEffect } from "react";


import axios from 'axios';

import TitleHeader from "./components/header/TitleHeader";
import Image from "./components/body/Image";
import PicExplanation from "./components/footer/PicExplanation";
import HeaderExampleImage from "./components/header/HeaderExampleImage";
import "./App.css";

// import 'semantic-ui-css/semantic.min.css';
import { Card, Icon, Image as photos } from 'semantic-ui-react';
// import HeaderExampleImage from "./components/header/HeaderExampleImage";




function App() {
  const [picture, setPicture] = useState({});
console.log('useState=', useState('mel')); 
  useEffect(() => {
    // console.log("return statement");
    axios
      
      .get("https://api.nasa.gov/planetary/apod?api_key=C1J9aPdkdxqgyQdQ1xvuGm9QrNB3T9jB7dycFdyc")
      .then(res => {
        console.log("response data:", res)
        setPicture(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

console.log(picture)
return (
 <div className="container">
  <div className="App">

     {/* < HeaderExampleImage />
      <TitleHeader  value={picture.title} />
      <Image value={picture.url}/>
      <div className="ImgDetail">
      date: {picture.date} &nbsp; */}
      {/* copyright: {picture.copyright} */}
      {/* </div>
     <PicExplanation value={picture.explanation}/> */}
  

  <Card>
        <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
        <Image value={picture.url} ui={false} />
     <Card.Content>
      <Card.Header>
      <TitleHeader value={picture.title} />
      </Card.Header>

      <Card.Meta>
            <div className="date">date: {picture.date}</div>
      </Card.Meta>

      <Card.Description>
            <PicExplanation value={picture.explanation} /> 
      </Card.Description>
    </Card.Content>

    <Card.Content extra>
      <a>
        <Icon name='user' />
        
      </a>
    </Card.Content>
  </Card>
    </div></div>
);
}

export default App;
