import { useState } from "react";
import FaceCard from "./FaceCard";
import BackCard from "./BackCard";

export default function Flashcard({card, indexAtual, setAtual, display, flashcards, levels}){
  const [border, setBorder] = useState('default');
  const [virada, setVirada] = useState(false);
  return(
    <div data-identifier="flashcard" className={`flash-card ${border}`}>
      {!virada
        ? <FaceCard card={card} indexAtual={indexAtual} virada={virada} setAtual={setAtual} setVirada={setVirada} flashcards={flashcards}/>
        : <BackCard card={card} indexAtual={indexAtual} setBorder={setBorder} virada={virada} setAtual={setAtual} setVirada={setVirada} display={display} flashcards={flashcards} levels={levels}/>
      }
    </div>
  )
}