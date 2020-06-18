const httpClient = require('http');
const bl = require('bl');
const contents = [];
let count = 0;

function printContents()
{
  for (let i = 0; i < 3; i += 1)
  {
    console.log(contents[i]);
  }
}

function httpGetFromUrls(wichUrl)
{
  httpClient.get(process.argv[2 + wichUrl], (response) =>
  {
    response.setEncoding('utf8');
    response.pipe(bl((error, data) =>
    {
      if (error) throw error;
      contents[wichUrl] = data.toString();
      count += 1;
      if (count === 3) printContents();
    }));
  });
}

for (let i = 0; i < 3; i += 1)
{
  httpGetFromUrls(i);
}
