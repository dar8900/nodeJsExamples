const httpServer = require('http');
const fs = require('fs');

const server = httpServer.createServer((request, response) =>
{
  fs.createReadStream(process.argv[3]).pipe(response);
});

server.listen(process.argv[2]);
