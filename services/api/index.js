const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  
  res.end(JSON.stringify({ server: 'API' }));
});

server.listen(3000, 'localhost', () => {
  console.log('API server was started: http://localhost:3000/');
});
