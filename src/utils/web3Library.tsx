import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers';

export const getLibrary = (provider: any): Web3Provider => {
  return new Web3Provider(provider);
};

export const getSigner = (library: Web3Provider): JsonRpcSigner => {
  const provider = new Web3Provider(library.provider);
  return provider.getSigner();
};
