export const postUser = (values) =>{
  return fetch('/api/users/',{  method: "POST",
  headers: { "Content-Type": "application/json"},
  body: JSON.stringify(values)
})
  .then(res =>  console.log(res))
}

