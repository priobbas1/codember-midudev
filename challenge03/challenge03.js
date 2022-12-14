const { readFileSync } = require("fs");

function syncReadFile(filename) {
  const rawContent = readFileSync(filename, "utf-8");
  const editedContent = rawContent.replace(/[," ]+/g, "");
  const indexIni = editedContent.indexOf("[") + 2;
  const indexEnd = editedContent.indexOf("]") - 1;
  const rawArray = editedContent.substring(indexIni, indexEnd);
  const arr = rawArray.split(/\r?\n/);

  return arr;
}
const colors = syncReadFile("./colors.txt");
console.log(colors);

let contador = 0;
let zebraImpar = null;
let zebraPar = null;
let contadorMax = 2;
let zebraImparMax = null;
let zebraParMax = null;

for (let i = 0; i < colors.length - 1; i++) {
  console.log("Vuelta " + i);
  contador = 0;
  zebraImpar = colors[i];
  console.log(zebraImpar, "zebraImpar");
  contador++;
  zebraPar = colors[i + 1];
  console.log(zebraPar, "zebraPar");
  contador++;
  for (let j = i + 2; j < colors.length; j++) {
    contador++;
    if (contador % 2) {
      console.log("Contador es impar", contador);
      if (colors[j] !== zebraImpar) {
        console.log("break ", colors[j]);
        break;
      }
    } else if (!(contador % 2)) {
      console.log("Contador es par", contador);
      if (colors[j] !== zebraPar) {
        console.log("break ", colors[j]);
        break;
      }
    }
    if (contador > contadorMax) {
      contadorMax = contador;
      zebraImparMax = zebraImpar;
      zebraParMax = zebraPar;
    }
  }
}

console.log(contadorMax, "contadorMax");
console.log(zebraImparMax, "zebraImparMax");
console.log(zebraParMax, "zebraParMax");
