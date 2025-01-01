import React from "react";
import { pprint, intervals, notes, mapFindByValue } from "../utils/utils";
import { quals } from "../utils/consts";

export default function Intervals({ root, qual }) {
  return (
    <div className="flex flex-col lg:flex-row text-primary ml-4 p-1 border-primary border-2 rounded-lg w-fit">
      <div>
        <span className="ml-4 mr-3">
          {root}
          {mapFindByValue(quals, (x) => x.il === qual).k}
        </span>
      </div>
      <div>
        <span className="ml-4 mr-3">Intervals:</span>
        <span className="mr-10">{pprint(intervals(root, qual))}</span>
      </div>
      <div>
        <span className="ml-4 mr-3">Notes:</span>
        <span>{pprint(notes(root, qual))}</span>
      </div>
    </div>
  );
}
