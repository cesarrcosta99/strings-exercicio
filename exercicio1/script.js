// Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. 
// Em seguida, Imprima no console a seguinte mensagem:
// Estas são as comidas favoritas de nomeDoUsuario
/* - Comida1
  - Comida2
   - Comida3 */

const nome = prompt("Insira seu Nome")
const comida1 = prompt("Insira sua primeira comida favorita")
const comida2 = prompt("Insira sua segunda comida favorita")
const comida3 = prompt("Insira sua terceira comida favorita")
console.log(`Estas são as comidas favoritas de ${nome}: \n ${comida1} \n ${comida2} 
            \n ${comida3}`) 
