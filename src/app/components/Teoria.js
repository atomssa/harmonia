'use client'

import teoria from "teoria";
import React, {useState} from "react";

function Teoria(props) {

    const [inputVal, setInputVal] = useState('a4');
    const [inputBgCol, setInputBgCol] = useState('green')
    const handleInputChange = (evt) => {
        const inpt = evt.target.value
        try {
            teoria.note(inpt)
            setInputVal(evt.target.value)
            setInputBgCol('green')
        } catch (err) {
            console.log(`Error. ${inpt} is not valid note name`)
            setInputBgCol('red')
        }
    }

    return ( 
        <div>
            <h1>Teoria</h1>
            <input type='text' value={inputVal} style={{backgroundColor: inputBgCol}} onChange={handleInputChange}/>
            <p> {inputVal} (ionian) = {teoria.note(inputVal).scale('ionian').simple()} </p>
            <p> {inputVal} (mixolydian) = {teoria.note(inputVal).scale('mixolydian').simple()} </p>
            <p> {inputVal} chord sus2 = {teoria.note(inputVal).chord('sus2').toString()} </p>
            <p> {inputVal} </p>
        </div>
     );
}

export default Teoria;