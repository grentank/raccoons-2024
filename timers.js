function timerIterative(seconds) {
  for (let index = 0; index <= seconds; index++) {
    setTimeout(() => {
      console.log(`${index} seconds passed`);
    }, 1000 * index);
  }
}

function timerRecursive(seconds, currentTime = 0) { // Pure function
  if (currentTime > seconds) return;
  console.log(`${currentTime} seconds passed`);
  setTimeout(() => {
    timerRecursive(seconds, currentTime + 1);
  }, 1000);
}

module.exports = { timerIterative, timerRecursive }; // export {}
