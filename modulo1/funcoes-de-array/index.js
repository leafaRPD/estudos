//ex 1 Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
//     realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
// a) Crie um novo array que contenha apenas o nome dos doguinhos

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

// //  const apenasNomes = pets.map ((item, indice, array) =>
// //  { return item.nome
// // })

// // console.log (apenasNomes)

// // b) Crie um novo array apenas com os cachorros salsicha

// const sohOsSalsicha = pets.filter ((item) => {
// return item.raca === "Salsicha"
// })
// // console.log (sohOsSalsicha)

// const nomesDosSalsicha = sohOsSalsicha.map ((item, indice, array) =>

//        { return item.nome}
// )

// console.log (nomesDosSalsicha)

// // c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
// //    A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"


// const sohOsSalsicha2 = pets.filter ((item) => {
//     return item.raca === "Salsicha"
//     })
//     // console.log (sohOsSalsicha2)
    
//     const fraseComNomesDosSalsicha = sohOsSalsicha2.map ((item, indice, array) =>
    
//            { return ("Você ganhou um cupom de desconto de 10% para tosar o/a " + item.nome + "!") }  
//     )
    
//     console.log (fraseComNomesDosSalsicha)


    // ex 2:
    //      Dado o seguinte array de produtos, realize as operações
    //      pedidas nos itens abaixo utilizando as funções de array map e filter:
    
    //   a) Crie um novo array que contenha apenas o nome de cada item

    const produtos = [
        { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
        { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
        { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
        { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
        { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
        { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
        { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
        { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
        { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
        { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
     ]

    //  const apenasNomesDeCadaProduto = produtos.map ((item) =>
    //  { return item.nome
    // }) 

    //  console.log (apenasNomesDeCadaProduto)

     //const apenasNomes = pets.map ((item, indice, array) =>
// //  { return item.nome
// // })

//      b) Crie um novo array que contenha um objeto com o nome e 
//      o preço de cada item, aplicando 5% de desconto em todos eles

// const questao2B = produtos.map ((item) => {
//        return {nome: item.nome, preco: (item.preco * 0.95)}
//      }) 

//      console.log (questao2B)

//     c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

//  const sohBebidas = produtos.filter ((item) => {
//     return item.categoria === "Bebidas"
//     })
//     console.log (sohBebidas)

//     d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

//resolução Rafa
// let ype = "Ypê"
// const contemYpê = produtos.filter ((item) => {
// return item.nome.includes(ype)})
// console.log(contemYpê)

// //resolução Giulia
// const produtosYpe = produtos.filter(item =>
//     item.nome.includes("Ypê"))

// console.log (produtosYpe)

//      e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
//         Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê" 

let ype = "Ypê"
const contemYpê = produtos.filter ((item) => {
return item.nome.includes(ype)})
console.log(contemYpê)

const novoArrayFrase = contemYpê.map ((item) => {
    return ("Compre "+item.nome +" por "+ item.preco+ ".")}
)
console.log(novoArrayFrase)