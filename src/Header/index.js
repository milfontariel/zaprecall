import './style.css';
import logo from '../assets/logo.svg';

export default function Header(){
  return (
    <div className="header">
      <img src={logo} />
      <span>ZapRecall</span>
    </div>
  )
}