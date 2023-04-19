import React from "react";
import Won from './Won';
import Lost from "./Lost";

const Slots = (props) => {
    let x = props.x;
    let y = props.y;
    let z = props.z;

    return(
    // if( (x===y) && (y===z) && (z===x)){
    //     return <Won/>
    // }
    // else if ((x!==y) || (y!==z) || (z!==x)){
    //     return <Lost/>
    // }
    (x===y) && (y===z) && (z===x) ? <Won x={x} y={y} z={z}/> : <Lost x={x} y={y} z={z}/>
    );
}

 export default Slots;