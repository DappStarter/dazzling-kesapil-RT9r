require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remember hole inflict argue bottom suffer'; 
let testAccounts = [
"0x0fbc888d4712695d49d7176f87ced670f376465ee3d9c9506d0d5a10f1ce11af",
"0x1974f2e995fe96a10f62350352498c20baca12ecd82a0834b61dffe6089c3554",
"0xa22ec5ba958bf96cb0231b7b02c6119df85e1339fe555ce9b17cd64623648b80",
"0xbd34c034b9597b1d50c11444d8289305aaf508cd8a5069a1196dbe4acf4b988e",
"0x48f9890f6af8dbe2cf37490ced9b7b947d87acd6c4d724b589ca2e16f90062fb",
"0x0fd2f5652c5f913dea3c4fe3bdf90faf0edf3f5bf02f22d218858809d6a38d79",
"0x507ea223bba52b1f522c41624708711703c37afc214f215b7b2cd5b32f24cd9a",
"0xc5c5704afab9fc8d893e7fee5e069a67bbd2911d98f81ce6d2fc5b5b65eceb2d",
"0x3b3c5e6a919f346da22533bf71b4dbf6042daa503750f5bedb71544687e0ef2e",
"0xf2aa7901bebaf2ab24e6cc4fc1bc1fc2165c6d102c4f91fbbcb670dca7b30b2a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


