import React from "react";
import Slots from "./Slots";

const Won = (props) => {  
    let x = props.x;
    let y = props.y;
    let z = props.z;
  
    return (
        <>
            <div className="slot_inner">
                <h1>{x}{y}{z}</h1>
                <h1>You have WON</h1>
                <hr></hr>
            </div>
        </>
    )
}

export default Won;