import React from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import Web3ContextProvider from 'contexts/web3Context';
import { getLibrary } from 'utils/web3Library';
import { Balance, Banner, Head } from 'components';
import './App.css';

export default function App(): JSX.Element {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ContextProvider>
        <Head />
        <Banner />
        <Balance />
      </Web3ContextProvider>
    </Web3ReactProvider>
  );
}
