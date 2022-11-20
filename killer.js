class Tueur {
    constructor(nom, vie) {
        this.nom = nom
        this.vie = vie
    }
}

class Survivant {
    constructor(nom, stats) {
        this.nom = nom
        this.stats = stats
    }
}

class Stats {
    constructor(nom, mort, damage, final) {
        this.nom = nom
        this.mort = mort
        this.damage = damage
        this.final = final 
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function randBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let tueurs = new Tueur("Jason", 100)

let survivant = []
let mort = []
let cliché = ["La Blonde", "Le Sportif ", "le Nerd", "Le fetard", "L'hysterique"]
let prénom = ["Arthur", "Martin", "Felix", "Morghan", "Julien"]

for (let i = 0; i < 5; i++) {

    let proba1 = randBetween(0, 100)
    let proba2 = randBetween(0,100 - proba1)
    let proba3 = 100 - proba1 - proba2

    survivant.push(new Survivant(prénom[getRandomInt(prénom.length)],
                                new Stats(cliché[getRandomInt(cliché.length)],
                                          proba1 / 100,
                                          proba2 / 100,
                                          proba3 / 100)))
}

let save = []
survivant.forEach(element => save.push(element));


let game = 1

while (game == 1) {

    let choisit = survivant[0]
    
    let proba = Math.random()



    console.log(tueurs.nom + " à " + tueurs.vie+ " Points de vie")

    if (proba <= choisit.stats.mort) {

        console.log(tueurs.nom + " à tué " + choisit.nom + " !")
        mort.push(survivant[0].nom)
        survivant.shift()
    } else if (proba > choisit.stats.mort && proba <= choisit.stats.damage) {

        console.log(choisit.nom + " à reussi a esquivé le coup et a infligé 10 de dégâts en retour !")
        tueurs.vie-= 10
    } else {

        console.log(tueurs.nom + " à tué " + choisit.nom + " mais il a reussis a frappé le tueur avant de mourir !")
        tueurs.vie-= 15
        mort.push(survivant[0].nom)
        survivant.shift()
    }

    if (tueurs.vie<= 0) {
        if (mort.length == 0) {
            mort.push("personne")
        }

        if (survivant.length == 0) {
            console.log("Tout le monde est mort !")
            game = 0
        } else {
            console.log("Vous avez gagné ! Mais certains survivant sont mort :  " + mort)
            game = 0
        }
    } else if (survivant.length == 0) {
        console.log("Vous avez malheureusement perdu ! Tout les survivants sont mort !")
        game = 0
    }
}