http = require('http');
// const net = require('net');
url = require('url');
path = require('path');
var querstring=require('querystring');

 http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'plain/text' });
  console.log("Working");
  res.write("Hi Manali");
  res.write(req.url);
  console.log(req.url);
  parseurl=url.parse(req.url);
  console.log(parseurl.host);
  console.log(parseurl.query);
  console.log(parseurl.search);
  var a =querstring.parse('year=2020&month=june');
  console.log(a.year);
  //path.basename('C:\\temp\\myfile.html')
  var c =path.basename('D:\\NodeDemos\\CoreDemo\\abc.html')
  var m = path.extname(c);
  var w = path.dirname(c);
  var ab = path.isAbsolute(c); 
  console.log(c);
  console.log(m);
  console.log(w);
  console.log(ab);
  res.end();
  }).listen(2000);