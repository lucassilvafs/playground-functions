// Desafio 11
// eslint-disable-next-line sonarjs/cognitive-complexity
function repeated(phoneNumber) {
  let repeat = 0;
  let aux;
  for (let index = 0; index < phoneNumber.length; index += 1) {
    aux = phoneNumber[index];
    repeat = 0;
    for (let index2 = 0; index2 < phoneNumber.length; index2 += 1) {
      if (phoneNumber[index2] === aux) {
        repeat += 1;
      }
    }
    if (repeat >= 3) {
      return true;
    }
  }
  return false;
}
function verifier(phoneNumber) {
  let repeats = repeated(phoneNumber);
  for (let index = 0; index < phoneNumber.length; index += 1) {
    if (phoneNumber[index] < 0 || phoneNumber[index] > 9 || repeats === true) {
      return true;
    }
  }
  return false;
}
function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (verifier(phoneNumber) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let part1 = `(${phoneNumber[0]}${phoneNumber[1]}) ${phoneNumber[2]}`;
  let part2 = `${phoneNumber[3]}${phoneNumber[4]}${phoneNumber[5]}${phoneNumber[6]}-`;
  let part3 = `${phoneNumber[7]}${phoneNumber[8]}${phoneNumber[9]}${phoneNumber[10]}`;
  return part1 + part2 + part3;
}
// Desafio 12
function triangleCheck() {
  // seu código aqui
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
