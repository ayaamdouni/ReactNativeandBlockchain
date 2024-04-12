/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import '@walletconnect/react-native-compat';
import {WagmiConfig} from 'wagmi';
import {mainnet, polygon, arbitrum, sepolia} from 'viem/chains';
import {
  createWeb3Modal,
  defaultWagmiConfig,
  Web3Modal,
} from '@web3modal/wagmi-react-native';
import {W3mButton} from '@web3modal/wagmi-react-native';
import ContractConnect from './src/components/ContractConnect';
import {PROJECTID} from '@env';

const metadata = {
  name: 'Web3Modal RN',
  description: 'Web3Modal RN Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com',
  },
};

const chains = [sepolia, mainnet, polygon, arbitrum];

const wagmiConfig = defaultWagmiConfig({chains, PROJECTID, metadata});

createWeb3Modal({
  PROJECTID,
  chains,
  wagmiConfig,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

const App = () => {
  return (
    <WagmiConfig config={wagmiConfig}>
      {/* Button to open the modal */}
      <W3mButton balance="show" />
      <ContractConnect />
      <Web3Modal />
    </WagmiConfig>
  );
};

export default App;
