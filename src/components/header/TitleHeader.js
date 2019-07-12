import React from "react";
import { Header, Image } from 'semantic-ui-react'


const TitleHeader = props => {
    return (

        <div className="title">
            <h1> {props.value} </h1>
        </div>
    )
}

export default TitleHeader;

