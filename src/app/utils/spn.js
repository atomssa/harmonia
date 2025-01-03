// scientific pitch notation

export const fboard_to_spn = {
  6: [
    "E2",
    "F2",
    "F#2/Gb2",
    "G2",
    "G#2/Ab2",
    "A2",
    "A#2/Bb2",
    "B2",
    "C3",
    "C#3/Db3",
    "D3",
    "D#3/Eb3",
    "E3",
    "F3",
    "F#3/Gb3",
    "G3",
    "G#3/Ab3",
    "A3",
    "A#3/Bb3",
    "B3",
    "C4",
    "C#4/Db4",
  ],
  5: [
    "A2",
    "A#2/Bb2",
    "B2",
    "C3",
    "C#3/Db3",
    "D3",
    "D#3/Eb3",
    "E3",
    "F3",
    "F#3/Gb3",
    "G3",
    "G#3/Ab3",
    "A3",
    "A#3/Bb3",
    "B3",
    "C4",
    "C#4/Db4",
    "D4",
    "D#4/Eb4",
    "E4",
    "F4",
    "F#4/Gb4",
  ],
  4: [
    "D3",
    "D#3/Eb3",
    "E3",
    "F3",
    "F#3/Gb3",
    "G3",
    "G#3/Ab3",
    "A3",
    "A#3/Bb3",
    "B3",
    "C4",
    "C#4/Db4",
    "D4",
    "D#4/Eb4",
    "E4",
    "F4",
    "F#4/Gb4",
    "G4",
    "G#4/Ab4",
    "A4",
    "A#4/Bb4",
    "B4",
  ],
  3: [
    "G3",
    "G#3/Ab3",
    "A3",
    "A#3/Bb3",
    "B3",
    "C4",
    "C#4/Db4",
    "D4",
    "D#4/Eb4",
    "E4",
    "F4",
    "F#4/Gb4",
    "G4",
    "G#4/Ab4",
    "A4",
    "A#4/Bb4",
    "B4",
    "C5",
    "C#5/Db5",
    "D5",
    "D#5/Eb5",
    "E5",
  ],
  2: [
    "B3",
    "C4",
    "C#4/Db4",
    "D4",
    "D#4/Eb4",
    "E4",
    "F4",
    "F#4/Gb4",
    "G4",
    "G#4/Ab4",
    "A4",
    "A#4/Bb4",
    "B4",
    "C5",
    "C#5/Db5",
    "D5",
    "D#5/Eb5",
    "E5",
    "F5",
    "F#5/Gb5",
    "G5",
    "G#5/Ab5",
  ],
  1: [
    "E4",
    "F4",
    "F#4/Gb4",
    "G4",
    "G#4/Ab4",
    "A4",
    "A#4/Bb4",
    "B4",
    "C5",
    "C#5/Db5",
    "D5",
    "D#5/Eb5",
    "E5",
    "F5",
    "F#5/Gb5",
    "G5",
    "G#5/Ab5",
    "A5",
    "A#5/Bb5",
    "B5",
    "C6",
    "C#6/Db6",
  ],
};

export const spn_to_fboard_map = {
  E2: [{ s: 6, f: 0 }],
  F2: [{ s: 6, f: 1 }],
  "F#2": [{ s: 6, f: 2 }],
  Gb2: [{ s: 6, f: 2 }],
  G2: [{ s: 6, f: 3 }],
  "G#2": [{ s: 6, f: 4 }],
  Ab2: [{ s: 6, f: 4 }],
  A2: [
    { s: 6, f: 5 },
    { s: 5, f: 0 },
  ],
  "A#2": [
    { s: 6, f: 6 },
    { s: 5, f: 1 },
  ],
  Bb2: [
    { s: 6, f: 6 },
    { s: 5, f: 1 },
  ],
  B2: [
    { s: 6, f: 7 },
    { s: 5, f: 2 },
  ],
  C3: [
    { s: 6, f: 8 },
    { s: 5, f: 3 },
  ],
  "C#3": [
    { s: 6, f: 9 },
    { s: 5, f: 4 },
  ],
  Db3: [
    { s: 6, f: 9 },
    { s: 5, f: 4 },
  ],
  D3: [
    { s: 6, f: 10 },
    { s: 5, f: 5 },
    { s: 4, f: 0 },
  ],
  "D#3": [
    { s: 6, f: 11 },
    { s: 5, f: 6 },
    { s: 4, f: 1 },
  ],
  Eb3: [
    { s: 6, f: 11 },
    { s: 5, f: 6 },
    { s: 4, f: 1 },
  ],
  E3: [
    { s: 6, f: 12 },
    { s: 5, f: 7 },
    { s: 4, f: 2 },
  ],
  F3: [
    { s: 6, f: 13 },
    { s: 5, f: 8 },
    { s: 4, f: 3 },
  ],
  "F#3": [
    { s: 6, f: 14 },
    { s: 5, f: 9 },
    { s: 4, f: 4 },
  ],
  Gb3: [
    { s: 6, f: 14 },
    { s: 5, f: 9 },
    { s: 4, f: 4 },
  ],
  G3: [
    { s: 6, f: 15 },
    { s: 5, f: 10 },
    { s: 4, f: 5 },
    { s: 3, f: 0 },
  ],
  "G#3": [
    { s: 6, f: 16 },
    { s: 5, f: 11 },
    { s: 4, f: 6 },
    { s: 3, f: 1 },
  ],
  Ab3: [
    { s: 6, f: 16 },
    { s: 5, f: 11 },
    { s: 4, f: 6 },
    { s: 3, f: 1 },
  ],
  A3: [
    { s: 6, f: 17 },
    { s: 5, f: 12 },
    { s: 4, f: 7 },
    { s: 3, f: 2 },
  ],
  "A#3": [
    { s: 6, f: 18 },
    { s: 5, f: 13 },
    { s: 4, f: 8 },
    { s: 3, f: 3 },
  ],
  Bb3: [
    { s: 6, f: 18 },
    { s: 5, f: 13 },
    { s: 4, f: 8 },
    { s: 3, f: 3 },
  ],
  B3: [
    { s: 6, f: 19 },
    { s: 5, f: 14 },
    { s: 4, f: 9 },
    { s: 3, f: 4 },
    { s: 2, f: 0 },
  ],
  C4: [
    { s: 6, f: 20 },
    { s: 5, f: 15 },
    { s: 4, f: 10 },
    { s: 3, f: 5 },
    { s: 2, f: 1 },
  ],
  "C#4": [
    { s: 6, f: 21 },
    { s: 5, f: 16 },
    { s: 4, f: 11 },
    { s: 3, f: 6 },
    { s: 2, f: 2 },
  ],
  Db4: [
    { s: 6, f: 21 },
    { s: 5, f: 16 },
    { s: 4, f: 11 },
    { s: 3, f: 6 },
    { s: 2, f: 2 },
  ],
  D4: [
    { s: 5, f: 17 },
    { s: 4, f: 12 },
    { s: 3, f: 7 },
    { s: 2, f: 3 },
  ],
  "D#4": [
    { s: 5, f: 18 },
    { s: 4, f: 13 },
    { s: 3, f: 8 },
    { s: 2, f: 4 },
  ],
  Eb4: [
    { s: 5, f: 18 },
    { s: 4, f: 13 },
    { s: 3, f: 8 },
    { s: 2, f: 4 },
  ],
  E4: [
    { s: 5, f: 19 },
    { s: 4, f: 14 },
    { s: 3, f: 9 },
    { s: 2, f: 5 },
    { s: 1, f: 0 },
  ],
  F4: [
    { s: 5, f: 20 },
    { s: 4, f: 15 },
    { s: 3, f: 10 },
    { s: 2, f: 6 },
    { s: 1, f: 1 },
  ],
  "F#4": [
    { s: 5, f: 21 },
    { s: 4, f: 16 },
    { s: 3, f: 11 },
    { s: 2, f: 7 },
    { s: 1, f: 2 },
  ],
  Gb4: [
    { s: 5, f: 21 },
    { s: 4, f: 16 },
    { s: 3, f: 11 },
    { s: 2, f: 7 },
    { s: 1, f: 2 },
  ],
  G4: [
    { s: 4, f: 17 },
    { s: 3, f: 12 },
    { s: 2, f: 8 },
    { s: 1, f: 3 },
  ],
  "G#4": [
    { s: 4, f: 18 },
    { s: 3, f: 13 },
    { s: 2, f: 9 },
    { s: 1, f: 4 },
  ],
  Ab4: [
    { s: 4, f: 18 },
    { s: 3, f: 13 },
    { s: 2, f: 9 },
    { s: 1, f: 4 },
  ],
  A4: [
    { s: 4, f: 19 },
    { s: 3, f: 14 },
    { s: 2, f: 10 },
    { s: 1, f: 5 },
  ],
  "A#4": [
    { s: 4, f: 20 },
    { s: 3, f: 15 },
    { s: 2, f: 11 },
    { s: 1, f: 6 },
  ],
  Bb4: [
    { s: 4, f: 20 },
    { s: 3, f: 15 },
    { s: 2, f: 11 },
    { s: 1, f: 6 },
  ],
  B4: [
    { s: 4, f: 21 },
    { s: 3, f: 16 },
    { s: 2, f: 12 },
    { s: 1, f: 7 },
  ],
  C5: [
    { s: 3, f: 17 },
    { s: 2, f: 13 },
    { s: 1, f: 8 },
  ],
  "C#5": [
    { s: 3, f: 18 },
    { s: 2, f: 14 },
    { s: 1, f: 9 },
  ],
  Db5: [
    { s: 3, f: 18 },
    { s: 2, f: 14 },
    { s: 1, f: 9 },
  ],
  D5: [
    { s: 3, f: 19 },
    { s: 2, f: 15 },
    { s: 1, f: 10 },
  ],
  "D#5": [
    { s: 3, f: 20 },
    { s: 2, f: 16 },
    { s: 1, f: 11 },
  ],
  Eb5: [
    { s: 3, f: 20 },
    { s: 2, f: 16 },
    { s: 1, f: 11 },
  ],
  E5: [
    { s: 3, f: 21 },
    { s: 2, f: 17 },
    { s: 1, f: 12 },
  ],
  F5: [
    { s: 2, f: 18 },
    { s: 1, f: 13 },
  ],
  "F#5": [
    { s: 2, f: 19 },
    { s: 1, f: 14 },
  ],
  Gb5: [
    { s: 2, f: 19 },
    { s: 1, f: 14 },
  ],
  G5: [
    { s: 2, f: 20 },
    { s: 1, f: 15 },
  ],
  "G#5": [
    { s: 2, f: 21 },
    { s: 1, f: 16 },
  ],
  Ab5: [
    { s: 2, f: 21 },
    { s: 1, f: 16 },
  ],
  A5: [{ s: 1, f: 17 }],
  "A#5": [{ s: 1, f: 18 }],
  Bb5: [{ s: 1, f: 18 }],
  B5: [{ s: 1, f: 19 }],
  C6: [{ s: 1, f: 20 }],
  "C#6": [{ s: 1, f: 21 }],
  Db6: [{ s: 1, f: 21 }],
};

export const spn_to_fboard_list = {
  E2: [[6, 0]],
  F2: [[6, 1]],
  "F#2": [[6, 2]],
  Gb2: [[6, 2]],
  G2: [[6, 3]],
  "G#2": [[6, 4]],
  Ab2: [[6, 4]],
  A2: [
    [6, 5],
    [5, 0],
  ],
  "A#2": [
    [6, 6],
    [5, 1],
  ],
  Bb2: [
    [6, 6],
    [5, 1],
  ],
  B2: [
    [6, 7],
    [5, 2],
  ],
  C3: [
    [6, 8],
    [5, 3],
  ],
  "C#3": [
    [6, 9],
    [5, 4],
  ],
  Db3: [
    [6, 9],
    [5, 4],
  ],
  D3: [
    [6, 10],
    [5, 5],
    [4, 0],
  ],
  "D#3": [
    [6, 11],
    [5, 6],
    [4, 1],
  ],
  Eb3: [
    [6, 11],
    [5, 6],
    [4, 1],
  ],
  E3: [
    [6, 12],
    [5, 7],
    [4, 2],
  ],
  F3: [
    [6, 13],
    [5, 8],
    [4, 3],
  ],
  "F#3": [
    [6, 14],
    [5, 9],
    [4, 4],
  ],
  Gb3: [
    [6, 14],
    [5, 9],
    [4, 4],
  ],
  G3: [
    [6, 15],
    [5, 10],
    [4, 5],
    [3, 0],
  ],
  "G#3": [
    [6, 16],
    [5, 11],
    [4, 6],
    [3, 1],
  ],
  Ab3: [
    [6, 16],
    [5, 11],
    [4, 6],
    [3, 1],
  ],
  A3: [
    [6, 17],
    [5, 12],
    [4, 7],
    [3, 2],
  ],
  "A#3": [
    [6, 18],
    [5, 13],
    [4, 8],
    [3, 3],
  ],
  Bb3: [
    [6, 18],
    [5, 13],
    [4, 8],
    [3, 3],
  ],
  B3: [
    [6, 19],
    [5, 14],
    [4, 9],
    [3, 4],
    [2, 0],
  ],
  C4: [
    [6, 20],
    [5, 15],
    [4, 10],
    [3, 5],
    [2, 1],
  ],
  "C#4": [
    [6, 21],
    [5, 16],
    [4, 11],
    [3, 6],
    [2, 2],
  ],
  Db4: [
    [6, 21],
    [5, 16],
    [4, 11],
    [3, 6],
    [2, 2],
  ],
  D4: [
    [5, 17],
    [4, 12],
    [3, 7],
    [2, 3],
  ],
  "D#4": [
    [5, 18],
    [4, 13],
    [3, 8],
    [2, 4],
  ],
  Eb4: [
    [5, 18],
    [4, 13],
    [3, 8],
    [2, 4],
  ],
  E4: [
    [5, 19],
    [4, 14],
    [3, 9],
    [2, 5],
    [1, 0],
  ],
  F4: [
    [5, 20],
    [4, 15],
    [3, 10],
    [2, 6],
    [1, 1],
  ],
  "F#4": [
    [5, 21],
    [4, 16],
    [3, 11],
    [2, 7],
    [1, 2],
  ],
  Gb4: [
    [5, 21],
    [4, 16],
    [3, 11],
    [2, 7],
    [1, 2],
  ],
  G4: [
    [4, 17],
    [3, 12],
    [2, 8],
    [1, 3],
  ],
  "G#4": [
    [4, 18],
    [3, 13],
    [2, 9],
    [1, 4],
  ],
  Ab4: [
    [4, 18],
    [3, 13],
    [2, 9],
    [1, 4],
  ],
  A4: [
    [4, 19],
    [3, 14],
    [2, 10],
    [1, 5],
  ],
  "A#4": [
    [4, 20],
    [3, 15],
    [2, 11],
    [1, 6],
  ],
  Bb4: [
    [4, 20],
    [3, 15],
    [2, 11],
    [1, 6],
  ],
  B4: [
    [4, 21],
    [3, 16],
    [2, 12],
    [1, 7],
  ],
  C5: [
    [3, 17],
    [2, 13],
    [1, 8],
  ],
  "C#5": [
    [3, 18],
    [2, 14],
    [1, 9],
  ],
  Db5: [
    [3, 18],
    [2, 14],
    [1, 9],
  ],
  D5: [
    [3, 19],
    [2, 15],
    [1, 10],
  ],
  "D#5": [
    [3, 20],
    [2, 16],
    [1, 11],
  ],
  Eb5: [
    [3, 20],
    [2, 16],
    [1, 11],
  ],
  E5: [
    [3, 21],
    [2, 17],
    [1, 12],
  ],
  F5: [
    [2, 18],
    [1, 13],
  ],
  "F#5": [
    [2, 19],
    [1, 14],
  ],
  Gb5: [
    [2, 19],
    [1, 14],
  ],
  G5: [
    [2, 20],
    [1, 15],
  ],
  "G#5": [
    [2, 21],
    [1, 16],
  ],
  Ab5: [
    [2, 21],
    [1, 16],
  ],
  A5: [[1, 17]],
  "A#5": [[1, 18]],
  Bb5: [[1, 18]],
  B5: [[1, 19]],
  C6: [[1, 20]],
  "C#6": [[1, 21]],
  Db6: [[1, 21]],
};
