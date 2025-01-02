"use client";

import { useState } from "react";
import Chord from "./components/Chord";
import Input from "./components/Input";
import Teoria from "./components/Teoria";
import Intervals from "./components/Intervals";

const Home = () => {
  const [root, setRoot] = useState("A");
  const [qual, setQual] = useState("");
  const [forms, setForms] = useState([]);

  const handleInputEvent = (root, qual, forms) => {
    console.log(`Input: root=${root} qual=${qual} forms=${forms}`);
    setRoot(root);
    setQual(qual);
    setForms(forms);
  };

  return (
    <div className="font-mono">
      <div className="m-3">
        <span className="text-orange-600 text-4xl">Harmonia</span>
      </div>
      <Input
        onInputChanged={handleInputEvent}
        root={root}
        qual={qual}
        forms={forms}
      />
      <Intervals root={root} qual={qual} />
      <Chord root={root} qual={qual} forms={forms} />
      <Teoria />
    </div>
  );
};

export default Home;
