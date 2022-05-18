// Desafio 1
function compareTrue(a, b) {
  if (a && b) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  let splittedSentence = string.split(' ');
  return splittedSentence;
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  const points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let highestNumberCount = 0;
  let highestNumber = array[0];
  for (const i in array) {
    if (array[i] > highestNumber) {
      highestNumber = array[i];
    }
  }
  for (const i in array) {
    if (array[i] === highestNumber) {
      highestNumberCount += 1;
    }
  }
  return highestNumberCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);
  let winner;
  if (cat1Distance === cat2Distance) {
    return 'os gatos trombam e o rato foge';
  }
  if (cat1Distance > cat2Distance) {
    winner = 'cat2';
  } else {
    winner = 'cat1';
  }
  return winner;
}

// Desafio 8
function fizzBuzz(array) {
  const fizzBuzzer = [];
  for (const i in array) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      fizzBuzzer.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      fizzBuzzer.push('fizz');
    } else if (array[i] % 5 === 0) {
      fizzBuzzer.push('buzz');
    } else {
      fizzBuzzer.push('bug!');
    }
  }
  return fizzBuzzer;
}

// Desafio 9
function encode(string) {
  let encodedString = [];
  for (const i in string) {
    switch (string[i]) {
    case 'a':
      encodedString[i] = '1';
      break;
    case 'e':
      encodedString[i] = '2';
      break;
    case 'i':
      encodedString[i] = '3';
      break;
    case 'o':
      encodedString[i] = '4';
      break;
    case 'u':
      encodedString[i] = '5';
      break;
    default:
      encodedString[i] = string[i];
      break;
    }
  }
  return encodedString.join('');
}
function decode(string) {
  let decodedString = [];
  for (const letter in string) {
    switch (string[letter]) {
    case '1':
      decodedString[letter] = 'a';
      break;
    case '2':
      decodedString[letter] = 'e';
      break;
    case '3':
      decodedString[letter] = 'i';
      break;
    case '4':
      decodedString[letter] = 'o';
      break;
    case '5':
      decodedString[letter] = 'u';
      break;
    default:
      decodedString[letter] = string[letter];
      break;
    }
  }
  return decodedString.join('');
}

// Desafio 10
function techList(array, string) {
  if (array === undefined || string === undefined || array.length === 0 || string.length === 0) {
    return 'Vazio!';
  }
  let techObject = [];
  for (const i in array) {
    techObject[i] = { tech: array.sort()[i], name: string };
  }
  return techObject;
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
