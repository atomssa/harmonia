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

export const caged_all = {
  C: [1, 3, 5, 1, 3],
  A: [1, 5, 1, 3, 5],
  G: [1, 3, 5, 1, 5, 1],
  E: [1, 5, 1, 3, 5, 1],
  D: [1, 5, 1, 3],
};

const fix = {
  C: { 2: 7, 4: 0 },
};

export const fix_caged = (fix) => {
  var ret = { ...caged_all };
  Object.keys(fix).forEach((k) => {
    if (k in fix) {
      ret[k] = caged_all[k]
        .map((x, i) => {
          return i in fix[k] ? fix[k][i] : x;
        })
        .filter((x) => x !== 0);
    } else {
      ret[k] = caged_all[k];
    }
  });
  return ret;
};

// il: interval list
// prune: to remove
// ren: rename intervals (eg R instead of P1)
export const quals = new Map([
  [
    "M",
    {
      il: "",
      prune: [],
      ren: { ...ren_all },
      alt: [],
      caged: { ...caged_all },
    },
  ],
  [
    "m",
    {
      il: "m",
      prune: [],
      ren: { ...ren_all },
      alt: [],
      caged: { ...caged_all },
    },
  ],
  [
    "7",
    {
      il: "Mm7",
      prune: [],
      ren: { ...ren_all },
      alt: [],
      caged: fix_caged({
        C: { 2: 7, 5: 0 },
        E: { 2: 7 },
        D: { 2: 7 },
        A: { 2: 7 },
      }),
    },
  ],
  [
    "m7",
    {
      il: "mm7",
      prune: [],
      ren: { ...ren_all },
      alt: [],
      caged: fix_caged({
        E: { 2: 7 },
        A: { 2: 7 },
        D: { 2: 7 },
      }),
    },
  ],
  [
    "Δ",
    {
      il: "MM7",
      prune: [],
      ren: { ...ren_all },
      alt: [],
      caged: fix_caged({
        E: { 1: 0, 2: 7, 5: 0 },
        A: { 2: 7, 4: 0 },
        D: { 2: 7 },
      }),
    },
  ],
  [
    "ø",
    {
      il: "mb5m7",
      prune: [],
      ren: { ...ren_all },
      alt: [],
      caged: { ...caged_all },
    },
  ],
  [
    "o",
    {
      il: "mb5M6",
      prune: [],
      ren: { ...ren_all, M6: "♭♭7" },
      alt: [],
      caged: { ...caged_all },
    },
  ],
  [
    "m6",
    {
      il: "m3m6",
      prune: [],
      ren: { ...ren_all },
      alt: [],
      caged: { ...caged_all },
    },
  ],
  [
    "7(9)",
    {
      il: "Mm7m9",
      prune: ["P5"],
      ren: { ...ren_all },
      alt: [],
      caged: { ...caged_all },
    },
  ],
  [
    "7(♭9)",
    {
      il: "Mm7b9",
      prune: ["P5"],
      ren: { ...ren_all },
      alt: [],
      caged: { ...caged_all },
    },
  ],
  [
    "7(#9)",
    {
      il: "Mm7#9",
      prune: ["P5"],
      ren: { ...ren_all, A9: "#9" },
      alt: [],
      caged: { ...caged_all },
    },
  ],
  [
    "7(♭13)",
    {
      il: "Mb13",
      prune: ["M9", "P11", "P5"],
      ren: { ...ren_all },
      alt: ["7(#5)"],
      caged: { ...caged_all },
    },
  ],
  [
    "7(13)",
    {
      il: "Mm7m13",
      prune: ["M9", "P11", "P5"],
      ren: { ...ren_all },
      alt: [],
      caged: { ...caged_all },
    },
  ],
  [
    "m7(9)",
    {
      il: "mm7m9",
      prune: ["P5"],
      ren: { ...ren_all },
      alt: [],
      caged: { ...caged_all },
    },
  ],
  [
    "m7(11)",
    {
      il: "mm7m11",
      prune: ["P5", "M9"],
      ren: { ...ren_all },
      alt: [],
      caged: { ...caged_all },
    },
  ],
  [
    "Δ(13)",
    {
      il: "MM7m13",
      prune: ["P5", "P11", "M9"],
      ren: { ...ren_all },
      alt: [],
      caged: { ...caged_all },
    },
  ],
]);
