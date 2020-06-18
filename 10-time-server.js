const net = require('net');
const port = process.argv[2];
let date = new Date();


function formatDate(date)
{
  let dateStr = '';
  date > 10 ? dateStr = date.toString() : dateStr = '0' + date.toString();
  return dateStr;
}

const timeServer = net.createServer((socket) =>
{
  let dateStr = '';
  dateStr = formatDate(date.getFullYear()) + '-' + formatDate(date.getMonth() + 1) + '-' + formatDate(date.getDate()) + ' ';
  dateStr += formatDate(date.getHours()) + ':' + formatDate(date.getMinutes()) + '\n';
  socket.end(dateStr);

});
timeServer.listen(port);
