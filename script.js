function analyzeCode(code){

if(code.includes("function")){
return "I detected a JavaScript function."
}

if(code.includes("class")){
return "This code contains a class."
}

return "Basic code structure detected."
}


function generateCode(prompt){

if(prompt.includes("button")){
return "<button>Click Me</button>"
}

if(prompt.includes("form")){
return `<form>
<input type="text" placeholder="Name">
<button>Submit</button>
</form>`
}

return "I am still learning to generate this code."
}


function askAI(message){

if(message.includes("analyze")){
return analyzeCode(message)
}

if(message.includes("create")){
return generateCode(message)
}

return "MyTurn AI is learning..."
}


function sendMessage(){

let input = document.getElementById("userInput").value

let chat = document.getElementById("chat")

chat.innerHTML += "<p><b>You:</b> "+input+"</p>"

let reply = askAI(input)

chat.innerHTML += "<p><b>MyTurn AI:</b> "+reply+"</p>"

document.getElementById("userInput").value=""

}
