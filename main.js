let kanye = new Trainer()




//Creates template function to display pokemon data on each respective pokeball click

let pokeDataContainer = document.getElementById('poke-info')
let displayName = document.getElementById('show-name')
let displayHP = document.getElementById('show-hp');
let displayAtt = document.getElementById('show-attack');
let displayDef = document.getElementById('show-defense');
let displayPic = document.getElementById('show-pic');
let displayAbilities = document.getElementById('show-abilities');

let showPoke = document.createElement('div');


let setup = (i) => {


    displayName.innerHTML = kanye.pokemonObj[i].name;
    displayHP.innerHTML = "HP: " + kanye.pokemonObj[i].hp;
    displayAtt.innerHTML = "Attack: " + kanye.pokemonObj[i].attack;
    displayDef.innerHTML = "Defense: " + kanye.pokemonObj[i].defense;
    displayPic.innerText = "<img src='" + kanye.pokemonObj[i].pic"' + ">";
    displayAbilities.innerHTML = "Abilities: " + kanye.pokemonObj[i].abilities;
}

