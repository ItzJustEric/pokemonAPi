


async  function fetchData () {

    try{

        const pokemonname = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`)

        if(!response.ok) {
            throw new Error("could not fetch data!")
        }

        const data = await  response.json()
        const pokemonSprite = data.sprites.front_default
        const imgEl = document.getElementById("pokemonSprite")
        imgEl.src =pokemonSprite
        imgEl.style.display = "block"
       

        const nameEl = document.getElementById("name-display");
        nameEl.textContent = pokemonname
        
        const typeDisplayEl  = document.getElementById("type-display")
        const types = data.types.map(typeInfo => typeInfo.type.name).join(", ")
        typeDisplayEl.textContent = `Type:${types}`

        

        

        
        





    }

    catch (error) {
        console.error(error)
    }

}

fetchData()