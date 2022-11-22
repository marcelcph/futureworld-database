const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(bodyparser.json());



// database connection

const db = mysql.createConnection({
        host:'localhost',
        user: 'root',
        password: '',
        database: 'futureworlddb',
        port: 3304
});

// check database connection
 
db.connect(err=>{
    if (err) {console.log(err,'dberr');}
    console.log('database connected...');
})

app.get('/user', (req,res)=>{
    console.log('get users');

        let qr = 'select * from user';

        db.query(qr,(err,result)=>{
            if(err)
            {
                console.log(err,'errs');
            }

            if(result.length>0)
            {
                res.send({
                    message:'all user data',
                    data:result
                });
            }
        });
});

// Get single data
app.get('/user/:id',(req,res)=>{
    let gID = req.params.id;
    let qr = 'select * from user where id = ${gID}';

    db.query(qr,(err,result)=>{
        if (err) {console.log(err);}

        if(result.length>0)
        {
            res.send({
                message:'get single data',
                data:result
            });
        }
        else
        {
            res.send({
                message:'data not found'
            });
        }
    });
});



app.listen(3702,()=>{
    console.log('Server running..');
});