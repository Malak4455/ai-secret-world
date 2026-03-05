import { analyzeCode } from "../ai/analyzer.js"
import { generateCode } from "../ai/coder.js"

export function askAI(message){

if(message.includes("analyze")){
return analyzeCode(message)
}

if(message.includes("create")){
return generateCode(message)
}

return "MyTurn AI: I am learning..."
}
