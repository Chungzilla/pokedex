
const baseUrl = `https://pokeapi.co/api/v2/pokemon/`;

class Pokemon{
    constructor(name, hp, defense, attack){
        this.name = name;
        this.hp = hp;
        this.defense = defense;
        this.attack = attack;
        this.pokeAbility = []
    
        //add abilities to string
        pokedata.abilities.forEach(element =>
            pokeAbility.push(element.ability.name)
        )
    }
}

axios.get(`${baseUrl} + this.name`).then((response) => {
    // console.log(response.data);
    let pokedata = response.data
    console.log(pokedata)
    let name = pokedata.name
    let hp = pokedata.stats[5].base_stat
    let defense = pokedata.stats[3].base_stat
    let attack = pokedata.stats[4].base_stat
        // console.log(pokeAbility) 

});









