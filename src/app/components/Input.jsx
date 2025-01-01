"use client";

import { notes, quals } from "../utils/consts";
import Button from "./Button";

const Input = ({ onInputChanged, root, qual }) => {
  const handleClick = (btn_type, btn_value) => {
    if (btn_type == "note") {
      onInputChanged(btn_value, qual);
    }
    if (btn_type == "qual") {
      onInputChanged(root, btn_value);
    }
  };

  return (
    <div>
      <div className="flex m-3">
        {Object.keys(notes).map((n, i) => (
          <Button
            btn_type="note"
            btn_value={notes[n]}
            isClicked={notes[n] === root}
            key={`note_${i}`}
            onBtnClicked={handleClick}
          >
            {n}
          </Button>
        ))}
      </div>
      <div className="flex m-3">
        {Array.from(quals.keys()).map((q, i) => (
          <Button
            btn_type="qual"
            btn_value={quals.get(q).il}
            isClicked={quals.get(q).il === qual}
            key={`note_${i}`}
            onBtnClicked={handleClick}
          >
            {q}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Input;
