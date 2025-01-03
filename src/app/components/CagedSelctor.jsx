import React from "react";
import { caged_all } from "../utils/consts";
import Button from "./Button";

export default function CagedSelctor({ root, qual, caged, onInputChanged }) {
  const toggleForm = (f) => {
    if (f instanceof Array && f.length == 0) {
      onInputChanged(root, qual, []);
    } else if (caged.includes(f)) {
      onInputChanged(
        root,
        qual,
        caged.filter((x) => x !== f)
      );
    } else {
      onInputChanged(root, qual, [...caged, f]);
    }
  };
  return (
    <div className="flex border-2 mb-1 mx-4 border-primary p-1 rounded-lg w-fit">
      {Object.keys(caged_all).map((f) => (
        <Button
          x={console.log(`caged_${f}`)}
          key={`caged_${f}`}
          isClicked={caged.includes(f)}
          onBtnClicked={() => toggleForm(f)}
        >
          {f}
        </Button>
      ))}
      {caged.length > 0 && (
        <Button
          x={console.log(`caged_clr`)}
          key={`caged_clr`}
          isClicked={false}
          onBtnClicked={() => toggleForm([])}
        >
          🗙
        </Button>
      )}
    </div>
  );
}
