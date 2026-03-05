function sendMessage(){

let input = document.getElementById("userInput").value

let chat = document.getElementById("chat")

chat.innerHTML += "<p><b>You:</b> "+input+"</p>"

let reply = "MyTurn AI: I am learning..."

chat.innerHTML += "<p>"+reply+"</p>"

document.getElementById("userInput").value=""

}
