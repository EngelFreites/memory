import './title.css'
export default function Title ({children, color}){
  return(
    <h1 className="title" style={{color:`${color}`}}>{children}</h1>
  )
}