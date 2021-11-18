import { useState } from 'react';
import Web3 from 'web3';
import { CONTRACT_ABI, CONTRACT_ADDRESS} from './ABI';

export const TransState = () => {
    const [balance, setBalance] = useState(0);
    const [expense, setExpense] = useState(0);
    const [profit, setProfit] = useState(0);

    const state = {
        bal: balance,
        exp: expense,
        pro: profit
    }
    
}

export const loadChain = async() => {
    try {
        if(Web3.givenProvider){
            const web3 = new Web3(Web3.givenProvider);
            await Web3.givenProvider.enable();
            const accounts = await web3.eth.getAccounts();
            const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
            // console.log("Contract", contract.methods);
            // const currentBalance = await contract.methods.currentBalance();
            // console.log("Show Balance",currentBalance)
        }
        
    } catch (error) {
        console.log(error,"error")
    }
}