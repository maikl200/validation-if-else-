let fio = document.querySelector('#fio')
let password = document.querySelector('#password')
let repeatPassword = document.querySelector('#repeatPassword')
let email = document.querySelector('#email')
let btn = document.querySelector('.btn')
let errorFio = document.querySelector('#errorFio')
let errorPassword = document.querySelector('#errorPassword')
let errorRepeatPassword = document.querySelector('#errorRepeatPassword')
let errorEmail = document.querySelector('#errorEmail')


let render = () => {
  if (fio.value && password.value && repeatPassword.value && email.value) {
    btn.removeAttribute('disabled')
  }
}


let emailError = () => {
  let regEmail = /\S+@\S+\.\S+/
  if (!regEmail.test(email.value)) {
    errorEmail.innerHTML = 'Неверно введен email'
  } else {
    errorEmail.innerHTML = ''
    render()
  }

}

let repeatPasswordError = () => {
  if (repeatPassword.value !== password.value) {
    errorRepeatPassword.innerHTML = 'Пароль не совподает'
  } else {
    errorRepeatPassword.innerHTML = ''
    render()
  }
}

let passwordError = () => {
  if (password.value.length < 10) {
    errorPassword.innerHTML = 'Слишком кароткий пароль. Минимум 10 символов'
  } else {
    errorPassword.innerHTML = ''
    render()
  }
}

let fioError = () => {
  if (fio.value.length < 10) {
    errorFio.innerHTML = 'Неверное ФИО'
  } else {
    errorFio.innerHTML = ''
    render()
  }
}