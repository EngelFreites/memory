import { useContext, useEffect, useState } from "react"
import { getLevel } from "../services/levels"
import { barajeoDeCartas } from "../helpers"
import moveContext from "../context/moveGameContext"


export const useLevel = (numberLevel) => {
  const [nivel, setNivel] = useState(Number(numberLevel))
  const [tryAgain, setTryAgain] = useState(false)  
  const [loading, setLoading] = useState(true)
  const [cartas, setCartas] = useState({})
  const [moreLevel, setMorelevel] = useState(true)

  const moveContxt = useContext(moveContext)
  const {setMove} = moveContxt


  useEffect(()=> {
    if(nivel <= 3){
      getLevel({nivel}).then(level => 
        { 
          console.log(level)
          setCartas(barajeoDeCartas(level.carts))
          setMove(level.move)
          setLoading(false)  
            setTryAgain(false) 
          }  
        )
    }else{
      setMorelevel(false)
    }
    
  }, [nivel, tryAgain, numberLevel])

  return { nivel, loading, setNivel, setTryAgain, cartas, setCartas, moreLevel}

}