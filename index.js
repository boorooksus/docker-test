const express = require('express');

const PORT = 8080;

// APP
const app = express();

app.get('/', (req, res) => {

    // const { exec } = require('child_process');
    // exec('echo hello world', (error, stdout, stderr) => {
    // if (error) {
    //     console.error(`exec error: ${error}`);
    //     return;
    // }
    // console.log(`stdout: ${stdout}`);
    // console.error(`stderr: ${stderr}`);

    // res.send(stdout);
    // });

    res.send('hello')

    
});

app.listen(PORT);
console.log("Server is running")