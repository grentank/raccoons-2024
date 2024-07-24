const fs = require('fs');

function countFiles(dirPath) {
  // index.js
  const indexPaths = [];
  const dirents = fs.readdirSync(dirPath, { encoding: 'utf8', withFileTypes: true });
  for (let index = 0; index < dirents.length; index++) {
    const dirent = dirents[index];
    const path = `${dirPath}/${dirent.name}`;
    if (dirent.isDirectory()) indexPaths.push(...countFiles(path));
    if (dirent.isFile() && dirent.name === 'index.js') indexPaths.push(path);
  }
  return indexPaths;
}

module.exports = countFiles; // export default
