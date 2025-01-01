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
          <PopoverButton
            className="text-primary m-1 p-1 border-primary border-2 rounded-lg bg-background-300 
            shadow-sm shadow-gray-500 hover:shadow-md hover:shadow-gray-700 hover:bg-primary 
            hover:text-white focus:outline-0"
          >
            Root - {root}
          </PopoverButton>
          <PopoverPanel
            anchor="bottom"
            className="flex mx-3 my-1 flex-wrap border-background-300 border-2 p-2 w-96 bg-background-200 shadow-lg"
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
          <PopoverButton
            className="text-primary m-1 p-1 border-primary border-2 rounded-lg bg-background-300 
            shadow-sm shadow-gray-500 hover:shadow-md hover:shadow-gray-700 hover:bg-primary 
            hover:text-white focus:outline-0"
          >
            Quality - {mapFindByValue(quals, (x) => x.il === qual).k}
          </PopoverButton>
          <PopoverPanel
            anchor="bottom"
            className="flex mx-3 my-1 flex-wrap border-background-300 border-2 p-2 w-96 bg-background-200 shadow-lg"
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
