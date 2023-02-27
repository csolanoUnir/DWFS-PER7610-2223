document.getElementById('jokeButton').addEventListener('click',function(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then((response)=>response.json())
    .then((data)=>document.getElementById('jokeText').innerHTML=data.value);
});