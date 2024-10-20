const { GENESIS_DATA } =  require('./config');
class Block{
    constructor({timestamp,prevHash,hash,data}){
        this.timestamp =timestamp;
        this.prevHash = prevHash;
        this.hash = hash;
        this.data = data;
    }
    static genesis(){
        return new this(GENESIS_DATA);
    }
}

const block1 = new Block({
    timestamp:'2/09/2022',prevHash:'0xabc',hash:'0xc12',data:'hello'
});
//console.log(block1);
const genesisBlock = Block.genesis();
console.log(genesisBlock);
