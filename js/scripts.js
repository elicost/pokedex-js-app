let pokemonRepository = (function () {
    let pokeList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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
        button.addEventListener('click', function() {
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
            let modalContainer = document.querySelector('#modal-container');
            function showModal(item) {
                modalContainer.innerHTML = '';
                let modal = document.createElement('div');
                modal.classList.add('modal');

                let closeButtonElement = document.createElement('button');
                closeButtonElement.classList.add('modal-close');
                closeButtonElement.innerText = 'Close';
                closeButtonElement.addEventListener('click', hideModal);

                let titleElement = document.createElement('h1');
                titleElement.innerText = item.name;

                let heightElement = document.createElement('p');
                heightElement.innerText = 'Height: ' + item.height;

                let typesElement = document.createElement('p');
                typesElement.innerText = 'Types: ' + item.types;

                let imageElement = document.createElement('img');
                imageElement.classList.add('modal-image');
                imageElement.src = item.imageUrl;

                modal.appendChild(closeButtonElement);
                modal.appendChild(titleElement);
                modal.appendChild(heightElement);
                modal.appendChild(typesElement);
                modal.appendChild(imageElement);
                modalContainer.appendChild(modal);

                modalContainer.classList.add('is-visible');
            }

            function hideModal() {
                modalContainer.classList.remove('is-visible');
            }

            window.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
                    hideModal();
                }
            });

            modalContainer.addEventListener('click', (e) => {
                let target = e.target;
                if (target === modalContainer) {
                    hideModal();
                }
            });
            
            document.querySelector('.button-class').addEventListener(
                'click', function () {
                    showModal(pokemon);
                })

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
