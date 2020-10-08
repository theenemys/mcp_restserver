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

//registerid(7, 'test7');

module.exports = {

    registerid: registerid,

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

