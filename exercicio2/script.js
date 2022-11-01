/* a) Remova o excesso de espaços no final da string;

b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da
 remoção dos espaços;

c) Substitua os traços `________` por “sticioso” */


const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.     ";
 const stringSemEspaco=minhaString.trim()
 console.log("Com espaço", minhaString.length)
 console.log("Sem Espaço", stringSemEspaco.length)
 const novaString=minhaString.replace(" ________"," sticioso" )
 console.log(novaString)
