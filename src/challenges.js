// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let array = [];
  array = sentence.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let nome1 = array[0];
  let nome2 = array[array.length - 1];
  return `${nome2}, ${nome1}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let total = wins * 3 + ties;
  return total;
}

// Desafio 6
function highestCount(array) {
  let highest = 0;
  let count = 0;
  highest = Math.max.apply(null, array);
  for (let index of array) {
    if (index === highest) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gato1 = mouse - cat1;
  let gato2 = mouse - cat2;
  if (cat1 > mouse) {
    gato1 = cat1 - mouse;
  }
  if (cat2 > mouse) {
    gato2 = cat2 - mouse;
  }
  if (gato1 === gato2) {
    return 'os gatos trombam e o rato foge';
  }
  if (gato1 < gato2) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function aux1(num) {
  if (num % 5 === 0) {
    return 'fizzBuzz';
  }
  return 'fizz';
}
function fizzBuzz(array) {
  let results = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0) {
      results[index] = aux1(array[index]);
    } else if (array[index] % 5 === 0) {
      results[index] = 'buzz';
    } else results[index] = 'bug!';
  }
  return results;
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
