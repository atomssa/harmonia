import React from 'react';
import Chord from './components/Chord';
import Teoria from './components/Teoria';

export default function Home() {
  const test_conf = {name: "Ermias", wtf: "WTF WTF"}
  return (
    <div>
      <h1>SVGuitar playground</h1>
      <Teoria />  
      <Chord conf = {test_conf}/>
    </div>
  );
}
