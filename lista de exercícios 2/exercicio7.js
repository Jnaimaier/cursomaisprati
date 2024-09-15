/*
Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço.
*/
desconto_produtos = (10/100)

const produtos =[
  { nome:"Martelo", preco: 22, desconto: desconto_produtos},
  { nome:"Serrote", preco: 55, desconto: desconto_produtos},
  { nome:"Machado", preco: 98, desconto: desconto_produtos},
  { nome:"Facao", preco: 19, desconto: desconto_produtos},
  { nome:"chave de fenda", preco: 6, desconto: desconto_produtos},
  { nome:" furadeira de impacto", preco: 189, desconto: desconto_produtos},
]

produtos.forEach(produto => {
  let precocomdesconto = produto.preco * (1 - produto.desconto);
  console.log(`Produto: ${produto.nome}, Preço original: R$${produto.preco}, Só por hoje por: R$${precocomdesconto.toFixed(2)}`);
});