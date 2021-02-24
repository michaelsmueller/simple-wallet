import React from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import Web3ContextProvider from './contexts/web3Context';
import { getLibrary } from './utils/web3Library';
import Banner from './components/Banner';

export default function App(): JSX.Element {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ContextProvider>
        <h1>app boo</h1>
        <Banner />
      </Web3ContextProvider>
    </Web3ReactProvider>
  );
}
