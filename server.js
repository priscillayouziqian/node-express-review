const express = require('express');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev')); //insert morgan middleware function in .use()

// set up express to serve files in the public folder, use express.static()
// __dirname means special variable in node, refers to absollute path of current directory
app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    // console.log(req.headers); //delete this console.log because morgan will handle it
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});