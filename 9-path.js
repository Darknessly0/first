const path = require('path');
console.log(path.sep);

const filePAth = path.join('/content', 'text.txt')
console.log(filePAth);

const base = path.basename(filePAth);
console.log(base);

const absolute = path.resolve(__dirname, 'content','text.txt')
console.log(absolute);