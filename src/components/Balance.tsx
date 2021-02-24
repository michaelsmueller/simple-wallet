import React, { useContext, useEffect } from 'react';
import { Web3Context } from 'contexts/web3Context';
import { formatEther } from '@ethersproject/units';
import { Button, Form, Input, Space, Typography, notification } from 'antd';

export default function Balance() {
  const { web3Context } = useContext(Web3Context);
  const { account, library } = web3Context;
  const { Title, Text } = Typography;
  const [form] = Form.useForm();

  useEffect(() => {
    if (!library) return;
    const getBalance = async () => {
      console.log('library', library);
      const balance = await library.getBalance(account);
      console.log(formatEther(balance));
    };
    getBalance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, library]); // we only want to run on mount

  useEffect(() => {
    form.setFieldsValue({ account });
  }, [form, account]);

  const onFinish = (values: any) => {
    console.log('success', values);
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
      <Title level={2}>Account number</Title>
      <Form form={form} initialValues={account} onFinish={onFinish}>
        <div style={{ margin: '32px 0' }}>
          <Form.Item name='account' rules={[{ required: true }]}>
            <Input style={{ fontSize: '1.3em' }} size='large' placeholder='0xabcde...' autoComplete='off' />
          </Form.Item>
        </div>
        <Form.Item>
          <Button size='large' type='primary' htmlType='submit'>
            Check balance
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
