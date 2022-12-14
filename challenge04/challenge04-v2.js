/* - Es una contraseña de 5 dígitos.
- La contraseña tenía el número 5 repetido dos veces.
- El número a la derecha siempre es mayor o igual que el que tiene a la izquierda.

Nos ha puesto algunas ejemplos:
55678 es correcto lo cumple todo
12555 es correcto, lo cumple todo
55555 es correcto, lo cumple todo
12345 es incorrecto, no tiene el 5 repetido.
57775 es incorrecto, los números no van de forma creciente 
Dice que el password está entre los números 11098 y 98123. ¿Le podemos decir cuantos números cumplen esas reglas dentro de ese rango?*/

let password = [{ val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }];
let contador = 0;
for (let i = 0; i <= 9; i++) {
  password[0].val = i;
  for (let j = 0; j <= 9; j++) {
    password[1].val = j;
    for (let k = 0; k <= 9; k++) {
      password[2].val = k;
      for (let l = 0; l <= 9; l++) {
        password[3].val = l;
        for (let m = 0; m <= 9; m++) {
          password[4].val = m;
          if (
            `${password[0].val}${password[1].val}${password[2].val}${password[3].val}${password[4].val}` >=
              11098 &&
            `${password[0].val}${password[1].val}${password[2].val}${password[3].val}${password[4].val}` <=
              98123
          ) {
            const valid = isValid(
              password[0].val,
              password[1].val,
              password[2].val,
              password[3].val,
              password[4].val
            );
            if (valid) {
              contador++;
              if (contador === 56) {
                console.log("***********************************");
              }
              console.log(
                password[0].val,
                password[1].val,
                password[2].val,
                password[3].val,
                password[4].val
              );
            }
          }
        }
      }
    }
  }
}

console.log(contador);

function areMoreThanTwoFives(num1, num2, num3, num4, num5) {
  let contador = 0;
  let arrayNums = [num1, num2, num3, num4, num5];
  for (let i = 0; i < 5; i++) {
    if (isAFive(arrayNums[i])) {
      contador++;
    }
    if (contador == 2) {
      return true;
    }
  }
  return false;
}

function isAFive(num) {
  if (num === 5) {
    return true;
  }
  return false;
}

function isBigger(num1, num2, num3, num4, num5) {
  const arrayNums = [num1, num2, num3, num4, num5];
  let contador = 0;
  let num = num1;
  for (let i = 0; i < 5; i++) {
    if (arrayNums[i] >= num) {
      contador++;
    }
    num = arrayNums[i];
  }
  if (contador === 5) {
    return true;
  }

  return false;
}

function isValid(num1, num2, num3, num4, num5) {
  const arrayNums = [num1, num2, num3, num4, num5];
  let contador = 0;
  if (areMoreThanTwoFives(num1, num2, num3, num4, num5)) {
    contador++;
  } else {
    return false;
  }
  if (isBigger(num1, num2, num3, num4, num5)) {
    contador++;
  } else {
    return false;
  }
  if (contador === 2) {
    return true;
  }
}

//solucion: 165-23555
