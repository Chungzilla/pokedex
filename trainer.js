class Trainer{
    constructor(){
//     //container object to store pokemon objects
        this.pokemonObj = [];
    }

//     //ALL method to return an array of pokemon - no params-
    all (){
        console.log(this.pokemonObj);
    }
//     //ADD method to add pokemon object to - 1 param 'pokeObj'
    add (catchIt){
        this.pokemonObj.push(catchIt)
    }

//     //GET method to return 1 pokeObj - 1 param "name" -
    get (name){
        this.pokemonObj.find(element => {
            if(element.name === name){
                console.log(element);
            }else{
                console.log('The trainer has not been caught this pokemon yet!')
            }
        });
    }


}