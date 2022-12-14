const fs = require("fs");
let dataSPlit2 = [];
let userData = [];
let arrayKeys = ["usr", "eme", "psw", "age", "loc", "fll"];
let totalClean = 0;

fs.readFile("users.txt", "UTF8", (err, data) => {
  if (err) throw err;
  const dataSplit = data.split(/\r?\n/);
  let contador = 0;
  dataSplit.map((data) => {
    if (data != "") {
      if (!dataSPlit2[contador]) {
        dataSPlit2[contador] = data.split(" ");
      } else {
        dataSPlit2[contador] = dataSPlit2[contador].concat(data.split(" "));
      }
    } else {
      contador++;
    }
  });

  for (const user of dataSPlit2) {
    const userPair = {};
    for (const propiedad of user) {
      const array = propiedad.split(":");
      userPair[array[0]] = array[1];
      userData.push(userPair);
    }
  }

  for (let user of userData) {
    let contador2 = 0;
    for (let i = 0; i < Object.keys(user).length; i++) {
      for (let j = 0; j < arrayKeys.length; j++) {
        if (Object.keys(user)[i] === arrayKeys[j]) {
          contador2++;
        }
      }
      if (contador2 === 6) {
        totalClean++;
        break;
      }
    }
  }
  console.log(totalClean);
});
