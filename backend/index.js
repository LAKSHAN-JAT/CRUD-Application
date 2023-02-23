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

//get all data

app.get('/user', (req, res) => {

    let qry = 'select * from user';

    db.query(qry, (err, result) => {
        if (err) {
            console.log(errs, 'errs');
        }

        if (result.length > 0) {
            res.send({
                status: 'all user data',
                data: result
            });
        }
    });
});


//get single user

app.get('/user/:id', (req, res) => {


    let gID = req.params.id;
    let qry = 'select * from user where id = ' + gID;

    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        } if (result.length > 0) {
            res.send({
                status: 'one by one user data',
                data: result
            });
        } else {
            res.send({
                status: 'no user data'

            });
        }
    });
});


// create data

app.post('/create', (req, res) => {

    console.log(req.body, 'create data;');

    let fullname = req.body.fullname;
    let email = req.body.email;
    let mobile = req.body.mobile;

    let qry = 'insert into user (fullName, email, mobile) values ("' + fullname + '", "' + email + '", "' + mobile + '")';

    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log(result, 'result')
        res.send({
            status: 'added successfully',
            data: result
        });
    });
});

//update data

app.put('/update/:id', (req, res) => {


    console.log(req.body, 'update data;');
    let gID = req.params.id;
    let fullname = req.body.fullname;
    let email = req.body.email;
    let mobile = req.body.mobile;

    let qry = 'update user set fullname = "' + fullname + '", email = "' + email + '", mobile = "' + mobile + '" where id =' + gID;

    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send({
            status: 'updated successfully',
            data: result
        });
    });

});

//delete single data item

app.delete('/delete/:id', (req, res) => {


    let gID = req.params.id;

    let qry = 'delete from user where id =' + gID;

    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send({
            status: 'deleted successfully',
            data: result
        });
    });

});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});