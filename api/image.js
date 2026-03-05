export default async function handler(req,res){

const prompt=req.body.prompt

const response=await fetch("https://api.openai.com/v1/images/generations",{

method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization":"Bearer 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"
},

body:JSON.stringify({
prompt:prompt,
size:"1024x1024"
})

})

const data=await response.json()

res.status(200).json(data)

}
