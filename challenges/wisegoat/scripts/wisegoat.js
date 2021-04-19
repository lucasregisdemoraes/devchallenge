
var myConselho = new Conselho('https://api.adviceslip.com/advice')

var myMethod = Conselho.body;

console.log(myConselho)
console.log(myMethod)

function pedirConselho() {
    // pegar um conselho
    // colocaar o conselho em uma variavel
    // trocar de página
    window.location.href = "./pages/advice.html"
    console.log("pediu conselho")
}