const getPokemon = async() => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
    const data = await response.json()
    return data
}

const createEle = async() => {
    const divContainer = document.getElementById("divContainer")

    const cardDiv = document.createElement("div")
    const pokemonImg = document.createElement("img")
    const textDiv = document.createElement("div")
    const title = document.createElement("div")
    const description = document.createElement("p")

    cardDiv.setAttribute("class", "rounded overflow-hidden bg-white round")
    textDiv.setAttribute("class", "px-6 py-4 flex align-center flex-col")
    title.setAttribute("class", "font-bold text-xl mb-2")
    description.setAttribute("class", "text-gray-700 text-base")

    const allPokemon = await getPokemon()
    console.log(allPokemon);

    cardDiv.appendChild(pokemonImg)
    divContainer.appendChild(cardDiv)

}

createEle()