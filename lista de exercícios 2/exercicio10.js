/*Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos.*/



const vendas = [
    { produto: "Meia", quantidade: 40, valor: 5.0 },
    { produto: "Chinelo", quantidade: 50, valor: 10.0 },
    { produto: "Jaqueta", quantidade: 12, valor: 200.0 },
    { produto: "Blusa", quantidade: 45, valor: 30.0 },
  ];

let totalVendas = 0;

vendas.forEach(venda =>{
    totalVendas += (venda.valor * venda.quantidade);
})

console.log(`O valor total das vendas é: R$ ${totalVendas.toFixed(2)}`);