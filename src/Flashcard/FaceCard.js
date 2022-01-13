import FlipFace from "./FlipFace"

export default function FaceCard({card, indexAtual, setVirada, flashcards}){
  return (
    <div className="frontface-card">
      <div data-identifier="counter" className='index'>{indexAtual.index + 1}/{flashcards.length}</div>
      <h1>{card.Q}</h1>
      <FlipFace setVirada={setVirada} />
    </div>
  )
}