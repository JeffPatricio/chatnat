import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, ImagePerfil, ContainerImage, Title } from './styles';

const HeaderMain = ({ perfil, navigation }) => {
  return (
    <Container>
      <ContainerImage onPress={() => navigation.navigate('EditProfile')}>
        {
          (perfil.image.length) ? (
            <ImagePerfil source={{ uri: perfil.image }} />
          ) : (
              <Icon name='user-circle-o' size={30} color='#FFF' />
            )
        }
      </ContainerImage>
      <Title>Chatnat</Title>
    </Container>
  )
}

export default HeaderMain;
