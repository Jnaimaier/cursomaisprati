/*
- Filtrando Propriedades de Objetos
Dado um objeto produto com várias propriedades, crie uma função que retorna um novo
objeto contendo apenas as propriedades cujo valor seja maior que um valor específico.
Use for in para filtrar as propriedades.
*/

const produto = {
    nome: "tijolo refratario",
    preco: "0.66",
    tipo: "refratário",
    quantidade: "1000",
    descricao: "tijolo 6 furos",
  };
  const valor = 200;
  
  const filtroProduto = {};
  for (const key in produto) {
    if (produto[key] > valor) {
      filtroProduto[key] = produto[key];
    }
  }
  
  console.log(filtroProduto)