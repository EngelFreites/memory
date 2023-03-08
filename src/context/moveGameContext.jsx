import { createContext,  useState } from "react";

const moveContext =  createContext(null)


export const MoveProvider = ({children}) =>{
  const [move, setMove] = useState(1)

  return(
    <moveContext.Provider value={{move, setMove}}>
      {children}
    </moveContext.Provider>

  )

}


export default moveContext
