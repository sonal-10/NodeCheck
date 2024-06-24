const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    const data = {
        firstName : 'Sonal',
        lastName : 'Monis',
    }
    
    // Set response header
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end(data);

});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
