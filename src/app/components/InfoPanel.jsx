import React from "react";
import { pprint, intervals, notes, find_bv, formatRoot } from "../utils/utils";
import { quals } from "../utils/consts";

export default function InfoPanel({ root, qual }) {
  return (
    <div className="flex flex-col lg:flex-row text-primary ml-4 p-1 border-primary border-2 rounded-lg w-fit">
      <div className="ml-2 lg:ml-5 mb-1 lg:mb-0">
        <span className="mr-1">Chord:</span>
        <span className="rnd">
          {formatRoot(root)}
          <sub>{find_bv(quals, (x) => x.il === qual).k}</sub>
        </span>
      </div>
      <div className="ml-2 lg:ml-5 mb-1 lg:mb-0">
        <span className="mr-1">Degrees:</span>
        <span className="mr-1">{pprint(intervals(root, qual))}</span>
      </div>
      <div className="ml-2 lg:ml-5 mb-1 lg:mb-0">
        <span className="mr-1">Notes:</span>
        <span className="mr-1">{pprint(notes(root, qual))}</span>
      </div>
    </div>
  );
}
