import './Footer.css'

export default function Footer() {
  return (
    <div className='footer-container'>
      <div id='location' className='footer'>
        <span>АДРЕСА<img src='./location.png' className='location-icon' alt='location-icon'/></span>
        <span title='Адреса'>вул.  Київське шосе, 33<br/>м. Полтава, Україна, 36008</span>
      </div>
      <div id='phone-number' className='footer'>
        <span>ТЕЛЕФОН <img src='./telephone-call.png' className='phone-image-icon' alt='phone-icon'/></span>
        <span title='Номер телефону'>(0532) 63-30-77<br/>38(050) 85-81-006</span>
      </div>
      <div id='EDRPOU'className='footer'>
        <span>ЄДРПОУ</span>
        <span title='ЄДРПОУ'>37829281</span>
      </div>
    </div>
  )
}
