/* Challenge 5: Battle Royale de frameworks y bibliotecas

Problema

Hay tanto framework y biblioteca que ya no sabemos qué usar. Así que un comité ha decidido hacer una especie de Los Juegos del Hambre para decidir qué tecnología se queda.

Ha puesto todas las tecnologías en círculo de forma aleatoria. La tecnología en el índice 0 empieza matando a la que tiene justo a la derecha (índice + 1).

El siguiente turno es para la tecnología que esté viva que queda a la derecha de la que se acaba de morir. Y así sucesivamente hasta que sólo quede una. Mira este ejemplo de un grupo de 10 tecnologías, paso a paso:


         5
      6     4
   7           3
   8           2
      9     1
         0

0 mata a 1
2 mata a 3
4 mata a 5
6 mata a 7
8 mata a 9

         X
     6      4
   X           X
   8           2
      X     X
         0

0 mata a 2
4 mata a 6
8 mata a 0

         X
     X      4
   X           X
   8           X
      X     X
         X

4 mata a 8

         X
     X      4
   X           X
   X           X
      X     X
         X
La tecnología en el índice 4 es la que ha sobrevivido.

Ahora, para probar que somos capaces de crear un algoritmo que funcione, tenemos la lista de mecenas de la comunidad de midudev: https://codember.dev/mecenas.json

Tienes que crear un algoritmo que nos diga qué usuario sobreviviría usando el mismo sistema.

Cómo enviar la solución
Envía la solución con el comando submit, y el índice de la persona que sobrevive y su nombre de usuario, separado de un guión.

Por ejemplo, si el usuario que sobrevive es facundopacua y está en el índice 8 sería:

$ submit facundocapua-8 */

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

const mecenas = syncReadFile("./mecenas.txt");
let roundCounter = 0;
let survivors = [...mecenas];

console.log(survivors);

function ronda(numeros) {
  const copiaNumeros = [...numeros];
  survivors = [];
  roundCounter++;
  for (let i = 0; i <= copiaNumeros.length; i++) {
    if (copiaNumeros.length % 2 !== 0) {
      if (i !== 0) {
        if (i % 2 === 0) {
          survivors.push(copiaNumeros[i]);
        }
      }
    } else {
      if (i !== copiaNumeros.length) {
        if (i % 2 === 0) {
          survivors.push(copiaNumeros[i]);
        }
      }
    }
  }
  console.log(survivors);
  console.log(roundCounter, "ronda");
}
do {
  ronda(survivors);
} while (survivors.length > 1);

let posiciones = [];
for (let i = 0; i < mecenas.length; i++) {
  if (mecenas[i] === survivors[0]) {
    posiciones.push(i);
  }
}
console.log(posiciones);

let posiciones2 = [];
mecenas.filter((x, index) => {
  if (x === "Diana") {
    posiciones2.push(index);
  }
});

console.log(posiciones2);

//solucion: Diana-100
