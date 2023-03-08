import './contador.css'
import moveContext from '../../context/moveGameContext'
import moveUserContext from '../../context/moveUserContext'
import { useContext } from 'react'

export default function Contador (){

  const moveUserContxt = useContext(moveUserContext)
  const moveContxt = useContext(moveContext)

  const {move} = moveContxt
  const { moveUser} = moveUserContxt

  return(
    <>
      {
        <h1>{`${moveUser}/${move}`}</h1>
      }
      
    </>
  )
}