const { Console } = require('console-mpds');
const console = new Console();

const minInterval = console.readNumber('Introduce el mínimo del intervalo: ');
const maxInterval = console.readNumber('Introduce el máximo del intervalo (superior o igual al mínimo): ');
const point = console.readNumber('Introduce un punto: ');
const include = minInterval <= point && point <= maxInterval;

console.writeln(`El intervalo [${minInterval},${maxInterval}] ${include ? "si" : "no"} incluye el punto ${point}`);