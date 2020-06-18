const pathName = process.argv[2];
const fileExt = `${process.argv[3]}`;
const mymodule = require('/home/deo-node/Scrivania/nodeJSExample/mymodule.js');

mymodule(pathName, fileExt, (error, files) =>
{
  if (error) throw error;
  for (let i = 0; i < files.length; i += 1)
  {
    console.log(files[i]);
  }
});
