//https://api.chucknorris.io/jokes/random
window.onload = function () {
  document.getElementById('btnGetJoke').addEventListener('click', GetJokes)
}
//get promise
console.log(
  fetch('https://api.chucknorris.io/jokes/random', {
    method: 'GET',
    headers: { accept: 'application/json' }
  })
)

fetch('https://api.chucknorris.io/jokes/random', {
  method: 'GET',
  headers: { accept: 'application/json' }
}).then(response => {
  console.log(response)
})

//get response
fetch('https://api.chucknorris.io/jokes/random', {
  method: 'GET',
  headers: { accept: 'application/json' }
})
  .then(response => {
    return response.json()
  })
  .then(jokes => {
    console.log(jokes)
  })

//get joke
fetch('https://api.chucknorris.io/jokes/random', {
  method: 'GET',
  headers: { accept: 'application/json' }
})
  .then(response => {
    return response.json()
  })
  .then(jokes => {
    console.log(jokes.value)
  })

// set html control
function GetJokes () {
  fetch('https://api.chucknorris.io/jokes/random', {
    method: 'GET',
    headers: { accept: 'application/json' }
  })
    .then(response => {
      return response.json()
    })
    .then(jokes => {
      document.getElementById('joke').innerHTML = jokes.value
    })
}
