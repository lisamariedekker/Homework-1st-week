const hero = {
    name: "Crumbthief",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "Wand",
        damage: 2
    }
}

function rest(hero) {
    hero.health = 10
    return hero

}

const inn = document.getElementById("inn")
inn.addEventListener("click", function(){
    rest(hero)
});

function pickUpItem(hero, weapon) {
    hero.inventory.push(weapon)

}

const dagger = document.getElementById("dagger")
dagger.addEventListener("click", function(){
    pickUpItem(hero, {type: "dagger", damage: 2})
});

function equipWeapon(hero) {
    if (hero.inventory.length > 0) {
        hero.weapon = hero.inventory[0]
    }

}

const bag = document.getElementById("bag")
bag.addEventListener("click", function(){
    equipWeapon(hero)
});