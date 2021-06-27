const express = require('express');

const PORT = 8080;

// APP
const app = express();

app.get('/', (req, res) => {
    const exec = require('child_process').exec;

    const result = exec('dir');

    result.stdout.on('data', function(ls_result){
        console.log(ls_result.toString());
    })

    result.stderr.on('data', function(data) {
        console.log(data.toString());
    });

    res.send("Hello World!!!")
});

app.listen(PORT);
console.log("Server is running")