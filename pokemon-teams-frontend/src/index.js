const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener('DOMContentLoaded',function() {
    fetchAllTrainers()
});

function fetchAllTrainers() {
    fetch('http://localhost:3000/trainers')
    .then(res => res.json())
    .then(teams => teams.forEach(team => addTeam(team)))
}

function addTeam(team) {
    // console.log(team)
    let div = document.createElement('div')
    div.className = 'card'
    div.dataset.id = team.id

    let ul = document.createElement('ul')
    team.pokemons

    div.appendChild(ul)
    document.querySelector('main').appendChild(div)
}