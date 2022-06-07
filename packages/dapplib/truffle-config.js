require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict argue system venture stove cruise spider clump inflict photo fortune gift'; 
let testAccounts = [
"0x7fa971c7d8acb64057ae20d8d2f84f5a3c7707fcade9503d971842e056fb8cac",
"0xb02945da226d1f889f0fcf12d641defdfd6a8f9990873a65b593885122567c7c",
"0xd72dc1709eb5587a4093eaaaf90c15fd7426d30e7c04717795c5bbc7dc52e973",
"0x1d58cb0e48f6d3e3abfa01389d98721a575387ee50afbf25ec346d62c90dc2e1",
"0xe7145c5555feda0e4726265e15a41b517140b2bf82b8d5617fec56d6e0a21db5",
"0x9a853954d1238474f7a14ba7c18e5f4586b86349efcdbcea6676aeb5bd42afdf",
"0x53fb22c0e00a2996a281e107db8fd8e2892ac528cd45cc93e4f9c3a06b7c2d44",
"0xe880155b3c8065f9d8b8911e59c1156385d101eb4bbbaf0810b7809e6f430aa3",
"0x5684ab2314e89e8957abbc4e54e8dcd290f0452b6cee2be6e49771c5a288250c",
"0xcded360c9ed4d689a3d34a54f8f9be937808ba1132e2f56abeb0dcfc0eac8587"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

