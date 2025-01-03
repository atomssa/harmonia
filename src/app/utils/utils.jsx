import t from "teoria";
import { spn_to_fboard_list } from "../utils/spn";
import { hsla, quals } from "./consts";
import { finger_sty } from "./consts";
import { root } from "postcss";
export const pprint = (a, cls = "rnd") => {
  return a
    .map((n) => <span className={cls}>{n}</span>)
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

export const filt_bv = (map, searchFunc) => {
  let ret = [];
  for (let [key, value] of map.entries()) {
    if (searchFunc(value)) ret.push({ k: key, v: value });
  }
  return ret;
};

export const find_bv = (map, searchFunc) => {
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
  const prune = find_bv(quals, (x) => x.il === qual).v.prune;
  const ren = find_bv(quals, (x) => x.il === qual).v.ren;
  const vn = new Map(cN.map((k, i) => [k, cV[i]]));
  var res = [];
  vn.forEach((v, k) => {
    if (!prune.includes(v)) {
      const n1 = normalize(k);
      const n2 = nextOctave(n1);
      const n3 = nextOctave(n2);
      const n4 = nextOctave(n3);
      const nn = [n1, n2, n3, n4];
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
    fade_list(res);
    highlight(res, qual, forms, max_frets);
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

export const unfade = (f) => {
  Object.keys(f[2]).forEach((k) => {
    if (f[2][k] instanceof hsla) {
      f[2][k] = f[2][k].unfade();
    }
  });
};

export const fade = (f) => {
  Object.keys(f[2]).forEach((k) => {
    if (f[2][k] instanceof hsla) {
      f[2][k] = f[2][k].fade();
    }
  });
};

export const fade_list = (fingers) => {
  fingers.forEach((f) => fade(f));
  return fingers;
};

export const strIdx = { E: 6, A: 5, D: 4, G: 6, C: 5 };

export const highlight = (fingers, qual, forms, max_frets) => {
  if (forms.length === 0) return fingers;
  const match = (f, s, deg, r) => {
    return (
      f[0] === s &&
      (f[2].text.includes(deg) || (f[2].text === "R" && deg === 1)) &&
      f[1] <= max_frets &&
      (r === undefined || Math.abs(r[1] - f[1]) <= 5)
    );
  };
  const q = find_bv(quals, (x) => x.il === qual).v;
  forms.forEach((form) => {
    const degrees = q.caged[form];
    const degrees_nn = degrees.filter((d) => d !== null);
    const roots = filt_bv(fingers, (y) =>
      match(y, strIdx[form], degrees[0])
    ).map((x) => x.v);
    let toUnfade = [];
    let idx = 0;
    while (idx < roots.length && toUnfade.length != degrees_nn.length) {
      const root = roots[idx];
      toUnfade = [];
      degrees.forEach((deg, i) => {
        if (deg != null) {
          const f = find_bv(fingers, (y) =>
            match(y, strIdx[form] - i, deg, root)
          ).v;
          f && toUnfade.push(f);
        }
      });
      idx++;
    }
    toUnfade.forEach((f) => unfade(f));
  });
};

export const intervals = (root, qual) => {
  const prune = find_bv(quals, (x) => x.il === qual).v.prune;
  const ren = find_bv(quals, (x) => x.il === qual).v.ren;
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
  const prune = find_bv(quals, (x) => x.il === qual).v.prune;
  let notes = [];
  for (let [key, value] of vn.entries()) {
    if (!prune.includes(key)) notes.push(value);
  }
  return notes;
};
