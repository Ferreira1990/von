import React from 'react'
import '../equipo/Equip.css'

import Workera from '../../assets/workera.jpg'
import Workerb from '../../assets/workerb.jpg'
import Workerc from '../../assets/workerc.jpg'
import Workerd from '../../assets/workerd.jpg'
import Workere from '../../assets/workere.jpg'

const Equip = () => {
    return (
        <div className='Containerequip'>
            <div className='Boxequip'>
                <h1>Nuestros trabajadores</h1>
                <p>Nuestro equipo de constructores está formado por profesionales altamente capacitados comprometidos con la excelencia en cada proyecto. Con habilidades excepcionales y una pasión por el éxito, garantizamos resultados sobresalientes en cada construcción que emprendemos.</p>
            </div>

            <div className='Containerimgequip'>
            <img className='workera' src={Workere} alt="" />
                <img className='workera' src={Workera} alt="" />
                <img className='workera' src={Workerb} alt="" />
            </div>

            <div className='Containerimgequiptwo'>
                <img className='workera' src={Workerc} alt="" />
                <img className='workera' src={Workerd} alt="" />
            </div>
        </div>
    )
}

export default Equip