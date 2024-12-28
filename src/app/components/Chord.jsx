"use client";

import { useEffect, useRef } from "react";
import { SVGuitarChord } from "svguitar";
import t from "teoria";
import { chord_config } from "../utils/config";
import { spn_to_fboard_list } from "../utils/spn";

function Chord(props) {

  const { inputRootVal, inputQualVal } = props;
  const chordDivRef = useRef(null);

  useEffect(() => {
    console.log(`Chord component rendered`);
    try {
      // first check that input values are valid
      t.note(inputRootVal);
      t.chord(`A${inputQualVal}`);
      // first empty the div if there is already svg in it
      if (chordDivRef.current) {
        while (chordDivRef.current.firstChild) {
          // console.log("Found child in div. emptying before drawing new svg");
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
      // console.log("new chord spec", new_chord_spec.fingers);
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
    // console.log("Normalizing", fullName);
    var fb_pos = spn_to_fboard_list[fullName];
    if (fb_pos === undefined) {
      // console.log(`Chord ${fullName} is not in standard format. checking enharmonics`);
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
    // console.log("calculate fretting positions");
    const chord = t.note(root).chord(qual);
    const cN = chord.notes();
    const cV = chord.voicing().map((x) => x.toString());
    // console.log("Voicings=", cV);
    const vn = new Map(cN.map((k, i) => [k, cV[i]]));
    // console.log(vn);
    var res = [];
    vn.forEach((v, k) => {
      // console.log("k,v pair=", cap(k.toString()), v);
      const n1 = normalize(k);
      const n2 = nextOctave(n1);
      const n3 = nextOctave(n2);
      // const nn = [normalize(k), nextOctave(normalize(k)), nextOctave(nextOctave(normalize(k)))]
      const nn = [n1, n2, n3];
      nn.forEach((kk) => {
        const fb_pos = spn_to_fboard_list[cap(kk.toString())];
        if (fb_pos !== undefined) {
          // console.log("fb_pos =", fb_pos);
          fb_pos.forEach((x) => {
            if (x[1] < max_frets + 1) {
              res.push([...x, ...[{ text: v }]]);
            }
          });
        }
      });
    });
    // console.log("res=", res); //.map(x => `${x[0]}(${x[1]})`))
    return res;
  };

  return (
    <div className="font-mono my-5">
      <div
        id="chart"
        className="mx-12 p-4 rounded-xl shadow-xl bg-gray-50"
        ref={chordDivRef}
      >
      </div>
    </div>
  );
}

export default Chord;
