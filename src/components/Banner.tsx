/* eslint-disable no-console */
import React, { useContext } from 'react';
import { Web3Context } from 'contexts/web3Context';
import useEagerConnect from 'hooks/useEagerConnect';
import { Button, PageHeader, Typography, Row, Col } from 'antd';

export default function Banner() {
  const { web3Context, injectedConnector } = useContext(Web3Context);
  const { chainId, account, activate, deactivate } = web3Context;
  useEagerConnect();
  const connect = () => activate(injectedConnector);
  const disconnect = () => deactivate(injectedConnector);

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

  const { Text } = Typography;
  return (
    <div style={{ margin: 20 }}>
      <Row align='middle'>
        <Col span={18}>
          <PageHeader title='Simple wallet' subTitle='check your ETH balance' />
        </Col>
        <Col span={6}>
          <Row>
            {chainId && (
              <Text type='secondary' style={{ fontSize: 12 }}>
                {getNetwork()} (chain {chainId})
              </Text>
            )}
          </Row>
          <Row>
            {account ? (
              <Button type='default' onClick={disconnect}>
                <Text type='secondary' style={{ fontSize: 11 }}>
                  {account.substring(1, 18)}…
                </Text>
              </Button>
            ) : (
              <Button type='default' onClick={connect}>
                connect account
              </Button>
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
}
