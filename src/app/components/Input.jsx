"use client";

import { notes, quals } from "../utils/consts";
import { mapFindByValue } from "../utils/utils";
import Button from "./Button";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const Input = ({ onInputChanged, root, qual }) => {
  const handleClick = (btn_type, btn_value, closePopover) => {
    if (btn_type == "note") {
      onInputChanged(btn_value, qual);
    }
    if (btn_type == "qual") {
      onInputChanged(root, btn_value);
    }
    closePopover();
  };

  return (
    <div>
      <div className="flex ml-3">
        <Popover className="relative">
          <PopoverButton className="text-primary m-1 p-1 border-primary border-2 rounded-lg">
            Root - {root}
          </PopoverButton>
          <PopoverPanel
            anchor="bottom"
            className="flex mx-3 my-1 flex-wrap border-primary border-2 p-2 w-fit bg-background"
          >
            {({ close }) =>
              Array.from(notes.keys()).map((n, i) => (
                <Button
                  isClicked={notes.get(n) === root}
                  key={`note_${i}`}
                  onBtnClicked={() => handleClick("note", notes.get(n), close)}
                >
                  {n}
                </Button>
              ))
            }
          </PopoverPanel>
        </Popover>

        <Popover className="relative">
          <PopoverButton className="text-primary m-1 p-1 border-primary border-2 rounded-lg">
            Chord - {mapFindByValue(quals, (x) => x.il === qual).k}
          </PopoverButton>
          <PopoverPanel
            anchor="bottom"
            className="flex mx-3 my-1 flex-wrap border-primary border-2 p-2 w-fit bg-background"
          >
            {({ close }) =>
              Array.from(quals.keys()).map((q, i) => (
                <Button
                  isClicked={quals.get(q).il === qual}
                  key={`qual_${i}`}
                  onBtnClicked={() =>
                    handleClick("qual", quals.get(q).il, close)
                  }
                >
                  {q}
                </Button>
              ))
            }
          </PopoverPanel>
        </Popover>
      </div>
    </div>
  );
};

export default Input;
