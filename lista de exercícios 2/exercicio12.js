/*Objetivo: Crie um array de objetos minimo, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

*/

  const estoque = [
    { produto: "cadeira", quantidade: 20, minimo: 10 },
    { produto: "mesa", quantidade: 12, minimo: 10 },
    { produto: "sofa", quantidade: 8, minimo: 5 },
    { produto: "poltrona", quantidade: 8, minimo: 10 },
  ];
  
  estoque.forEach((item) => {
    if (item.quantidade < item.minimo) {
      item.quantidade *= 2;
      console.log(
        `Quantidade de ${item.produto} atualizada para ${item.quantidade}`
      );
    }
  });
  
  console.log(estoque);