import { useState } from 'react';
import './style.css';
import React from 'react';
import Flashcard from '../Flashcard';
import flashcards from './flashcards';
import levels from './levels';

export default function Flashcards({display}){
  const [atual, setAtual] = useState(flashcards[0]);
  const indexAtual = {
    index: flashcards.indexOf(atual, [0]),
    atual: atual
  };
  return (
    <div className='container'>
      <Flashcard card={atual} indexAtual={indexAtual} setAtual={setAtual} display={display} flashcards={flashcards} levels={levels}/>
    </div>
  )
}