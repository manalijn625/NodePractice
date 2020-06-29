var util=require('util');
const fs = require('fs');
var txt ='Congratulate %s on his %d birthday!';
var result= util.format(txt,'Minal',30);
//console.log(result);
var result1=util.formatWithOptions({ colors: true }, 'See object %O', { foo: 42 });
//console.log(result1);

//util.getSystemErrorName(err)=============
fs.access('file/that/does/not/exist', (err) => {
    const name = util.getSystemErrorName(err.errno);
    //console.error(name);  // ENOENT
  });

//==============
const EventEmitter = require('events');

function MyStream() {
  EventEmitter.call(this);
}

util.inherits(MyStream, EventEmitter);

MyStream.prototype.write = function(data) {
  this.emit('data', data);
};

const stream = new MyStream();

console.log(stream instanceof EventEmitter); // true
console.log(MyStream.super_ === EventEmitter); // true

stream.on('data', (data) => {
  console.log(`Received data: "${data}"`);
});
stream.write('It works!'); // Received data: "It works!"

console.log(util.types.isDate(new Date()));
console.log(util.types.isRegExp(new RegExp('abc')));