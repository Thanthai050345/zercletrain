let allPokemon = [];

const getPokemon = async() => {
    const random = Math.floor(Math.random() * (1026 - 0)) + 0;
    let loadMore = `https://pokeapi.co/api/v2/pokemon?offset=${random}&limit=20`;
    const response = await fetch(loadMore);
    const data = await response.json();

    function createPokemonObjects(result) {
        result.forEach(async(element) => {
            const res = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${element.name}`
            );
            const data = await res.json();
            allPokemon.push(data);
            const urlImage = data.sprites.front_default;
            const name = data.name;
            const types = data.types;
            createElement(urlImage, name, types);
        });
    }
    createPokemonObjects(data.results);
};

const createElement = async(imgUrl, name, skill) => {
    const divContainer = document.getElementById("divContainer");

    const cardDiv = document.createElement("div");
    const pokemonImg = document.createElement("img");
    const textDiv = document.createElement("div");
    const title = document.createElement("p");
    const description = document.createElement("p");

    cardDiv.setAttribute("class", "rounded overflow-hidden bg-white round");
    textDiv.setAttribute("class", "text-center");
    title.setAttribute("class", "font-bold mb-2 text-center");
    description.setAttribute("class", "text-gray-400 text-base");

    pokemonImg.setAttribute("src", imgUrl);
    pokemonImg.setAttribute("class", "m-auto block w-80");

    title.innerHTML = name;
    skill.filter((element) => {
        element.type.name === "glass";
        description.innerHTML += `${element.type.name} `;
    });

    textDiv.appendChild(title);
    textDiv.appendChild(description);

    cardDiv.appendChild(pokemonImg);
    cardDiv.appendChild(textDiv);
    // cardDiv.appendChild(title);
    // cardDiv.appendChild(description);

    divContainer.appendChild(cardDiv);
};

getPokemon();