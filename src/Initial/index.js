import './style.css';
import logo from '../assets/logo.svg';
import Header from '../Header';
import Flashcards from '../Flashcards';

export default function Content({display}){
  let mostrar = [<Header />, <Flashcards />];
  return (
    <div className="content">
      <img src={logo} />
      <h1>ZapRecall</h1>
      <button className='btn-initial' onClick={() => display(mostrar)}>Praticar React</button>
    </div>
  )
}
