const pokeApiCard = {}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number =  pokeDetail.order
    pokemon.name =  pokeDetail.name

    const types =  pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
        
    pokemon.types =  types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    pokemon.abilities = pokeDetail.abilities.slice(0,3).map((abilitieSlot) => abilitieSlot.ability.name)
    pokemon.moves = pokeDetail.moves.slice(0,3).map((moveSlot) => moveSlot.move.name)

    pokemon.height = pokeDetail.height/10
    pokemon.weight = pokeDetail.weight/10

    return pokemon
}

pokeApiCard.getPokemons = (nome) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${nome}`
    
    return fetch(url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}