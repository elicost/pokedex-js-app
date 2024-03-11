let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
        // pokemonList[0] = {
        //     name: 'Squirtle',
        //     height: 0.5,
        //     types: ['water']
        // };
        // pokemonList[1] = {
        //     name: 'Vulpix',
        //     height: 0.6,
        //     types: ['fire']
        // };
        // pokemonList[2] = {
        //     name: 'Houndour',
        //     height: 0.6,
        //     types: ['dark', 'fire']
        // }

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
        add: add,
        addListItem: addListItem
    }

})()

pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
})