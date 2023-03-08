import { Link } from "react-router-dom";
import './contentLevel.css'

export default function ContentLevel ({level}){
  const {level_number} = level

  return(
    <Link className="link-name" to={`/levels/${level_number}`}> Nivel {level_number}</Link>
  )
}