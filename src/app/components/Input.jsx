"use client";

import { notes, quals, caged_all } from "../utils/consts";
import { find_bv, pprint } from "../utils/utils";
import Button from "./Button";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const Input = ({ onInputChanged, root, qual, forms }) => {
  const handleClick = (btn_type, btn_value, closePopover) => {
    if (btn_type == "note") {
      onInputChanged(btn_value, qual, forms);
    }
    if (btn_type == "qual") {
      // remove caged forms that are not allowed for the new qual
      const allowed = find_bv(quals, (x) => x.il === btn_value).v.caged;
      const new_forms = forms.filter((f) => f in allowed);
      onInputChanged(root, btn_value, new_forms);
    }
    closePopover();
  };

  const toggleForm = (f, closePopover) => {
    if (f instanceof Array && f.length == 0) {
      onInputChanged(root, qual, []);
    } else if (forms.includes(f)) {
      onInputChanged(
        root,
        qual,
        forms.filter((x) => x !== f)
      );
    } else {
      onInputChanged(root, qual, [...forms, f]);
    }
    if (closePopover !== undefined) closePopover();
  };

  return (
    <div className="flex ml-3">
      <Popover className="relative">
        <PopoverButton className="popover-btn">
          <p className="border-2 border-transparent">Root</p>
          <p className="ml-1">{pprint([root], "rnd-sm")}</p>
        </PopoverButton>
        <PopoverPanel anchor="bottom" className="popover-panel">
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
        <PopoverButton className="popover-btn">
          <p className="border-2 border-transparent">Quality</p>
          <p className="ml-1">
            {pprint([find_bv(quals, (x) => x.il === qual).k], "rnd-sm")}
          </p>
        </PopoverButton>
        <PopoverPanel anchor="bottom" className="popover-panel">
          {({ close }) =>
            Array.from(quals.keys()).map((q, i) => (
              <Button
                isClicked={quals.get(q).il === qual}
                key={`qual_${i}`}
                onBtnClicked={() => handleClick("qual", quals.get(q).il, close)}
              >
                {q}
              </Button>
            ))
          }
        </PopoverPanel>
      </Popover>

      <Popover className="relative">
        <PopoverButton className="popover-btn">
          <p className="border-2 border-transparent"> CAGED </p>
          <p className="ml-1"> {pprint(forms, "rnd-sm")} </p>
        </PopoverButton>
        <PopoverPanel anchor="bottom end" className="popover-panel w-it">
          {({ close }) => (
            <>
              {Object.keys(find_bv(quals, (x) => x.il === qual).v.caged).map(
                (f) => (
                  <Button
                    key={`caged_${f}`}
                    isClicked={forms.includes(f)}
                    onBtnClicked={() => toggleForm(f, close)}
                  >
                    {f}
                  </Button>
                )
              )}
              {forms.length > 0 && (
                <Button
                  key={`caged_clr`}
                  isClicked={false}
                  onBtnClicked={() => toggleForm([], close)}
                >
                  🗙
                </Button>
              )}
            </>
          )}
        </PopoverPanel>
      </Popover>
    </div>
  );
};

export default Input;
