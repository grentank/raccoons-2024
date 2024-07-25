// const now = Date.now(); // теперь в now лежит число миллисекунд
// const past = now - 1e4;
// const pastDate = new Date(past);
// console.log({ now, pastDate });
// console.log(new Date());
// console.log(new Date());
// console.log(new Date());

function daysTillGraduation(beginDate) {
  // понедельник
  const now = new Date();
  const startDate = beginDate.getDate();
  const startMonth = beginDate.getMonth();
  const startYear = beginDate.getFullYear();
  const graduationDate = new Date(startYear, startMonth, startDate + 60, 18);
  let diff = graduationDate.valueOf() - now.valueOf();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * 1000 * 60 * 60 * 24;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * 1000 * 60 * 60;
  const minutes = diff / (1000 * 60);
  const res = `Осталось до выпускного: ${days} дней, ${hours} часов, ${minutes} минут`;
  console.log(res);
  return res;
}

daysTillGraduation(new Date(2024, 6, 22));
