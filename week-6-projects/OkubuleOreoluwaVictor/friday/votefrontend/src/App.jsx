import React from 'react';
import { Web3Provider } from '../contexts/Web3Context';
import VotingApp from './components/VotingApp';

function App() {
  return (
    <Web3Provider>
      <VotingApp />
    </Web3Provider>
  );
}

export default App;