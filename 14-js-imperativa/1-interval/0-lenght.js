const { Console } = require('console-mpds');
const console = new Console();

//Aún no validamos, asumimos que los datos ingresados son correctos
const minInterval = console.readNumber('Introduce el mínimo del intervalo: ');
const maxInterval = console.readNumber('Introduce el máximo del intervalo (superior o igual al mínimo): ');

console.writeln(`\nLa longitud del intervalo [${minInterval},${maxInterval}] es ${maxInterval - minInterval}`);