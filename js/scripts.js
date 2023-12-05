let pokemonList = [];
    pokemonList[0] = {
        name: 'Squirtle',
        height: 0.5,
        types: ['water']
    };
    pokemonList[1] = {
        name: 'Vulpix',
        height: 0.6,
        types: ['fire']
    };
    pokemonList[2] = {
        name: 'Houndour',
        height: 0.6,
        types: ['dark', 'fire']
    }

function pokemonLoop(pokemon) {
    if (pokemon.height < 0.6) {
        document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ') - Wow, that\'s small!</p>')
    } else {
        document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ')</p>')
    }
}
pokemonList.forEach(pokemonLoop);