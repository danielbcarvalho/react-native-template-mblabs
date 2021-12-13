import React from 'react';

import ENV from 'react-native-config';

import { Button, Row, Background, Input, Col, Text } from '@mobile/components';
import Toaster from '@mobile/services/toaster';
import useForm from '@mobile/hooks/useForm';

const Login: React.FC = () => {
  const [form, onChange, clear] = useForm({ name: '', email: '' });

  return (
    <Background barStyle="dark-content"> 
      <Col>
        <Button
          title="Press Me!! Error"
          disabled={false}
          onPress={() => Toaster.info('Error', 'ao enviar dados')}
        />
      </Col>
      <Col>
        <Input
          title="Insira seu nome"
          value={form.name}
          onChangeText={(value: string) => onChange('name', value)}
        />
        <Input
          title="Insira sua senha"
          value={form.name}
          onChangeText={(value: string) => onChange('name', value)}
        />
      </Col>
      <Col>
        <Text
          text={`Versão: ${ENV.APP_VERSION}`}
        />
      </Col>

    </Background>
  ); 
}; 

export default Login;
 