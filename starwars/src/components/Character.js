// Write your Character component here
import React from "react";

const Character = (props)=>{
    return(
        <div>
            <img className="ricky-image" alt="img" src={props.image}/>
            <h1>Name: {props.name}</h1>
            <h3>Status: {props.status} </h3>
            <h5>Gender: {props.gender} </h5>
            <h5>Species: {props.species} </h5>
        </div>
    )
    
}
export default Character;
