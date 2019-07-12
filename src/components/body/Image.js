import React from "react";



const Image = props => {
    return (
        <div>
            <img className="image" src={props.value} style={{ alignContent: 'center',}}>

           </img>
        </div>
    )
}

export default Image;