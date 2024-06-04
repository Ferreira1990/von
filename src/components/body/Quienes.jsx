import React from 'react'
import '../../components/body/Quienes.css'


const Quienes = () => {
  return (
   <div id='quienes' className='Boxquienes'>

    <div className='Quienesuno'>
        <h1  data-aos="fade-right" data-aos-duration="2500">Quienes Somos?</h1>
    </div>

    <div className='Boxofquienessomosvideo'>

    <div className='Quienesdos'>
        <h4  data-aos="zoom-in" data-aos-duration="2500"><span className='Spanvon'>Von Plötz</span> es una empresa
             que ofrece servicios de construcción,
              gasfitería, mueblería, pintura,sistemas 
              de regadío entre otros. Proporcionanamos soluciones completas 
              para construcciones, remodelaciones y reparaciones, además de servicios de instalación, 
              fabricación y pintura para hogares y empresas.</h4>
    </div>

    <div data-aos="zoom-out" data-aos-duration="2500" className='Moviepresentation'>
    <iframe src="https://www.youtube.com/embed/EgQmPFX0uC0?autoplay=1&loop=1&playlist=EgQmPFX0uC0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>

</div>



      
      </div>  



   </div>
  )
}

export default Quienes