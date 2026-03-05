class MyTurnAI {

constructor(){
this.memory = []
}

learn(data){
this.memory.push(data)
console.log("New knowledge added")
}

think(question){
return "MyTurn AI is thinking about: " + question
}

}

const myAI = new MyTurnAI()

export default myAI
