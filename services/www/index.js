const http = require('http');
const calculator = require('calculator');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  res.end(`This is WWW server! 1 + 2 = ${calculator(1, 2)}`);
});

server.listen(8080, 'localhost', () => {
  console.log('WWW server was started: http://localhost:8080/');
});
