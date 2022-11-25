const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(bodyparser.json());



// database connection

const db = mysql.createConnection({
        host:'remotemysql.com',
        user: 'YV7hmbfNlq',
        password: 'oW19e5ehHo',
        database: 'YV7hmbfNlq',
        port: 3306
});

// check database connection
 
db.connect(err=>{
    if (err) {console.log(err,'db error');}
    console.log('database connected...');
})

app.get('/article', (req,res)=>{
    console.log('get articles');

        let qr = 'select * from article';

        db.query(qr,(err,result)=>{
            if(err)
            {
                console.log(err,'errs');
            }

            if(result.length>0)
            {
                res.send({
                    message:'all article data',
                    data:result
                });
            }
        });
});

// Get single data
app.get('/article/:id',(req,res)=>{
    let gID = req.params.id;
    let qr = `select * from article where id = ${gID}`;

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

// create data
app.post('/article',(req,res)=>{
    console.log(req.body,'createdata');

    let title = req.body.title;
    let imghero = req.body.imghero;
    let resumetxt = req.body.resumetxt;
    let subtitle = req.body.subtitle;
    let content = req.body.content;
    let content1 = req.body.content1;
    let content2 = req.body.content2;
    let imgcontent = req.body.imgcontent;
    let quote = req.body.quote;

    let qr = `insert into article(title,imghero,resumetxt,subtitle,content,content1,content2,imgcontent,quote)
                values('${title}','${imghero}','${resumetxt}','${subtitle}','${content}','${content1}','${content2}','${imgcontent}','${quote}')`;

    db.query(qr,(err,result)=>{
        if(err){console.log(err);}

        if(result.length>0)
        {
            res.send({
                message:'data inserted',
                data:result
            });
        };
    });
});

// Update single data
app.put('/article/:id',(req,res)=>{

    console.log(req.body,'updatedata');

    let gID = req.params.id;
    let title = req.body.title;
    let imghero = req.body.imghero;
    let resumetxt = req.body.resumetxt;
    let subtitle = req.body.subtitle;
    let content = req.body.content;
    let content1 = req.body.content1;
    let content2 = req.body.content2;
    let imgcontent = req.body.imgcontent;
    let quote = req.body.quote;

    let qr = `update article set title = '${title}', imghero = '${imghero}', resumetxt = '${resumetxt}', subtitle = '${subtitle}', content = '${content}', content1 = '${content1}', content2 = '${content2}', imgcontent = '${imgcontent}', quote = '${quote}' 
               where id = ${gID}`;

    db.query(qr,(err,result)=>{
        if(err) {console.log(err);}

        res.send({
            message:'data updated'
        });
    });
})

// Delete single data
app.delete('/article/:id',(req,res)=>{
    let qID = req.params.id;

    let qr = `delete from article where id = '${qID}'`;
    db.query(qr,(err,result)=>{
        if (err) {console.log(err);}
        res.send(
            {
                message:'Data deleted'
            }
        )
    });
});




app.listen(3702,()=>{
    console.log('Server running..');
});