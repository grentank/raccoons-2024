const fs = require('fs');

const fileData = fs.readFileSync('dates.txt', 'utf8');

const regex = /(\d{2,4})[-.\/](\d{1,2})[-.\/](\d{1,2})/gm;

const calculateYear = (doubleDigit) => {
    const num = Number(doubleDigit);
    if(num <= 25) return `20${doubleDigit}`;
    return `19${doubleDigit}`;
}

const res = fileData.replace(regex, (match, g1, g2, g3) => {
  const year = g1.length === 2 ? calculateYear(g1) : g1;
  const month = g2.padStart(2, '0');
  const day = g3.padStart(2, '0');
  return [year, month, day].join('-');
});

console.log(res);
