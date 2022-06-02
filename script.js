let mainInput = document.querySelector('.input');
let btnAgregar = document.querySelector('.boton-agregar');
let container = document.querySelector('.container')

class item{

    constructor(agregarTarea){
        this.crearDiv(agregarTarea)
    }
    crearDiv(agregarTarea){
     
        const newDiv = document.createElement('div');
        container.appendChild(newDiv)

        const newInput = document.createElement('input');
        newInput.value = 'agregarTarea'
        newDiv.appendChild(newInput)





    }
}