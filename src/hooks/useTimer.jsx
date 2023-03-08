import { useState, useEffect } from "react";

export const  useTimer = () =>{
  const [ segundos, setSegundos ] = useState(40)
  const [finish, setFinish] = useState(false)
  useEffect(()=>{
    if(segundos !== 0 && !finish ){
      setTimeout(()=>{
        setSegundos( segundos - 1)
      }, 1000)  
    } 

 
  },[segundos, finish])


   return {segundos, setFinish, setSegundos, finish}
}