export function analyzeCode(code){

if(code.includes("function")){
return "This code contains a function"
}

if(code.includes("class")){
return "This code contains a class"
}

return "Basic code detected"

}
