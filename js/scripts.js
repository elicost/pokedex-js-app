let pokemonRepository = (function () {
    let pokeList = [];
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
        return pokeList;
    }

    function add (pokemon) {
        
        if (Object.keys(pokemon).includes('name') &&
            // Object.keys(pokemon).includes('height') &&
            // Object.keys(pokemon).includes('types') &&
           (typeof pokemon === 'object')) {
            pokeList.push(pokemon);
        } else {
            console.log('This is not an object or is missing key values')
        }
    };

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

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
                console.log(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }

    function showDetails(pokemon) {
        pokemonRepository.loadDetails(pokemon).then(function () {
            console.log(pokemon);
        });
    }
    
    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    }

})()

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});