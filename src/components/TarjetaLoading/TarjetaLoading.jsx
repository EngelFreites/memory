import { useEffect, useState } from 'react'
import './tarjetaLoading.css'

export default function TarjetaLoading ({isLoading}){
  const [show, setShow] = useState(false)

  useEffect(()=>{

    if(isLoading){
      setTimeout(()=>{
        setShow(!show)
      }, 1000)
    }

  },[show])

  return(
    <div className='content-loading'>
      <div className="content-tarje">
        <div 
          className={`tarjeta ${show ? 'descubierta' : ''}  `}
        >
        <div className='tarjeta__contenido' >🌞</div> 
      </div>
        <div 
          className={`tarjeta ${show ? '' : 'descubierta'} `}
        >
        <div className='tarjeta__contenido' > 🌚 </div> 
      </div>

      </div>
      <h2 className='text-loading'>CARGANDO</h2>
    </div>

  )
}