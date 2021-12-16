import { useState } from "react";
import FlipCard from './FlipCard';
import Levels from './Levels';
let resultado = true;
export default function BackCard({card, indexAtual, setAtual, setBorder, setVirada, display, flashcards, levels}){
  const [concluido, setConcluido] = useState(false);
  function result(id){    
    if(resultado && id){
      resultado = true;
    } else {
      resultado = false;
    }
  }
  return (
    <div className="backface-card">
      <span className='title'>{card.Q}</span>
      <div data-identifier="counter" className='index'>{indexAtual.index + 1}/{flashcards.length}</div>
      <p className='reply'>{card.R}</p>
      {concluido 
      ? <FlipCard setAtual={setAtual} setVirada={setVirada} setBorder={setBorder} indexAtual={indexAtual} display={display} resultado={resultado} flashcards={flashcards}/>
      : <ul className='levels'><Levels setBorder={setBorder} setConcluido={setConcluido} result={result} levels={levels}/></ul>}
    </div>
  )
}