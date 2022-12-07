let counter = localStorage.getItem('counter') ? localStorage.getItem('counter') : 0
let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')

counterDOM.textContent = counter

increaseDOM.addEventListener('click', () => {
  counterDOM.textContent = ++counter
  localStorage.setItem('counter', counter)
})

decreaseDOM.addEventListener('click', () => {    
  counterDOM.textContent = --counter
  localStorage.setItem('counter', counter)
})  
// Path: 002-counter\index.html