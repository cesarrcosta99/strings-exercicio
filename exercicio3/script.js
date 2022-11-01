const frase="Jorge tem uma casa verde e com portão azul, com os dizeres:\"BOAS VINDAS, mas não deixe o gato sair\""
const novaFrase=frase.replaceAll("verde","rosa").replaceAll("azul","laranja")
console.log("Nova frase ",novaFrase)
const minuscula="mas não deixe o gato sair\""
console.log(frase.replace(minuscula,minuscula.toUpperCase()))
console.log("Inclui verde?", novaFrase.includes("verde"))
console.log("inclui laranja?", novaFrase.includes("laranja"))