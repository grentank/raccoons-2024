function sum(num) {
  if (num === 1) return 1; // базовый случай
  return sum(num - 1) + num; // Рекурсивный шаг
}

const countFiles = require('./countFiles');
const countNums = require('./countNums');
const { timerIterative, timerRecursive } = require('./timers');
const pokemon = require('./pokemon.json');
// const res = sum(1e6);
// console.log(res);

function run() {
    // const seconds = Number(process.argv[2]);
    // if (Number.isNaN(seconds)) throw new Error('Требуется число');
    // timerRecursive(seconds);
  //   const res = countFiles('.');
  //   console.log(res, res.length);
//   console.log(countNums(pokemon));
}

run();

// 0 - 32
// 1 - 16
// 2 - 8
// 3 - 4
// 4 - 2
// 5 - 1

// 1000 -> 10
// 1000 000 -> 20
// O(n) - линейный поиск
// O(log(n)) -- бинарный поиск