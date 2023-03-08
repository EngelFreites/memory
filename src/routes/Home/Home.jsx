import { useNavigate, useNavigation } from "react-router-dom";

import Button from "../../components/Button/Button";


export default function Home (){
  const navigate = useNavigate()
  const navigation = useNavigation()

  const handleClick = ()=>{
    navigate('/levels/1')
  }

  return(
    <div className="content-home">
      {
        navigation.state === "loading" && (
         <div> Loading....</div> 
        )
      }
      <Button onClick={handleClick}> PLAY </Button>
    </div>
  )
}