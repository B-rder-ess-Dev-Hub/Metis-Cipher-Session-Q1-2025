import { http, createConfig } from 'wagmi';
import { defineChain } from 'viem/chains';

const metisSepolia = defineChain({
  id: 59902,
  name: 'Metis Sepolia',
  rpcUrls: {
    default: { http: [process.env.METIS_SEPOLIA_RPC_URL] },
  },
});

const metisMainnet = defineChain({
  id: 1088,
  name: 'Metis Mainnet',
  rpcUrls: {
    default: { http: [process.env.METIS_MAINNET_RPC_URL] },
  },
});

export const wagmiConfig = createConfig({
  chains: [metisSepolia, metisMainnet],
  transports: {
    [metisSepolia.id]: http(),
    [metisMainnet.id]: http(),
  },
});
