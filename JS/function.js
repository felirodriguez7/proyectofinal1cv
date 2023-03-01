
console.log("HolaMundo")

let numero1 = 2
let numero2 = 4

let resultado = numero1+numero2;


console.log("La suma de numero 1 y numero 2 es "+resultado)



document.getElementById('boton').onclick = function () {
    console.log("Capturamos el evento click")
    document.getElementById("demo").innerHTML = "Primer evento en JS"
}

document.getElementById('boton_color').addEventListener('click', function () {
  document.body.style.backgroundColor = '#6E2515'
})

const collection = document.getElementsByClassName('prueba');
for (let i = 0; i < collection.length; i++) {
    collection[i].style.backgroundColor="green";
}