const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener("DOMContentLoaded", function(){
    fetchAllTrainers()
});

function fetchAllTrainers() {
    fetch('http://localhost:3000/trainers')
    .then(res => res.json())
    .then(teams => teams.forEach(team => addTeam))
}

function addTeam(team) {
    let div = documemt.createElement('div')
    div.className  = "card"
    let p = document.createElement("p")
    p.innerText = team.name
    let addButton = document.createElement("button")
    addButton.innerText = "Add Pokemon"
    div.dataset.id = team.name
    let ul = document.createElement("ul")
    
    for (pokemon of team.pokemon) {
        let li = document.createElement("li")
        li.innerText = `${pokemon.nickname} ${pokemon.species})`
        let remButton = document.createElement("Button")
        remButton.innerText = "Remove"
        remButton.className = "release"
        remButton.dataset.id = pokemon.id
        li.appendChild(remButton)
        ul.appendChild(li)
    }

    div.appendChild(p)
    div.appendChild(addButton)
    div.appendChild(ul)
    document.querySelector("main").appendChild(div)

}

    function addPokemon(e) {
        console.log(e.target.dataset.id)
        fetch("http://localhost:3000/pokemons", {
            header: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: {
                "trainer_id": e.target.dataset.id
            }
        }).then(response => console.log(response.json()))

    }

    function removePokemon(e) {
        e.target.parentElement.remove()
        fetch(`http://localhost:3000/pokemon/${e.target.pokemon.id}`)
    }

    function addNewPokemon(pokemon, e) {
        console.log(e.target)
        let divs = document.querySelectorAll("div")
        for (div1 of divs) {
            if (div.dataset.id == e.target.dataset.id) {
                let newDiv = div1
            }

        }
    }
    let li = document.createElement






