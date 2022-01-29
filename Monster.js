const { writeFile } = require('./writeFile')

class Monster {
  constructor(health, abilities) {
    this.health = health
    this.abilities = abilities
  }

  attack(hero) {
    let randomAttack = Math.floor(Math.random() * 10) + 1

    // First ability
    if (randomAttack < 5) {
      writeFile(
        `${this.constructor.name} dealt ${this.abilities[0].dmg} damage with ${this.abilities[0].nameOfAttack} to the ${hero.constructor.name}\n`
      )

      console.log(
        `${this.constructor.name} dealt ${this.abilities[0].dmg} damage with ${this.abilities[0].nameOfAttack} to the ${hero.constructor.name}`
      )
      hero.health -= this.abilities[0].dmg
      console.log(
        `${this.constructor.name} health -- ${this.health}  | ${hero.constructor.name} -- ${hero.health}`
      )
    }

    // Second ability
    else {
      writeFile(
        `${this.constructor.name} dealt ${this.abilities[1].dmg} damage with ${this.abilities[1].nameOfAttack} to the ${hero.constructor.name}\n`
      )

      console.log(
        `${this.constructor.name} dealt ${this.abilities[1].dmg} damage with ${this.abilities[1].nameOfAttack} to the ${hero.constructor.name}`
      )
      hero.health -= this.abilities[1].dmg
      console.log(
        `${this.constructor.name} health -- ${this.health}  | ${hero.constructor.name} -- ${hero.health}`
      )
    }
  }
}

class Dragon extends Monster {
  constructor(health) {
    super(health, [
      { nameOfAttack: 'Mele', dmg: 5 },
      { nameOfAttack: 'Breath', dmg: 20 },
    ])
  }
}

class Spider extends Monster {
  constructor(health) {
    super(health, [
      { nameOfAttack: 'Mele', dmg: 5 },
      { nameOfAttack: 'Bite', dmg: 8 },
    ])
  }
}

module.exports = {
  Dragon: Dragon,
  Spider: Spider,
}
