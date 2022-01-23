import flip from '../assets/flip.svg';
import Result from '../Result';

export default function FlipCard({ setBorder, setAtual, setVirada, indexAtual, display, resultado, flashcards }) {

  return (
      <img data-identifier="arrow" src={flip} alt='flipcard' className='flip' onClick={() => {
        setVirada(false);
        indexAtual.index < flashcards.length - 1
          ? setAtual(flashcards[indexAtual.index + 1])
          : display([<Result resultado={resultado} />]);
        setBorder('default');
        }
      } />
  )
}