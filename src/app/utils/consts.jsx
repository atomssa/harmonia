export const notes_l = [
  "A",
  "A#/Bb",
  "B",
  "C",
  "C#/Db",
  "D",
  "D#/Eb",
  "E",
  "F",
  "F#/Gb",
  "G",
  "G#/Ab",
];
export const quals_l = [
  "m",
  "M",
  "7",
  "min7",
  "maj7",
  "𝇉",
  "𝇈",
  "m6",
  "79",
  "maj7 13",
  "13b",
  "11b",
];

export const notes = {
  A: "A",
  "A#/Bb": "A#",
  B: "B",
  C: "C",
  "C#/Db": "C#",
  D: "D",
  "D#/Eb": "D#",
  E: "E",
  F: "F",
  "F#/Gb": "F#",
  G: "G",
  "G#/Ab": "G#",
};

const sty_all = { strokeColor: "black", strokeWidth: 3 };
export const finger_sty = {
  P1: { color: "blue", shape: "square", ...sty_all },
  m3: { color: "red", ...sty_all },
  M3: { color: "red", ...sty_all },
  P5: { color: "green", ...sty_all },
  b5: { color: "green", ...sty_all },
};

export const ren_all = { P1: "R" };

// il: interval list
// prune: to remove
// ren: rename intervals (eg R instead of P1)
export const quals = new Map([
  ["M", { il: "", prune: [], ren: { ...ren_all } }],
  ["m", { il: "m", prune: [], ren: { ...ren_all } }],
  ["7", { il: "Mm7", prune: [], ren: { ...ren_all } }],
  ["m7", { il: "mm7", prune: [], ren: { ...ren_all } }],
  ["Δ", { il: "MM7", prune: [], ren: { ...ren_all } }],
  ["Φ", { il: "mb5m7", prune: [], ren: { ...ren_all } }],
  ["O", { il: "mb5M6", prune: [], ren: { ...ren_all, M6: "bb7" } }],
  ["m6", { il: "m3m6", prune: [], ren: { ...ren_all } }],
  ["7(9)", { il: "Mm7m9", prune: ["P5"], ren: { ...ren_all } }],
  ["7(b9)", { il: "Mm7b9", prune: ["P5"], ren: { ...ren_all } }],
  ["7(#9)", { il: "Mm7#9", prune: ["P5"], ren: { ...ren_all, A9: "#9" } }],
  ["m7(9)", { il: "mm7m9", prune: ["P5"], ren: { ...ren_all } }],
  ["Δ(13)", { il: "MM7m13", prune: ["P5", "P11", "M9"], ren: { ...ren_all } }],
  ["13b", { il: "Mb13", prune: ["M9", "P11", "P5"], ren: { ...ren_all } }],
  ["13", { il: "Mm7m13", prune: ["M9", "P11", "P5"], ren: { ...ren_all } }],
  ["11b", { il: "mm11", prune: ["P5", "M9"], ren: { ...ren_all } }],
]);
