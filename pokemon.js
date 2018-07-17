// Pokemon URLs:
// Bulbasaur = https://pokeapi.co/api/v2/pokemon/1
// Squirtle: 'https://pokeapi.co/api/v2/pokemon/7
// Meowth: https://pokeapi.co/api/v2/pokemon/52


class Pokemon{
    constructor(name, hp, defense, attack, abilities){
        this.name = name;
        this.hp = hp;
        this.defense = defense;
        this.attack = attack;
        this.abilities = abilities;
    }
}
// >>>>>>>>>>>>>>>>>>>>>   CALL TO BULBASAUR
axios.get('https://pokeapi.co/api/v2/pokemon/1').then((response) => {
    // console.log(response.data);
    let pokedata = response.data
    console.log(pokedata);
    let name = pokedata.name
    let hp = pokedata.stats[5].base_stat
    let defense = pokedata.stats[3].base_stat
    let attack = pokedata.stats[4].base_stat
    let pokeAbility = []

     //add abilities to string
     pokedata.abilities.forEach(element =>
        pokeAbility.push(element.ability.name)
    ) // console.log(pokeAbility) 

    let bulbasaur = new Pokemon(name, hp, defense, attack, pokeAbility)
    console.log(bulbasaur)

    kanye.add(bulbasaur)
    
});

// >>>>>>>>>>>>>>>>>>>>>   CALL TO SQUIRTLE
axios.get('https://pokeapi.co/api/v2/pokemon/7').then((response) => {
    // console.log(response.data);
    let pokedata = response.data
    // console.log(pokedata);
    
    let name = pokedata.name
    let hp = pokedata.stats[5].base_stat
    let defense = pokedata.stats[3].base_stat
    let attack = pokedata.stats[4].base_stat
    let pokeAbility = []

     //add abilities to string
     pokedata.abilities.forEach(element =>
        pokeAbility.push(element.ability.name)
    ) // console.log(pokeAbility) 

    let squirtle = new Pokemon(name, hp, defense, attack, pokeAbility)
    console.log(squirtle)

    kanye.add(squirtle)
    
});





