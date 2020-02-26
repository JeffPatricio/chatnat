import React, { useState, Fragment } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Container, Form, Input, SubmitButton, ButtonText, ContainerButton, Title, BackToLogin, ContainerHeader } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SignUp = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <Fragment>
      <ContainerHeader>
        <Icon name='arrow-back' size={20} color='#FFF' />
      </ContainerHeader>
      <Container>
        <Title>Criar Conta</Title>
        <Form>
          <Input
            keyboardType='default'
            autoCorrect={false}
            autoCapitalize='words'
            placeholder='Nome Completo'
            value={name}
            onChangeText={text => setName(text)}
            returnKeyType='send'
          />
          <Input
            keyboardType='email-address'
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='Email'
            value={email}
            onChangeText={text => setEmail(text)}
            returnKeyType='send'
          />
          <Input
            secureTextEntry={true}
            keyboardType='default'
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='Senha'
            value={password}
            onChangeText={text => setPassword(text)}
            returnKeyType='send'
          />
          <Input
            secureTextEntry={true}
            keyboardType='default'
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='Confirme a senha'
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
            returnKeyType='send'
          />
          <ContainerButton>
            <SubmitButton>
              <ButtonText>Salvar</ButtonText>
            </SubmitButton>
          </ContainerButton>
          <BackToLogin>Voltar para o login</BackToLogin>
        </Form>
      </Container>
    </Fragment>
  )
}

export default SignUp
