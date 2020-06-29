const util = require('util');

console.log(util.isBuffer({ length: 0 }));
// Returns: false
console.log(util.isBuffer([]));
// Returns: false
console.log(util.isBuffer(Buffer.from('hello world')));
// Returns: true