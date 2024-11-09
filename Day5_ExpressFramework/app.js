const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

// Tạo các route
app.get('/home', (req, res) => {
    res.send('Hello World, This is home router');
});

app.get('/profile', (req, res) => {
    res.send('Hello World, This is profile router');
});

app.get('/login', (req, res) => {
    res.send('Hello World, This is login router');
});

app.get('/logout', (req, res) => {
    res.send('Hello World, This is logout router');
});

// Middleware
app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});

app.use(bodyParser.json());
app.use('/', router);

// Khởi động server
app.listen(process.env.port || 3000, () => {
    console.log('Web Server is listening at port ' + (process.env.port || 3000));
});
