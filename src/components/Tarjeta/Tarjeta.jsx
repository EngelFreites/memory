import './tarjeta.css'

export function Tarjeta({content, setVisibales, visiables, tarjeta}){

  const handleVisiable = (tarjeta, visiables) =>{ 
    if (visiables.length < 2){
      setVisibales(preState => [...preState, tarjeta])
     }  


  }

  return(
    <>
      {
        content !== 'visible'
        ?  <div className={`tarjeta ${visiables.includes(tarjeta) && 'descubierta'}`} onClick={() => handleVisiable(tarjeta, visiables)}>
            <div className='tarjeta__contenido' >{content}</div> 
          </div>

        :<div className={`invisible`}>
            <div className='tarjeta__contenido' >{content}</div> 
          </div>
      }
    
    </>

  
  )
}
