// Variaveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),
  open(){
    this.wrapper.classList.add('open')
  },
  close(){
    this.wrapper.classList.remove('open')
  }
}

form.onsubmit = (event) => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value
  
  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`
  
  modal.message.innerText = message
  modal.open()
}

modal.buttonClose.onclick = () => modal.close()


function IMC(weight, height){
  return (weight / ((height / 100) ** 2)).toFixed(2)
}