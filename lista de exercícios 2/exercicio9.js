/*Objetivo: Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos.
*/

const clientes = [
    { nome: "Alberto", idade: 26, cidade: "Joinville" },
    { nome: "Cristina", idade: 25, cidade: "Campo grande" },
    { nome: "Amanda", idade: 31, cidade: "Torres" },
    { nome: "Jessica", idade: 23, cidade: "Tramandai" },
    { nome: "Tiago", idade: 22, cidade: "Canoas" },
    { nome: "Raquel", idade: 32, cidade: "Sao Francisco de Paula" },
  ];
  
  let contador = 0;
  
  clientes.forEach((cliente) => {
    if (cliente.idade > 30) {
      contador++;
    }
  });
  
  console.log(`Quantidade de clientes com idade maior que de 30 anos: ${contador}`);