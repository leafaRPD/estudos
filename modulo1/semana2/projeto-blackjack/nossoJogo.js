/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log ("Boas vindas ao jogo de Blackjack!")
    if(confirm("Quer iniciar uma nova rodada?")) { //confirma -> pergunta de resposta "sim" ou "não". 
                                             //Primeiro 'if' responde o que fazer se o usuário clicar "ok"
      
      const cartaA = comprarCarta()
      const cartaB = comprarCarta() 
      if (cartaA === cartaB) {while
      
      console.log (cartaA.texto)
      console.log (cartaB.texto)
      
   } else {
      console.log ("O jogo acabou") // o que fazer se o usuário clicar "cancelar"
   }

   // exercício dos bichos de estimação
   // let nB = Number(prompt("Olá! Quantos bichinhos de estimação você tem?"))
   // let listaDosNomesDosBichos = []
   // if (nB === 0) {console.log("Que pena, você pode vir a adotar um!")
   
   // } else if (nB < 0) {
   //  console.log("Digite um número maior ou igual a zero.")}
   //       else{
   //             console.log("Digite os nomes deles, um por um:")
   //             for (let i = 1; i <= nB; i++) {
   //                   const nomeDoBichoX = prompt("Qual o nome do bichinho numero "+i, i)
   //                   listaDosNomesDosBichos.push(nomeDoBichoX)}
   //                   console.log(listaDosNomesDosBichos)
   //             }






//Resolução da GIULIA (não está correto pois podem repetir cartas)
//    console.log ("Boas vindos ao jogo de Blackjack!")
    
//     let jogo = confirm("Quer inicar uma nova Rodada?")

//     if (jogo) {
//        let carta1Usuaria = comprarCarta()
//        let carta2Usuaria = comprarCarta()
//        let carta1CPU = comprarCarta()
//        let carta2CPU = comprarCarta()

//        let pontuacaoUser = carta1Usuaria.valor + carta2Usuaria.valor
//        let pontuacaoCPU = carta1CPU.valor + carta2CPU.valor
//        console.log (`A cartas do usuário são ${carta1UsUaria.texto} e ${carta2Usuaria.texto} e sua pontuação é ${pontuacaoUser}`)

//        console.log (`A cartas do CPU são ${carta1CPU.texto} e ${carta2CPU.texto} e sua pontuação é ${pontuacaoCPU}`)
//     if (pontuacaoUser > pontuacaoCPU) {
//       console.log ("O usuário ganhou!")
      
//    } else if (pontuacaoUser < pontuacaoCPU) {
//       console.log ("O computador ganhou!")
//    } else if (pontuacaoUser === pontuacaoCPU) {
//     console.log("Empate")
//  } else {
//        console.log("O jogo acabou!")}}