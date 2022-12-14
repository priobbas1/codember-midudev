//11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101

let firstLetter = "a";
let firstLetterIndexDec = firstLetter.charCodeAt(0);
console.log(firstLetterIndexDec);

let lastLetter = "z";
let lastLetterIndexDec = lastLetter.charCodeAt(0);
console.log(lastLetterIndexDec);

const arrayLetters = [];

for (let i = firstLetterIndexDec; i <= lastLetterIndexDec; i++) {
  const letter = String.fromCharCode(i);
  arrayLetters.push(letter);
}

//console.log(arrayLetters);

//first letter in dec is code 97

//3 digits every letter

for (const letter of arrayLetters) {
  console.log(letter);
}

const cryptedMessage =
  "11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101";

let cryptedMessageArray = [];

for (let i = 0; i < cryptedMessage.length; i += 3) {
  let index = i;
  if (cryptedMessage[i] === " ") {
    i++;
    cryptedMessageArray.push(" ");
  }
  let threeDigits = "";
  threeDigits = threeDigits
    .concat(cryptedMessage[i])
    .concat(cryptedMessage[i + 1]);
  if (cryptedMessage[i] == 1) {
    threeDigits = threeDigits.concat(cryptedMessage[i + 2]);
  } else if (cryptedMessage[i] == 9) {
    i--;
  }
  cryptedMessageArray.push(threeDigits);
}
console.log(cryptedMessageArray);

let decodedMessage = "";
for (const letter of cryptedMessageArray) {
  if (letter == " ") {
    decodedMessage = decodedMessage.concat(" ");
  } else {
    const letterAscii = +letter - 97;
    decodedMessage = decodedMessage.concat(arrayLetters[letterAscii]);
  }
}

console.log(decodedMessage);
