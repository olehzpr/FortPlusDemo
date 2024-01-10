import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {

  return (
    <div className="navbar-container">
      <div className='navbar'>
        <Link className='text-link' to="/" aria-label='Головна сторінка' title='Головна сторінка'>
          <div className='main-nav'>ТОВ "НАУКОВО-ЕКСПЕРТНИЙ ЦЕНТР "ФОРТ ПЛЮС"</div>
        </Link>
      </div>
    </div>
  )
}
