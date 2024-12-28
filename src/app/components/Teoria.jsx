"use client";

import { useState } from "react";
import teoria from "teoria";
import { pprint } from "../utils/utils";

function Teoria(props) {
  const [inputVal, setInputVal] = useState("a4");
  const [inputBgCol, setInputBgCol] = useState("green");
  const handleInputChange = (evt) => {
    const inpt = evt.target.value;
    try {
      teoria.note(inpt);
      setInputVal(evt.target.value);
      setInputBgCol("green");
    } catch (err) {
      console.log(`Error. ${inpt} is not valid note name`);
      setInputBgCol("red");
    }
  };

  return (
    <div>
      <div>
        <span>Teoria</span>
        <input
          type="text"
          value={inputVal}
          style={{ backgroundColor: inputBgCol }}
          onChange={handleInputChange}
        />
      </div>
      <p>
        {inputVal} (ionian) =
        {pprint(teoria.note(inputVal).scale("ionian").simple())}
      </p>
      <p>
        {inputVal} (mixolydian) =
        {pprint(teoria.note(inputVal).scale("mixolydian").simple())}
      </p>
      <p>
        {inputVal} chord sus2 =
        {pprint(
          teoria
            .note(inputVal)
            .chord("7")
            .notes()
            .map((x) => `${x.name()}${x.octave()}`)
        )}
      </p>
      <p>
        {inputVal} ocatve = {teoria.note(inputVal).octave()}
      </p>
    </div>
  );
}

export default Teoria;
