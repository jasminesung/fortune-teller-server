const http = require('http');

const port = 3000;

const server = http.createServer(async (req, res) => {
    if (req.url === '/api/fortune' && req.method === 'GET') {
        res.end('getting a fortune');
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'API route is not found!' }));
    }
});

server.listen(port, () => {
  console.log(`Server running at port ${port}!`);
});