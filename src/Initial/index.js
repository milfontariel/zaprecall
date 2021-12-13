import './style.css';
import logo from '../assets/logo.svg';
import Header from '../Header';
import Flashcards from '../Flashcards';
import next from '../assets/next.svg';

export default function Content({display}){
  let mostrar = [<Header />, <Flashcards display={display} />];
  return (
    <div className="content">
      <img src={logo} />
      <h1>ZapRecall</h1>
      <button data-identifier="start-zap-recall" className='btn-initial' onClick={() => display(mostrar)}>Praticar React<img src={next} alt="next" /></button>
    </div>
  )
}
