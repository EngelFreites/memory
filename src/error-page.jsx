import { useRouteError } from "react-router-dom";

export default function ErrorPage (){
  const error = useRouteError()

  return(
    <div>
      <h1>Oopps!!</h1>
      <p>Lo sentimos hemos tenido un problema</p>
      <p>
        <i>{error.statusText || error.message }</i>
      </p>
    </div>
  )
}