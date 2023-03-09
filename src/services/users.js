const apiUrl = import.meta.env.VITE_API_URL

export const postUser = (values) =>{
  return fetch(`${apiUrl}api/users/`,{  method: "POST",
  headers: { "Content-Type": "application/json"},
  body: JSON.stringify(values)
})
  .then(res =>  console.log(res))
}

