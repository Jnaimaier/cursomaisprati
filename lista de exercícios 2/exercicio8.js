/*
Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes.
*/
const filmes = [
    {
      titulo: "O senhor dos anéis,o retorno do rei",
      diretor: "Peter Jackson",
      anoLancamento:2003,
    },
    { titulo: "Holigans", diretor: "Lexi Alexander", anoLancamento: 2005 },
    { titulo: "As branquelas", diretor: "Keenen Ivory Wayans ", anoLancamento: 2004 },
    { titulo: "Sniper Americano", diretor: " Cleant Weastwood ", anoLancamento: 2014 },
    { titulo: "Aladdin", diretor: " Ron Clements, John Musker ", anoLancamento: 1992 },
  ];
  
  const titulos = [];
  
  filmes.forEach((filme) => {
    titulos.push(filme.titulo);
  });
  
  console.log(titulos);