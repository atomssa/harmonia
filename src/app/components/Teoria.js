'use client'

import teoria from "teoria";
import React, { useState } from "react";

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

    const pprint = (a) => {
        return a.map((n) => <span>{n} </span>)
            .reduce((acc, x) => acc === null ? x : <>{acc} | {x}</>, null)
    }

    return (
        <div>
            <h1>Teoria</h1>
            <input type='text' value={inputVal} style={{ backgroundColor: inputBgCol }} onChange={handleInputChange} />
            <p> {inputVal} (ionian) = {pprint(teoria.note(inputVal).scale('ionian').simple())} </p>
            <p> {inputVal} (mixolydian) = {pprint(teoria.note(inputVal).scale('mixolydian').simple())} </p>
            <p> {inputVal} chord sus2 = {pprint(teoria.note(inputVal).chord('7').notes().map(x => `${x.name()}${x.octave()}`))} </p>
            <p> {inputVal} ocatve = {teoria.note(inputVal).octave()} </p>
        </div>
    );
}

export default Teoria;