var nomeHeroi;
var nivelExp;
var nivelRank;
let doAgain = 1;
do  { doAgain ; doAgain++ ;
const prompt = require("prompt-sync")();
nomeHeroi = prompt('Digite o seu nome do seu Herói : ')
nivelExp = prompt('Digite sua experiência : ')
if (nivelExp>=10001){
  nivelRank = "Radiante"}
else 
if(nivelExp>=9001){
  nivelRank = "Imortal"
}
else 
if(nivelExp>=8001){
  nivelRank = "Ascendente"
}
else 
if(nivelExp>=7001){
  nivelRank = "Platina"
}
else 
if(nivelExp>=5001){
  nivelRank = "Ouro"
}
else 
if(nivelExp>=2001){
  nivelRank = "Prata"
}
else 
if(nivelExp>=1001){
  nivelRank = "Bronze"
}
else 
if(nivelExp<=1000){
  nivelRank = "Ferro"}

console.log("O Herói de nome " + nomeHeroi +" está no nível de " + nivelRank)}
while(doAgain<999)