var GameContainer = document.getElementById("gameContainer");
var Scene = document.createElement("div");
var Terrain = document.createElement("div");
var Joueur1 = document.createElement("p");
var Joueur2 = document.createElement("p");
var vitesse = 5;
var animtimer;Lancer

var bouton1haut= document.createElement("button"); 
var bouton2haut = document.createElement("button");
var bouton3haut = document.createElement("button");
var bouton1bas = document.createElement("button");
var bouton2bas = document.createElement("button");
var bouton3bas = document.createElement("button");
var restart= document.createElement("button");

var batonnets=[];
var slots=[];
var batonnetsNow=0;

var Lancer= function() {
for (i=0; i<20; i++) {
  slots[i]=document.createElement("div");
  slots[i].className="slots";
  slots[i].style.width="2%";
  slots[i].style.left= 1.5+ i*5 +"%";
  Terrain.appendChild(slots[i]);
}

for (i=0; i<20; i++) {
  batonnets[i]=document.createElement("div");
  batonnets[i].className="batonnets";
  batonnets[i].style.width="2%";
  batonnets[i].style.left= 1.5+ i*5 +"%";
  Terrain.appendChild(batonnets[i]);
}

Joueur1.className="player";
Joueur1.style.top="0";
Joueur2.className="player";
Joueur2.style.bottom="0";


bouton1haut.innerHTML="1"; 
bouton2haut.innerHTML="2"; 
bouton3haut.innerHTML="3"; 

bouton1bas.innerHTML="1"; 
bouton2bas.innerHTML="2"; 
bouton3bas.innerHTML="3"; 
restart.innerHTML="Rejouer";

bouton1haut.className="rmvButton";
bouton2haut.className="rmvButton";
bouton3haut.className="rmvButton";
bouton1bas.className="rmvButton";
bouton2bas.className="rmvButton";
bouton3bas.className="rmvButton";
restart.className="restartbtn";

GameContainer.appendChild(Scene);
Scene.appendChild(Joueur1);
Joueur1.appendChild(bouton1haut);
Joueur1.appendChild(bouton2haut);
Joueur1.appendChild(bouton3haut);
Scene.appendChild(Terrain);
Terrain.appendChild(restart);
Scene.appendChild(Joueur2);
Joueur2.appendChild(bouton1bas);
Joueur2.appendChild(bouton2bas);
Joueur2.appendChild(bouton3bas);

restart.style.display="none";
batonnetsNow=19;
SupprimerBouton2();
};

var goUp = function(numero) {
var batnum= batonnets[numero];
  var top = 25;
var initanimup = function() {
  var pas = -1;
    batnum.style.top=top+pas+"%";
    top += pas;
    if (top<=-30){
      clearTimeout(animtimer);
    }
};
var animtimer = setInterval(initanimup,vitesse);
};

var goDn = function(numero) {
var batnum= batonnets[numero];
  var top = 25;
var initanimDn = function() {
  var pas = 1;
    batnum.style.top=top+pas+"%";
    top += pas;
    if (top>=80){
      clearTimeout(animtimerd);
    }
};
var animtimerd = setInterval(initanimDn,vitesse);
};


var AjouterBouton1 = function (){
if(batonnetsNow>2){bouton3haut.style.display="inline-block";}
if(batonnetsNow>1){bouton2haut.style.display="inline-block";}
if(batonnetsNow>0){bouton1haut.style.display="inline-block";}
};

var AjouterBouton2 = function (){
if(batonnetsNow>0){bouton1bas.style.display="inline-block";}
if(batonnetsNow>1){bouton2bas.style.display="inline-block";}
if(batonnetsNow>2){bouton3bas.style.display="inline-block";}
};

var SupprimerBouton1 = function (){
bouton1haut.style.display="none";
bouton2haut.style.display="none";
bouton3haut.style.display="none";
};

var SupprimerBouton2 = function (){
bouton1bas.style.display="none";
bouton2bas.style.display="none";
bouton3bas.style.display="none";
};

var Joueur1Joue = function(nombre) {
SupprimerBouton1();
for (i=1;i<=nombre;i++){
  goUp(batonnetsNow);
  batonnetsNow--;
}
if (batonnetsNow===0){
  alert("Le Joueur 1 a gagner !");
  restart.style.display="block";
}
else {
  AjouterBouton2();
}
};

var Joueur2Joue = function(nombre) {
SupprimerBouton2();
for (i=1;i<=nombre;i++){
  goDn(batonnetsNow);
  batonnetsNow--;
}
if (batonnetsNow===0){
  alert("Le Joueur 2 a gagner !");
  restart.style.display="block";
}
else {
  AjouterBouton1();
}
};

var Joueur1B1=function() { Joueur1Joue(1);};
var Joueur1B2=function() { Joueur1Joue(2);};
var Joueur1B3=function() { Joueur1Joue(3);};
var Joueur2B1=function() { Joueur2Joue(1);};
var Joueur2B2=function() { Joueur2Joue(2);};
var Joueur2B3=function() { Joueur2Joue(3);};

var Relancer=function() {
for (i=0; i<20; i++) {
  Terrain.removeChild(batonnets[i]);
}
batonnets=[];
Lancer();
AjouterBouton1();
};

Lancer();

bouton1haut.addEventListener("click",Joueur1B1,false);
bouton2haut.addEventListener("click",Joueur1B2,false);
bouton3haut.addEventListener("click",Joueur1B3,false);
bouton1bas.addEventListener("click",Joueur2B1,false);
bouton2bas.addEventListener("click",Joueur2B2,false);
bouton3bas.addEventListener("click",Joueur2B3,false);
restart.addEventListener("click",Relancer,false);