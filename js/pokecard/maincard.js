const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

function convertPokemonToLi(pokemon) {
    return `
    <div class="container">
        <div class="card ${pokemon.type}">

            <div class="header">
                <span class="name">&nbsp;</span>
                <span class="name">${pokemon.name}</span>
                <span class="number">#${pokemon.number}</span>
            </div>

            <img src="${pokemon.photo}" alt="${pokemon.name}">

            <div class="card-color">
                <ul>
                    <li>
                        <p>${pokemon.weight}kg</p>
                        <span>WEIGHT</span>
                    </li>
                    <li>
                        ${pokemon.types.map((type) => `<div class="type ${type}"> ${type} </div>`).join('')}
                    </li>
                    <li>
                        <p>${pokemon.height}m</p>
                        <span>HEIGHT</span>
                    </li>
                </ul>

                <hr color="#BACDD8" size="1px">

                <div style="display:flex;">
                    <table>
                        <tr>
                        <th>Abilities:</th>
                        </tr>
                        
                        ${pokemon.abilities.map((ability) => `
                        <tr>    
                            <td>${ability}</td>
                        </tr>
                        `).join('')}
                    </table>

                    <table>
                        <tr>
                        <th>Moves:</th>
                        </tr>
                        
                        ${pokemon.moves.map((move) => `
                        <tr>    
                            <td>${move}</td>
                        </tr>
                        `).join('')}
                    </table>
                </div>
            </div>
        </div>
    </div>

    `

}

function loadPokemonItens(nome) {
    pokeApiCard.getPokemons(nome).then((pokemons = []) => {
        const newHtml = convertPokemonToLi(pokemons)
        pokemonList.innerHTML += newHtml
    })
}

const urlParams = new URLSearchParams(window.location.search);
const nome = urlParams.get("nome");

loadPokemonItens(nome)