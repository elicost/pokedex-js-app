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

    for (let i = 0; i < pokemonList.length; i++) {
        document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height +')</p>')
    }