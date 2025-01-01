"use client";

import { fingers } from "../utils/utils";
import { useEffect, useRef } from "react";
import { SVGuitarChord } from "svguitar";
import t from "teoria";
import { chord_config } from "../utils/config";

const Chord = ({ root, qual }) => {
  const chordDivRef = useRef(null);

  useEffect(() => {
    try {
      // first check that input values are valid
      t.note(root);
      t.chord(`A${qual}`);
      // first empty the div if there is already svg in it
      if (chordDivRef.current) {
        while (chordDivRef.current.firstChild) {
          // console.log("Found child in div. emptying before drawing new svg");
          chordDivRef.current.removeChild(chordDivRef.current.firstChild);
        }
      }
      const chart = new SVGuitarChord("#chart");
      // const new_chord_spec = { ...chord_spec, fingers: fingers(root, qual) }
      const new_chord_spec = {
        title: "",
        position: 1,
        barres: [],
        fingers: fingers(root, qual, chord_config.frets),
      };
      // console.log("new chord spec", new_chord_spec.fingers);
      chart.configure(chord_config).chord(new_chord_spec).draw();
    } catch (err) {
      console.log("Input chord root & type not OK");
      console.log(err);
    }
  });

  return (
    <div className="font-mono my-5 lg:max-w-screen-xl">
      <div
        id="chart"
        className="mx-3 p-3 lg:mx-6 rounded-xl shadow-xl bg-gray-50"
        ref={chordDivRef}
      ></div>
    </div>
  );
};

export default Chord;
