const API_KEY = import.meta.env.VITE_API_KEY

export const creatEmoji = async (movie) =>{

  const data = {
    model: "text-davinci-003",
    prompt: `Convert movie titles into emoji.\n\nBack to the Future: 👨👴🚗🕒 \nBatman: 🤵🦇 \nTransformers: 🚗🤖 \n:${movie}`,
    temperature: 0.8,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ["\n"]
  }

  const responsive = await fetch('https://api.openai.com/v1/completions', {
    
    method: 'POST',
    headers:{
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },

    body: JSON.stringify(data)

  }).then(res => res.json())

  console.log(responsive)

  return responsive.choices[0].text
}