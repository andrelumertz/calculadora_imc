// variables
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

//const modalWrapper = document.querySelector('.modal-wrapper');
//const modalMessage = document.querySelector('.modal .title span');
//const modalBtnClose = document.querySelector('.modal button.close');

const Modal = {   //object literals
  
  //variables
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  open: function() { // function not shorthand
    Modal.wrapper.classList.add("open");
  },
  close() {  //function with shorthand
    Modal.wrapper.classList.remove("open");
  }
}

form.onsubmit = function(event) {
  event.preventDefault(); // função para evitar o padrao de recarregar a pagina
  
  const weight = inputWeight.value;
  const height = inputHeight.value;

  const result = IMC(weight, height)
  const message = `Seu imc é de: ${result}`
  
  Modal.message.innerText = message
  //modalWrapper.classList.add('open')
  Modal.open()

}

// arrow function para fechar modal
Modal.buttonClose.onclick = () => {
    //modalWrapper.classList.remove('open')
    Modal.close()
}

function IMC(weight, height) {
    return ( weight / ((height / 100) ** 2)).toFixed(2);

}