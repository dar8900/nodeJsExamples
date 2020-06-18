const url = process.argv[2];
const httpClient = require('http');

httpClient.get(url, (response) =>
{
  response.setEncoding('utf8');
  response.on('data', (data) =>
  {
    console.log(data);
  });
  response.on('error', (error) =>
  {
    console.log(error);
  });
}).on('error', (error) =>
  {
    console.log(error);
  });
