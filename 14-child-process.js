const { exec } = require('child_process');
const fs = require('fs');

exec('sh echo_wget.sh', (error, stdout, stderr) =>
{
    if(error)
        throw error;
    console.log('Command executed');
});

fs.readFile('index.html', 'utf8', (error, dataReaded) =>
{
    
});
