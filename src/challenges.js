// Desafio 1
function compareTrue(a, b) {
  
  if (a && b) {
    return true;
  }

  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height )/ 2);
}

// Desafio 3
function splitSentence(string) {
  let splitSentence = string.split(' ');
  return splitSentence;
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`
}

// Desafio 5
function footballPoints(wins, ties) {
  const points = (wins * 3) + ties;
  return points; 
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
