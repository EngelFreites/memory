import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import'./ElementsVarView.css'

export default function ElementsVarView ({element, isOpen}){

  const navigate = useNavigate()
  return(
    <div className="elementsVarView">
      <div className={`itemContent ${isOpen ? '': 'collapsed'}`} onClick={() =>{

          if(element.label === 'Closed'){
            Swal.fire(
              {
                title: 'SURE',
                text: 'Esta Seguro que quieres cerrar tu Sesion?',
                icon:'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sii!'

              }
            
            ).then( result =>{
              if(result.isConfirmed){
                window.localStorage.clear()
                navigate('/')
              }
            })
          }else{
            navigate(element.link)
          }
     
        }}>
          
        <div className="icon" >
          {element.icon}
        </div>

        <div > <span  className={`label ${isOpen ? '': 'disguise'}`}>{element.label}</span></div>
      </div>
  
    </div>
  )
}