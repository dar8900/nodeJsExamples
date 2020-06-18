const httpServer = require('http');

var map = require('through2-map');

uc = map(function(chunk)
{
  return chunk.toString().toUpperCase();
});

const server = httpServer.createServer((request, response) =>
{
  if (request.method === 'POST')
  {
    request.pipe(uc).pipe(response);
  }
});

server.listen(process.argv[2]);
