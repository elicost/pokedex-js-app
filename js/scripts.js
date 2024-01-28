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
        
        if (Object.keys(pokemon).includes('name') &&
            Object.keys(pokemon).includes('height') &&
            Object.keys(pokemon).includes('types') &&
           (typeof pokemon === 'object')) {
            pokemonList.push(pokemon);
        } else {
            console.log('This is not an object or is missing key values')
        }
    }

    function addListItem(pokemon) {
        let pokeList = document.querySelector('.pokeList');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        listItem.appendChild(button);
        pokeList.appendChild(listItem);
        button.addEventListener('click', function(event) {
            showDetails(pokemon);
        });
    }

    function showDetails(pokemon) {
        console.log(pokemon);
    }

    return {
        getAll: getAll,
        add: add
    }

})()

pokemonRepository.getAll().forEach(function(pokemon) {

    function getPokemonDescription(pokemon) {
        if (pokemon.height < 0.6) {
            return ('<p>' + pokemon.name + ' (height: ' + pokemon.height + ') - Wow, that\'s small!</p>')
        } else {
            return ('<p>' + pokemon.name + ' (height: ' + pokemon.height + ')</p>')
        }
    }

    let pokemonDescription = getPokemonDescription(pokemon);

    document.write(pokemonDescription)

})