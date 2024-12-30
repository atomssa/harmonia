import t from "teoria";
import { spn_to_fboard_list } from "../utils/spn";

export const pprint = (a) => {
  return a
    .map((n) => <span>{n} </span>)
    .reduce(
      (acc, x) =>
        acc === null ? (
          x
        ) : (
          <>
            {acc} | {x}
          </>
        ),
      null
    );
};

export const zip = (a, b) => a.map((k, i) => [k, b[i]]);

export const cap = (val) => {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export const nextOctave = (n) => {
  return t.note(`${n.name()}${n.accidental()}${n.octave() + 1}`);
};

export const normalize = (n) => {
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
export const fingers = (root, qual, max_frets = 12) => {
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
