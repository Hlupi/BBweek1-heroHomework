// Section 1
// Variables
console.log("CONNECTED");
let hero = {
  name: "Tijn",
  heroic: true,
  inventory: [
    {type: 'dagger',
    damage: 4},
    {type:'rope',
    damage: 1},
    {type: 'willpower',
    damage: 3}],
  health: 8,
  weapon:
    {type: 'katana',
    damage: 8}
}

// Section 2
// Game logic
function rest(creature) {
  creature.health = 10;
  return creature;
  // console.log(creature);
  // console.log(creature.health);
}

// rest(hero);

function pickUpItem(creature, item) {
  creature.inventory.push(item);
  return creature;
  // console.log(item);
  // console.log(creature.inventory);
}
// pickUpItem(hero, {type: 'bomb', damage: 75});

function dealDamage(attacker, defender) {
  defender.health = defender.health - attacker.weapon.damage;
  return defender;
}

function equipWeapon(creature, index) {
  creature.weapon = creature.inventory[index];
  creature.inventory.splice(index, 1);
  return creature;
}

function doBattle(heroicCreature, creature) {
  if(!heroicCreature.heroic) {
    return null;
  }
  while(heroicCreature.health > 0 && creature.health > 0) {
    dealDamage(heroicCreature, creature);
    if(creature.health > 0) {
      dealDamage(creature, heroicCreature);
    }
  }
  if(heroicCreature.health > 0) {
    return heroicCreature
  } else {
    alert('Your creature is dead ): ');
  }
}

// Section 3
// UI

var restingInn = document.getElementById('restingInn');
restingInn.addEventListener('click', function(event) {
  rest(hero);
  console.log('Resting now. Health: ' + hero.health);
  updateStats(hero);
});

var weapon = document.getElementById('weapon');
weapon.addEventListener('click', function(event) {
  pickUpItem(hero, {type: 'rifle', damage: 5});
  console.log('Picked new weapon. Now inventory is: ');
  console.log(hero.inventory);
  updateStats(hero);
  weapon.parentNode.removeChild(weapon);
});

var enemy = document.getElementById('enemy');
enemy.addEventListener('click', function(event) {
  let evilDude = {
    // name: "Koen",
    // heroic: false,
    // inventory: [
    //   {type: 'knife',
    //   damage: 4},
    //   {type:'rope',
    //   damage: 1},
    //   {type: 'willpower',
    //   damage: 2}],
    health: 9,
    weapon:
      {type: 'longsword',
      damage: 7}
  }
  doBattle(hero, evilDude);
  console.log("Your creature health is: " + hero.health);
  console.log("Enemy creature health is: " + evilDude.health);
  updateStats(hero);
  enemy.parentNode.removeChild(enemy);
});

var backpack = document.getElementById('backpack');
backpack.addEventListener('click', function(event) {
  equipWeapon(hero, window.prompt("Tell me the index of your desired weapon: "));
  console.log(hero.inventory);
  console.log(hero.weapon);
  updateStats(hero);
});

var stats = document.getElementById('stats');
function displayStats(creature) {
  var textStats = `Your hero name is ${creature.name} <br /> Health: ${creature.health} <br />
  Weapon: ${creature.weapon.type} <br />
  Weapon damage: ${creature.weapon.damage}`;
  stats.innerHTML = textStats;
}

displayStats(hero);

// Section 4

var inventoryDisplay = document.getElementById('inventory');
function displayInventory(creature) {
  inventoryDisplay.innerHTML = '';
  creature.inventory.forEach(function(item) {
     var temporary = document.createTextNode(`Type: ${item.type}, Damage: ${item.damage} `);
    inventoryDisplay.appendChild(temporary);
    inventoryDisplay.appendChild(document.createElement('br'));
  });
}

displayInventory(hero);

function updateStats(creature) {
  displayStats(creature);
  displayInventory(creature);
}

var newName = document.getElementById('newName');
var changeName = document.getElementById('changeName');
changeName.addEventListener('click', function(event) {
  if(newName.value.length !== 0 ) {
    hero.name = newName.value;
    console.log(hero);
    displayStats(hero);
  } else {
    alert("You hero name can't be as empty as you intended");
  }
  newName.value = '';
});
