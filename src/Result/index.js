import Header from '../Header';
import './style.css';
import Sucess from './Sucess';
import Failure from './Failure';

export default function Result({resultado}){
  return (
    <div>
      <Header />
      <div className="result">
        {
          resultado ? <Sucess /> : <Failure /> 
        }
      </div>
    </div>
  )
}