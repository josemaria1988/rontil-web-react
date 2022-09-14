let stockProductos = [{
  id: 1,
  nombre: "Contenedor 120 Lts ",
  tipo: "Contenedores",
  cantidad: 1,
  desc: "Contenedor SULO de 120 Lts",
  color: [
    {
      id:1001,
      value: 'black',
      stock: 10,
      precio: 3100,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-gris.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      id:1002,
      value: 'green',
      stock: 8,
      precio: 3500,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-verde.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      id:1003,
      value: 'brown',
      stock: 5,
      precio: 3900,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-marron.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      id:1004,
      value: 'blue',
      stock: 7,
      precio: 3500,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-azul.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      id:1005,
      value: 'white',
      stock: 9,
      precio: 4200,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-blanco.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      id:1006,
      value: 'red',
      stock: 4,
      precio: 3900,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-rojo.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      id:1007,
      value: 'yellow',
      stock: 3,
      precio: 3900,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-amarillo.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      id:1008,
      value: 'orange',
      stock: 1,
      precio: 3500,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-naranja.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    }
  ]
},
{
  id: 2,
  nombre: "Contenedor 240 Lts",
  tipo: "Contenedores",
  cantidad: 1,
  desc: "Contenedor SULO de 240 Lts",
  color: [
    {
      id: 2001,
      value: 'black',
      stock: 10,
      precio: 4200,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/Contenedor-de-Residuos-SULO-2-Ruedas-240-Litros-Insonorizado-gris.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      id: 2002,
      value: 'green',
      stock: 8,
      precio: 4500,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/Contenedor-de-Residuos-SULO-2-Ruedas-240-Litros-Insonorizado-verde.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      id: 2003,
      value: 'brown',
      stock: 5,
      precio: 4800,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/Contenedor-de-Residuos-SULO-2-Ruedas-240-Litros-Colores-Premium-marron.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      id: 2004,
      value: 'blue',
      stock: 7,
      precio: 4200,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/Contenedor-de-Residuos-SULO-2-Ruedas-240-Litros-Colores-Premium-azul.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      id: 2005,
      value: 'white',
      stock: 9,
      precio: 5100,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/Contenedor-de-Residuos-SULO-2-Ruedas-240-Litros-Colores-Premium-blanco-555x654.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      id: 2006,
      value: 'red',
      stock: 4,
      precio: 4800,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/Contenedor-de-Residuos-SULO-2-Ruedas-240-Litros-Colores-Premium-rojo.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      id: 2007,
      value: 'yellow',
      stock: 3,
      precio: 4800,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/Contenedor-de-Residuos-SULO-2-Ruedas-240-Litros-Colores-Premium-amarillo.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      id: 2008,
      value: 'orange',
      stock: 1,
      precio: 4500,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/Contenedor-de-Residuos-SULO-2-Ruedas-240-Litros-Colores-Premium-naranja-555x606.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    }
  ]
},
{
  id: 3,
  nombre: "Contenedor de 360 Lts",
  tipo: "Contenedores",
  cantidad: 1,
  desc: "Contenedor SULO de 360 Lts",
  color: [
    {
      id: 3001,
      value: 'black',
      stock: 10,
      precio: 6300,
      img: ['/assets/imagenes/mgb360_color_01.jpg',
        '/assets/imagenes/mgb360_tech_01.jpg',
        '/assets/imagenes/mgb360_tech_02.jpg']
    },
    {
      id: 3002,
      value: 'green',
      stock: 8,
      precio: 6300,
      img: ['/assets/imagenes/mgb360_color_02.jpg',
        '/assets/imagenes/mgb360_tech_01.jpg',
        '/assets/imagenes/mgb360_tech_02.jpg']
    },
    {
      id: 3003,
      value: 'brown',
      stock: 5,
      precio: 6900,
      img: ['/assets/imagenes/mgb360_color_03.jpg',
        '/assets/imagenes/mgb360_tech_01.jpg',
        '/assets/imagenes/mgb360_tech_02.jpg']
    },
    {
      id: 3004,
      value: 'blue',
      stock: 7,
      precio: 6900,
      img: ['/assets/imagenes/mgb360_color_04.jpg',
        '/assets/imagenes/mgb360_tech_01.jpg',
        '/assets/imagenes/mgb360_tech_02.jpg']
    },
    {
      id: 3005,
      value: 'white',
      stock: 9,
      precio: 7200,
      img: ['/assets/imagenes/mgb360_color_05.jpg',
        '/assets/imagenes/mgb360_tech_01.jpg',
        '/assets/imagenes/mgb360_tech_02.jpg']
    },
    {
      id: 3006,
      value: 'red',
      stock: 4,
      precio: 6900,
      img: ['/assets/imagenes/mgb360_color_06.jpg',
        '/assets/imagenes/mgb360_tech_01.jpg',
        '/assets/imagenes/mgb360_tech_02.jpg']
    },
    {
      id: 3007,
      value: 'yellow',
      stock: 3,
      precio: 6900,
      img: ['/assets/imagenes/mgb360_color_07.jpg',
        '/assets/imagenes/mgb360_tech_01.jpg',
        '/assets/imagenes/mgb360_tech_02.jpg']
    },
    {
      id: 3008,
      value: 'orange',
      stock: 1,
      precio: 6500,
      img: ['/assets/imagenes/mgb360_color_08.jpg',
        '/assets/imagenes/mgb360_tech_01.jpg',
        '/assets/imagenes/mgb360_tech_02.jpg']
    }
  ]
},
{
  id: 4,
  nombre: "Contenedor 800 Lts",
  tipo: "Contenedores",
  cantidad: 1,
  desc: "Contenedor SULO Citybac 800 Lts",
  color: [
    {
      id: 4001,
      value: 'black',
      stock: 10,
      precio: 18800,
      img: ['/assets/imagenes/mgb770_color_01.jpg',
        '/assets/imagenes/mgb770_tech_01.jpg',
        '/assets/imagenes/mgb770_tech_02.jpg',
        '/assets/imagenes/mgb770_tech_03.jpg']
    },
    {
      id: 4002,
      value: 'green',
      stock: 8,
      precio: 19500,
      img: ['/assets/imagenes/mgb770_color_02.jpg',
        '/assets/imagenes/mgb770_tech_01.jpg',
        '/assets/imagenes/mgb770_tech_02.jpg',
        '/assets/imagenes/mgb770_tech_03.jpg']
    },
    {
      id: 4003,
      value: 'brown',
      stock: 5,
      precio: 20100,
      img: ['/assets/imagenes/mgb770_color_03.jpg',
        '/assets/imagenes/mgb770_tech_01.jpg',
        '/assets/imagenes/mgb770_tech_02.jpg',
        '/assets/imagenes/mgb770_tech_03.jpg']
    },
    {
      id: 4004,
      value: 'blue',
      stock: 7,
      precio:20100,
      img: ['/assets/imagenes/mgb770_color_04.jpg',
        '/assets/imagenes/mgb770_tech_01.jpg',
        '/assets/imagenes/mgb770_tech_02.jpg',
        '/assets/imagenes/mgb770_tech_03.jpg']
    },
    {
      id: 4005,
      value: 'white',
      stock: 9,
      precio:21700,
      img: ['/assets/imagenes/mgb770_color_05.jpg',
        '/assets/imagenes/mgb770_tech_01.jpg',
        '/assets/imagenes/mgb770_tech_02.jpg',
        '/assets/imagenes/mgb770_tech_03.jpg']
    },
    {
      id: 4006,
      value: 'red',
      stock: 4,
      precio:20100,
      img: ['/assets/imagenes/mgb770_color_06.jpg',
        '/assets/imagenes/mgb770_tech_01.jpg',
        '/assets/imagenes/mgb770_tech_02.jpg',
        '/assets/imagenes/mgb770_tech_03.jpg']
    },
    {
      id: 4007,
      value: 'yellow',
      stock: 3,
      precio:20100,
      img: ['/assets/imagenes/mgb770_color_07.jpg',
        '/assets/imagenes/mgb770_tech_01.jpg',
        '/assets/imagenes/mgb770_tech_02.jpg',
        '/assets/imagenes/mgb770_tech_03.jpg']
    },
    {
      id: 4008,
      value: 'orange',
      stock: 1,
      precio:19500,
      img: ['/assets/imagenes/mgb770_color_08.jpg',
        '/assets/imagenes/mgb770_tech_01.jpg',
        '/assets/imagenes/mgb770_tech_02.jpg',
        '/assets/imagenes/mgb770_tech_03.jpg']
    }
  ]
},
{
  id: 5,
  nombre: 'Contenedor de 1100 Lts',
  tipo: 'Contenedores',
  cantidad: 1,
  desc: 'Contenedor SULO Citybac 1100 Lts',
  color: [
    {
      id:5001,
      value: 'black',
      stock: 10,
      precio:20100,
      img: ['/assets/imagenes/mgb1100_fd_color_01.jpg',
        '/assets/imagenes/mgb1100_fd_tech_01.jpg',
        '/assets/imagenes/mgb1100_fd_tech_02.jpg',
        '/assets/imagenes/mgb1100_fd_tech_03.jpg']
    },
    {
      id:5002,
      value: 'green',
      stock: 8,
      precio:21700,
      img: ['/assets/imagenes/mgb1100_fd_color_02.jpg',
        '/assets/imagenes/mgb1100_fd_tech_01.jpg',
        '/assets/imagenes/mgb1100_fd_tech_02.jpg',
        '/assets/imagenes/mgb1100_fd_tech_03.jpg']
    },
    {
      id:5003,
      value: 'brown',
      stock: 5,
      precio:22500,
      img: ['/assets/imagenes/mgb1100_fd_color_03.jpg',
        '/assets/imagenes/mgb1100_fd_tech_01.jpg',
        '/assets/imagenes/mgb1100_fd_tech_02.jpg',
        '/assets/imagenes/mgb1100_fd_tech_03.jpg']
    },
    {
      id:5004,
      value: 'blue',
      stock: 7,
      precio:22500,
      img: ['/assets/imagenes/mgb1100_fd_color_04.jpg',
        '/assets/imagenes/mgb1100_fd_tech_01.jpg',
        '/assets/imagenes/mgb1100_fd_tech_02.jpg',
        '/assets/imagenes/mgb1100_fd_tech_03.jpg']
    },
    {
      id:5005,
      value: 'white',
      stock: 9,
      precio:24000,
      img: ['/assets/imagenes/mgb1100_fd_color_05.jpg',
        '/assets/imagenes/mgb1100_fd_tech_01.jpg',
        '/assets/imagenes/mgb1100_fd_tech_02.jpg',
        '/assets/imagenes/mgb1100_fd_tech_03.jpg']
    },
    {
      id:5006,
      value: 'red',
      stock: 4,
      precio:22500,
      img: ['/assets/imagenes/mgb1100_fd_color_06.jpg',
        '/assets/imagenes/mgb1100_fd_tech_01.jpg',
        '/assets/imagenes/mgb1100_fd_tech_02.jpg',
        '/assets/imagenes/mgb1100_fd_tech_03.jpg']
    },
    {
      id:5007,
      value: 'yellow',
      stock: 3,
      precio:23600,
      img: ['/assets/imagenes/mgb1100_fd_color_07.jpg',
        '/assets/imagenes/mgb1100_fd_tech_01.jpg',
        '/assets/imagenes/mgb1100_fd_tech_02.jpg',
        '/assets/imagenes/mgb1100_fd_tech_03.jpg']
    },
    {
      id:5008,
      value: 'orange',
      stock: 1,
      precio:21700,
      img: ['/assets/imagenes/mgb1100_fd_color_08.jpg',
        '/assets/imagenes/mgb1100_fd_tech_01.jpg',
        '/assets/imagenes/mgb1100_fd_tech_02.jpg',
        '/assets/imagenes/mgb1100_fd_tech_03.jpg']
    }
  ]
},
{
  id: 6,
  nombre: 'Dispensador Alcohol en Gel',
  tipo: 'Dispensadores',
  cantidad: 1,
  desc: 'Dispensador de Alcohol en Gel de Pie en Acero Inox',
  color: [
    {
      id: 6001,
      value: 'grey',
      stock: 10,
      precio:3200,
      img: ['https://http2.mlstatic.com/D_NQ_NP_730337-MLU45140625908_032021-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_673743-MLU45140625912_032021-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_999880-MLU45140625911_032021-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_704523-MLU45140625907_032021-O.webp']
    },
  ]
},
{
  id: 7,
  nombre: 'Rueda Para Contenedor 120-240-360',
  tipo: 'Repuestos',
  cantidad: 1,
  desc: 'Rueda de 200 mm de diámetro para contenedores de basura de 120, 240 y 360 lts',
  color: [
    {
      id: 7001,
      value: 'black',
      stock: 10,
      precio:400,
      img: ['/assets/imagenes/ruedacontenedor.jpg']
    },
  ]
},
{
  id: 8,
  nombre: 'Compostador Bulbeo 360 Lts',
  tipo: 'Compostaje',
  cantidad: 1,
  desc: 'Compostador Bulbeo de 360 Lts',
  color: [
    {
      id: 8001,
      value: 'green',
      stock: 10,
      precio:6300,
      img: ['/assets/imagenes/compostador_360_01.webp',
        '/assets/imagenes/compostador_360_02.webp',
        '/assets/imagenes/compostador_360_03.webp',
        '/assets/imagenes/compostador_360_04.webp',
        '/assets/imagenes/compostador_360_05.webp',
        '/assets/imagenes/compostador_dimensiones.webp']
    },
  ]
},
{
  id: 9,
  nombre: 'Compostador Bulbeo 700 Lts',
  tipo: 'Compostaje',
  cantidad: 1,
  desc: 'Compostador Bulbeo de 700 Lts',
  color: [
    {
      id: 9001,
      value: 'green',
      stock: 10,
      precio:10700,
      img: ['/assets/imagenes/compostador_700_01.webp',
        '/assets/imagenes/compostador_700_02.webp',
        '/assets/imagenes/compostador_700_03.webp',
        '/assets/imagenes/compostador_700_04.webp',
        '/assets/imagenes/compostador_700_05.webp',
        '/assets/imagenes/compostador_dimensiones.webp']
    },
  ]
},
{
  id: 10,
  nombre: 'Papelera Clásica 50 Lts',
  tipo: 'Papelera',
  cantidad: 1,
  desc: 'Papelera clásica "boca de sapo" de 50 Lts',
  color: [
    {
      id:10001,
      value: 'grey',
      stock: 10,
      precio:2000,
      img: ['/assets/imagenes/papelera_clasica_01.jpg',]
    },
    {
      id: 10002,
      value: 'green',
      stock: 2,
      precio:2100,
      img: ['/assets/imagenes/papelera_clasica_02.jpg']
    },
    {
      id: 10003,
      value: 'brown',
      stock: 4,
      precio:2200,
      img: ['/assets/imagenes/papelera_clasica_03.jpg',]
    },
    {
      id: 10004,
      value: 'blue',
      stock: 6,
      precio:2100,
      img: ['/assets/imagenes/papelera_clasica_04.jpg']
    },
    {
      id: 10005,
      value: 'yellow',
      stock: 5,
      precio:2200,
      img: ['/assets/imagenes/papelera_clasica_05.jpg']
    },
    {
      id: 10006,
      value: 'orange',
      stock: 1,
      precio:2100,
      img: ['/assets/imagenes/papelera_clasica_06.jpg']
    }
  ]
},
{
  id: 11,
  nombre: 'Tapa Contenedor 120 Lts',
  tipo: 'Repuestos',
  cantidad: 1,
  desc: 'Tapa para contenedor de basura de 120 Lts',
  color: [
    {
      id: 11001,
      value: 'blue',
      stock: 10,
      precio:650,
      img: ['/assets/imagenes/tapa120.jpg']
    },
  ]
},
{
  id: 12,
  nombre: 'Papelera 40.5 Lts tapa basculante',
  tipo: 'Papeleras',
  cantidad: 1,
  desc: 'Papelera en acero inoxidable, tapa plástica basculante, de 40,5 Lts',
  color: [
    {
      id: 12001,
      value: 'black',
       stock: 10,
       precio:2920,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-gris.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      id: 12002,
      value: 'green',
       stock: 10,
       precio:3200,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-verde.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      id: 12003,
      value: 'brown',
       stock: 10,
       precio:3200,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-marron.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      id: 12004,
      value: 'blue',
       stock: 10,
       precio:3200,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-azul.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      id: 12005,
      value: 'white',
       stock: 10,
       precio:3500,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-blanco.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      id: 12006,
      value: 'red',
       stock: 10,
       precio:3200,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-rojo.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      id: 12007,
      value: 'yellow',
       stock: 10,
       precio:3200,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-amarillo.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      id: 12008,
      value: 'orange',
       stock: 10,
       precio:3200,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-naranja.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    }
  ]
},
{
  id: 13,
  nombre: 'Papelera Inox 6 Lts',
  tipo: 'Papeleras',
  cantidad: 1,
  desc: 'Papelera en acero inox, 6 litros, con pedal',
  color: [
    {
      id: 13001,
      value: 'white',
        stock: 10,
        precio:1128,
      img: ['/assets/imagenes/papelera-de-acero-inoxidable-cigo-6-litros.webp']
    },
    {
      id: 13002,
      value: 'grey',
        stock: 10,
        precio:1145,
      img: ['/assets/imagenes/papelera-cigo-6-lts-acero-inox-mate.webp']
    }
  ]
},
{
  id: 14,
  nombre: 'Papelera Prima Linea 50 Lts',
  tipo: 'Papeleras',
  cantidad: 1,
  desc: 'papelera Prima Línea 50 Lts en polietileno de alta densidad',
  color: [
    {
      id: 14001,
      value: 'green',
        stock: 10,
        precio:7450,
      img: ['/assets/imagenes/papelera-prima-linea-verde.webp']
    },
    {
      id: 14002,
      value: 'grey',
        stock: 10,
        precio:7390,
      img: ['/assets/imagenes/papelera-prima-linea-gris.webp']
    }
  ]
},
{
  id: 15,
  nombre: 'Rueda para Contenedor 770-1100 Lts',
  tipo: 'Repuestos',
  cantidad: 1,
  desc: 'Rueda de 200 mm para contenedores de 4 ruedas de 770 o 1100 lts',
  color: [
    {
      id: 15001,
      value: 'black',
      stock: 10,
      precio:1150,
      img: ['/assets/imagenes/rueda_770_1100.webp']
    },
  ]
},
];

export default stockProductos