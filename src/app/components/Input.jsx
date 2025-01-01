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
      <div className="flex mx-3 my-1 flex-wrap border-primary border-2 p-2 w-fit">
        {Array.from(notes.keys()).map((n, i) => (
          <Button
            btn_type="note"
            btn_value={notes.get(n)}
            isClicked={notes.get(n) === root}
            key={`note_${i}`}
            onBtnClicked={handleClick}
          >
            {n}
          </Button>
        ))}
      </div>
      <div className="flex mx-3 my-1 flex-wrap border-primary border-2 p-2 w-fit">
        {Array.from(quals.keys()).map((q, i) => (
          <Button
            btn_type="qual"
            btn_value={quals.get(q).il}
            isClicked={quals.get(q).il === qual}
            key={`qual_${i}`}
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
