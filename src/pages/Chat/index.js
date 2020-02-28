import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, ContainerChat, History, Input, ButtonSend, ContainerInput } from './styles';
import HeaderMain from '../../components/HeaderMain';

const Chat = ({ perfil, navigation }) => {

  navigation.setOptions({ headerShown: false })
  return (
    <Container>
      <HeaderMain perfil={perfil} navigation={navigation} />
      <ContainerChat>
        <History>

        </History>
        <ContainerInput>
          <Input />
          <ButtonSend>
            <Icon name='send' size={20} color='#FFF' />
          </ButtonSend>
        </ContainerInput>
      </ContainerChat>
    </Container>
  )
}

export default Chat;
