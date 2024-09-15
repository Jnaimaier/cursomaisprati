
/*Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
uma pessoa com nome, idade, e cidade. Use for of para exibir as
informações de cada pessoa no console.
*/

const pessoas = [
    { nome: "Bernadete", idade: 12, cidade: "Curitiba" },
    { nome: "Carlinhos", idade: 40, cidade: "Balneário Camburiu" },
    { nome: "Bruna", idade: 27, cidade: "Boa vista" },
    { nome: "Julia", idade: 89, cidade: "Londres" },
    { nome: "Marta", idade: 20, cidade: "Tóquio" },
  ];
  
  for (let pessoa of pessoas) {
    console.log(
      `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`
    );
  }