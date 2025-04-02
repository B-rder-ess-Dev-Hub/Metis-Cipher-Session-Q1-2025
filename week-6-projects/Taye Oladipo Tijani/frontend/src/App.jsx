import { useAccount, useConnect, useDisconnect } from "wagmi";
import { ethers } from "ethers";
import { useState } from "react";
import airdropABI from "./AirdropABI.json"; // Import ABI file

const AIRDROP_CONTRACT_ADDRESS = "0x541337D10C9918193Da502598C2D05c93f76c200"; // Replace with your contract address

// Replace this with the actual Merkle proofs for each address
const MERKLE_PROOFS = {
  "0xb53bdfa73828d98d08e11bdcb5cd08ecd04572daa1333a01c923ef1d955c7057": [
    "faf1e725428654e539dabea30f7554fc6fc3364c324d32114943bbe0608ef17a",
    "7cbef0c54c4954aeeb42bb2a7ed5d64cacc651cc3594f0b10729d0ae4fc5a25a",
    "4030166daf18c0337ec98ffe689bcc83ad3e8e60e64c29a637bbdc723503cc84"
  ],
  "0xfaf1e725428654e539dabea30f7554fc6fc3364c324d32114943bbe0608ef17a": [
    "b53bdfa73828d98d08e11bdcb5cd08ecd04572daa1333a01c923ef1d955c7057",
    "7cbef0c54c4954aeeb42bb2a7ed5d64cacc651cc3594f0b10729d0ae4fc5a25a",
    "4030166daf18c0337ec98ffe689bcc83ad3e8e60e64c29a637bbdc723503cc84"
  ],
  "0x7cbef0c54c4954aeeb42bb2a7ed5d64cacc651cc3594f0b10729d0ae4fc5a25a": [
    "b53bdfa73828d98d08e11bdcb5cd08ecd04572daa1333a01c923ef1d955c7057",
    "faf1e725428654e539dabea30f7554fc6fc3364c324d32114943bbe0608ef17a",
    "4030166daf18c0337ec98ffe689bcc83ad3e8e60e64c29a637bbdc723503cc84"
  ],
  "0x4030166daf18c0337ec98ffe689bcc83ad3e8e60e64c29a637bbdc723503cc84": [
    "b53bdfa73828d98d08e11bdcb5cd08ecd04572daa1333a01c923ef1d955c7057",
    "faf1e725428654e539dabea30f7554fc6fc3364c324d32114943bbe0608ef17a",
    "7cbef0c54c4954aeeb42bb2a7ed5d64cacc651cc3594f0b10729d0ae4fc5a25a"
  ]
};

function App() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const [status, setStatus] = useState("");

  async function claimAirdrop() {
    if (!address) return setStatus("Please connect your wallet.");
    if (!MERKLE_PROOFS[address]) return setStatus("Not whitelisted.");

    try {
      // Check if window.ethereum is available
      if (typeof window.ethereum === "undefined") {
        return setStatus("Ethereum provider not found.");
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(AIRDROP_CONTRACT_ADDRESS, airdropABI, signer);

      const amount = ethers.parseUnits("10", 18); // Adjust as needed
      const proof = MERKLE_PROOFS[address];

      const tx = await contract.claimAirdrop(amount, proof);
      await tx.wait();
      setStatus("Airdrop claimed successfully!");
    } catch (error) {
      console.error(error);
      setStatus("Transaction failed.");
    }
  }

  return (
    <div>
      <h1>Airdrop Dapp</h1>

      {!isConnected ? (
        <>
          <h3>Connect Your Wallet</h3>
          {connectors.map((connector) => (
            <button key={connector.id} onClick={() => connect(connector)}>
              Connect with {connector.name}
            </button>
          ))}
        </>
      ) : (
        <>
          <p>Connected: {address}</p>
          <button onClick={disconnect}>Disconnect Wallet</button>
        </>
      )}

      {isConnected && (
        <button onClick={claimAirdrop}>Claim Airdrop</button>
      )}

      <p>{status}</p>
    </div>
  );
}

export default App;
