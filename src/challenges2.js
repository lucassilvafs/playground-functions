// Desafio 11
function repeatedAux(storage) {
  let counter = 0;
  for (let i = 0; i < storage.length; i += 1) {
    if (storage[i].quantidade >= 3) counter += 1;
  }
  return counter;
}
function repeated(phoneNumber) {
  let result = phoneNumber.reduce((acc, val) => {
    if (!acc[val]) {
      acc[val] = {
        número: val,
        quantidade: 1,
      };
    } else acc[val].quantidade += 1;
    return acc;
  }, {});
  let storage = Object.values(result);
  return repeatedAux(storage);
}
function verifier(phoneNumber) {
  let repeats = repeated(phoneNumber);
  for (let index = 0; index < phoneNumber.length; index += 1) {
    let valor = phoneNumber[index];
    if (valor < 0 || valor > 9 || repeats > 0) {
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
function triangleCheckAux(lineA, lineB, lineC) {
  let AB = Math.abs(lineA - lineB);
  let AC = Math.abs(lineA - lineC);
  let BC = Math.abs(lineB - lineC);
  if (lineA > BC || lineB > AC || lineC > AB) {
    return true;
  }
  return false;
}
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return false;
  }
  return triangleCheckAux(lineA, lineB, lineC);
}

// Desafio 13
function hydrateAux(quant) {
  let res = 0;
  let array = quant.split('');
  for (let index = 0; index < array.length; index += 1) {
    res += parseInt(array[index], 10);
  }
  return res;
}
function hydrate(string) {
  let quant = string.replace(/[^0-9]/g, '');
  let result = hydrateAux(quant);
  if (result === 1) {
    return `${result} copo de água`;
  }
  return `${result} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
