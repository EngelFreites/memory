import { useState } from 'react'
import ElementsVarView from '../ElementsVarView/ElementsVarView'
import ElementUsuario from '../ElementUsuario/ElementUsuario'
import './varMenu.css'
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";


const elementVar = [
  {
    number : 1,
    icon: '🏡',
    label: 'home',
    link:'/home'

  },
  {
    number : 2,
    icon: '🪜',
    label: 'levels',
    link:'/levels'
  },
  {
    number: 3,
    icon: '🏰',
    label: 'Discover',
    link: '/discover'
  },
  {
    number: 4,
    icon: '😿',
    label: 'Closed',
    link: '/'
  }
]
export const VarMenu = ()=>{
  const [isOpen, setIsOpen] = useState(false)

  return(
    <div className={`var-menu ${isOpen? 'expanded' : 'collapsed'}`}>
      
      <ElementUsuario isOpen={isOpen} />
      {
        isOpen
        ? <BiChevronLeft onClick={() => setIsOpen(false)} className='arrow-icon'/>
        : <BiChevronRight onClick={() => setIsOpen(true)} className='arrow-icon'/>

      }

      {
        elementVar.map(element =>(
          <ElementsVarView element={element} isOpen={isOpen} key={element.number}/>
        ))
      }
    </div>
  )
}