import React, { useState, useEffect, useContext } from 'react';
import { Web3Context } from '../../contexts/Web3Context';
import { Info, Check, AlertTriangle } from 'lucide-react';

const VotingApp = () => {
  
  const { 
    contract, 
    account, 
    isConnected, 
    connectWallet, 
    error: web3Error 
  } = useContext(Web3Context);

  
  const [loading, setLoading] = useState(true);
  const [candidates, setCandidates] = useState([]);
  const [voterInfo, setVoterInfo] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });
  
  
  const [candidateName, setCandidateName] = useState('');
  const [candidateParty, setCandidateParty] = useState('');
  const [voterName, setVoterName] = useState('');
  const [voterAge, setVoterAge] = useState('');
  const [voterNationalId, setVoterNationalId] = useState('');
  const [voterParty, setVoterParty] = useState('');

  // Helper function for notifications
  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => setNotification({ show: false, message: '', type: '' }), 5000);
  };

  // Load data when connected
  useEffect(() => {
    const loadBlockchainData = async () => {
      if (isConnected && contract) {
        setLoading(true);
        try {
          // Load voter information
          const voter = await contract.Voter(account);
          if (parseInt(voter.voter_no) > 0) {
            setVoterInfo({
              voter_no: parseInt(voter.voter_no),
              votername: voter.votername,
              age: parseInt(voter.age),
              NationalID_no: parseInt(voter.NationalID_no),
              politicalparty: voter.politicalparty,
              voteraddr: voter.voteraddr
            });
          }
          
          // Check if user has voted
          const voted = await contract.voted(account);
          setHasVoted(voted);
          
          // Load candidates
          const candidatesCount = await contract.candidatesCount();
          const candidatesArray = [];
          
          for (let i = 1; i <= parseInt(candidatesCount); i++) {
            const [id, name, voteCount, politicalparty] = await contract.getCandidate(i);
            candidatesArray.push({
              id: parseInt(id),
              name,
              voteCount: parseInt(voteCount),
              politicalparty
            });
          }
          
          setCandidates(candidatesArray);
        } catch (error) {
          showNotification(`Error loading data: ${error.message}`, 'error');
        } finally {
          setLoading(false);
        }
      }
    };
    
    if (web3Error) {
      showNotification(web3Error, 'error');
    }
    
    loadBlockchainData();
  }, [isConnected, contract, account, web3Error]);

  // Handle voter registration
  const registerVoter = async (e) => {
    e.preventDefault();
    
    if (!voterName || !voterAge || !voterNationalId || !voterParty) {
      showNotification('Please fill all fields', 'error');
      return;
    }
    
    try {
      setLoading(true);
      const tx = await contract.addvoter(voterName, voterAge, voterNationalId, voterParty);
      showNotification('Transaction submitted. Please wait for confirmation...', 'info');
      
      // Wait for transaction confirmation
      await tx.wait();
      
      // Reload voter info
      const voter = await contract.Voter(account);
      setVoterInfo({
        voter_no: parseInt(voter.voter_no),
        votername: voter.votername,
        age: parseInt(voter.age),
        NationalID_no: parseInt(voter.NationalID_no),
        politicalparty: voter.politicalparty,
        voteraddr: voter.voteraddr
      });
      
      showNotification('Voter registered successfully!', 'success');
    } catch (error) {
      showNotification(`Registration failed: ${error.message}`, 'error');
    } finally {
      setLoading(false);
    }
  };

  // Handle candidate registration
  const registerCandidate = async (e) => {
    e.preventDefault();
    
    if (!candidateName || !candidateParty) {
      showNotification('Please fill all fields', 'error');
      return;
    }
    
    try {
      setLoading(true);
      const tx = await contract.addCandidate(candidateName, candidateParty);
      showNotification('Transaction submitted. Please wait for confirmation...', 'info');
      
      // Wait for transaction confirmation
      await tx.wait();
      
      // Reload candidates
      const candidatesCount = await contract.candidatesCount();
      const [id, name, voteCount, politicalparty] = await contract.getCandidate(candidatesCount);
      
      setCandidates(prev => [...prev, {
        id: parseInt(id),
        name,
        voteCount: parseInt(voteCount),
        politicalparty
      }]);
      
      setCandidateName('');
      setCandidateParty('');
      showNotification('Candidate added successfully!', 'success');
    } catch (error) {
      showNotification(`Adding candidate failed: ${error.message}`, 'error');
    } finally {
      setLoading(false);
    }
  };

  // Handle vote submission
  const submitVote = async (candidateId) => {
    try {
      setLoading(true);
      const tx = await contract.vote(candidateId);
      showNotification('Vote submitted. Please wait for confirmation...', 'info');
      
      // Wait for transaction confirmation
      await tx.wait();
      
      // Update UI
      setHasVoted(true);
      
      // Update candidate vote count
      setCandidates(prev => prev.map(c => 
        c.id === candidateId 
          ? {...c, voteCount: c.voteCount + 1} 
          : c
      ));
      
      showNotification('Vote submitted successfully!', 'success');
    } catch (error) {
      showNotification(`Voting failed: ${error.message}`, 'error');
    } finally {
      setLoading(false);
    }
  };

  // Listen for vote events
  useEffect(() => {
    if (contract) {
      const voteEvent = contract.filters.VotedEvent();
      
      const handleVoteEvent = async (candidateId) => {
        const id = parseInt(candidateId);
        // Reload the specific candidate
        const [, name, voteCount, politicalparty] = await contract.getCandidate(id);
        
        setCandidates(prev => 
          prev.map(c => c.id === id 
            ? {...c, voteCount: parseInt(voteCount)} 
            : c
          )
        );
      };
      
      contract.on(voteEvent, handleVoteEvent);
      
      return () => {
        contract.off(voteEvent, handleVoteEvent);
      };
    }
  }, [contract]);

  // Filtered candidates (only show candidates from voter's party if registered)
  const filteredCandidates = voterInfo?.politicalparty 
    ? candidates.filter(c => c.politicalparty === voterInfo.politicalparty)
    : candidates;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Notification */}
      {notification.show && (
        <div className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg max-w-md z-50 ${
          notification.type === 'success' ? 'bg-green-100 text-green-800' : 
          notification.type === 'error' ? 'bg-red-100 text-red-800' : 
          'bg-blue-100 text-blue-800'
        }`}>
          <div className="flex items-center">
            {notification.type === 'success' ? <Check size={20} className="mr-2" /> : 
             notification.type === 'error' ? <AlertTriangle size={20} className="mr-2" /> :
             <Info size={20} className="mr-2" />}
            <p>{notification.message}</p>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-indigo-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Voting System</h1>
          <div className="flex items-center space-x-4">
            {isConnected ? (
              <div className="bg-indigo-700 px-4 py-2 rounded-lg">
                <p className="text-sm">Connected: {account.substring(0, 6)}...{account.substring(account.length - 4)}</p>
              </div>
            ) : (
              <button 
                onClick={connectWallet}
                className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-indigo-50"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        {!isConnected ? (
          <div className="flex flex-col items-center justify-center h-64 bg-white p-8 rounded-lg shadow-md">
            <AlertTriangle size={48} className="text-yellow-500 mb-4" />
            <h2 className="text-xl font-bold mb-2">Wallet Connection Required</h2>
            <p className="text-gray-600 mb-4 text-center">Please connect your Ethereum wallet to use this application</p>
            <button 
              onClick={connectWallet}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700"
            >
              Connect Wallet
            </button>
          </div>
        ) : loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Voter Registration */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Voter Registration</h2>
              
              {voterInfo && voterInfo.voter_no > 0 ? (
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-medium text-green-800 mb-2">Registered Voter</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><span className="font-medium">Name:</span> {voterInfo.votername}</li>
                    <li><span className="font-medium">Age:</span> {voterInfo.age}</li>
                    <li><span className="font-medium">National ID:</span> {voterInfo.NationalID_no}</li>
                    <li><span className="font-medium">Party:</span> {voterInfo.politicalparty}</li>
                  </ul>
                </div>
              ) : (
                <form onSubmit={registerVoter} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={voterName}
                      onChange={(e) => setVoterName(e.target.value)}
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                    <input
                      type="number"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={voterAge}
                      onChange={(e) => setVoterAge(e.target.value)}
                      placeholder="Enter your age"
                      min="18"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">National ID</label>
                    <input
                      type="number"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={voterNationalId}
                      onChange={(e) => setVoterNationalId(e.target.value)}
                      placeholder="Enter your national ID"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Political Party</label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-md bg-white"
                      value={voterParty}
                      onChange={(e) => setVoterParty(e.target.value)}
                    >
                      <option value="">Select a party</option>
                      <option value="Party A">Party A</option>
                      <option value="Party B">Party B</option>
                      <option value="Party C">Party C</option>
                      <option value="Party D">Party D</option>
                      <option value="Party E">Party E</option>
                      <option value="Party F">Party F</option>
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"
                  >
                    Register as Voter
                  </button>
                </form>
              )}
            </div>
            
            {/* Candidate Registration */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Add Candidate</h2>
              <form onSubmit={registerCandidate} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Candidate Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={candidateName}
                    onChange={(e) => setCandidateName(e.target.value)}
                    placeholder="Enter candidate name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Political Party</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md bg-white"
                    value={candidateParty}
                    onChange={(e) => setCandidateParty(e.target.value)}
                  >
                    <option value="">Select a party</option>
                    <option value="Party A">Party A</option>
                    <option value="Party B">Party B</option>
                    <option value="Party C">Party C</option>
                    <option value="Party D">Party D</option>
                    <option value="Party E">Party E</option>
                    <option value="Party F">Party F</option>
                  </select>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"
                >
                  Add Candidate
                </button>
              </form>
            </div>
            
            {/* Voting Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Cast Your Vote</h2>
              
              {!voterInfo || voterInfo.voter_no === 0 ? (
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="text-yellow-800">Please register as a voter before casting your vote.</p>
                </div>
              ) : hasVoted ? (
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-green-800">Thank you for voting!</p>
                </div>
              ) : filteredCandidates.length === 0 ? (
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="text-yellow-800">No candidates from your party are available.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-blue-50 p-3 rounded-lg mb-4">
                    <p className="text-blue-800 text-sm">You can only vote for candidates from <span className="font-medium">{voterInfo.politicalparty}</span></p>
                  </div>
                  
                  {filteredCandidates.map(candidate => (
                    <div key={candidate.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-medium">{candidate.name}</h3>
                          <p className="text-sm text-gray-500">{candidate.politicalparty}</p>
                        </div>
                        <button
                          onClick={() => submitVote(candidate.id)}
                          className="bg-indigo-600 text-white py-1 px-3 rounded-md hover:bg-indigo-700 transition duration-200 text-sm"
                        >
                          Vote
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* Candidates List */}
        {isConnected && !loading && (
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4 text-gray-800">All Candidates</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Party</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Votes</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {candidates.map(candidate => (
                    <tr key={candidate.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{candidate.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{candidate.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{candidate.politicalparty}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{candidate.voteCount}</td>
                    </tr>
                  ))}
                  {candidates.length === 0 && (
                    <tr>
                      <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500">No candidates available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default VotingApp;
