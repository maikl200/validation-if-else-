let fio = document.querySelector('#fio')
let password = document.querySelector('#password')
let repeatPassword = document.querySelector('#repeatPassword')
let email = document.querySelector('#email')
let btn = document.querySelector('.btn')
let errorFio = document.querySelector('#errorFio')
let errorPassword = document.querySelector('#errorPassword')
let errorRepeatPassword = document.querySelector('#errorRepeatPassword')
let errorEmail = document.querySelector('#errorEmail')


let emailError = () => {
  let regEmail = /\S+@\S+\.\S+/
  if (!regEmail.test(email.value)) {
    errorEmail.innerHTML = 'вфвф'
  } else {
    errorEmail.innerHTML = ''
  }

}

let repeatPasswordError = () => {
  if (repeatPassword.value !== password.value) {
    errorRepeatPassword.innerHTML = 'Пароль не совподает'
  } else {
    errorRepeatPassword.innerHTML = ''
  }
}

let passwordError = () => {
  if (password.value.length < 10) {
    errorPassword.innerHTML = 'Неверно введет пароль. Минимум 10 символов'
  } else {
    errorPassword.innerHTML = ''
  }
}

let fioError = () => {
  if (fio.value.length < 10) {
    errorFio.innerHTML = 'Слишком кароткий ФИО'
  } else {
    errorFio.innerHTML = ''
  }
}

btn.addEventListener('click', e => {
  e.preventDefault()
})
