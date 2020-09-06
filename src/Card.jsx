import React from "react";
import "./Card.css";
const Card = (props) => {
    return (
        <div class="card">
        <div class="header">
         <p>{props.heading}</p>
         </div>
            <div class="container">
            <p>Counter Value</p>
            <p>{props.value}</p> 
         </div>
        </div>
    )
}
export default Card;