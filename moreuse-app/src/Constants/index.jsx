export const emailExpRegular = /^[A-Za-z]+[A-Za-z0-9_\.]*@[A-Za-z0-9]+\.[A-Za-z0-9]+/i;
      //expresion regular que controla la captura de un correo electronico siempre empieza /^
      //la i despues de una expresion regular significa que no diferenciara mayusc de minusc

//export const passwordExpRegular = /^[A-Za-z0-9\d$&?@#|\'<>^*()%!-]+$/;
export const passwordExpRegular = /^(?=.*[A-Z])(?=.*\d)(?=.*[$&?@#|\'<>^*()%!-])[A-Za-z\d$&?@#|\'<>^*()%!-]+$/;
      {
      //La expresión regular proporcionada (/^[A-Za-z\d$&?@#|\'<>^*()%!-]+$/) permite una...
      //cadena de texto que contenga letras (tanto en mayúsculas como en minúsculas), cifras numéricas (0-9)
      //y los siguientes caracteres especiales: $, &, ?, @, #, |, ', <, >, ^, *, (), %, ! y -.
      //La expresión ^ indica que la cadena debe comenzar con uno de los caracteres especificados,
      // y el signo $ indica que la cadena debe terminar con uno de los caracteres especificados.
      // El + después de los corchetes indica que la cadena debe contener al menos un carácter de los especificados.
      //Esta expresión regular es útil para validar entradas de texto que solo permiten caracteres específicos.
      //Por ejemplo, podría utilizarse para validar una contraseña que debe contener letras y números,
      //junto con algunos caracteres especiales específicos. De esta manera, se asegura que la contraseña
      //sea lo suficientemente fuerte, sin permitir ningún carácter no deseado.
      }

export const TARGETS = [
    '',
    '0 - 3 Meses',
    '3 - 6 Meses',
    '6 - 12 Meses',
    '12 - 18 Meses',
    '18 - 24 Meses',
    'Talla 2',
    'Talla 4',
    'Talla 6',
    'Talla 8',
    'Talla 10',
    'Talla 12',
    'Talla 14',
    'Talla 16'
]

export const GENDER = [
  {id: 0, title: ''},
  {id: 1, title: 'Bebe Niño'},
  {id: 2, title:  'Bebe Niña'},
  {id: 3, title:  'Niño'},
  {id: 4, title:  'Niña'}

]

export const COUNTRIES = [
  {id: 57, title: "Colombia"},
  {id: 51, title: "Peru"},
  {id: 54, title: "Argentina"},
  {id: 55, title: "Brasil" },
  {id: 56, title: "Chile"},
  {id: 58, title: "Venezuela"},
  {id: 591, title: "Bolivia"},
  {id: 592, title: "Guyana"},
  {id: 593, title: "Ecuador"},
  {id: 594, title: "Guayana Francesa"},
  {id: 595, title: "Paraguay"},
  {id: 597, title: "Surinam"},
  {id: 598, title: "Uruguay"}

]
