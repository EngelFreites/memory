import { useNavigate } from "react-router-dom";
import './home.css'
import Button from "../../components/Button/Button";
import Title from '../../components/Title/Title'


export default function Home (){
  const navigate = useNavigate()

  const handleClick2 = () =>{
    navigate('/discover')
  }

  const handleClick = ()=>{
    navigate('/levels/1')
  }

  return(
    <div className="content-home">
      <h1 className="title-home">BIENVENIDO</h1>
      <div className="box-home">
        <div className="discribe-home-game">
          <p className="icon-home">🧙‍♂️</p>
          <p className="about-web">Bienvenidos a nuestra página web de juegos.<br/> 
            Aquí encontrarás una selección de juegos divertidos <br/> y fáciles de aprender.
          </p>
        </div>
        <div className="linea"></div>
        <div className="buttons-inital-game">
          <Title> JUEGOS </Title>
          <Button onClick={handleClick}> MEMORIA 🤯 </Button>
          <Button onClick={handleClick}> DESCUBRE LA PELICULA 🎦 </Button>
        </div>
      </div>
     
    </div>
  )
}