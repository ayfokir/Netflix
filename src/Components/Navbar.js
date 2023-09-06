import React, { useEffect, useState } from 'react'
import netFlix from './icons/750_netflix.jpg';
import netFlix1 from './icons/netflix.jpg'
import './Navbar.css'
function Navbar ()
{
    
    const [ show, setShow ] = useState( false );

    useEffect( () =>
    {
        window.addEventListener( "scroll", () =>
        {
            if ( window.scrollY > 100 )
            {
                setShow( true )
            } else
            {
                setShow( false );
            }
        } );
        return () =>
        {
            window.removeEventListener( "scroll" );
        }
    }, [] )
   return (
      <>
          <div className={`nav ${show && "nav__black"}`} >
              <img className='nav__logo'
                   src=  {netFlix}
              />
              <img  className='nav__avater' src={ netFlix1} />
          </div>    

      </>
  )
}

export default Navbar
