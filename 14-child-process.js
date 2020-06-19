const { exec } = require('child_process');

exec('./halloworld', (error, stdout, stderr) =>
{
    if(error)
        throw error;
    console.log(stdout);
});
