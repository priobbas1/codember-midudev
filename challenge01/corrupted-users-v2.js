const { readFileSync } = require("fs");

function syncReadFile(filename) {
  const rawContent = readFileSync(filename, "utf-8");
  const arr = rawContent.split(/\r?\n/);
  return arr;
}
const users = syncReadFile("./users.txt");
let arrayKeys = ["usr", "eme", "psw", "age", "loc", "fll"];
const usersClean = [];
let contador = 0;
const userArray = [];
let contadorClean = 0;

users.map((user) => {
  if (user === "") {
    let userObject = {};
    //console.log(usersClean[contador]);
    for (const usuario of usersClean[contador]) {
      let par = [];
      par = usuario.split(":");
      userObject[par[0]] = par[1];
    }
    userArray.push(userObject);
    contador++;
    return;
  }
  if (!usersClean[contador]) {
    usersClean[contador] = user.split(" ");
  } else {
    usersClean[contador] = usersClean[contador].concat(user.split(" "));
  }
});
//console.log(usersClean);

for (let i = 0; i < userArray.length; i++) {
  //console.log(userArray[i]);
  let contador2 = 0;
  for (const propiedad in userArray[i]) {
    //console.log(propiedad, "propiedad");
    for (const propiedad2 of arrayKeys) {
      //console.log(propiedad2, "propiedad2");
      if (propiedad === propiedad2) {
        contador2++;
        break;
      }
    }
  }
  if (contador2 === 6) {
    contadorClean++;
  }
  if (contadorClean === 156 && contador2 === 6) {
    console.log(userArray[i].usr);
  }
}
console.log(contadorClean);
//console.log(users);

//respuesta correcta: 156 usuarios, el ultimo es @giroz
