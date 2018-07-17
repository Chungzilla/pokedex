class Trainer{
    constructo(pokemonObj){
    //container object to store pokemon objects
    this.pokemonObj = {}
    

    //ALL method to return an array of pokemon - no params-
    all pokemon(){
        console.log(this.trainer.pokemonObj)
    }




    //GET method to return 1 pokeObj - 1 param "name" -
    get 



    //ADD method to add pokemon object to - 1 param 'pokeObj'
    add (pokemonObj){

        axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemonObj).then((response) => {
            // console.log(response.data);
            let pokedata = response.data
            console.log(pokedata)
            let name = pokedata.name
            let hp = pokedata.stats[5].base_stat
            let defense = pokedata.stats[3].base_stat
            let attack = pokedata.stats[4].base_stat
            let pokeAbility = []
            
            //add abilities to string
            pokedata.abilities.forEach(element =>
                pokeAbility.push(element.ability.name)
            )
                // console.log(pokeAbility) 

            //Create a new instance of pokemon
            let newPokemon = new Pokemon(name, hp, defense, attack, pokeability)
        });
    }
}

}