const http = require('http');
const { Worker } = require('node:worker_threads');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Home Page");
    } else if (req.url === "/slowpage") {
        const worker = new Worker('./worker_thread.js')
        // Simulate CPU work

        worker.on("message", (j) => {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end(`Slow page: ${j}`);
        })

    }
});

server.listen(8000, () => console.log(`Server running on port 8000`));