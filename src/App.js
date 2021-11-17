import './App.css';
import {Balance} from './components/Balance';
import { SendEther } from './components/SendEther';
import {loadChain} from './bchain/loadChain';
import { useState } from 'react';

function App() {
  const [state, setState] = useState();
  // const handleSubmit = ()=>{
  //   setState = loadChain;
  // }
  return (
    <div className="App">
      <header className="App-header">
          TOKEN MGMT
      </header>
      <div>
      <button onClick = {loadChain} >Connect Wallet</button>
      </div>
      <div>
      <button onClick = {Balance} >Show Balance</button>
      </div>
      <button onClick = {SendEther} >Send Ether from Contract</button>
    </div>
  );
}

export default App;
