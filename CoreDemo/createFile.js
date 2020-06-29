var fs = require('fs');
fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) console.log(err);
    
    console.log('Saved!');
  });
  