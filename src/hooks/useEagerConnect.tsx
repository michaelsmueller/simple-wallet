import { useContext, useEffect } from 'react';
import { Web3Context } from '../contexts/web3Context';

export default function useEagerConnect() {
  const { web3Context, injectedConnector } = useContext(Web3Context);
  const { activate } = web3Context;

  useEffect(() => {
    const checkConnection = async () => {
      const isAuthorized = await injectedConnector?.isAuthorized();
      if (isAuthorized) activate(injectedConnector);
    };
    checkConnection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // we only want to run on mount
}
