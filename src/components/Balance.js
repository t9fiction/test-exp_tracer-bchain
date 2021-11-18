import Web3 from 'web3';
import { CONTRACT_ABI, CONTRACT_ADDRESS} from '../bchain/ABI' ;

export const Balance = async() => {
    try {
        if(Web3.givenProvider){
            const web3 = new Web3(Web3.givenProvider);
            await Web3.givenProvider.enable();
            const accounts = await web3.eth.getAccounts();
            const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
            // console.log("Contract", contract.methods);
            const showBalance = await (contract.methods.currentBalance().send({from: accounts[0]})((err,result)=>{
                if(!err){
                    console.log(result)
                }else{
                    console.log(err)
                }
            }));
            console.log("Show Balance",showBalance)

        }
        
    } catch (error) {
        console.log(error,"error")
    }
    return(
        <div>
            Balance : {}
        </div>
    )
}