import { useState } from "react"
import {VarMenu} from '../../components/varMenu/varMenu'
import Loading from "../../components/Loading/Loading"
import Title from "../../components/Title/Title"
import { creatEmoji } from "../../services/ai"
import Button from '../../components/Button/Button'
import'./discover.css'
import Header from '../../components/header/Header'
import GoodOrBad from "../../components/GoodOrBad/GoodOrBad"
const disney = ['La bella y la bestia', 
  'la cenicienta', 
  'tierra de oso', 
  'La Dama y el Vagabundo', 
  'El rey leon', 
  'Mulan', 
  'Aladdin',
  'los vengadores',
  'ant-man',
  'harry potter',

]

export default function Discover () {
  const [move, setMove] = useState(0)
  const [movieTrue, setMovieTrue] = useState([])
  const [movieFalse, setMovieFalse] = useState([])
  const [emojiMovie, setEmojiMovie] = useState([])
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [value, setValue] = useState('')

  console.log(disney[move])

  const handleClick = async () =>{
    setIsLoading(true)
    const movieEmoji = await creatEmoji(disney[move])
    setEmojiMovie(emojiMovie.concat(movieEmoji.replace(':', '')))
    setIsLoading(false)
  }

  const nextMovie = async () =>{
    setMovieFalse([])
    setMovieTrue([])
    setEmojiMovie([])
    setIsLoading(true)

    const movieEmoji = await creatEmoji(disney[move])
    setEmojiMovie(movieEmoji.replace(':', ''))

    setIsLoading(false)
 
  }



  const comparative = async () =>{
    setMove( move + 1)

    const response  = value.toLowerCase().trim() === disney[move].toLowerCase()

    console.log(response)

    if(response){
      setGood( good + 1)
      setMovieTrue([...movieTrue, value])
    }else{
      setBad( bad + 1)
      setMovieFalse([...movieFalse, value])
    }
    setValue('')
  }
  
  console.log({move})
  console.log(movieTrue)

  const handleChange = (e) =>{
    setValue(e.target.value)
  }

  if(movieTrue.length > 0){

    return(
      <div className="content-discover">
        <Title color={'white'}>Repuesta correcta Siguiente Pelicula</Title> 
        <Button onClick={nextMovie}>Siguiente Pelicula</Button>
      </div>
    )
  }

  if(movieFalse.length > 0){

    return(
      <div className="content-discover">
        <Title color={'white'}>Repuesta Incorrecta Siguiente Pelicula</Title> 
        <Button onClick={nextMovie}>Siguiente Pelicula</Button>
      </div>
    )
  }
  
  if(isLoading) return <Loading isLoading={isLoading} />

  return (

    <div className="content-discover">
      <VarMenu />
      <Header>
        <GoodOrBad good={good} bad={bad} />
      </Header>
      <Title color={'white'}>Descubre la pelicula </Title> 
      {
        isLoading === false && emojiMovie.length > 0
        ? <div className="content-table-movie">
            <div className="content-emoji-movie">{emojiMovie}</div>  
            <div className="content-input-movie">
              <input type='text' onChange={handleChange} value={value}/> 
              <Button onClick={comparative}> Enviar </Button> 
            </div>
            
          </div> 
        : <Button onClick={handleClick} > Play</Button>
      }
  
    </div>
  


  )
}