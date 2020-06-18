const port = process.argv[2];
const urlreq = require('url');
const http = require('http');

const server = http.createServer((request, response) =>
{
  const urlReceive = urlreq.parse(request.url, true);
  response.writeHead(200, { 'Content-Type': 'application/json' });
  if (urlReceive.href.indexOf('parsetime') > 0)
  {
    const d = new Date(urlReceive.query.iso);
    response.end(JSON.stringify({ hour: d.getHours(), minute: d.getMinutes(), second: d.getSeconds() }));
  }
  if (urlReceive.href.indexOf('unixtime') > 0)
  {
    const d = new Date(urlReceive.query.iso);
    response.end(JSON.stringify({ unixtime: d.getTime() }));
  }
});

server.listen(port);
