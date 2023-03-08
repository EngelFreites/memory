import { useEffect, useState } from "react";
import './levels.css'

import { VarMenu } from "../../components/varMenu/varMenu";
import { getLevels } from "../../services/levels";
import ContentLevel from "../../components/contentLevels/ContentLevel";


export default function Levels (){
  const [levels, setLevels] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{ 
    setLoading(true)
    getLevels()
      .then(res =>{
        setLevels(res)
        setLoading(false)
      })
  },[])

  return(
    <div>
      <VarMenu/>
      {
        loading 
          ? <h1>Cargando..</h1> 
          : <div className="content-levels">
            {
              levels.map( level =>(
                <ContentLevel key={level.level_number} level={level}/>
              ))
            }
          </div>
      }
    </div>
  )

}