const httpClient = require('http');
const bl = require('bl');
const url = process.argv[2];

httpClient.get(url, (response) =>
{
  response.setEncoding('utf8');
  response.pipe(bl((error, data) =>
  {
    if (error) throw error;
    console.log(data.length);
    console.log(data.toString());
  }));
});
