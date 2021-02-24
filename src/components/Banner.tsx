/* eslint-disable no-console */
import React, { useContext } from 'react';
import { Web3Context } from '../contexts/web3Context';
import useEagerConnect from '../hooks/useEagerConnect';

export default function Banner() {
  const { web3Context, injectedConnector } = useContext(Web3Context);
  const { chainId, account, activate } = web3Context;
  useEagerConnect();
  const connect = () => activate(injectedConnector);

  const networks = {
    1: 'Ethereum Mainnet',
    3: 'Ropsten Test Network',
    4: 'Rinkeby Test Network',
    5: 'Goerli Test Network',
    42: 'Kovan Test Network',
  };

  const getNetwork = () => {
    if (chainId in networks) return networks[chainId];
    return 'Custom Network';
  };

  return (
    <div>
      <div>
        <a href='/'>
          <img src='gloom-logo.png' alt='Gloom logo' />
        </a>
        <div>
          {chainId && (
            <div>
              {getNetwork()} (chain ID {chainId})
            </div>
          )}
          <div>
            {account || (
              <button type='button' onClick={connect}>
                connect account
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
