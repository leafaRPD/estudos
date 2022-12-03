let nB = Number(prompt("Olá! Quantos bichinhos de estimação você tem?"))
let listaDosNomesDosBichos = []
if (nB === 0) {console.log("Que pena, você pode vir a adotar um!")

} else if (nB < 0) {
 console.log("Digite um número maior ou igual a zero.")}
      else{
            console.log("Digite os nomes deles, um por um:")
            for (let i = 1; i <= nB; i++) {
                  const nomeDoBichoX = prompt("Qual o nome do bichinho numero "+i, i)
                  listaDosNomesDosBichos.push(nomeDoBichoX)}
                  console.log(listaDosNomesDosBichos)
            }


            

// para comentar, selecionar e ' ctrl+; '
//Let = 0 //numB -> número de Bichos

// console.log(nB)


//let numB = pergunta



//if numB > 0; prompt "digite o nome deles!"
// while(numB < numB)




// Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
//  a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
//  b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

// let i = 0
// while (i < 10) {
//       console.log(i)
//       i++
// }


// for (let i = 0; i < 10; i++) {
//       console.log(i)
// }



