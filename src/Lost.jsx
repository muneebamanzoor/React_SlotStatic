import React from "react";

const Lost = (props) => {
    let x = props.x;
    let y = props.y;
    let z = props.z;

    return (
        <>
            <div className="slot_inner">
                <h1>{x}{y}{z}</h1>
                <h1>You have LOST</h1>
                <hr></hr>
            </div>
        </>
    )
}

export default Lost;