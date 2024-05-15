import './App.css'
import Quienes from './components/body/Quienes'
import Equip from './components/equipo/Equip'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Primera from './components/main/Primera'
import Service from './components/servicios/Service'

function App() {  

  return (
    <>
    <Header /> 
    <Primera />  
    <Quienes /> 
    <Service />
    <Equip/>
    <Footer />
    </>
  )
}

export default App
