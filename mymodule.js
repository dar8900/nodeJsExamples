const fs = require('fs');
const path = require('path');

module.exports = function readDir(dirname, ext, callback)
{
  const extension = `.${ext}`;
  fs.readdir(dirname, (err, files) =>
  {
    if (err)
    {
      callback(err, null);
    }
    else
    {
      let result = [];
      files.forEach((entry) =>
      {
        if (path.extname(entry) === extension)
        {
          result.push(entry);
        }
      });
      callback(null, result);
    }
  });

};
