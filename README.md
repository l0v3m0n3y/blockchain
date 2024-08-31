# blockchain
JavaScript library for blockchain.info
# main
```js
async function main(){
    const {blockchain} = require('./blockchain');
    const info= new blockchain();
    let req=await info.btc_currency("USD",1000)
    console.log(req)
}
main()
```
