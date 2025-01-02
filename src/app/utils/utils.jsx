import t from "teoria";
import { spn_to_fboard_list } from "../utils/spn";
import { hsla, quals } from "./consts";
import { finger_sty } from "./consts";
export const pprint = (a) => {
  return a
    .map((n) => <span className="rnd">{n}</span>)
    .reduce(
      (acc, x) =>
        acc === null ? (
          x
        ) : (
          <>
            {acc}
            {x}
          </>
        ),
      null
    );
};

export const zip = (a, b) => a.map((k, i) => [k, b[i]]);

export const cap = (val) => {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
};

export const nextOctave = (n) => {
  return t.note(`${n.name()}${n.accidental()}${n.octave() + 1}`);
};

export const normalize = (n) => {
  const fullName = cap(n.toString());
  var fb_pos = spn_to_fboard_list[fullName];
  if (fb_pos === undefined) {
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

export const formatAccidental = (acc) => {
  if (acc === "x") return "##";
  else if (acc === "bb") return "♭♭";
  else if (acc === "b") return "♭";
  else return acc;
};

export const formatRoot = (root) => {
  const accs = ["#", "b", "x", "bb"];
  if (accs.includes(root.substring(1, 3))) {
    return (
      <span>
        {root[0]}
        <sup>{formatAccidental(root.substring(1, 3))}</sup>
      </span>
    );
  }
  return root;
};

export const mapFindByValue = (map, searchFunc) => {
  for (let [key, value] of map.entries()) {
    if (searchFunc(value)) return { k: key, v: value };
  }
  return {};
};

// takes note and chord def and returns fretting positions
export const fingers = (root, qual, forms, max_frets = 12) => {
  const chord = t.note(root).chord(qual);
  const cN = chord.notes();
  const cV = chord.voicing().map((x) => x.toString());
  const prune = mapFindByValue(quals, (x) => x.il === qual).v.prune;
  const ren = mapFindByValue(quals, (x) => x.il === qual).v.ren;
  const vn = new Map(cN.map((k, i) => [k, cV[i]]));
  var res = [];
  vn.forEach((v, k) => {
    if (!prune.includes(v)) {
      const n1 = normalize(k);
      const n2 = nextOctave(n1);
      const n3 = nextOctave(n2);
      const nn = [n1, n2, n3];
      nn.forEach((kk) => {
        const fb_pos = spn_to_fboard_list[cap(kk.toString())];
        if (fb_pos !== undefined) {
          fb_pos.forEach((x) => {
            if (x[1] < max_frets + 1) {
              res.push([
                ...x,
                ...[{ text: ren[v] ?? v, ...(finger_sty[v] ?? {}) }],
              ]);
            }
          });
        }
      });
    }
  });
  if (forms.length > 0) {
    lighten_list(res);
    highlight(res, qual, forms);
  }
  return res;
};

export const hsl2str = (fingers) => {
  fingers.forEach((f) => {
    Object.keys(f[2]).forEach((k) => {
      if (f[2][k] instanceof hsla) {
        f[2][k] = f[2][k].toString();
      }
    });
  });
  return fingers;
};

export const darken = (f) => {
  Object.keys(f[2]).forEach((k) => {
    if (f[2][k] instanceof hsla) {
      f[2][k] = f[2][k].darken();
    }
  });
};

export const lighten = (f) => {
  Object.keys(f[2]).forEach((k) => {
    if (f[2][k] instanceof hsla) {
      f[2][k] = f[2][k].lighten();
    }
  });
};
export const lighten_list = (fingers) => {
  fingers.forEach((f) => lighten(f));
  return fingers;
};

export const strIdx = { E: 6, A: 5, D: 4, G: 3, B: 2, e: 1 };

export const highlight = (fingers, qual, forms) => {
  const match = (f, s, deg) => {
    return (
      f[0] === s &&
      (f[2].text.includes(deg) || (f[2].text === "R" && deg === 1))
    );
  };
  const q = mapFindByValue(quals, (x) => x.il === qual).v;
  if (forms.length === 0) return fingers;
  forms.forEach((form) => {
    q.caged[form].forEach((x, i) => {
      const f = mapFindByValue(fingers, (y) =>
        match(y, strIdx[form] - i, q.caged[form][i])
      ).v;
      darken(f);
    });
  });
};

export const intervals = (root, qual) => {
  const prune = mapFindByValue(quals, (x) => x.il === qual).v.prune;
  const ren = mapFindByValue(quals, (x) => x.il === qual).v.ren;
  return t
    .note(root)
    .chord(qual)
    .voicing()
    .map((x) => x.toString())
    .map((x) => ren[x] ?? x)
    .filter((x) => !prune.includes(x));
};

export const notes = (root, qual) => {
  const chord = t.note(root).chord(qual);
  const cN = chord
    .notes()
    .map((x) => formatRoot(`${x.name().toUpperCase()}${x.accidental()}`));
  const cV = chord.voicing().map((x) => x.toString());
  const vn = new Map(cV.map((k, i) => [k, cN[i]]));
  const prune = mapFindByValue(quals, (x) => x.il === qual).v.prune;
  let notes = [];
  for (let [key, value] of vn.entries()) {
    if (!prune.includes(key)) notes.push(value);
  }
  return notes;
};
