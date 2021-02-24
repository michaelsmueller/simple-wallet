import React, { createContext } from 'react';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';

export const Web3Context = createContext(null);

type Props = {
  children: React.ReactNode;
};

const Web3ContextProvider: React.FC<Props> = ({ children }): JSX.Element => {
  const web3Context = useWeb3React();
  const injectedConnector = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42, 1337] });
  return <Web3Context.Provider value={{ web3Context, injectedConnector }}>{children}</Web3Context.Provider>;
};

export default Web3ContextProvider;
