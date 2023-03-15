import './goodOrBad.css'

export default function GoodOrBad ({good, bad}){

  return(

    <div  className= 'content-good-and-bad'>
      <div className="content-good-and-bad">
        <p>🔥</p> 
        <p>{good}</p>
      </div>

      <div className="content-good-and-bad">
        <p>❌</p> 
        <p>{bad}</p>
      </div>
    </div>
  )
}