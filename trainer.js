class Trainer{
    constructor(){
//     //container object to store pokemon objects
        this.pokemonObj = []
    }

//     //ALL method to return an array of pokemon - no params-
//     all pokemon(){
//         console.log(this.trainer.pokemonObj)
//     }

//     //GET method to return 1 pokeObj - 1 param "name" -
    get (pokedex){
        this.pokemonObj.find((element) => {
            return element.name == name
        }
    )}

//     //ADD method to add pokemon object to - 1 param 'pokeObj'
    add (pokeBall){
        this.pokemonObj.push(pokeBall)
    }
}