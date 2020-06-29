var fs = require('fs');

fs.writeFile('mynewfile2.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});