class blockchain{
    constructor(){
        this.api = "https://blockchain.info"
        this.headers={"Accept-Encoding":"gzip","Connection":"Keep-Alive","User-Agent":"okhttp/4.9.3"}
    }
    async btc_currency(currency,value){
        let req=await fetch(`${this.api}/tobtc?currency=${currency}&value=${value}`,{method:"GET",headers: this.headers});
        return req.text();
    }
}
module.exports = {blockchain};