import { Link } from 'react-router-dom'
import './Card.css'

export default function Card(props:any) {
  return (
    <div className='card-container' title={props.text.charAt(0) + props.text.slice(1).toLowerCase()}>
      <div className='card'>
        <img className='image' src={props.img} alt={props.alt}/>
        <div className='content'>
          <div className='text'>{props.text}</div>
          <div className='description'>{props.description}</div>
        </div>
        <Link to={props.link} aria-label={props.text} className='link'></Link>
      </div>
    </div>
  )
}
