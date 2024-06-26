const cluster = require('node:cluster');
const http = require('http');
const pm2 = require('pm2');

if (cluster.isMaster) {
    console.log(`Master process ${process.pid} is running`);
    cluster.fork()
    cluster.fork()

} else {
    console.log(`Worker ${process.pid} started`);

    const server = http.createServer((req, res) => {
        if (req.url === "/") {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Home Page");
        } else if (req.url === "/slowpage") {
            for (let i = 0; i < 6000000000; i++) { } // Simulate CPU work
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Slow page");
        }
    });

    server.listen(8000, () => console.log(`Server running on port 8000`));
}

// pm2 package