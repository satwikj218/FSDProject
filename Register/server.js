var express = require('express');
var mysql = require('mysql');
var bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,x-Requested-With,Content-Type,Accept");
    next();
});

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sarita@123",
    database: "mainproject"
});
connection.connect(function(err){
    if(!err){
        console.log("Database Connected.....");
    }
    else{
        console.log("Error in connecting database.........");
    }
});

app.listen(4002,()=>{
    console.log("Server is Running");
});

app.get('/',function(req,res){
    res.json({msg:"Welcome to Node.js API"});
});

//Route for Insert Data
app.post('/register',(req,res) =>{
    let data = req.body;
    //To see the data in console
    console.log(data);
    connection.query('insert into register1 set ? ',data,function(error,results,fields){
        if(error){
            res.send({
                "code":400,
                "failed":"Error Occured"
            });
        }
        else{
            res.send({
                "code":200,
                "Success":"User Registeration Completed"
            });
        }
    });
});

//Route for Checking Login
app.post('/login',(req,res) =>{
    let username = req.body.username;
    let password = req.body.password;
    console.log(username,password);
    connection.query('select username,password from register1 where username = ? and password = ?',[username,password],function(error,results,fields){
        var x = JSON.stringify(results);
        if(x == "[]"){
            res.send({
                "code":400,
                "failed":"Cant find Username and Password"
            });
        }
        else{
            res.send({
                "code":200,
                "success":"Successful Login"
            });
        }
    });
});

//Route for Updating Password
app.post('/updatepass',(req,res) =>{
    let password = req.body.password;
    let email = req.body.email;
    console.log(password,email);
    connection.query('update register1 set password = ? where email = ?',[password,email],function(error,results,fields){
        var x = JSON.stringify(results);
        if(x == "[]"){
            res.send({
                "code":400,
                "failed":"Cant find Email"
            });
        }
        else{
            res.send({
                "code":200,
                "success":"Update Successful"
            });
        }
    });
});