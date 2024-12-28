"use client";

import t from "teoria";
import { SVGuitarChord } from "svguitar";
import React, { useEffect, useRef, useState } from "react";
import { chord_spec, chord_config } from "../utils/config";
import { spn_to_fboard_list, spn_to_fboard_map } from "../utils/spn";
import { Noto_Music } from "next/font/google";

function Chord(props) {
  const chordDivRef = useRef(null);

  const [fingering, setFingering] = useState([]);
  const [inputRootVal, setInputRootVal] = useState("Ab");
  const [inputQualVal, setInputQualVal] = useState("maj7");
  const [inputRootBgCol, setInputRootBgCol] = useState("white");
  const [inputQualBgCol, setInputQualBgCol] = useState("white");

  const handleRootChange = (evt) => {
    const inpt = evt.target.value;
    try {
      t.note(evt.target.value);
      setInputRootBgCol("white");
    } catch (err) {
      console.log(`Error. ${inpt} is not valid note name`);
      setInputRootBgCol("red");
    } finally {
      setInputRootVal(evt.target.value);
    }
  };

  const handleQualChange = (evt) => {
    const inpt = evt.target.value;
    try {
      t.note(inputRootVal).chord(evt.target.value);
      setInputQualBgCol("white");
    } catch (err) {
      console.log(`Error. ${inpt} is not valid chord quality name`);
      setInputQualBgCol("red");
    } finally {
      setInputQualVal(evt.target.value);
    }
  };

  useEffect(() => {
    console.log(`Chord component rendered`);
    try {
      // first check that input values are valid
      t.note(inputRootVal);
      t.chord(`A${inputQualVal}`);
      // first empty the div if there is already svg in it
      if (chordDivRef.current) {
        while (chordDivRef.current.firstChild) {
          console.log("Found child in div. emptying before drawing new svg");
          chordDivRef.current.removeChild(chordDivRef.current.firstChild);
        }
      }
      const chart = new SVGuitarChord("#chart");
      // const new_chord_spec = { ...chord_spec, fingers: fingers(inputRootVal, inputQualVal) }
      const new_chord_spec = {
        title: "",
        position: 1,
        barres: [],
        fingers: fingers(inputRootVal, inputQualVal, chord_config.frets),
      };
      console.log("new chord spec", new_chord_spec.fingers);
      chart.configure(chord_config).chord(new_chord_spec).draw();
    } catch (err) {
      console.log("Input chord root & type not OK");
      console.log(err);
    }
  });

  function cap(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }

  const nextOctave = (n) => {
    return t.note(`${n.name()}${n.accidental()}${n.octave() + 1}`);
  };

  const normalize = (n) => {
    const fullName = cap(n.toString());
    console.log("Normalizing", fullName);
    var fb_pos = spn_to_fboard_list[fullName];
    if (fb_pos === undefined) {
      console.log(
        "chord",
        fullName,
        " is not in standard format. checking enharmonics"
      );
      const n2 = n
        .enharmonics(true)
        .find((x) => cap(x.toString()) in spn_to_fboard_list);
      if (n2 !== undefined) {
        return n2;
      } else {
        if (n.octave() < 6) {
          return normalize(nextOctave(n));
        } else {
          throw new Error("Cannot normalize note", n.toString());
        }
      }
    } else {
      return n;
    }
  };

  // takes note and chord def and returns fretting positions
  const fingers = (root, qual, max_frets = 12) => {
    console.log("calculate fretting positions");
    const chord = t.note(root).chord(qual);
    const cN = chord.notes();
    const cV = chord.voicing().map((x) => x.toString());
    console.log("Voicings=", cV);
    const vn = new Map(cN.map((k, i) => [k, cV[i]]));
    console.log(vn);
    var res = [];
    vn.forEach((v, k) => {
      console.log("k,v pair=", cap(k.toString()), v);
      const n1 = normalize(k);
      const n2 = nextOctave(n1);
      const n3 = nextOctave(n2);
      // const nn = [normalize(k), nextOctave(normalize(k)), nextOctave(nextOctave(normalize(k)))]
      const nn = [n1, n2, n3];
      nn.forEach((kk) => {
        const fb_pos = spn_to_fboard_list[cap(kk.toString())];
        if (fb_pos !== undefined) {
          console.log("fb_pos =", fb_pos);
          fb_pos.forEach((x) => {
            if (x[1] < max_frets + 1) {
              res.push([...x, ...[{ text: v }]]);
            }
          });
        }
      });
    });
    console.log("res=", res); //.map(x => `${x[0]}(${x[1]})`))
    return res;
  };

  return (
    <div className="font-mono my-5">
      <div className="m-5">
        <span className="text-orange-600 text-4xl">SVGuitar </span>

        <div className="flex">
          <div className="m-3">
            <label htmlFor="root-note">Root:</label>
            <input
              type="text"
              id="root-note"
              className="shadow-inner p-1 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={inputRootVal}
              style={{ backgroundColor: inputRootBgCol }}
              onChange={handleRootChange}
            />
          </div>

          <div className="m-3">
            <label htmlFor="chord-qual">Chord:</label>
            <input
              type="text"
              id="chord-qual"
              className="shadow-inner p-1 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={inputQualVal}
              style={{ backgroundColor: inputQualBgCol }}
              onChange={handleQualChange}
            />
          </div>
        </div>
      </div>

      <div
        id="chart"
        className="mx-12 p-4 rounded-xl shadow-xl bg-gray-50"
        ref={chordDivRef}
      >
        {" "}
      </div>
    </div>
  );
}

export default Chord;
