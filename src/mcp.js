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

//registerid(7, 'test7');
//setRoutePlan(4, 666666, "586.2560323,111.9838708");
//planErase(4);

module.exports = {

    registerid: registerid,
    setRoutePlan: setRoutePlan,
    planErase: planErase,

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

