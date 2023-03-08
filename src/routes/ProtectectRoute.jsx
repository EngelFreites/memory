import { Navigate } from "react-router-dom"


export const ProtectectRoute = ({children}) =>{
  const user = window.localStorage.getItem('tokenUser')



  if(!user){
    console.log('hellow')
    return <Navigate to='/' />
  }

  return children
}