Math.floor(Math.random() *1000000) 
// 561116
String(Math.floor(Math.random() *1000000) )
// '723596'
String(Math.floor(Math.random() *1000000) ).padStart(6,"0")
// '033934'
let result = String(Math.floor(Math.random() *1000000) ).padStart(6,"0")
// undefined
result
// '153086'

let auth=()=> {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("number").innerText = token
    document.getElementById("number").style.color= "#" + token 

}