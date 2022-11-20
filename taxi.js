class personnage {
    constructor(prénom, santé) {
        this.prénom = prénom;
        this.santé = santé;
    }
}


class musique{
    constructor(nom, nom1, nom2, nom3, nom4) {
        this.nom = nom;
        this.nom1 = nom1;
        this.nom2 = nom2;
        this.nom3 = nom3;
        this.nom4 = nom4;
    }
}

class trajet{
    constructor(radio, feux, changement , tour) {
        this.radio = radio;
        this.feux = feux;
        this.changement = changement;
        this.tour = tour;
    }
}

const john = new personnage ("john", 10);
var radio = ["Anissa de wejdene", "Dong Nhi - Sweet Confession / Lời Thú Tội Ngọt Ngào", "Canto dei Sanfedisti", "Soviet Air March", "Bismarck"];
const route = new trajet (0, 30 , 0 , 0);
const tour = 0;


function boucle() {
    if (john.santé > 0) {
        console.log(music);
        if (music === "Anissa de wejdene"){
            route.changement = route.changement + 1;
            route.tour = route.tour + 1;
            john.santé = john.santé - 1;
            console.log("vous avez perdu 1 point de santer, votre vie est maintenant de : " ,john.santé ,"nombre de changment : ",route.changement , "nombre de tour:",route.tour);
        } else {
            route.tour = route.tour + 1;
            console.log("vous avez passer un tour sans ecouter wejdene", "nombre de tour:",route.tour);
        }
      } else {
        console.log("explosion");
      }
}

let i = 0
while (john.santé > 0 && i<30) {
    var random = Math.floor(Math.random()*radio.length);
    var music = radio[random];
    boucle();
    i ++
    if (i === 30) {
       if (john.santé > 0) {
         console.log( john.prénom , "est bien arrivé chez lui , il a fallut ",  route.changement , "changements pour arriver chez lui")
       }
       else {
        console.log("explosion");
       }
    }
}