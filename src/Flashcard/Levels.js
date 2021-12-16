export default function Levels({setBorder, setConcluido, result, levels}){
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