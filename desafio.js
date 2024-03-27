let playerWin 
let playerLose
let i=0;

do  { i ; i++ ;
const prompt = require("prompt-sync")();
playerWin = prompt('Digite o número de vitórias:')
playerLose = prompt('Digite o número de derrotas:')

totalWins = playerWin - playerLose

function printWins (){
   console.log ("O Herói tem saldo de " + totalWins +" vitórias e está no nível de " + playerRank)}

if (totalWins >= 101 ){
  playerRank = "Imortal"}else     
    if (totalWins >= 81 && totalWins <= 100){
      playerRank ="Lendário"} else 
        if (totalWins >= 51 && totalWins <= 80){
          playerRank = "Ouro"} else
            if (totalWins >= 21 && totalWins <= 50){
              playerRank = "Prata"} else
                if (totalWins >= 11 && totalWins <= 20){
                  playerRank = "Bronze"}else
                    if (totalWins <= 10){
                      playerRank = "Ferro"} 

printWins()}
while (i<999);