// Cambiar el texto dentro de la etiqueta

console.log('External insertion')
let h = document.querySelector('h1')
console.log(h)
h.innerHTML =h.innerHTML + 'Change test'

// Cambiar el color de títlo

// let confirmar = confirm('Quieres poner el títlo en aqua?')
// if (confirmar) {
//     h.style.backgroundColor = 'aqua'
// }

// Añadir o quitar una clase 

// h.classList.toggle('changes')

// Event listener

// window.addEventListener('load', function(){
//     this.alert(1)
// })

// Evento en botón

// let boton = addEventListener('click', function(e){
//     this.alert('Tocaste el botón')
//     console.log(e)
//     e.preventDefault()
//     console.log(this)
// })

// Eventos de form

let campo = document.querySelector('.texto')
campo.addEventListener('focus', function(){
    // otros eventos: blur (salir del campo), change (cambio en el formulario)
    console.log(1)
})


