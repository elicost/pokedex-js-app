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
        if (pokemonList[i].height < 0.6) {
            document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - Wow, that\'s small!</p>')
        } else {
        document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')</p>')
        }
    }