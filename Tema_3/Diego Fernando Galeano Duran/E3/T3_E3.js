document.getElementById('giveAJokeButton').addEventListener('click',function(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then((response)=>response.json())
    .then((data)=>document.getElementById('jokeResult').innerHTML=data.value);
});