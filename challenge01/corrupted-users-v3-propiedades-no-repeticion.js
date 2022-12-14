const { readFileSync } = require("fs");

function syncReadFile(filename) {
  const rawContent = readFileSync(filename, "utf-8");
  const arr = rawContent.split(/\r?\n/);
  return arr;
}
const users = syncReadFile("./users.txt");

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
  let contador2 = 0;
  let arrayKeys = ["usr", "eme", "psw", "age", "loc", "fll"];
  for (const propiedad in userArray[i]) {
    for (const propiedad2 of arrayKeys) {
      if (propiedad === propiedad2) {
        let position = arrayKeys.indexOf(propiedad2);
        arrayKeys.splice(position - 1, position);
        contador2++;
        break;
      }
    }
  }
  if (contador2 === 6) {
    contadorClean++;
  }
  if (contadorClean === 44 && contador2 === 6) {
    console.log(userArray[i].usr);
  }
}
console.log(contadorClean);
//console.log(users);
