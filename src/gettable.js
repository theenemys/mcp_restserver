const { Api, JsonRpc, RpcError } = require('eosjs');
const { JsSignatureProvider } = require('eosjs/dist/eosjs-jssig'); // development only
const fetch = require('node-fetch'); // node only; not needed in browsers
const { TextEncoder, TextDecoder } = require('util');

const defaultPrivateKey = "5Hu75kTbzqQyi6za3NfBSKuwF1UCBga9D75WsuaxocCYnsntxXE"; 
const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);

const rpc = new JsonRpc('http://127.0.0.1:8888', { fetch });

const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });

async function getTable(idx) {
const result = await rpc.get_table_rows({
    json: true,               // Get the response as json
    code: 'mcp.io',      // Contract that we target
    scope: 'mcp.io',         // Account that owns the data
    table: 'iddata',        // Table name
    lower_bound: idx,
    limit: 1,                // Maximum number of rows that we want to get
    reverse: false,           // Optional: Get reversed data
    show_payer: false          // Optional: Show ram payer
  });

  //console.dir(result);

return result;

};

async function getRoutePlan() {
const result = await rpc.get_table_rows({
      json: true,               // Get the response as json
      code: 'mcp.io',      // Contract that we target
      scope: 'mcp.io',         // Account that owns the data
      table: 'routeplan',        // Table name
     // lower_bound: idx,
     // limit: 1,                // Maximum number of rows that we want to get
      reverse: false,           // Optional: Get reversed data
      show_payer: false          // Optional: Show ram payer
});  

 //console.dir(result);

return result;

};

async function getNMNWList() {
  const result = await rpc.get_table_rows({
        json: true,               // Get the response as json
        code: 'mcp.io',      // Contract that we target
        scope: 'mcp.io',         // Account that owns the data
        table: 'nmnwlist',        // Table name
       // lower_bound: idx,
       // limit: 1,                // Maximum number of rows that we want to get
        reverse: false,           // Optional: Get reversed data
        show_payer: false          // Optional: Show ram payer
  });  
  
   //console.dir(result);
  
  return result;
  
  };

async function getNMNWInfo() {
  const result = await rpc.get_table_rows({
        json: true,               // Get the response as json
        code: 'mcp.io',      // Contract that we target
        scope: 'mcp.io',         // Account that owns the data
        table: 'nmnwinfo',        // Table name
        // lower_bound: idx,
        // limit: 1,                // Maximum number of rows that we want to get
        reverse: false,           // Optional: Get reversed data
        show_payer: false          // Optional: Show ram payer
  });  
  
    //console.dir(result);
  
  return result;
  
};

async function getBuoyInfo() {
  const result = await rpc.get_table_rows({
        json: true,               // Get the response as json
        code: 'mcp.io',      // Contract that we target
        scope: 'mcp.io',         // Account that owns the data
        table: 'buoyinfo',        // Table name
        // lower_bound: idx,
        // limit: 1,                // Maximum number of rows that we want to get
        reverse: false,           // Optional: Get reversed data
        show_payer: false          // Optional: Show ram payer
  });  
  
    //console.dir(result);
  
  return result;
  
};

/*(async () => {

  var str = await getRoutePlan();

  console.log(str);

})();*/

/*(async () => {

    var str = await getTable(7);

    console.log(str);

})();*/

//console.dir(getTable());

module.exports = {

    getTable: getTable,
    getRoutePlan: getRoutePlan,
    getNMNWList: getNMNWList,
    getNMNWInfo: getNMNWInfo,
    getBuoyInfo: getBuoyInfo,

};



/*

(async () => {
const result = await rpc.get_table_rows({
    json: true,               // Get the response as json
    code: 'mcp.io',      // Contract that we target
    scope: 'mcp.io',         // Account that owns the data
    table: 'iddata',        // Table name
    limit: 10,                // Maximum number of rows that we want to get
    reverse: false,           // Optional: Get reversed data
    show_payer: false          // Optional: Show ram payer
  });
console.dir(result);

//var pars = JSON.parse(result);
//console.log(pars[1].id);

})();

*/