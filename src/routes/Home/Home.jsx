import { useNavigate } from "react-router-dom";

import Button from "../../components/Button/Button";


export default function Home (){
  const navigate = useNavigate()

  const handleClick = ()=>{
    navigate('/levels/1')
  }

  return(
    <div className="content-home">
      <Button onClick={handleClick}> PLAY </Button>
    </div>
  )
}