import flip from '../assets/flip.svg';

export default function FlipFace({setVirada}){  
  return (
    <img data-identifier="arrow" src={flip} className='flip' alt='flipface' onClick={() => setVirada(true)} />
  )
}