var express = require('express');
var cors = require('cors');

var bodyParser = require('body-parser');

var gettable = require('./gettable.js');
var login = require('./mcp.js');

const app = express();

const getTable = gettable.getTable;
const registerId = login.registerid;


const setRoutePlan = login.setRoutePlan;
const planErase = login.planErase;
const getRoutePlan = gettable.getRoutePlan;

// CORS 설정
app.use(cors());


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', function(req, res) {

    res.send('Hello, GMT!!!');

});

app.post('/setRoutePlanInfo', function(req,res) {

    var index = req.body.index;
    
    var ship_index = req.body.ship_index;

    var way_point = req.body.way_point;
    
    (async () => {

        //var index = await req.body.index;

        console.log("Index: " + index + ", Ship Index: " + ship_index + ", Way_Point: " + way_point);
    
        var str = await setRoutePlan(index, ship_index, way_point);

        return res.json(str);
    
        //console.log(str);
    
    })();

});

app.post('/delRoutePlan', function(req,res) {

    var index = req.body.index;
    
    (async () => {

        //var index = await req.body.index;

        console.log("Index: " + index);
    
        var str = await planErase(index); 

        return res.json(str);
    
        //console.log(str);
    
    })();

});

app.post('/getRoutePlan', function(req,res) {

    //var index = req.body.index;                // 문제발생을 해결하기 위해 body-parser설치 필요
    
    (async () => {

        //var index = await req.body.index;

        //console.log("Index: " + index);
    
        var str = await getRoutePlan(); 

        return res.json(str);
    
        //console.log(str);
    
    })();
    
});

app.post('/setRouteList', function(req,res) {

    var route_index = req.body.route_index;
    
    var title = req.body.sc_nm_title;

    var ship_index = req.body.ship_index;
    
    (async () => {

        //var index = await req.body.index;

        console.log("Route Index: " + route_index + ", Title: " + title + ", Ship Index: " + ship_index);
    
        var str = await registerId(route_index, title, ship_index); // 구현해야 됨

        return res.json(str);
    
        //console.log(str);
    
    })();

});

app.post('/getRouteList', function(req,res) {

    var index = req.body.route_index;                // 문제발생을 해결하기 위해 body-parser설치 필요
    
    (async () => {

        //var index = await req.body.index;

        console.log("Index: " + index);
    
        var str = await getTable(index); // 구현해야 됨

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

app.post('/gettable', function(req,res) {

    var index = req.body.index;                // 문제발생을 해결하기 위해 body-parser설치 필요
    
    (async () => {

        //var index = await req.body.index;

        console.log("Index: " + index);
    
        var str = await getTable(index);

        return res.json(str);
    
        //console.log(str);
    
    })();
    
});

app.listen(3000, function() {

    console.log('Listening on port 3000!');

});

app.get('/users', function(req, res) {

    
    /*(async () => {

        var str = await getTable();

        return res.json(str);
    
        //console.log(str);
    
    })();*/
    
    
    return res.json(users);

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

