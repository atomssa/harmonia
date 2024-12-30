"use client";

import { notes, quals2 } from "../utils/consts";
import Button from "./Button";

const Input = ({ onInputChanged, root, qual }) => {
  const handleClick = (btn_type, btn_value) => {
    console.log(`Clicked button of type=${btn_type} and value=${btn_value}`);
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
        {Array.from(quals2.keys()).map((q, i) => (
          <Button
            btn_type="qual"
            btn_value={quals2.get(q)}
            isClicked={quals2.get(q) === qual}
            key={`note_${i}`}
            onBtnClicked={handleClick}
          >
            {q}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Input;
