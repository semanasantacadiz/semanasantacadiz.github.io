// ════════════════════════════════════════════════════════════
//  SEMANA SANTA DE CÁDIZ — Base de datos
//  Edita este archivo para añadir/modificar cofradías,
//  imágenes y terminología.
//
//  Para añadir imágenes, sustituye null por una URL:
//    imagen: "https://ejemplo.com/foto.jpg"
//  o la ruta a un archivo local en la misma carpeta:
//    imagen: "fotos/borriquita.jpg"
// ════════════════════════════════════════════════════════════

// Orden en que aparecen los días (usado en el quiz de días)
const DIAS_ORDEN = [
  "Domingo de Ramos",
  "Lunes Santo",
  "Martes Santo",
  "Miércoles Santo",
  "Jueves Santo",
  "Viernes Santo (Madrugada)",
  "Viernes Santo",
  "Sábado Santo (Madrugada)",
  "Sábado Santo",
  "Domingo de Resurrección"
];

// Lista de cofradías
// Campos: nombre, dia (debe coincidir exactamente con DIAS_ORDEN), imagen
const COFRADIAS = [
      // DOMINGO DE RAMOS
      { nombre: "La Borriquita", dia: "Domingo de Ramos", imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F-giDgH_ecD1g%2FUVApkA9KGAI%2FAAAAAAAAE0Y%2F2DbQrhbAbW8%2Fs1600%2FP3245863.JPG&f=1&nofb=1&ipt=5d867e9f3907ffe58eb0cd73858c1186901f8fb5584126cd00ac9c5ae377c959" },
      { nombre: "Las Penas", dia: "Domingo de Ramos", imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.diariodecadiz.es%2F2023%2F03%2F28%2Fsemana_santa%2FJesus-Penas-Sagasta-Hospital-Mujeres_1778832687_180157930_667x375.jpg&f=1&nofb=1&ipt=10df893527a214a765ce1b1c5b01c56f1ec3feca87d901e23bcb156754b7c29b" },
      { nombre: "El Despojado", dia: "Domingo de Ramos", imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.abcstatics.com%2Flavozdigital%2Fwww%2Fmultimedia%2Fandalucia%2F2023%2F04%2F02%2Fdespojado-cadiz(2).jpg&f=1&nofb=1&ipt=4badbf331c4792581c4ce52388128e8f9e6aa3f57cad3ec2cfc32e8760f321fa" },
      { nombre: "Sagrada Cena", dia: "Domingo de Ramos", imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.diariodecadiz.es%2F2023%2F04%2F02%2Fsemana_santa%2FSagrada-Cena-Cadiz-Semana-Santa_1780335428_180708703_1024x682.jpg&f=1&nofb=1&ipt=2e13111b5ec7091d61422bab531409b4f702d4bbe2fff6cc1fad9a4938dcb2b9" },
      { nombre: "Humildad y Paciencia", dia: "Domingo de Ramos", imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.abcstatics.com%2Flavozdigital%2Fwww%2Fmultimedia%2Fandalucia%2F2023%2F04%2F02%2Fhumildad-paciencia-cadiz(13).jpg&f=1&nofb=1&ipt=d1f3f07a30cbb941409c22ee11603f7f04eefcb1b7e7be28ed9cfd5fb6e85316" },

      // LUNES SANTO
      { nombre: "Nazareno del Amor", dia: "Lunes Santo", imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-JZI62r0V3Tw%2FWQYxhor2wHI%2FAAAAAAAAYGE%2FOVHuC3LpICwnfe_1kageZk6bsiLBebRawCLcB%2Fs1600%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=8870672061813fe9f6c5e6f9bc6fb495a3b40c5e79b1b41f10e663842b5db54e" },
      { nombre: "La Palma", dia: "Lunes Santo", imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.diariodecadiz.es%2F2022%2F04%2F13%2Fsemana_santa%2FImagenes-Palma-Semana-Santa-Cadiz_1674143011_155915360_1200x675.jpg&f=1&nofb=1&ipt=2881b5aeb627cc72e20e24c29a5ddb068a20d699287bd0b550015bef2664c651" },
      { nombre: "Prendimiento", dia: "Lunes Santo", imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.diariodecadiz.es%2F2024%2F03%2F25%2Fsemana_santa%2FPrendimiento-Lunes-Santo-Semana-Santa_1887722084_207468354_1024x683.jpg&f=1&nofb=1&ipt=db344e083c13b97fa920a7778aa0394967517fa90ae11250a2bcd98134317e44" },
      { nombre: "Vera Cruz", dia: "Lunes Santo", imagen: "https://static.grupojoly.com/clip/f8c40d26-d820-4a96-a86a-d9e682ecd40f_source-aspect-ratio_1600w_0.webp" },

      // MARTES SANTO
      { nombre: "Sanidad", dia: "Martes Santo", imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.portaldecadiz.com%2Fimages%2Figallery%2Fresized%2Fsanidad-martes-santo--3357%2Fsanidad-2024-023-1200-1200-80-wm-center_bottom-100-portaldecadizpng.jpg&f=1&nofb=1&ipt=ad3301b2ba77d6fdbfc7b77d2ff8f13eacabd8f182d507e25a50d58ddef3dc40" },
      { nombre: "La Piedad", dia: "Martes Santo", imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.diariodecadiz.es%2F2023%2F03%2F28%2Fsemana_santa%2FSantisimo-Cristo-Piedad_1778833027_180174408_667x375.jpg&f=1&nofb=1&ipt=fec50cb70023dfc719ac0c8f678fcf25cf0448f8123d045148f0c8233a72e549" },
      { nombre: "El Caído", dia: "Martes Santo", imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.diariodecadiz.es%2F2022%2F04%2F12%2Fsemana_santa%2Fimagenes-Caido-Semana-Santa-Cadiz_1673844530_155851553_1200x675.jpg&f=1&nofb=1&ipt=47450b577b94b4e62019825a86ee96798899421d50ee49955acc6fe131ee0405" },
      { nombre: "Columna", dia: "Martes Santo", imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.diariodecadiz.es%2F2023%2F04%2F04%2Fsemana_santa%2Fimagenes-Columna-Semana-Santa-Cadiz_1780933772_181020094_1024x683.jpg&f=1&nofb=1&ipt=0ce0f32c4e9507bf8768bb025bb15431426b87149358574544c0923d7a207d93" },
      { nombre: "Ecce Homo", dia: "Martes Santo", imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.diariodecadiz.es%2F2022%2F04%2F12%2Fsemana_santa%2Fimagenes-Ecce-Homo-Semana-Santa-Cadiz_1673844393_155844847_1024x683.jpg&f=1&nofb=1&ipt=3a44d74edf97835398a98bf81492cc79e4b02ea7d6d455b9fb79ce95c63bc121" },

      // MIÉRCOLES SANTO
      { nombre: "Sentencia", dia: "Miércoles Santo", imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.diariodecadiz.es%2F2023%2F04%2F03%2Fcadizfornia%2FImagen-Sentencia-Semana-Santa-Cadiz_1780632182_180763931_1200x675.jpg&f=1&nofb=1&ipt=89a3dbefc82e50ce24b7dd5717928a42dcb2e1ff72ae5cf4505a7977ae71813a" },
      { nombre: "Cigarreras", dia: "Miércoles Santo", imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.diariodecadiz.es%2F2022%2F04%2F13%2Fsemana_santa%2Fimagenes-Cigarreras-Semana-Santa-Cadiz_1674144076_155968912_1024x640.jpg&f=1&nofb=1&ipt=befd597f70ac0705883c562fb6f325dd0dd2c49bdc9996687be6205d574a7383" },
      { nombre: "Luz y Agua", dia: "Miércoles Santo", imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.grupojoly.com%2Fclip%2F36b73417-be12-4ce1-b227-8c5b9b234d75_facebook-aspect-ratio_default_0.jpg&f=1&nofb=1&ipt=788c2949e80b73cce5fca65befe2b23192b681ee62ac7d85002b88ea357ac8e5" },
      { nombre: "El Caminito", dia: "Miércoles Santo", imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.portaldecadiz.com%2Fimages%2Figallery%2Fresized%2Fcaminito-miercoles-santo--3364%2Fcaminito2024-039-1200-1200-80-wm-center_bottom-100-portaldecadizpng.jpg&f=1&nofb=1&ipt=c0383a96e64c7c122aeaf4a51d663b3c92791c798fb61a9687e174f09b381660" },

      // JUEVES SANTO
      { nombre: "Afligidos", dia: "Jueves Santo", imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.diariodecadiz.es%2F2023%2F04%2F06%2Fsemana_santa%2FAfligidos-Semana-Santa-Cadiz_1781533569_181322155_1024x576.jpg&f=1&nofb=1&ipt=e220f34bd3cb3c667eac329f4c263ae3d4dda1ef801e3ee69af60c5eba1e123d" },
      { nombre: "Oración en el Huerto", dia: "Jueves Santo", imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.grupojoly.com%2Fclip%2F208fd652-3755-4610-8553-d4d61c32844c_source-aspect-ratio_1600w_0.jpg&f=1&nofb=1&ipt=20220284bcca4eb9c0ba51d1507851a02f6d727c0c2a5e9d5029e0daba8faf96" },
      { nombre: "El Nazareno de Santa María", dia: "Jueves Santo", imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.diariodecadiz.es%2F2023%2F04%2F05%2Fsemana_santa%2FNazareno-Santa-Maria-recibe-petalada_1781232240_181089238_667x375.jpg&f=1&nofb=1&ipt=deab0b58f2b749fa0c34332722351f9752bbcc6531383ab0caec63b71219520d" },
      { nombre: "Medinaceli", dia: "Jueves Santo", imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.diariodecadiz.es%2F2023%2F04%2F06%2Fsemana_santa%2FImagenes-Medinaceli-Semana-Santa-Cadiz_1781534438_181392084_667x375.jpg&f=1&nofb=1&ipt=80ce39b921622a8fbb8cad48b026bef10dd4f50cd18b59c725340296ffc4a48f" },

      // VIERNES SANTO MADRUGADA
      { nombre: "El Perdón", dia: "Viernes Santo (Madrugada)", imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.diariodecadiz.es%2F2022%2F04%2F15%2Fsemana_santa%2Fimagenes-Perdon-Semana-Santa-Cadiz_1674743416_156218847_667x375.jpg&f=1&nofb=1&ipt=59a25677ba99e7e959d2004eeb66792293b90643d3fec20956e2ab5d1dcca15c" },

      // VIERNES SANTO
      { nombre: "Siete Palabras", dia: "Viernes Santo", imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.abcstatics.com%2Flavozdigital%2Fwww%2Fmultimedia%2Fandalucia%2F2023%2F04%2F07%2F7-palabras-merced(23).jpg&f=1&nofb=1&ipt=6dfbf37e1f6ae6f87f31df1e28e6cfcfb30c6ddd6e95c8d8efd804b35bfee7f9" },
      { nombre: "Expiración", dia: "Viernes Santo", imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.portaldecadiz.com%2Fimages%2Figallery%2Fresized%2Fexpiracion-viernes-santo--3368%2Fexpiracion2024-023-1200-1200-80-wm-center_bottom-100-portaldecadizpng.jpg&f=1&nofb=1&ipt=dc57030cada679c0f1809a55225ea2fbbd332c3d636df9744251e1eb6110bd17" },
      { nombre: "Descendimiento", dia: "Viernes Santo", imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.diariodecadiz.es%2F2023%2F04%2F07%2Fsemana_santa%2Fimagenes-Descendimiento-Semana-Santa-Cadiz_1781834118_181503292_1024x681.jpg&f=1&nofb=1&ipt=de8d7c0153b2b5b4b62242d167e5d58c0024163d14cdcc04cf37abbd463c6d19" },
      { nombre: "Buena Muerte", dia: "Viernes Santo", imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.diariodecadiz.es%2F2023%2F04%2F08%2Fsemana_santa%2FBuena-Muerte-Semana-Santa-Cadiz_1782132116_181573886_1024x682.jpg&f=1&nofb=1&ipt=0315d14cd215aa7e217170d33dce80e8639a58c2a5ede264969efd31f77b6631" },

      // SÁBADO SANTO MADRUGADA
      { nombre: "Ecce Mater", dia: "Sábado Santo (Madrugada)", imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.diariodecadiz.es%2F2018%2F03%2F23%2Fsemana_santa%2FEcce-MaterEcce-Mater-Tua-Catedral_1229587693_105240855_1200x675.jpg&f=1&nofb=1&ipt=5952820f441450471c0637e475242b39b8fba2a30392065fb636a524366b603a" },

      // SÁBADO SANTO
      { nombre: "Santo Entierro", dia: "Sábado Santo", imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.diariodecadiz.es%2F2023%2F04%2F08%2Fsemana_santa%2FSanto-Entierro-Semana-Santa-Cadiz_1782132847_181609656_1024x576.jpg&f=1&nofb=1&ipt=3983a6344a682466cb68b2b755fb8b8b503274e3763f361ff0298c344bcfcb6b" },

      // DOMINGO DE RESURRECCIÓN
      { nombre: "El Resucitado", dia: "Domingo de Resurrección", imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs2.abcstatics.com%2Fmedia%2FMM%2F2022%2F04%2F17%2Fv%2Fresucitado-ab(1).jpg&f=1&nofb=1&ipt=e371d8237da9b33f2cedde9db1b13e17e66b72871463b702f50297dea434d1e8" },
    ];


// Lista de términos de Semana Santa
// Campos: termino, desc (descripción/pista), imagen
const TERMINOLOGIA = [
  { termino:"Paso",              desc:"Plataforma artística sobre la que se traslada una imagen en procesión.", imagen:null },
  { termino:"Manigueta",         desc:"Empuñadura lateral del paso usada por los portadores externos.", imagen:null },
  { termino:"Palio",             desc:"Estructura de tela bordada que actua de techo en muchos pasos de Virgen, sostenida por varales.", imagen:null },
  { termino:"Faldón",            desc:"Tela que cubre el paso hasta el suelo, ocultando a los cargadores.", imagen:null },
  { termino:"Varal",             desc:"Barra metálica que sostiene el palio de la Virgen.", imagen:null },
  { termino:"Trabajadera",       desc:"Travesaño de madera interior sobre el que apoyan los cargadores.", imagen:null },
  { termino:"Caracola",          desc:"Candelabro de cola que decora la parte trasera del paso de Virgen.", imagen:null },
  { termino:"Ánfora",            desc:"Jarra donde se guardan las flores del paso.", imagen:null },
  { termino:"Simpecado",         desc:"Estandarte de una hermandad que encabeza la procesión.", imagen:null },
  { termino:"Cruz de Guía",      desc:"Cruz que abre la comitiva procesional de una cofradía.", imagen:null },
  { termino:"Misterio",          desc:"Paso que representa una escena de la Pasión con varias figuras.", imagen:null },
  { termino:"Cargador",          desc:"Persona que porta el paso bajo el cajillo, sin ser vista por el público.", imagen:null },
  { termino:"Maniguetero (o manigueta)",          desc:"Cargador que lleva la manigueta.", imagen:null },
  { termino:"Capataz",           desc:"Persona que dirige a los cargadores mediante golpes en la trabajadera.", imagen:null },
  { termino:"Acólito",           desc:"Monaguillo encargado de portar cirial o incensario delante del paso.", imagen:null },
  { termino:"Penitente",         desc:"Cofrade que desfila con túnica y capirote o gato.", imagen:null },
  { termino:"Capirote",          desc:"Cono de cartón o tela que cubre la cabeza de los penitentes, con dos orificios para los ojos.", imagen:null },
  { termino:"Gato",              desc:"Capucha de tela que cubre la cabeza de los penitentes, alternativa al capirote.", imagen:null },
  { termino:"Cíngulo",           desc:"Cinturón que se ciñe a la túnica de los penitentes.", imagen:null },
  { termino:"Cirial",            desc:"Candeleros altos que portan los acólitos delante del paso.", imagen:null },
  { termino:"Incensario",        desc:"Recipiente colgante que contiene incienso, oscilado por los acólitos para perfumar el ambiente.", imagen:null },
  { termino:"Cirio",             desc:"Vela de cera, larga y gruesa que portan los nazarenos en la cofradía.", imagen:null },
  { termino:"Saeta",             desc:"Cante flamenco popular dedicado a los pasos durante la procesión.", imagen:null },
];
