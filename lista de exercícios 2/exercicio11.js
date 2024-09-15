/*Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente.
*/

let pedidos = [
    {cliente: "Gabriela", produto: "Hamburguer", quantidade: 3},
    {cliente: "Joana", produto: "Batata frita", quantidade: 2},
    {cliente: "Ana", produto: "Sorvete casquinha", quantidade: 4},
    {cliente: "Leticia", produto: "Refrigerante grande", quantidade: 3},
    {cliente: "Eduarda", produto: "Sorvete cobertura", quantidade: 2},
    {cliente: "Patricia", produto: "Biscoito", quantidade: 2}
];

let quantidadeProdutoCliente = {};

pedidos.forEach(pedido =>{
    if (quantidadeProdutoCliente[pedido.cliente]){
        quantidadeProdutoCliente[pedido.cliente] += pedido.quantidade;
    } else {
        quantidadeProdutoCliente[pedido.cliente] = pedido.quantidade;
    }
});

console.log(quantidadeProdutoCliente);