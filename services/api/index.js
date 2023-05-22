const http = require('http');
const calculator = require('calculator');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  
  res.end(JSON.stringify({
    server: 'API',
    calc: { a: 1, b: 2, result: calculator(1, 2) },
  }));
});

server.listen(3000, 'localhost', () => {
  console.log('API server was started: http://localhost:3000/');
});
