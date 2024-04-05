import React from 'react'
import Iconlogo from '../../assets/von.png'
import '../../components/main/Primera.css'

const Primera = () => {
  return (
    <>
    <div className='boxofprimera'>

        <div className='presentation'>
            <h1 data-aos="fade-left" data-aos-duration="2500">VON PLÖTZ</h1>
            <img className='Iconlogomain' src={Iconlogo} alt="" />
            <h2 data-aos="fade-right" data-aos-duration="2500">Soluciones Integrales</h2>
        </div>
    </div>
    </>
   
  )
}

export default Primera