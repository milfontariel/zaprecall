import sucesso from '../assets/sucess.svg';

export default function Sucess(){
  return (
    <div className="box-result">
      <div>
        <h1>PARABÉNS!</h1>
        <img src={sucesso} alt="" />
      </div>
      <p>Você não esqueceu de nenhum flashcard!</p>
    </div>
  )
}