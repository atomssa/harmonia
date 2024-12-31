"use client";

import { useState } from "react";
import Chord from "./components/Chord";
import Input from "./components/Input";
import Teoria from "./components/Teoria";

const Home = () => {
  const [root, setRoot] = useState("A");
  const [qual, setQual] = useState("");

  const handleInputEvent = (root, qual) => {
    console.log(`Input: root=${root} qual=${qual}`);
    setRoot(root);
    setQual(qual);
  };

  return (
    <div className="font-mono">
      <div className="m-5">
        <span className="text-orange-600 text-4xl">SVGuitar </span>
      </div>
      <Input onInputChanged={handleInputEvent} root={root} qual={qual} />
      <Chord root={root} qual={qual} />
      <Teoria />
    </div>
  );
};

export default Home;
