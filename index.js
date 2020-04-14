//############################################################### Variables
const
    // express framework
    express = require('express'),
    // web app
    app = express(),
    http = require('http').createServer(app),
    // .env variable parser
    dotenv = require('dotenv');

// parse .env variables
dotenv.config();

// port and interface for serving web app
const port = process.env.PORT,
    appInterface = process.env.INTERFACE;

// Debug environment
if (process.env.DEBUG) {

}

//############################################################### Routes
// Serve static files from /public/ directory
app.use(express.static('static'));
app.use(express.static('public'));

// Main route for index.html
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

// Start web server
http.listen(port, appInterface, function () {
    console.log('listening on ' + appInterface + ':' + port);
});
