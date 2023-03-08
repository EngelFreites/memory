import { createContext, useState } from "react";


const moveUserContext = createContext(null)

export const MoveUserProvider = ({children}) =>{
  const [moveUser, setMoveUser] = useState(0)
  return(
    <moveUserContext.Provider value={{moveUser, setMoveUser}}>
      {children}
    </moveUserContext.Provider>
  )
}

export default moveUserContext