var usuarios = [
    {
        nome: 'Amadeus',
        email: 'amadeus@digitalhouse.com',
        senha: '123456',
        filmes: [
            {
                nome: 'Ghost in the Shell',
                gostou: true,
                estrelas: 5,
            },
            {
               nome: 'Vingadores: Ultimato',
               gostou: true,
               estrelas: 5,
           },
           {
               nome: 'Alita',
               gostou: true,
               estrelas: 5,
              }
        ]
    },
    {
       nome: 'Fulano',
       email: 'fulano@digitalhouse.com',
       senha: null,
       filmes: [
           {
               nome: 'Ghost in the Shell',
               gostou: false,
               estrelas: 1,
           },
           {
              nome: 'Vingadores: Ultimato',
              gostou: true,
              estrelas: 5,
          },
          {
           nome: 'Alita',
           gostou: false,
           estrelas: 2,
          }
       ]
   }, 
   {
       nome: 'Beltrano',
       email: 'beltrano@digitalhouse.com',
       senha: null,
       filmes: [
       ]
   },
   {
       nome: 'Ciclano',
       email: 'ciclano@digitalhouse.com',
       senha: 'abc123',
       filmes: [
           {
               nome: 'Ghost in the Shell',
               gostou: false,
               estrelas: 1,
           },
           {
              nome: 'Vingadores: Ultimato',
              gostou: false,
              estrelas: 1,
          },
          {
           nome: 'Alita',
           gostou: true,
           estrelas: 5,
          }
       ]
   }, 
   {
       nome: 'Altrano',
       email: 'altrano@digitalhouse.com',
       senha: '111aaabc',
       filmes: [
           {
               nome: 'Ghost in the Shell',
               gostou: true,
               estrelas: 4,
           },
           {
              nome: 'Vingadores: Ultimato',
              gostou: true,
              estrelas: 3,
          },
          {
           nome: 'Alita',
           gostou: true,
           estrelas: 3,
          }
       ]
   }, 
]

module.exports = usuarios