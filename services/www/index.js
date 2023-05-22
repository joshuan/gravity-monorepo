const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  res.end('This is WWW server!');
});

server.listen(8080, 'localhost', () => {
  console.log('WWW server was started: http://localhost:8080/');
});
