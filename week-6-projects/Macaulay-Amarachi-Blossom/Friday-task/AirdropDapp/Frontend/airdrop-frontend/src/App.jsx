import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { Toaster, toast } from 'react-hot-toast';
import merkleData from '../merkle-data.json';

const contractABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_token",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "_merkleRoot",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "_claimAmount",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "OwnableInvalidOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "OwnableUnauthorizedAccount",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Claimed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32[]",
        "name": "merkleProof",
        "type": "bytes32[]"
      }
    ],
    "name": "claim",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "claimAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "hasClaimed",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "bytes32[]",
        "name": "merkleProof",
        "type": "bytes32[]"
      }
    ],
    "name": "isEligible",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "merkleRoot",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "token",
    "outputs": [
      {
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_claimAmount",
        "type": "uint256"
      }
    ],
    "name": "updateClaimAmount",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "_merkleRoot",
        "type": "bytes32"
      }
    ],
    "name": "updateMerkleRoot",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "bytes32[]",
        "name": "merkleProof",
        "type": "bytes32[]"
      }
    ],
    "name": "verify",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdrawUnclaimed",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

function App() {

  const contractAddress = "0x0Bfd5b89957a2c96d31e128efE5B37bdE334d532";

  // State variables
  const [account, setAccount] = useState('');
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isEligible, setIsEligible] = useState(false);
  const [hasClaimed, setHasClaimed] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [isClaiming, setIsClaiming] = useState(false);
  const [claimAmount, setClaimAmount] = useState('0');
  const [merkleProof, setMerkleProof] = useState([]);
  const [txHash, setTxHash] = useState('');

  // Connect wallet function
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        
        const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
        const web3Signer = web3Provider.getSigner();
        
        setProvider(web3Provider);
        setSigner(web3Signer);
        setAccount(accounts[0]);
        setIsConnected(true);
        
        const airdropContract = new ethers.Contract(
          contractAddress,
          contractABI,
          web3Signer
        );
        
        setContract(airdropContract);
        
        toast.success('Wallet connected!');
      } catch (error) {
        console.error("Error connecting to wallet:", error);
        toast.error('Failed to connect wallet');
      }
    } else {
      toast.error('Please install MetaMask!');
    }
  };
  
  // Check if wallet is already connected
  useEffect(() => {
    const checkIfWalletIsConnected = async () => {
      if (window.ethereum) {
        try {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          setProvider(provider);
          
          const accounts = await provider.listAccounts();
          if (accounts.length > 0) {
            const signer = provider.getSigner();
            setSigner(signer);
            setAccount(accounts[0]);
            setIsConnected(true);
            
            const airdropContract = new ethers.Contract(
              contractAddress,
              contractABI,
              signer
            );
            
            setContract(airdropContract);
          }
        } catch (error) {
          console.error("Error checking wallet connection:", error);
        }
      }
    };

    checkIfWalletIsConnected();
    
    // Set up event listeners for wallet
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        } else {
          setIsConnected(false);
          setAccount('');
        }
      });
    }
  }, []);

  // Check eligibility and claim status
  useEffect(() => {
    const checkEligibility = async () => {
      if (contract && account) {
        try {
          setIsChecking(true);
          
          // Check if user has already claimed
          const claimed = await contract.hasClaimed(account.toLowerCase());
          setHasClaimed(claimed);
          
          // Get claim amount
          const amount = await contract.claimAmount();
          setClaimAmount(ethers.utils.formatEther(amount));
          
          // Get merkle proof from merkle-data.json
          const proof = getMerkleProof(account);
          setMerkleProof(proof);

          console.log("Contract Merkle Root:", await contract.merkleRoot())
          
          if (proof && proof.length > 0) {
            // Verify if the user is eligible (has a valid proof)
            const eligible = await contract.verify(account.toLowerCase(), proof);
            setIsEligible(eligible);
          } else {
            setIsEligible(false);
          }
        } catch (error) {
          console.error("Error checking eligibility:", error);
          toast.error('Error checking eligibility');
        } finally {
          setIsChecking(false);
        }
      }
    };
    
    if (isConnected) {
      checkEligibility();
    }
  }, [contract, account, isConnected]);

  // Function to get merkle proof from merkle-data.json
  const getMerkleProof = (address) => {
    const normalizedAddress = address.toLowerCase();
    const userData = merkleData.whitelist[normalizedAddress];
    
    if (userData && userData.proof) {
      console.log("Leaf:", userData.leaf);
      return userData.proof;
    } else {
      console.log(`Address ${address} not found in whitelist.`)
    }
    
    return [];
  };

  // Function to claim tokens
  const claimTokens = async () => {
    if (!contract || !isEligible || hasClaimed) return;
    
    try {
      setIsClaiming(true);
      toast.loading('Claiming tokens...');
      
      const tx = await contract.claim(merkleProof);
      setTxHash(tx.hash);
      
      // Wait for transaction to be mined
      await tx.wait();
      
      setHasClaimed(true);
      toast.dismiss();
      toast.success('Tokens claimed successfully!');
    } catch (error) {
      console.error("Error claiming tokens:", error);
      if (error.reason) {
        toast.error(`Error claiming tokens: ${error.reason}`)
      } else {
        toast.dismiss();
        toast.error('Error claiming tokens');
      }
    } finally {
      setIsClaiming(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Toaster position="top-right" />
      
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Token Airdrop</h1>

          {isConnected ? (
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm">
                Connected
              </span>
              <span className="text-sm text-gray-500">
                {account.substring(0, 6)}...{account.substring(account.length - 4)}
              </span>
            </div>
          ) : (
            <button
              onClick={connectWallet}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Connect Wallet
            </button>
          )}
        </div>
      </header>
      
      <main className="flex-grow max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {!isConnected ? (
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Welcome to Token Airdrop</h2>
            <p className="text-gray-600 mb-6">Connect your wallet to check eligibility and claim tokens.</p>
            <button
              onClick={connectWallet}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Connect Wallet
            </button>
          </div>
        ) : isChecking ? (
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Checking eligibility...</p>
          </div>
        ) : (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Your Airdrop Status</h2>
            
            <div className="mb-6">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <span className="font-medium w-32">Eligibility:</span>
                  {isEligible ? (
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded">Eligible</span>
                  ) : (
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded">Not Eligible</span>
                  )}
                </div>
                
                <div className="flex items-center">
                  <span className="font-medium w-32">Claim Status:</span>
                  {hasClaimed ? (
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded">Claimed</span>
                  ) : (
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded">Not Claimed</span>
                  )}
                </div>
                
                {isEligible && (
                  <div className="flex items-center">
                    <span className="font-medium w-32">Claim Amount:</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">{claimAmount} Tokens</span>
                  </div>
                )}
              </div>
            </div>
            
            {isEligible && !hasClaimed && (
              <button
                onClick={claimTokens}
                disabled={isClaiming}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isClaiming ? "Claiming..." : "Claim Tokens"}
              </button>
            )}
            
            {!isEligible && (
              <div className="mt-4 bg-red-50 border border-red-200 rounded-md p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">Not Eligible</h3>
                    <div className="mt-2 text-sm text-red-700">
                      <p>
                        Your address is not in the whitelist for this airdrop.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {hasClaimed && (
              <div className="mt-4 bg-green-50 border border-green-200 rounded-md p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">Tokens Claimed</h3>
                    <div className="mt-2 text-sm text-green-700">
                      <p>
                        You have successfully claimed your tokens!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {txHash && (
              <div className="mt-4">
                <h3 className="text-lg font-medium mb-2">Transaction Details</h3>
                <div className="bg-gray-100 p-3 rounded overflow-x-auto">
                  <p className="text-sm break-all">
                    Transaction Hash: {txHash}
                  </p>
                  <a 
                    href={`https://etherscan.io/tx/${txHash}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    View on Etherscan
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
      
      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Token Airdrop. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;