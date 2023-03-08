import { useEffect, useState, useContext } from 'react'
import { useLevel } from '../../hooks/useLevel'
import { Tarjeta } from '../Tarjeta/Tarjeta'
import { TiArrowSync, TiArrowRight } from "react-icons/ti"
import'./Table.css'
import moveContext from '../../context/moveGameContext'
import moveUserContext from '../../context/moveUserContext'
import { LightBox } from '../lightBox/LightBox'
import Header from '../header/Header'
import { VarMenu } from '../varMenu/varMenu'
import { useNavigate, useParams } from 'react-router-dom'


export default function Table () {
  const [visiables, setVisibales] = useState([])
  const {numberLevel} = useParams()
  const navigate = useNavigate()
  const {nivel, loading, setTryAgain, cartas, setCartas, setNivel} = useLevel(numberLevel)
 

  console.log({numberLevel})
  
  //contextos
  const moveUserContxt = useContext(moveUserContext)
  const moveContxt = useContext(moveContext)
  const {move} = moveContxt
  const { moveUser, setMoveUser } = moveUserContxt
  
  const allCarts =  Object.keys(cartas)

  const comparate = (cartas, visiables, setVisibales, setCartas) => {
    const element1 = cartas[visiables[0]]
    const element2 = cartas[visiables[1]]

    if(element1 === element2 ){
        setTimeout(()=>{
          const restCartas = Object.keys(cartas)
            .filter( carta => cartas[carta] !== element1)
            .reduce((obj, key) => {
              return Object.assign(obj,
                 { [key]: cartas[key]}
                )
            },{})

          setCartas(restCartas)
          setVisibales([])
        }, 1200)
      } else{
        setTimeout(()=>{
          setMoveUser( moveUser + 1)
          setVisibales([])
        }, 1000)
        
      }
  }
   
  useEffect(() => {

    if(visiables.length === 2){
      comparate(cartas, visiables, setVisibales, setCartas)
    }
  },[visiables])

  return(
    <>
    <VarMenu />
      <Header/>
      <div className='content-table'>
        <div className="table">
          {
            loading && <h1> Cargando </h1>
          }

          { move !==  moveUser
            ? allCarts.map( (tarjeta) =>(
              <Tarjeta  
                key={tarjeta}
                content={cartas[tarjeta]}
                tarjeta={tarjeta} 
                visiables={visiables} 
                setVisibales={setVisibales} 
              />        
            ))

            : <LightBox>
              <p className='reaction-emoji'>🤦</p>
              <h1> you are loser </h1>
                <button className='table-button' onClick={() =>{
                  setMoveUser(0)
                  setTryAgain(true)
                }
              }> Try Again <TiArrowSync className='icon'/> </button>
              
              </LightBox>
          }

          {
            Object.keys(cartas).length === 0 && !loading
            ? <LightBox className='lightbox'>
            <p className='reaction-emoji'>🤩</p>
            <h1>You are the winner</h1>
            <div className='content-button'>
              <button className='table-button' onClick={() =>{
                setMoveUser(0)
                setTryAgain(true)
              }}> Try Again  <TiArrowSync className='icon'/> </button>

              <button className='table-button' onClick={() => {
                setNivel(nivel + 1 )
                navigate(`/levels/${Number(numberLevel) + 1}`)
                setMoveUser(0)
              }}>next level <TiArrowRight className='icon'/> </button>
            </div>

            </LightBox>
            : null
          }
        </div>
      </div>  
    </>
  )
}