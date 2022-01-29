const { Dragon, Spider } = require('./Monster')
const { Warrior, Mage, HumanWeapon } = require('./Hero')
const { writeFile } = require('./writeFile')

function displayWinner(hero, monster) {
  if (hero.health < monster.health) {
    writeFile(
      `${monster.constructor.name} won duel with the ${hero.constructor.name}\n`
    )

    console.log(
      `${monster.constructor.name} won duel with the ${hero.constructor.name}`
    )
  } else {
    writeFile(
      `${hero.constructor.name} won duel with the ${monster.constructor.name}\n`
    )

    console.log(
      `${hero.constructor.name} won duel with the ${monster.constructor.name} `
    )
  }
}

function startFight(hero, monster) {
  while (hero.health > 0 && monster.health > 0) {
    let randomAttack = Math.floor(Math.random() * 100) + 1
    if (randomAttack < 50) {
      hero.attack(monster)
    } else {
      monster.attack(hero)
    }
  }
  displayWinner(hero, monster)
}

Warrior.dropedWeapons.push(new HumanWeapon('Sword'))
let blueWhiteDragon = new Dragon(100)
let darkKnight = new Warrior('Spear')
darkKnight.dropWeapon()
darkKnight.weaponPickup('Sword')

startFight(darkKnight, blueWhiteDragon)
