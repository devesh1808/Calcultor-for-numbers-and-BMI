//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

//Home Route
app.get('/',function(req,res){
    //res.sendFile("index.html");  //sendFile() method(or function) is used to send the complete file

    //or apart from above, you can do the below thing as well
    
    res.sendFile(__dirname + "/index.html");  //__dirname gives the entire path of the file
});

app.post('/',function(req,res){
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1 + num2;
    res.send("The result of calculation is " + result);
});

app.get('/bmicalculator',function(req,res){
    res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmicalculator',function(req,res){
    var val1=Number(req.body.weight);
    var val2=Number(req.body.height);
    var ans = val1/(val2*val2);
    res.send("Your BMI is " + ans);
});

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});