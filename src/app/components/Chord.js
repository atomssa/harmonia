'use client'

import teoria from "teoria";
import { SVGuitarChord } from "svguitar";
import React, { useEffect, useRef, useState } from "react";
import { chord_spec, chord_config } from "../utils/config";
import { pprint } from "../utils/utils"
import { spn_to_fboard_list } from "../utils/spn"

function Chord(props) {

  const chordDivRef = useRef(null)

  const [fingering, setFingering] = useState([])
  const [inputRootVal, setInputRootVal] = useState('Ab');
  const [inputQualVal, setInputQualVal] = useState('#5b9');
  const [inputRootBgCol, setInputRootBgCol] = useState('green')
  const [inputQualBgCol, setInputQualBgCol] = useState('green')

  const { conf } = props;

  const handleRootChange = (evt) => {
    const inpt = evt.target.value
    try {
      teoria.note(inpt)
      setInputRootVal(evt.target.value)
      setInputRootBgCol('green')
      handleInputChange()
    } catch (err) {
      console.log(`Error. ${inpt} is not valid note name`)
      setInputRootBgCol('red')
    }
  }

  const handleQualChange = (evt) => {
    const inpt = evt.target.value
    try {
      teoria.chord(`A${inpt}`)
      setInputQualVal(evt.target.value)
      setInputQualBgCol('green')
      handleInputChange()
    } catch (err) {
      console.log(`Error. ${inpt} is not valid chord quality name`)
      setInputQualBgCol('red')
      handleInputChange()
    }
  }

  const handleInputChange = () => {

  }

  useEffect(() => {
    console.log(`Chord component ${conf.name} rendered`)
    // first empty the div if there is already svg in it
    if (chordDivRef.current) {
      while (chordDivRef.current.firstChild) {
        console.log("Found child in div. emptying before drawing new svg")
        chordDivRef.current.removeChild(chordDivRef.current.firstChild);
      }
    }
    const chart = new SVGuitarChord('#chart')
    const new_chord_spec = { ...chord_spec, "fingers": fingers(inputRootVal, inputQualVal) }
    chart.configure(chord_config).chord(new_chord_spec).draw()
  })

  function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }

  // takes note and chord def and returns fingering
  const fingers = (root, qual) => {
    console.log("calculate input fingering")
    const chord = teoria.note(root).chord(qual)
    const cN = chord.notes().map(x => capitalizeFirstLetter(x.toString()))
    const cV = chord.voicing().map(x => x.toString())
    const vn = cV.map((k, i) => [k, cN[i]])
    pprint(vn.map(x => `${x[0]}(${x[1]})`))
    const res = cN.flatMap(x => spn_to_fboard_list[x])
    pprint(res) //.map(x => `${x[0]}(${x[1]})`))
    return res
  }

  return (
    <div>
      <br />
      <h1>SVGuitar</h1>
      <input type='text' value={inputRootVal} style={{ backgroundColor: inputRootBgCol }} onChange={handleRootChange} />
      <br />
      <hr />
      <hr />
      <input type='text' value={inputQualVal} style={{ backgroundColor: inputQualBgCol }} onChange={handleQualChange} />

      <p> {inputRootVal}{inputQualVal} fingers = {pprint(fingers(inputRootVal, inputQualVal))} </p>

      <div id="chart" width='50vw' ref={chordDivRef}></div>
    </div>
  );
}

export default Chord;