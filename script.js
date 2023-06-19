const jokeElement = document.getElementById('joke');
const getJokeButton = document.getElementById('getJokeButton');

getJokeButton.addEventListener('click', () => {
  fetch('https://blagueback.onrender.com/api/jokes/random')
    .then(response => response.json())
    .then(data => {
      jokeElement.textContent = data.question + ' ' + data.answer;
    })
    .catch(error => {
      jokeElement.textContent = 'Erreur lors de la récupération de la blague.';
      console.error(error);
    });
});