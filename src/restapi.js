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

const setNMNWList = login.setNMNWList;
const delNMNWList = login.delNMNWList;
const getNMNWList = gettable.getNMNWList;

const setNMNWInfo = login.setNMNWInfo;
const delNMNWInfo = login.delNMNWInfo;
const getNMNWInfo = gettable.getNMNWInfo;


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

    var user_id = req.body.user_id;

    var create_date = req.body.create_date;
    
    (async () => {

        //var index = await req.body.index;

        console.log("Index: " + index + ", Ship Index: " + ship_index + ", Way_Point: " + way_point + ", User ID: " + user_id + ", Create Date: " + create_date);
    
        var str = await setRoutePlan(index, ship_index, way_point, user_id, create_date);

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

app.post('/setNmNwList', function(req,res) {

    var index = req.body.index;
    
    var list_type = req.body.list_type;

    var from_date = req.body.from_date;

    var to_date = req.body.to_date;

    var title = req.body.title;
    
    (async () => {

        //var index = await req.body.index;

        console.log("Index: " + index + ", List Type: " + list_type + ", From_Date: " + from_date + ", To_Date: " + to_date + ", Title: " + title);
    
        var str = await setNMNWList(index, list_type, from_date, to_date, title);

        return res.json(str);
    
        //console.log(str);
    
    })();

});

app.post('/delNmNwList', function(req,res) {

    var index = req.body.index;
    
    (async () => {

        //var index = await req.body.index;

        console.log("Index: " + index);
    
        var str = await delNMNWList(index); 

        return res.json(str);
    
        //console.log(str);
    
    })();

});

app.post('/getNmNwList', function(req,res) {

    //var index = req.body.index;                // 문제발생을 해결하기 위해 body-parser설치 필요
    
    (async () => {

        //var index = await req.body.index;

        //console.log("Index: " + index);
    
        var str = await getNMNWList(); 

        return res.json(str);
    
        //console.log(str);
    
    })();
    
});

app.post('/setNmNwInfo', function(req,res) {

    var index = req.body.index;
    
    var short_id = req.body.short_id;

    var data_type = req.body.data_type;

    var status = req.body.status;

    var from_date = req.body.from_date;

    var to_date = req.body.to_date;
    
    var feature_type = req.body.feature_type;

    var feature_geom = req.body.feature_geom;

    var title = req.body.title;

    var desc = req.body.desc;

    var user_id = req.body.user_id;

    var country = req.body.country;
    
    (async () => {

        //var index = await req.body.index;

        console.log("Index: " + index + ", Short ID: " + short_id + ", Data Type: " + data_type + ", Status: " + status + ", From_Date: " + from_date + ", To_Date: " + to_date +
                        "Feature Type: " + feature_type + ", Feature Geom: " + feature_geom + ", Title: " + title + ", Desc: " + desc + ", User ID: " + user_id + ", Country: " + country);
    
        var str = await setNMNWInfo(index, short_id, data_type, status, from_date, to_date, feature_type, feature_geom, title, desc, user_id, country);

        return res.json(str);
    
        //console.log(str);
    
    })();

});

app.post('/delNmNwInfo', function(req,res) {

    var index = req.body.index;
    
    (async () => {

        //var index = await req.body.index;

        console.log("Index: " + index);
    
        var str = await delNMNWInfo(index); 

        return res.json(str);
    
        //console.log(str);
    
    })();

});

app.post('/getNmNwDetail', function(req,res) {

    //var index = req.body.index;                // 문제발생을 해결하기 위해 body-parser설치 필요
    
    (async () => {

        //var index = await req.body.index;

        //console.log("Index: " + index);
    
        var str = await getNMNWInfo(); 

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

