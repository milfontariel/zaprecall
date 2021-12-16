import failure from '../assets/failure.svg';

export default function Failure(){
  return (
    <div className="box-result">
      <div>
        <h1>Putz..</h1>
        <img src={failure} alt="" />
      </div>
      <p>Você esqueceu alguns flashcards...<br />Não desanime! Na próxima você consegue!</p>
    </div>
  )
}