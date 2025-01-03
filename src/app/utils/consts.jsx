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

export class hsla {
  constructor(h, s, l, a = 1.0, faded = false) {
    this.h = h;
    this.s = s;
    this.l = l;
    this.a = a;
    this.faded = faded;
  }
  fade() {
    if (this.faded) return this;
    return new hsla(this.h, this.s, Math.min(this.l + 0.55, 0.95), 0.5, true);
  }
  unfade() {
    if (!this.faded) return this;
    return new hsla(this.h, this.s, Math.min(this.l - 0.55, 0.95), 1.0, false);
  }
  fmt() {
    if (this.a != 1) {
      return `hsla(${this.h}, ${this.s * 100}%, ${this.l * 100}%, ${
        this.a * 100
      }%)`;
    } else {
      return `hsl(${this.h}, ${this.s * 100}%, ${this.l * 100}%)`;
    }
  }
  toString() {
    return this.fmt();
  }
}

const sty_all = {
  strokeColor: new hsla(0, 0, 0.2),
  strokeWidth: 4,
};

export let finger_sty = {
  P1: { color: new hsla(240, 1, 0.5), shape: "square", radius: 7, ...sty_all },
  m3: { color: new hsla(0, 1, 0.5), ...sty_all },
  M3: {
    color: new hsla(0, 1, 0.5),
    ...sty_all,
  },
  P5: { color: new hsla(120, 1, 0.25), ...sty_all },
  b5: { color: new hsla(120, 1, 0.25), ...sty_all },
  d5: { color: new hsla(120, 1, 0.25), ...sty_all },
  M7: { color: new hsla(0, 0, 0.31), ...sty_all },
  m7: { color: new hsla(0, 0, 0.31), ...sty_all },
  M6: { color: new hsla(100, 0, 0.31), ...sty_all },
};

export const ren_all = { P1: "R" };
// export const ren_all = {};

export const caged_all = {
  C: [1, 3, 5, 1, 3],
  A: [1, 5, 1, 3, 5],
  G: [1, 3, 5, 1, 3, 1],
  E: [1, 5, 1, 3, 5, 1],
  D: [1, 5, 1, 3],
};

export const fix_caged = (fix) => {
  var ret = { ...caged_all };
  Object.keys(fix).forEach((k) => {
    if (!(k in fix)) {
      ret[k] = caged_all[k];
    } else {
      if (fix[k] === null) {
        delete ret[k];
      } else {
        ret[k] = caged_all[k].map((x, i) => {
          return i in fix[k] ? fix[k][i] : x;
        });
      }
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
      caged: fix_caged({
        C: null,
      }),
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
        C: { 2: 7, 4: null },
        E: { 2: 7 },
        D: { 2: 7 },
        A: { 2: 7 },
        G: null,
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
        C: null,
        G: null,
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
        E: { 1: null, 2: 7, 5: null },
        A: { 2: 7, 4: null },
        D: { 2: 7 },
        C: { 3: 7 },
        G: null,
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
      caged: fix_caged({
        E: { 1: null, 2: 7, 5: null },
        A: { 2: 7, 4: null },
        D: { 2: 7 },
        C: null,
        G: null,
      }),
    },
  ],
  [
    "o",
    {
      il: "mb5M6",
      prune: [],
      ren: { ...ren_all, M6: "♭♭7" },
      alt: [],
      caged: fix_caged({
        E: { 1: null, 2: 7, 5: null },
        A: { 2: 7, 4: null },
        D: { 2: 7 },
        C: null,
        G: null,
      }),
    },
  ],
  [
    "m6",
    {
      il: "m3m6",
      prune: [],
      ren: { ...ren_all },
      alt: [],
      caged: fix_caged({
        A: { 2: 6, 4: null },
        E: { 1: null, 2: 6, 5: null },
      }),
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
