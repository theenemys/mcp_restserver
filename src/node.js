const { Api, JsonRpc, RpcError } = require('eosjs');
const { JsSignatureProvider } = require('eosjs/dist/eosjs-jssig'); // development only
const fetch = require('node-fetch'); // node only; not needed in browsers
const { TextEncoder, TextDecoder } = require('util');

const defaultPrivateKey = "5JJFHmi6tYgKJf4M8Y8bxoSVb5MDZu7csGRhR2KXcuDbZ6yxeED"; // bob
const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);

const rpc = new JsonRpc('http://127.0.0.1:8888', { fetch });

const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });

(async () => {
const result = await api.transact({
actions: [{
account: 'osbio.token',
name: 'transfer',
authorization: [{
actor: 'djdocdjdoc33',
permission: 'active',
}],
data: {
from: 'djdocdjdoc33',
to: 'eosio',
quantity: '1.0000 OSB',
memo: '',
},
}]
}, {
blocksBehind: 3,
expireSeconds: 30,
});
console.dir(result);
})();