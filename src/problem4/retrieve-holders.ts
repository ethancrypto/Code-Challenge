import {
    JsonRpcProvider,
    Provider
} from '@ethersproject/providers';
import {
    Contract
} from '@ethersproject/contracts';
import {
    BigNumber
} from '@ethersproject/bignumber';
import dotenv from 'dotenv';
import contractABI from './contractABI/tokenABI.json';

// Load process env
dotenv.config()

// Constants for this app
const contractAddress: string = "0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c";
const addresses: Array < string > = ["0x123d475e13aa54a43a7421d94caa4459da021c77",
    "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
    "0xfe808b079187cc460f47374580f5fb47c82b87a5"
];
// Initialize provider
const provider: Provider = new JsonRpcProvider(process.env.MAINNET_PROVIDER);
// Initialize Contract
const tokenContract: Contract = new Contract(contractAddress, contractABI, provider);
// get balances through the addressses map
addresses.map(async address => {
    const balance: BigNumber = await tokenContract.balanceOf(address);
    console.log(address, "  ", balance.toNumber());
})