const apiUrl = process.env.VITE_API_URL



export const getLevels = () =>{
    return fetch(`${apiUrl}api/levels`)
    .then( res => res.json())
    .then( res => res)
}


export const getLevel = ({nivel}) => {
  return fetch(`${apiUrl}api/levels/${nivel}`)
    .then(res => res.json() )
    .then( level => level)
}
console.log(apiUrl)