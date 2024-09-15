/*Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho.
*/

let carrinho = {
    itens: [
    {nome: "fardo cerveja", quantidade: 10, precoUnitario: 24.90}, 
    {nome: "costela", quantidade: 8, precoUnitario: 19.90}, 
    {nome: "batata", quantidade: 5, precoUnitario: 4.00}
    ]
};

let valorTotal = 0;

carrinho.itens.forEach(item =>{
    valorTotal += item.quantidade * item.precoUnitario;
});

console.log(`O valor total da compra é: R$ ${valorTotal}`);