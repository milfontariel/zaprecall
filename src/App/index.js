import Header from '../Header';
import Content from '../Initial';
import Flashcards from '../Flashcards';
import Result from '../Result.js';
import './style.css';
import { useState } from 'react';


export default function App(){
  const [page, setPage] = useState([<Content display={display}/>]);

  function display(pagina){
    setPage(pagina);
  }

  return (
    <div>
      {page.map((component) => {
        return component
      })}
    </div>
  )
}
