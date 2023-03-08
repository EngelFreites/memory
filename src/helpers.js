export const barajeoDeCartas = (object) => {
  const objectToarray = Object.entries(object)

  const carstDone = objectToarray.sort(() =>{
    return 0.5 - Math.random()
  })
  
  const resultado = Object.fromEntries(carstDone)
  
  return resultado
}
