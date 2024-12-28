import React from 'react';
import Chord from './components/Chord';
import Teoria from './components/Teoria';

export default function Home() {
  const test_conf = {name: "Ermias", wtf: "WTF WTF"}
  return (
    <div className='font-mono'>
      <Chord conf = {test_conf}/>
      <Teoria />  
    </div>
  );
}
