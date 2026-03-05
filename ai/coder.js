export function generateCode(prompt){

if(prompt.includes("button")){

return `<button>Click Me</button>`

}

if(prompt.includes("form")){

return `
<form>
<input type="text" placeholder="Name">
<button>Submit</button>
</form>
`

}

return "// Code not found"
}
