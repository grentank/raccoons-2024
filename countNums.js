/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
function countNums(obj) {
  let acc = 0;
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === 'number') {
      acc += value;
      console.log(key, value);
      continue;
    }
    if (typeof value === 'object') {
      acc += countNums(value);
    }
  }
  return acc;
}

module.exports = countNums;
