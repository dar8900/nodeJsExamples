const fs = require('fs');
const path = require('path');
const pathName = process.argv[2];
const fileExt = `.${process.argv[3]}`;

fs.readdir(pathName, 'utf8', (error, files) =>
{
  if (error) throw error;
  files.forEach((file) =>
  {
    if (path.extname(file) === fileExt)
    {
      console.log(file);
    }
  });
})
