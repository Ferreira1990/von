import React from 'react'
import '../footer/Footer.css'
import LOGOV from '../../assets/von.png'

const Footer = () => {
  return (
   <div className='Boxfooter'>
    <div className='Footertitle'>
        <h1>VON PLÖTZ</h1>
    </div>
    
    <div className='Footerlogo'>
        <img src={LOGOV} alt="" />
    </div>

    <div className='Derechos'>
        <h4>VÖNPLÖTZ © todos los derechos reservados</h4>
    </div>

    <div>
        
    </div>

   </div>

  )
}

export default Footer