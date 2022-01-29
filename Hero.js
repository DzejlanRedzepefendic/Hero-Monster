const { writeFile } = require('./writeFile')

class HumanCharacter {
  static dropedWeapons = []

  constructor(health, activeWeapon) {
    this.Bag = []

    this.activeWeapon = activeWeapon

    this.health = health
  }

  changeActiveWeapon() {
    if (this.Bag.length < 1) {
      console.log(`${this.constructor.name} has no weapons in the bag`)
      return
    }

    if (this.activeWeapon) {
      this.Bag.push(this.activeWeapon)
    }

    this.activeWeapon = this.Bag[0]
    this.Bag.slice(0, 1)

    console.log(
      `${this.constructor.name} equiped the ${this.activeWeapon.name}`
    )
  }

  dropWeapon() {
    if (this.activeWeapon === null) {
      console.log(`${this.constructor.name} has nothing to drop`)
      return
    }

    HumanCharacter.dropedWeapons.push(this.activeWeapon)
    console.log(`${this.constructor.name} droped a ` + this.activeWeapon.name)
    this.activeWeapon = null

    this.changeActiveWeapon()
  }

  attack(monster) {
    if (!this.activeWeapon) {
      console.log(`${this.constructor.name} wields no weapon`)
      return
    }
    monster.health -= this.activeWeapon.dmg

    writeFile(
      `${this.constructor.name} dealt ${this.activeWeapon.dmg} damage with ${this.activeWeapon.name} to the ${monster.constructor.name}\n`
    )

    console.log(
      `${this.constructor.name} dealt ${this.activeWeapon.dmg} damage with ${this.activeWeapon.name} to the ${monster.constructor.name}`
    )

    console.log(
      `${this.constructor.name} health -- ${this.health}  |  ${monster.constructor.name} health-- ${monster.health}`
    )
  }
}

class Warrior extends HumanCharacter {
  constructor(weapon) {
    super(100, new HumanWeapon(weapon))
  }

  weaponPickup(name) {
    if (this.Bag.length === 2) {
      console.log(`The bag for weapons is already full`)
      return
    }

    if (name === `Sword` || name === `Spear`) {
      const foundWeapon = HumanCharacter.dropedWeapons.find(
        (dw) => dw.name === name
      )
      if (!foundWeapon) {
        console.log(`No weapon was found named: ${name}`)
        return
      }

      if (this.activeWeapon) {
        HumanCharacter.dropedWeapons.push(this.activeWeapon)
      }
      this.activeWeapon = foundWeapon

      writeFile(`${this.constructor.name} picked up a ${name}\n`)
      console.log(`${this.constructor.name} picked up a ${name}`)
    } else {
      console.log(`${this.constructor.name} can\'t wield this weapon`)
    }
  }
}

class Mage extends HumanCharacter {
  constructor() {
    super(150, new HumanWeapon(`Spell`))
  }

  weaponPickup(name) {
    if (this.Bag.length === 2) {
      console.log(`The bag for weapons is already full`)
      return
    }

    if (name === `Spell`) {
      const foundWeapon = HumanCharacter.dropedWeapons.find(
        (dw) => dw.name === name
      )
      if (!foundWeapon) {
        console.log(`No weapon was found named: ${name}`)
        return
      }

      if (this.activeWeapon) {
        HumanCharacter.dropedWeapons.push(this.activeWeapon)
      }
      this.activeWeapon = foundWeapon

      writeFile(`${this.constructor.name} picked up a ${name}\n`)
      console.log(`${this.constructor.name} picked up a ${name}`)
    } else {
      console.log(`${this.constructor.name} can\`t wield this weapon`)
    }
  }
}

class HumanWeapon {
  constructor(name) {
    this.name = name

    switch (name) {
      case `Spell`:
        this.dmg = 20
        break

      case `Sword`:
        this.dmg = 10
        break

      case `Spear`:
        this.dmg = 15
        break

      default:
        this.name = null
        console.log(`No such weapon exists`)
        break
    }
  }
}

module.exports = {
  Mage: Mage,
  Warrior: Warrior,
  HumanWeapon: HumanWeapon,
  HumanCharacter: HumanCharacter,
}
