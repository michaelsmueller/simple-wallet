import React, { useContext, useEffect, useState } from 'react';
import { Web3Context } from 'contexts/web3Context';
import { formatEther } from '@ethersproject/units';
import { Button, Card, Form, Input, Typography, notification } from 'antd';

export default function Balance() {
  const { web3Context } = useContext(Web3Context);
  const { account, chainId, library } = web3Context;
  const [balance, setBalance] = useState();
  const { Title } = Typography;
  const [form] = Form.useForm();

  useEffect(() => form.setFieldsValue({ input: account }), [form, account]);
  useEffect(() => setBalance(null), [account, chainId]);

  const handleSubmit = async ({ input }) => {
    if (!library || !account) {
      notification.error({ message: 'Please connect wallet' });
      return;
    }
    try {
      const response = await library.getBalance(input);
      setBalance(response);
    } catch (error) {
      notification.error({ message: `Invalid account number` });
    }
  };

  return (
    <div
      style={{
        padding: 16,
        width: 500,
        margin: 'auto',
        marginTop: 32,
        textAlign: 'center',
      }}
    >
      <Title level={2}>Account</Title>
      <Form form={form} initialValues={{ input: account }} onFinish={handleSubmit} style={{ margin: '32px 0' }}>
        <div style={{ margin: '32px 0' }}>
          <Form.Item name='input' rules={[{ required: true }]}>
            <Input style={{ fontSize: '1.3em' }} size='large' placeholder='0xabcde...' autoComplete='off' />
          </Form.Item>
        </div>
        <Form.Item>
          <Button size='large' type='primary' htmlType='submit'>
            Check balance
          </Button>
        </Form.Item>
      </Form>
      {balance && account && (
        <Card size='default'>
          <Title level={4}>{formatEther(balance)} ETH</Title>
        </Card>
      )}
    </div>
  );
}
