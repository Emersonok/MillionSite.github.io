function load() {
    var name = document.getElementById('name')
    var text = document.getElementById('text')
    var res = document.getElementById('res')
    res.innerHTML= console.log(`${name}: ${text}`)
}
var nome = window.prompt('What is your name?')
var sal= Number(window.prompt('Write your salary'))
window.alert (`Welcome ${nome.toUpperCase()}, you earn ${sal.toLocaleString('pt-BR',{style: 'currency',currency:'BRL'})}`)


