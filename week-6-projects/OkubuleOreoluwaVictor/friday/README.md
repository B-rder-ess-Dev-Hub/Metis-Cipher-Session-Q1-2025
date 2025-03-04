DEPLOYED CONTRACT ADDRESS:0x1DBD531D295a4184e6D41e6da94C0C24D62561FC
DEPLOYED FRONTEND ADDRESS: https://vite-react-gt6l9dwz1-victorkreeds-projects.vercel.app


# Blockchain Voting System

A decentralized solidity voting application frontend built with React, Vite, Tailwind CSS. This application allows users to register as voters, add candidates, and cast votes securely on the blockchain.

## Features

- Connect to MetaMask wallet
- Register as a voter with personal information
- Add candidates to the ballot
- Vote for candidates from your political party
- Real-time updates of vote counts
- Responsive UI with Tailwind CSS

## Project Structure

```
src/
├── components/
│   └── VotingApp.jsx         # Main voting interface component
├── contexts/
│   └── Web3Context.jsx       # React context for Ethereum interactions
├── utils/
│   └── contractConfig.js     # Smart contract configuration (address & ABI)
├── App.jsx                   # Main application component
├── App.css                   # Application styles
├── main.jsx                  # Application entry point
└── index.css                 # Global styles including Tailwind
```

## Prerequisites

- Node.js (v14+)
- npm 
- MetaMask browser extension
- Access to an Ethereum network (mainnet, testnet)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/blockchain-voting.git
   cd blockchain-voting
   ```

2. Install dependencies:
   
   npm install
   install vite-react
   install lucide-react
   install tailwindcss
   

3. Configure your smart contract:
   - Deploy the Voting smart contract to an Ethereum network
   - Copy the contract address and ABI to `src/utils/contractConfig.js`

4. Start the development server:
   ```
   npm run dev
   ```

## Smart Contract Configuration

Create a `contractConfig.js` file in the `src/utils` directory with the following content:

 Replace with the deployed contract address
export const CONTRACT_ADDRESS = 'ContractAddressHere';

// Replace with your contract ABI from compilation
export const CONTRACT_ABI = [
  // Your ABI
  
];


## Usage

1. Connect your MetaMask wallet using the "Connect Wallet" button
2. Register as a voter with your details
3. Add candidates if needed
4. Vote for your preferred candidate
5. View real-time vote results in the candidates table

## Development

### Required Dependencies

```json
"dependencies": {
  "ethers": "^5.7.2",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "lucide-react": "^0.263.1"
},
"devDependencies": {
  "@vitejs/plugin-react": "^4.0.0",
  "autoprefixer": "^10.4.14",
  "postcss": "^8.4.24",
  "tailwindcss": "^3.3.2",
  "vite": "^4.3.9",
  "vite-plugin-node-polyfills": "^0.9.0"
}
```

### Vite Configuration

The project uses a custom Vite configuration to handle Ethereum-related polyfills:

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      include: ['buffer', 'process', 'util', 'stream']
    })
  ],
  resolve: {
    alias: {
      process: 'process/browser',
      stream: 'stream-browserify',
      util: 'util'
    }
  },
  define: {
    'process.env': {}
  }
});
```

## Troubleshooting

If you encounter a blank page:

1. Check browser console (F12) for errors
2. Verify your MetaMask is connected to the correct network
3. Ensure contract address and ABI in `contractConfig.js` are correct
4. Check that Web3Context is properly wrapping your application
5. Make sure all paths in your imports are correct


Contributions are welcome! Please feel free to submit a Pull Request.
