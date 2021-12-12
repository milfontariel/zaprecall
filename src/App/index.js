import Content from '../Initial';
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
