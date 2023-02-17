export const Modal = {
  //object literals

  //variables
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  buttonClose: document.querySelector(".modal button.close"),

  open: function () {
    // function not shorthand
    Modal.wrapper.classList.add("open");
  },
  close() {
    //function with shorthand
    Modal.wrapper.classList.remove("open");
  },
};

// arrow function para fechar modal
Modal.buttonClose.onclick = () => {
    //modalWrapper.classList.remove('open')
    Modal.close()
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
    if (event.key === 'Escape') {
        Modal.close()
    }
}