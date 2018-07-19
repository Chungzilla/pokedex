// Pokemon URLs:
// Bulbasaur = https://pokeapi.co/api/v2/pokemon/1
// Squirtle: 'https://pokeapi.co/api/v2/pokemon/7
// Meowth: https://pokeapi.co/api/v2/pokemon/52



class Pokemon{
    constructor(name, hp, defense, attack, pic, abilities){
        this.pic = pic;
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
    let pic = pokedata.sprites.front_default;
    let name = pokedata.name;
    let hp = pokedata.stats[5].base_stat;
    let defense = pokedata.stats[3].base_stat;
    let attack = pokedata.stats[4].base_stat;
    let pokeAbility = [];

     //add abilities to string
     pokedata.abilities.forEach(element =>
        pokeAbility.push(element.ability.name)
    ) // console.log(pokeAbility) 

    let bulbasaur = new Pokemon(name, hp, defense, attack, pic, pokeAbility)
    console.log(bulbasaur);

    kanye.add(bulbasaur);

    //Event listener to display pokemon on click
    let pokeData = document.getElementById('pokedata');


//     pokeball1.addEventListener('click', (e) => {
//         e.preventDefault();
//         // alert('Yeaaa THIS WORKS!');
// //Creates new div container to display pokemon images
//         let pokeWindow = document.createElement('div');
//         pokeWindow.id = 'window';
//         

//         // //Creaate div to contain pokemon info
//         // let title = document.createElement('h3')
//         // title.innerText = name

//         // let hpAttribute = document.createElement('p');
//         // hpAttribute.innerText = "HP: " + hp

//Calls setup function and passes variable corresponding to index in pokemonObj from trainer class



    let pokeBall1 = document.getElementById('bulb-button');
    pokeBall1.addEventListener('click', ()=> {
        setup(0);

    

        // pokeDataContainer.append(bulbImg)

    })


//         // pokeWindow.append(imgtag, title, hpAttribute);
//         // pokeData.append(pokeWindow);
    
    // });
    
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
    let pic = pokedata.sprites.front_default;
    let pokeAbility = []

     //add abilities to string
     pokedata.abilities.forEach(element =>
        pokeAbility.push(element.ability.name)
    ) // console.log(pokeAbility) 

    let squirtle = new Pokemon(name, hp, defense, attack, pic, pokeAbility)
    console.log(squirtle)

    kanye.add(squirtle)

    //Calls setup function and passes variable corresponding to index in pokemonObj from trainer class

    let pokeBall2 = document.getElementById('squirtle-button');

    pokeBall2.addEventListener('click', () => {
        setup(1);
    });


    
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
    let pic = pokedata.sprites.front_default;
    let pokeAbility = []

     //add abilities to string
     pokedata.abilities.forEach(element =>
        pokeAbility.push(element.ability.name)
    ) // console.log(pokeAbility) 

    let meowth = new Pokemon(name, hp, defense, attack, pic, pokeAbility)
    console.log(meowth)

    kanye.add(meowth)

    let pokeBall3 = document.getElementById('meowth-button');

    pokeBall3.addEventListener('click', () => {
        setup(2);

    });
    
});





