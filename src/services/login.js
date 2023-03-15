const apiUrl = import.meta.env.VITE_API_URL

export const postLogin = ({values}) =>{
  return fetch(`${apiUrl}/api/login/`,{ method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body : JSON.stringify(values)
  }
 
  )
  .then(res => res.json())
}