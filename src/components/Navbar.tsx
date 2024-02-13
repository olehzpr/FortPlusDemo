import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [goBackLinkText, setGoBackLinkText] = useState('НА ГОЛОВНУ');
  const {pathname} = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", 
      });
  }, [pathname]);
  useEffect(() => {
    window.addEventListener('resize', updateTextOnWindowResize); 
  }, [])
  function updateTextOnWindowResize(){
    if(window.innerWidth < 800){
        setGoBackLinkText('');
    }
    else{
        setGoBackLinkText('НА ГОЛОВНУ');
    }
  }
  return (
    <div className="navbar-container">
      {pathname != '/' ? 
        <Link to='/' className='go-back-link' aria-label='Повернутись на головну сторінку' title='Повернутись на головну сторінку'><img className='arrow-icon' src='arrow.png'/><span>{goBackLinkText}</span></Link>
        : <></>
      }
      <div className='navbar'>
        <Link className='text-link' to="/" aria-label='Головна сторінка' title='Головна сторінка'>
          <div className='main-nav'>ТОВ "ФОРТ"</div>
        </Link>
      </div>
    </div>
  )
}
