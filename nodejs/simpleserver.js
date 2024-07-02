const http = require('node:http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        "Content-Type":"text/plain"
    });
    res.end("Hello Sonal Your website is Hosted ");
});

const PORT = process.env.port || 3000;

server.listen(PORT,()=> console.log(`Server running on port : ${PORT}`));