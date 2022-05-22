const { Console } = require('console-mpds');
const console = new Console();

console.writeln('Primera fracción:')
const numerator1 = console.readNumber('Introduce el numerador de la fracción ');
const denominador1 = console.readNumber('Introduce el denominador de la fracción ');

console.writeln('Segunda fracción:');
const numerator2 = console.readNumber('Introduce el numerador de la fracción ');
const denominador2 = console.readNumber('Introduce el denominador de la fracción ');

console.writeln(`\nLa división de la fracción ${numerator1}/${denominador1} y la fracción ${numerator2}/${denominador2} es la fracción ${numerator1*denominador2}/${denominador1*numerator2}`);