const http = require('http');
const { findSourceMap } = require('module');
const fs = require('node:fs');

const server = http.createServer((request, response) => {    
    // Set response header
    // response.writeHead(200, { "Content-Type": "text/plain" });
    // const name = "Reshma";
    // let html = fs.readFileSync("./index.html","utf-8");
    // html = html.replace("{{name}}",name)
    // response.end(html);
    // fs.createReadStream(__dirname + "/index.html").pipe(response);
    // response.writeHead(200, { "Content-Type": "text/plain" });
    
    if(request.url === '/'){
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end("Home");
    }
    else if(request.url === '/about'){
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end("About");
    }
    else if(request.url === '/api'){
        response.writeHead(200, { "Content-Type": "application/json"});
        response.end(JSON.stringify({
            firstName : 'Sonal',
            lastName : 'Monis',
        }));
    }
    else{
        response.writeHead(404);
        response.end("404 Page Not Found");
    }
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
