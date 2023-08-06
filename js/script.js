import { Modal } from './modal.js'


// Variaveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = (event) => {
  event.preventDefault()

  document.querySelector('.alert-error').classList.remove('open')

  const weight = inputWeight.value
  const height = inputHeight.value

  const showAlertError = notANumber(weight) || notANumber(height)

  if (showAlertError) {
    document.querySelector('.alert-error').classList.add('open')
    return
  }

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`
  
  Modal.message.innerText = message
  Modal.open()
}

function notANumber (value){
  return isNaN(value) ||value == ""
}

function IMC(weight, height){
  return (weight / ((height / 100) ** 2)).toFixed(2)
}