class Trainer{
    constructor(){
//     //container object to store pokemon objects
        this.pokemonObj = []
    }

//     //ALL method to return an array of pokemon - no params-
    all (){
        console.log(this.pokemonObj)
      
    };

//     //GET method to return 1 pokeObj - 1 param "name" -
    get (name){
        this.pokemonObj.find((element) => {
            return element.name == name
        }
    )}

//     //ADD method to add pokemon object to - 1 param 'pokeObj'
    add (catchIt){
        this.pokemonObj.push(catchIt)
    }
}