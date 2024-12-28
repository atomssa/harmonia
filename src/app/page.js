"use client"

import { useState } from "react";
import Chord from "./components/Chord";
import Input from "./components/Input";
import Teoria from "./components/Teoria";

export default function Home() {

  const [inputRootVal, setInputRootVal] = useState("A");
  const [inputQualVal, setInputQualVal] = useState("");

  const handleInputEvent = (root, qual) => {
    console.log(`Input: root=${root} qual=${qual}`)
    setInputRootVal(root);
    setInputQualVal(qual);
  };

  return (
    <div className="font-mono">
      <div className="m-5">
        <span className="text-orange-600 text-4xl">SVGuitar </span>
      </div>
      <Input onInputChanged={handleInputEvent} root={inputRootVal} qual={inputQualVal}/>
      <Chord inputRootVal={inputRootVal} inputQualVal={inputQualVal}/>
      <Teoria />
    </div>
  );
}
