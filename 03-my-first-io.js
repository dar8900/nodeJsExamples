const fs = require('fs');

const path = process.argv[2];
const buffer = fs.readFileSync(path, 'utf8');
const nSpace = buffer.split('\n').length - 1;
console.log(nSpace);
