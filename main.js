let kanye = new Trainer()




//Creates template function to display pokemon data on each respective pokeball click
let displayName = document.getElementById('show-name')
let displayHP = document.getElementById('show-hp');
let displayAtt = document.getElementById('show-attack');
let displayDef = document.getElementById('show-defense');
let displayAbilities = document.getElementById('show-abilities');

let setup = (i) => {
    displayName.innerHTML = kanye.pokemonObj[i].name;
    displayHP.innerHTML = "HP: " + kanye.pokemonObj[i].hp;
    displayAtt.innerHTML = "Attack: " + kanye.pokemonObj[i].attack;
    displayDef.innerHTML = "Defense: " + kanye.pokemonObj[i].defense;
    displayAbilities.innerHTML = "Abilities: " + kanye.pokemonObj[i].abilities;
}

