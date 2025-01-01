import React from "react";
import { pprint, intervals, notes } from "../utils/utils";

export default function Intervals({ root, qual }) {
  return (
    <div className="flex">
      <span className="ml-4 mr-3">Intervals:</span>
      <span className="mr-10">{pprint(intervals(root, qual))}</span>
      <span className="mr-3">Notes:</span>
      <span>{pprint(notes(root, qual))}</span>
    </div>
  );
}
