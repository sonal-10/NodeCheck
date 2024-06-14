import http from 'node:http';

// Create a local server to receive data from
const server = http.createServer();

// Listen to the request event
server.on('request', (request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify({
    data: 'Hello World!',
  }));
});

server.listen(8000);
console.log("Listening on Port : 8000");
