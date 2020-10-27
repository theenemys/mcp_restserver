const { Api, JsonRpc, RpcError } = require('eosjs');
const { JsSignatureProvider } = require('eosjs/dist/eosjs-jssig'); // development only
const fetch = require('node-fetch'); // node only; not needed in browsers
const { TextEncoder, TextDecoder } = require('util');

const defaultPrivateKey = "5Hu75kTbzqQyi6za3NfBSKuwF1UCBga9D75WsuaxocCYnsntxXE"; 
const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);

const rpc = new JsonRpc('http://127.0.0.1:8888', { fetch });

const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });

async function registerid(idx, ID) {

    const result = await api.transact({
    actions: [{
    account: 'mcp.io',
    name: 'transferdata',
    authorization: [{
    actor: 'mcp.io',
    permission: 'active',
    }],
    data: {
    account: 'mcp.io',
    index: idx,
    id: ID,
    },
    }]
    }, {
    blocksBehind: 3,
    expireSeconds: 30,
    });
    
    return result;

};

async function setRoutePlan(IDX, SHIP_IDX, WAYPOINT, ID, DATE) {

    const result = await api.transact({
    actions: [{
    account: 'mcp.io',
    name: 'setrouteplan',
    authorization: [{
    actor: 'mcp.io',
    permission: 'active',
    }],
    data: {
    index: IDX,
    ship_index: SHIP_IDX,
    way_point: WAYPOINT,
    user_id: ID,    
    create_date: DATE,
    },
    }]
    }, {
    blocksBehind: 3,
    expireSeconds: 30,
    });
    
    return result;

};

async function planErase(IDX) {

    const result = await api.transact({
    actions: [{
    account: 'mcp.io',
    name: 'planerase',
    authorization: [{
    actor: 'mcp.io',
    permission: 'active',
    }],
    data: {
    index: IDX,
    },
    }]
    }, {
    blocksBehind: 3,
    expireSeconds: 30,
    });
    
    return result;

};

async function setNMNWList(IDX, LIST_TYPE, FROM_DATE, TO_DATE, TITLE) {

    const result = await api.transact({
    actions: [{
    account: 'mcp.io',
    name: 'setnmnwlist',
    authorization: [{
    actor: 'mcp.io',
    permission: 'active',
    }],
    data: {
    index: IDX,
    list_type: LIST_TYPE,
    from_date: FROM_DATE,
    to_date: TO_DATE,    
    title: TITLE,
    },
    }]
    }, {
    blocksBehind: 3,
    expireSeconds: 30,
    });
    
    return result;

};

async function delNMNWList(IDX) {

    const result = await api.transact({
    actions: [{
    account: 'mcp.io',
    name: 'delnmnwlist',
    authorization: [{
    actor: 'mcp.io',
    permission: 'active',
    }],
    data: {
    index: IDX,
    },
    }]
    }, {
    blocksBehind: 3,
    expireSeconds: 30,
    });
    
    return result;

};

async function setNMNWInfo(IDX, SHORT_ID, DATA_TYPE, STATUS, FROM_DATE, TO_DATE, FEATURE_TYPE, FEATURE_GEOM, TITLE, DESC, USER_ID, COUNTRY) {

    const result = await api.transact({
    actions: [{
    account: 'mcp.io',
    name: 'setnmnwinfo',
    authorization: [{
    actor: 'mcp.io',
    permission: 'active',
    }],
    data: {
    index: IDX,
    short_id: SHORT_ID,
    data_type: DATA_TYPE,
    status: STATUS,
    from_date: FROM_DATE,    
    to_date: TO_DATE,
    feature_type: FEATURE_TYPE,
    feature_geom: FEATURE_GEOM,
    title: TITLE,
    desc: DESC,
    user_id: USER_ID,
    country: COUNTRY,
    },
    }]
    }, {
    blocksBehind: 3,
    expireSeconds: 30,
    });
    
    return result;

};

async function delNMNWInfo(IDX) {

    const result = await api.transact({
    actions: [{
    account: 'mcp.io',
    name: 'delnmnwinfo',
    authorization: [{
    actor: 'mcp.io',
    permission: 'active',
    }],
    data: {
    index: IDX,
    },
    }]
    }, {
    blocksBehind: 3,
    expireSeconds: 30,
    });
    
    return result;

};


//registerid(7, 'test7');
//setRoutePlan(4, 666666, "586.2560323,111.9838708");
//planErase(4);

module.exports = {

    registerid: registerid,
    setRoutePlan: setRoutePlan,
    planErase: planErase,
    setNMNWList: setNMNWList,
    delNMNWList: delNMNWList,
    setNMNWInfo: setNMNWInfo,
    delNMNWInfo: delNMNWInfo,

};

/*(async () => {
const result = await api.transact({
actions: [{
account: 'mcp.io',
name: 'transferdata',
authorization: [{
actor: 'mcp.io',
permission: 'active',
}],
data: {
account: 'mcp.io',
index: 6,
id: 'test6',
},
}]
}, {
blocksBehind: 3,
expireSeconds: 30,
});
console.dir(result);
})();*/

