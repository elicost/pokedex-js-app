let pokemonRepository = (function () {
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

    function getAll () {
        return pokemonList;
    }

    function add (pokemon) {
        pokemonList.push(pokemon);
    }

    return {
        getAll: getAll,
        add: add
    }

})()