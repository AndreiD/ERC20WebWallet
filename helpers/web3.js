import Web3 from 'web3';
import { Constants } from "./constants";

const web3 = new Web3(new Web3.providers.HttpProvider(Constants.MAINNET_PROVIDER));
export default web3;
