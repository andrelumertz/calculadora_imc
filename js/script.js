import { Modal } from '../modal.js'
import { AlertError } from '../alert-error.js'
import { notANumber, calculateIMC } from '../js/utils.js'

// variables
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

//const modalWrapper = document.querySelector('.modal-wrapper');
//const modalMessage = document.querySelector('.modal .title span');
//const modalBtnClose = document.querySelector('.modal button.close');


form.onsubmit = function(event) {
  event.preventDefault(); // função para evitar o padrao de recarregar a pagina
  
  const weight = inputWeight.value;
  const height = inputHeight.value;
  
  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if (weightOrHeightIsNotANumber) {
    AlertError.open();
    return;
  }

   AlertError.close()

  const result = calculateIMC(weight, height)
  displayResultMessage(result)

}

function displayResultMessage(result) {
  const message = `Seu IMC é de: ${result}`;

  Modal.message.innerText = message;
  //modalWrapper.classList.add('open')
  Modal.open();
}

// Fechar a janela do ero ao digitar no campo
// evento de verificar se esta sendo digitado no input é o oninput 
inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()