const url = process.argv[2];
const httpClient = require('http');

const httpC = httpClient.get(url, (response) =>
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
});
httpC.on('error', (error) =>
  {
    console.log(error);
  });
