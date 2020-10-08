var express = require('express');

var bodyParser = require('body-parser');

var gettable = require('./gettable.js');
var login = require('./mcp.js');

const app = express();

const getTable = gettable.getTable;
const registerId = login.registerid;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', function(req, res){

    res.send('Hello, World!!!');

});

app.get('/users', function(req, res){

    
    /*(async () => {

        var str = await getTable();

        return res.json(str);
    
        //console.log(str);
    
    })();*/
    
    
    return res.json(users);

});

app.post('/gettable', function(req,res){

    var index = req.body.index;                // 문제발생을 해결하기 위해 body-parser설치 필요
    
    (async () => {

        //var index = await req.body.index;

        console.log("Index: " + index);
    
        var str = await getTable(index);

        return res.json(str);
    
        //console.log(str);
    
    })();
    
});

app.post('/registerid', function(req,res) {

    var index = req.body.index;
    
    var id = req.body.id;
    
    (async () => {

        //var index = await req.body.index;

        console.log("Index: " + index + ", ID: " + id);
    
        var str = await registerId(index, id);

        return res.json(str);
    
        //console.log(str);
    
    })();

});

app.listen(3000, function(){

    console.log('Example app listening on port 3000!');

});

let users = [

    {
        id: 1,
        name: 'Hyun'
    },
    {
        id: 2,
        name: 'Alice'
    },
    {
        id: 3,
        name: 'Kelly'
    }

]

