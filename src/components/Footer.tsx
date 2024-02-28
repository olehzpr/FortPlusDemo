import './Footer.css'

export default function Footer() {
  type PhoneInfo = {
    description: string,
    phoneNumber: string
  }

  const phoneNumbers: PhoneInfo[] = [
    {description:"Діагностику автомобілів", phoneNumber: "38(066)26-66-163"},
    {description:"Навчання з  ОП, професіїй", phoneNumber: "38(050)85-81-006"},
    {description:"Майстерню", phoneNumber: "38(067)98-00-988"}
  ]

  return (
    <div className='footer-container' id='footer'>
      <div id='location' className='footer'>
        <span>АДРЕСА<img src='./location.png' className='location-icon' alt='location-icon'/></span>
        <span title='Адреса'>вул.  Київське шосе, 33<br/>м. Полтава, Україна, 36008</span>
        <br/>
      </div>
      <div id='phone-number' className='footer'>
        <span>ТЕЛЕФОН <img src='./telephone-call.png' className='phone-image-icon' alt='phone-icon'/></span>
        <span title='Номер телефону'>(0532) 63-30-77<br/>38(050) 85-81-006</span>
        <br/>
      </div>
      <div id='phone-number' className='footer'>
        <span>Детальніше про:</span>
        <span className='phone-description'></span>
        <ul>
          {phoneNumbers.map((phoneNumber) => (
            <li className='phone-list'>{phoneNumber.description}: <span>{phoneNumber.phoneNumber} <img src='./telephone-call.png' className='phone-image-icon' alt='phone-icon'/></span></li>
          ))}
        </ul>
      </div>
    </div>
  )
}
