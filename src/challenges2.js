// Desafio 11
function repeatCheck(array) {
  for (const i in array) {
    let repeatCount = 0;
    if (array[i] < 0 || array[i] > 9) {
      return false;
    }
    for (const ind in array) {
      if (array[i] === array[ind]) {
        repeatCount += 1;
      }
    }
    if (repeatCount >= 3) {
      return false;
    }
    repeatCount = 0;
  }
  return true;
}
function numberFormatting(array) {
  array.splice(0, 0, '(');
  array.splice(3, 0, ')');
  array.splice(4, 0, ' ');
  array.splice(10, 0, '-');
  return array;
}
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (!repeatCheck(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let telephoneNumber = numberFormatting(array);
  return telephoneNumber.join('');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (Math.abs(lineA - lineB) >= lineC
  || Math.abs(lineB - lineC) >= lineA
  || Math.abs(lineA - lineC) >= lineB) {
    return false;
  } if ((lineA + lineB) <= lineC || (lineC + lineB) <= lineA || (lineA + lineC) <= lineB) {
    return false;
  }
  return true;
}

// Desafio 13
function numberSum(array) {
  let sum = 0;
  for (const i in array) {
    sum += parseInt(array[i], 10);
  }
  return sum;
}
function hydrate(string) {
  let integerGet = string.match(/\d+/g);
  const integerSum = numberSum(integerGet);
  if (integerSum === 1) {
    return `${integerSum} copo de água`;
  }
  return `${integerSum} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
