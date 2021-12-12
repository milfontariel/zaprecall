import { useState } from 'react/cjs/react.development';
import Header from '../Header';
import Content from '../Initial';
import Result from '../Result.js';
import './style.css';
import React from 'react';

let resultado = true;

export default function Flashcards({display}){
  const [atual, setAtual] = useState(flashcards[0]);
  const indexAtual = {
    index: flashcards.indexOf(atual, [0]),
    atual: atual
  };
  return (
    <div className='container'>
      <Flashcard card={atual} indexAtual={indexAtual} setAtual={setAtual} display={display} />
    </div>
  )
}

function Flashcard({card, indexAtual, setAtual, display}){
  const [border, setBorder] = useState('default');
  const [virada, setVirada] = useState(false);
  return(
    <div className={`flash-card ${border}`}>
      {!virada
        ? <FaceCard card={card} indexAtual={indexAtual} virada={virada} setAtual={setAtual} setVirada={setVirada}/>
        : <BackCard card={card} indexAtual={indexAtual} setBorder={setBorder} virada={virada} setAtual={setAtual} setVirada={setVirada} display={display}/>
      }
    </div>
  )
}

function FaceCard({card, indexAtual, setVirada}){
  return (
    <div className="frontface-card">
      <div className='index'>{indexAtual.index + 1}/{flashcards.length}</div>
      <h1>{card.Q}</h1>
      <FlipFace setVirada={setVirada} />
    </div>
  )
}


function FlipFace({setVirada}){  
  return (
    <div>
      <div className='flip' onClick={() => setVirada(true)}></div>
    </div>
  )
}

function BackCard({card, indexAtual, setAtual, setBorder, setVirada, display}){
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
      <div className='index'>{indexAtual.index + 1}/{flashcards.length}</div>
      <p className='reply'>{card.R}</p>

      {concluido 
      ? <FlipCard setAtual={setAtual} setVirada={setVirada} setBorder={setBorder} indexAtual={indexAtual} display={display} resultado={resultado}/>
      : <ul className='levels'><Levels setBorder={setBorder} setConcluido={setConcluido} result={result}/></ul>}

    </div>
  )
}

function FlipCard({setBorder, setAtual, setVirada, indexAtual, display, resultado}){

  return (
    <div className='flip' onClick={() => {
      setVirada(false);
      indexAtual.index < flashcards.length-1
      ? setAtual(flashcards[indexAtual.index+1])
      : display([<Result resultado={resultado} />]);
      setBorder('default');
    }}></div>
  )
}

function Levels({setBorder, setConcluido, result, setResult}){
  function choose(name){
    setBorder(`border-${name}`);
    setConcluido(true);
  }
  return (
    levels.map(({name, text, id}) => {
      return (
        <li className={`level ${name}`} onClick={() => {
          choose(name, id);
          result(id);
        }}>{text}</li>
        )
      })
      )
    }
    
const levels = [
  {name: 'level1', text: 'Aprendi agora', id: true},
  {name: 'level2', text: 'Não lembrei', id: false},
  {name: 'level3', text: 'Lembrei com esforço', id: true},
  {name: 'level4', text: 'Zap!', id: true}
];

const flashcards = [
  {
    Q: 'O que é JSX?',
    R: 'Uma extensão de linguagem do JavaScript'
  },
  {
    Q: 'O React é __',
    R: 'uma biblioteca JavaScript para construção de interfaces'
  },
  {
    Q: 'Componentes devem iniciar com __',
    R: 'letra maiúscula'
  },
  {
    Q: 'Podemos colocar __ dentro do JSX',
    R: 'expressões'
  },
  {
    Q: 'O ReactDOM nos ajuda __',
    R: 'interagindo com a DOM para colocar componentes React na mesma'
  },
  {
    Q: 'Usamos o npm para __',
    R: 'gerenciar os pacotes necessários e suas dependências'
  },
  {
    Q: 'Usamos props para __',
    R: 'passar diferentes informações para componentes'
  },
  {
    Q: 'Usamos estado (state) para __',
    R: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
  },
];
