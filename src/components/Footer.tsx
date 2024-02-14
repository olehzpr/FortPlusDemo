import { useLocation } from 'react-router-dom';
import './Footer.css'

export default function Footer() {
  const {pathname} = useLocation();

  type PhoneInfo = {
    description: string,
    phoneNumbers: string[]
  }

  const phoneNumbers: {[path:string]: PhoneInfo} = {
    "/car-diagnostics": {description:"Детальніше про діагностику автомобілів", phoneNumbers: ["+380662666163", "+380508899550"]},
    "/occupational-health" : {description:"Детальніше про навчання з питань охорони праці", phoneNumbers: ["+380508581006"]},
    "/workshop": {description:"Детальніше про майстерню", phoneNumbers: ["+380666086601", "+380679800988"]}
  }

  return (
    <div className='footer-container' id='footer'>
      <div id='location' className='footer'>
        <span>АДРЕСА<img src='./location.png' className='location-icon' alt='location-icon'/></span>
        <span title='Адреса'>вул.  Київське шосе, 33<br/>м. Полтава, Україна, 36008</span>
      </div>
      <div id='phone-number' className='footer'>
        <span>ТЕЛЕФОН <img src='./telephone-call.png' className='phone-image-icon' alt='phone-icon'/></span>
        <span title='Номер телефону'>(0532) 63-30-77<br/>38(050) 85-81-006</span>
      </div>
      {pathname != '/' && phoneNumbers[pathname] ? 
        <div id='phone-number' className='footer'>
          <span className='phone-description'>{phoneNumbers[pathname].description} <img src='./telephone-call.png' className='phone-image-icon' alt='phone-icon'/></span>
          <span title='Номер телефону'>
            {phoneNumbers[pathname].phoneNumbers.map(number => (
              <span key={number}>{number}<br/></span>
            ))}
          </span>
        </div>        
        : <></>
      }
      <div id='EDRPOU'className='footer'>
        <span>ЄДРПОУ</span>
        <span title='ЄДРПОУ'>30486299</span>
      </div>
    </div>
  )
}
