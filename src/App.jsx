import React from "react";
import Slots from "./Slots";
import './index.css';

const App = () => {
    return(
        <>
            <h1 className="heading_style">Welcome to <span style={{backgroundColor:'lightgrey'}}><br>               
            </br> 🎰 Slot Machine Game 🎰 </span></h1>
            <div className="slotMachine">
            <Slots x='😃' y='😃' z='😃'/>
            <Slots x='😃' y='😃' z='🎅'/>
            <Slots x='😃' y='🎅' z='😃'/>
            <Slots x='🎅' y='😃' z='😃'/>
            <Slots x='🎅' y='🎅' z='😃'/>
            <Slots x='😃' y='🎅' z='🎅'/>
            <Slots x='🎅' y='🎅' z='🎅'/>
            </div>
            <span>...</span>
            


        </>
    )
}

export default App;