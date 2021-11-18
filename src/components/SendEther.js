import Web3 from 'web3';
import { CONTRACT_ABI, CONTRACT_ADDRESS} from '../bchain/ABI' ;
import {TransState} from '../bchain/loadChain';

export const SendEther = async() => {
    try {
        if(Web3.givenProvider){
            const web3 = new Web3(Web3.givenProvider);
            await Web3.givenProvider.enable();
            const accounts = await web3.eth.getAccounts();
            const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
            // console.log("Contract", contract.methods);
            const sendEther = await contract.methods.transferEther("0xB28EB6F6baafD0b33D64a3fdf47620849Eb2e494", 1).send({from: accounts[0]});
            TransState.state.exp += sendEther; 
            console.log("Show Balance",TransState)

        }
        
    } catch (error) {
        console.log(error,"error")
    }
}