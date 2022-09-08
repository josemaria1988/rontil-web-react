let stockProductos = [{
  id: 1,
  nombre: "Contenedor 120 Lts ",
  tipo: "Contenedores",
  cantidad: 1,
  desc: "Contenedor SULO de 120 Lts",
  precio: 3100,
  color: [
    {
      value: 'black',
      stock: 10,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-gris.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'green',
      stock: 8,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-verde.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'brown',
      stock: 5,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-marron.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'blue',
      stock: 7,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-azul.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'white',
      stock: 9,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-blanco.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'red',
      stock: 4,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-rojo.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'yellow',
      stock: 3,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-amarillo.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'orange',
      stock: 1,
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
  precio: 4200,
  color: [
    {
      value: 'black',
      stock: 10,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/Contenedor-de-Residuos-SULO-2-Ruedas-240-Litros-Insonorizado-gris.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'green',
      stock: 8,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/Contenedor-de-Residuos-SULO-2-Ruedas-240-Litros-Insonorizado-verde.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'brown',
      stock: 5,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/Contenedor-de-Residuos-SULO-2-Ruedas-240-Litros-Colores-Premium-marron.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'blue',
      stock: 7,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/Contenedor-de-Residuos-SULO-2-Ruedas-240-Litros-Colores-Premium-azul.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'white',
      stock: 9,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/Contenedor-de-Residuos-SULO-2-Ruedas-240-Litros-Colores-Premium-blanco-555x654.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'red',
      stock: 4,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/Contenedor-de-Residuos-SULO-2-Ruedas-240-Litros-Colores-Premium-rojo.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'yellow',
      stock: 3,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/Contenedor-de-Residuos-SULO-2-Ruedas-240-Litros-Colores-Premium-amarillo.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'orange',
      stock: 1,
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
  precio: 6300,
  color: [
    {
      value: 'black',
      stock: 10,
      img: ['/assets/imagenes/mgb360_color_01.jpg',
        '/assets/imagenes/mgb360_tech_01.jpg',
        '/assets/imagenes/mgb360_tech_02.jpg']
    },
    {
      value: 'green',
      stock: 8,
      img: ['/assets/imagenes/mgb360_color_02.jpg',
        '/assets/imagenes/mgb360_tech_01.jpg',
        '/assets/imagenes/mgb360_tech_02.jpg']
    },
    {
      value: 'brown',
      stock: 5,
      img: ['/assets/imagenes/mgb360_color_03.jpg',
        '/assets/imagenes/mgb360_tech_01.jpg',
        '/assets/imagenes/mgb360_tech_02.jpg']
    },
    {
      value: 'blue',
      stock: 7,
      img: ['/assets/imagenes/mgb360_color_04.jpg',
        '/assets/imagenes/mgb360_tech_01.jpg',
        '/assets/imagenes/mgb360_tech_02.jpg']
    },
    {
      value: 'white',
      stock: 9,
      img: ['/assets/imagenes/mgb360_color_05.jpg',
        '/assets/imagenes/mgb360_tech_01.jpg',
        '/assets/imagenes/mgb360_tech_02.jpg']
    },
    {
      value: 'red',
      stock: 4,
      img: ['/assets/imagenes/mgb360_color_06.jpg',
        '/assets/imagenes/mgb360_tech_01.jpg',
        '/assets/imagenes/mgb360_tech_02.jpg']
    },
    {
      value: 'yellow',
      stock: 3,
      img: ['/assets/imagenes/mgb360_color_07.jpg',
        '/assets/imagenes/mgb360_tech_01.jpg',
        '/assets/imagenes/mgb360_tech_02.jpg']
    },
    {
      value: 'orange',
      stock: 1,
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
  precio: 18800,
  color: [
    {
      value: 'black',
      stock: 10,
      img: ['/assets/imagenes/mgb770_color_01.jpg',
        '/assets/imagenes/mgb770_tech_01.jpg',
        '/assets/imagenes/mgb770_tech_02.jpg',
        '/assets/imagenes/mgb770_tech_03.jpg']
    },
    {
      value: 'green',
      stock: 8,
      img: ['/assets/imagenes/mgb770_color_02.jpg',
        '/assets/imagenes/mgb770_tech_01.jpg',
        '/assets/imagenes/mgb770_tech_02.jpg',
        '/assets/imagenes/mgb770_tech_03.jpg']
    },
    {
      value: 'brown',
      stock: 5,
      img: ['/assets/imagenes/mgb770_color_03.jpg',
        '/assets/imagenes/mgb770_tech_01.jpg',
        '/assets/imagenes/mgb770_tech_02.jpg',
        '/assets/imagenes/mgb770_tech_03.jpg']
    },
    {
      value: 'blue',
      stock: 7,
      img: ['/assets/imagenes/mgb770_color_04.jpg',
        '/assets/imagenes/mgb770_tech_01.jpg',
        '/assets/imagenes/mgb770_tech_02.jpg',
        '/assets/imagenes/mgb770_tech_03.jpg']
    },
    {
      value: 'white',
      stock: 9,
      img: ['/assets/imagenes/mgb770_color_05.jpg',
        '/assets/imagenes/mgb770_tech_01.jpg',
        '/assets/imagenes/mgb770_tech_02.jpg',
        '/assets/imagenes/mgb770_tech_03.jpg']
    },
    {
      value: 'red',
      stock: 4,
      img: ['/assets/imagenes/mgb770_color_06.jpg',
        '/assets/imagenes/mgb770_tech_01.jpg',
        '/assets/imagenes/mgb770_tech_02.jpg',
        '/assets/imagenes/mgb770_tech_03.jpg']
    },
    {
      value: 'yellow',
      stock: 3,
      img: ['/assets/imagenes/mgb770_color_07.jpg',
        '/assets/imagenes/mgb770_tech_01.jpg',
        '/assets/imagenes/mgb770_tech_02.jpg',
        '/assets/imagenes/mgb770_tech_03.jpg']
    },
    {
      value: 'orange',
      stock: 1,
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
  precio: 20100,
  color: [
    {
      value: 'black',
      stock: 10,
      img: ['/assets/imagenes/mgb1100_fd_color_01.jpg',
        '/assets/imagenes/mgb1100_fd_tech_01.jpg',
        '/assets/imagenes/mgb1100_fd_tech_02.jpg',
        '/assets/imagenes/mgb1100_fd_tech_03.jpg']
    },
    {
      value: 'green',
      stock: 8,
      img: ['/assets/imagenes/mgb1100_fd_color_02.jpg',
        '/assets/imagenes/mgb1100_fd_tech_01.jpg',
        '/assets/imagenes/mgb1100_fd_tech_02.jpg',
        '/assets/imagenes/mgb1100_fd_tech_03.jpg']
    },
    {
      value: 'brown',
      stock: 5,
      img: ['/assets/imagenes/mgb1100_fd_color_03.jpg',
        '/assets/imagenes/mgb1100_fd_tech_01.jpg',
        '/assets/imagenes/mgb1100_fd_tech_02.jpg',
        '/assets/imagenes/mgb1100_fd_tech_03.jpg']
    },
    {
      value: 'blue',
      stock: 7,
      img: ['/assets/imagenes/mgb1100_fd_color_04.jpg',
        '/assets/imagenes/mgb1100_fd_tech_01.jpg',
        '/assets/imagenes/mgb1100_fd_tech_02.jpg',
        '/assets/imagenes/mgb1100_fd_tech_03.jpg']
    },
    {
      value: 'white',
      stock: 9,
      img: ['/assets/imagenes/mgb1100_fd_color_05.jpg',
        '/assets/imagenes/mgb1100_fd_tech_01.jpg',
        '/assets/imagenes/mgb1100_fd_tech_02.jpg',
        '/assets/imagenes/mgb1100_fd_tech_03.jpg']
    },
    {
      value: 'red',
      stock: 4,
      img: ['/assets/imagenes/mgb1100_fd_color_06.jpg',
        '/assets/imagenes/mgb1100_fd_tech_01.jpg',
        '/assets/imagenes/mgb1100_fd_tech_02.jpg',
        '/assets/imagenes/mgb1100_fd_tech_03.jpg']
    },
    {
      value: 'yellow',
      stock: 3,
      img: ['/assets/imagenes/mgb1100_fd_color_07.jpg',
        '/assets/imagenes/mgb1100_fd_tech_01.jpg',
        '/assets/imagenes/mgb1100_fd_tech_02.jpg',
        '/assets/imagenes/mgb1100_fd_tech_03.jpg']
    },
    {
      value: 'orange',
      stock: 1,
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
  precio: 3200,
  color: [
    {
      value: 'grey',
      stock: 10,
      img: ['https://http2.mlstatic.com/D_NQ_NP_730337-MLU45140625908_032021-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_673743-MLU45140625912_032021-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_999880-MLU45140625911_032021-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_704523-MLU45140625907_032021-O.webp']
    },
  ]
},
{
  id: 7,
  nombre: 'Rueda Para Contenedor de Basura 120-240-360',
  tipo: 'Repuestos',
  cantidad: 1,
  desc: 'Rueda de 200 mm de diámetro para contenedores de basura de 120, 240 y 360 lts',
  precio: 400,
  color: [
    {
      value: 'black',
      stock: 10,
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
  precio: 6300,
  color: [
    {
      value: 'green',
      stock: 10,
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
  precio: 10700,
  color: [
    {
      value: 'green',
      stock: 10,
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
  precio: 2000,
  color: [
    {
      value: 'grey',
      stock: 10,
      img: ['/assets/imagenes/papelera_clasica_01.jpg',]
    },
    {
      value: 'green',
      stock: 2,
      img: ['/assets/imagenes/papelera_clasica_02.jpg']
    },
    {
      value: 'brown',
      stock: 4,
      img: ['/assets/imagenes/papelera_clasica_03.jpg',]
    },
    {
      value: 'blue',
      stock: 6,
      img: ['/assets/imagenes/papelera_clasica_04.jpg']
    },
    {
      value: 'yellow',
      stock: 5,
      img: ['/assets/imagenes/papelera_clasica_05.jpg']
    },
    {
      value: 'orange',
      stock: 1,
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
  precio: 650,
  color: [
    {
      value: 'black',
      stock: 10,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-gris.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'green',
      stock: 10,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-verde.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'brown',
      stock: 10,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-marron.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'blue',
      stock: 10,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-azul.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'white',
      stock: 10,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-blanco.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'red',
      stock: 10,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-rojo.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'yellow',
      stock: 10,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-amarillo.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'orange',
      stock: 10,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-naranja.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    }
  ]
},
{
  id: 12,
  nombre: 'Papelera 40.5 Lts tapa basculante',
  tipo: 'Papeleras',
  cantidad: 1,
  desc: 'Papelera en acero inoxidable, tapa plástica basculante, de 40,5 Lts',
  precio: 2920,
  color: [
    {
      value: 'black',
       stock: 10,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-gris.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'green',
       stock: 10,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-verde.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'brown',
       stock: 10,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-marron.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'blue',
       stock: 10,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-azul.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'white',
       stock: 10,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-blanco.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'red',
       stock: 10,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-rojo.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'yellow',
       stock: 10,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-amarillo.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'orange',
       stock: 10,
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
  precio: 1128,
  color: [
    {
      value: 'black',
        stock: 10,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-gris.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'green',
        stock: 10,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-verde.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'brown',
        stock: 10,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-marron.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'blue',
        stock: 10,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-azul.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'white',
        stock: 10,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-blanco.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'red',
        stock: 10,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-rojo.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'yellow',
        stock: 10,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-amarillo.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'orange',
        stock: 10,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-naranja.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    }
  ]
},
{
  id: 14,
  nombre: 'Papelera Prima Linea 50 Lts',
  tipo: 'Papeleras',
  cantidad: 1,
  desc: 'papelera Prima Línea 50 Lts en polietileno de alta densidad',
  precio: 7390,
  color: [
    {
      value: 'black',
        stock: 10,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-gris.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'green',
        stock: 10,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-verde.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'brown',
        stock: 10,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-marron.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'blue',
        stock: 10,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-azul.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'white',
        stock: 10,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-blanco.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'red',
        stock: 10,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-rojo.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'yellow',
        stock: 10,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-amarillo.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'orange',
        stock: 10,
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-naranja.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
        'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    }
  ]
},
{
  id: 15,
  nombre: 'Rueda para Contenedor 770-1100 Lts',
  tipo: 'Repuestos',
  cantidad: 1,
  desc: 'Rueda de 200 mm para contenedores de 4 ruedas de 770 o 1100 lts',
  precio: 1100,
  color: [
    {
      value: 'black',
      stock: 10,
      img: ['/assets/imagenes/rueda_770_110.webp']
    },
  ]
},
];

export default stockProductos