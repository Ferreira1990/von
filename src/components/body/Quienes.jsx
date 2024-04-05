import React from 'react'
import '../../components/body/Quienes.css'

const Quienes = () => {
  return (
   <div id='quienes' className='Boxquienes'>
    <div className='Quienesuno'>
        <h1  data-aos="fade-right" data-aos-duration="2500">Quienes Somos?</h1>
    </div>
    <div className='Quienesdos'>
        <h4  data-aos="fade-left" data-aos-duration="2500"><span className='Spanvon'>Von Plötz</span> es una empresa
             que ofrece servicios de construcción,
              gasfitería, mueblería, pintura,sistemas 
              de regadío entre otros. Proporcionanamos soluciones completas 
              para construcciones, remodelaciones y reparaciones, además de servicios de instalación, 
              fabricación y pintura para hogares y empresas.</h4>

    </div>

   </div>
  )
}

export default Quienes