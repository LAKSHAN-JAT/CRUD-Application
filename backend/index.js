const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
app.use(cors());
app.use(bodyParser.json());


//database connection

const db = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'angular_db',
    port: 3307
});

//check database connection

db.connect((err) => {
    if (err) throw err;
    console.log('Database connected');
});





app.listen(3000, () => {
    console.log('Server is running on port 3000');
});