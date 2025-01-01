export const notes = new Map([
  ["A", "A"],
  ["A#/B♭", "A#"],
  ["B", "B"],
  ["C", "C"],
  ["C#/D♭", "C#"],
  ["D", "D"],
  ["D#/E♭", "D#"],
  ["E", "E"],
  ["F", "F"],
  ["F#/G♭", "F#"],
  ["G", "G"],
  ["G#/A♭", "G#"],
]);

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
  ["ø", { il: "mb5m7", prune: [], ren: { ...ren_all } }],
  ["o", { il: "mb5M6", prune: [], ren: { ...ren_all, M6: "♭♭7" } }],
  ["m6", { il: "m3m6", prune: [], ren: { ...ren_all } }],
  ["7(9)", { il: "Mm7m9", prune: ["P5"], ren: { ...ren_all } }],
  ["7(♭9)", { il: "Mm7b9", prune: ["P5"], ren: { ...ren_all } }],
  ["7(#9)", { il: "Mm7#9", prune: ["P5"], ren: { ...ren_all, A9: "#9" } }],
  ["7(♭13)", { il: "Mb13", prune: ["M9", "P11", "P5"], ren: { ...ren_all } }],
  ["7(13)", { il: "Mm7m13", prune: ["M9", "P11", "P5"], ren: { ...ren_all } }],
  ["m7(9)", { il: "mm7m9", prune: ["P5"], ren: { ...ren_all } }],
  ["m7(11)", { il: "mm7m11", prune: ["P5", "M9"], ren: { ...ren_all } }],
  ["Δ(13)", { il: "MM7m13", prune: ["P5", "P11", "M9"], ren: { ...ren_all } }],
]);
