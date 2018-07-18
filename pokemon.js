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
    console.log(bulbasaur);

    kanye.add(bulbasaur);

    //Event listener to display pokemon on click
    let pokeData = document.getElementById('pokedata');

    let pokeball1 = document.getElementById('bulb-button');

    pokeball1.addEventListener('click', (e) => {
        e.preventDefault();
        // alert('Yeaaa THIS WORKS!');
//Creates new div container to display pokemon images
        let pokeWindow = document.createElement('div');
        pokeWindow.id = 'window';
        let imgtag = document.createElement('img');
        imgtag.classList.add('poke-img')
        imgtag.src="bulbasaur.png";

        pokeWindow.append(imgtag);
        pokeData.append(pokeWindow);
    
    });
    
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

// >>>>>>>>>>>>>>>>>>>>>   CALL TO MEOWTH
axios.get('https://pokeapi.co/api/v2/pokemon/52').then((response) => {
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

    let meowth = new Pokemon(name, hp, defense, attack, pokeAbility)
    console.log(meowth)

    kanye.add(meowth)
    
});





