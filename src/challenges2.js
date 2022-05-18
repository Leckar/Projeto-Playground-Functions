// Desafio 11
function repeatCheck(array){
  for (const i in array) {
    let repeatCount = 0;
    if (array[i] < 0 || array[i] > 9) {
      return false;
      break;
    }
    for (const ind in array) {
      if (array[i] == array[ind]) {
        repeatCount += 1;
      }  
    }
    if (repeatCount >= 3) {
      return false;
      break;
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
  let telephoneNumber = array;
  if (telephoneNumber.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  if (repeatCheck(telephoneNumber) == false) {
    return 'não é possível gerar um número de telefone com esses valores'
  }
  telephoneNumber = numberFormatting(telephoneNumber);
  return telephoneNumber.join('');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (Math.abs(lineA - lineB) >= lineC || Math.abs(lineB - lineC) >= lineA || Math.abs(lineA - lineC) >= lineB || (lineA + lineB) <= lineC || (lineC + lineB) <= lineA || (lineA + lineC) <= lineB) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
