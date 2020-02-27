import React, { useState } from 'react';
import { ToastAndroid, ActivityIndicator } from 'react-native';
import { Keyboard, Title, ContainerImage, ButtonEditImage, Input, ButtonSave, TextButtonSave, ContainerScroll, Container, ImagePerfil } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import ImgToBase64 from 'react-native-image-base64';
import Alert from '../../components/Alert';
import axios from 'axios';

const SignUp = () => {

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [showActionsImage, setShowActionsImage] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChoosePhoto = () => {
    ImagePicker.launchImageLibrary({ noData: true }, response => {
      setShowActionsImage(false);
      if (response.uri) {
        ImgToBase64.getBase64String(response.uri).then(base64 => {
          setImage(`data:${response.type};base64,${base64}`);
        }).catch(() => {
          ToastAndroid.show('Ocorreu um erro ao atualizar a imagem', ToastAndroid.SHORT)
        })
      }
    })
  }

  const saveUser = async () => {
    if (loading) return
    if (!name) { return ToastAndroid.show('Necessário preencher o nome', ToastAndroid.SHORT) }
    setLoading(true);
    const userCreated = await axios.post('https://chatnat-app.herokuapp.com/user', { name, image: image || null })
    if (userCreated.data.success) {
      ToastAndroid.show('Usuário criado com sucesso ' + userCreated.data.userId, ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Ocorreu um erro ao criar o usuário', ToastAndroid.SHORT);
    }
    setLoading(false);
  }

  return (
    <Keyboard behavior='height' enabled>
      {
        (showActionsImage) && (
          <Alert options={[{
            name: "Alterar imagem",
            action: () => handleChoosePhoto()
          },
          {
            name: "Remover imagem",
            action: () => {
              setImage('');
              setShowActionsImage(false);
            }
          }]} setVisible={setShowActionsImage} />
        )
      }
      <ContainerScroll>
        <Container>
          <Title>Criar conta</Title>
          <ContainerImage>
            {
              (image.length) ? (
                <ImagePerfil source={{ uri: image }} />
              ) : (
                  <Icon name='user-circle-o' size={150} color='#FFF' />
                )
            }
            {
              (!loading) && (
                <ButtonEditImage onPress={() => setShowActionsImage(true)}>
                  <Icon name='pencil' size={20} color='#FFF' />
                </ButtonEditImage>
              )
            }
          </ContainerImage>
          <Input
            keyboardType='default'
            autoCorrect={false}
            autoCapitalize='words'
            placeholder='Nome'
            value={name}
            onChangeText={text => setName(text)}
            returnKeyType='send'
            editable={!loading}
          />
          <ButtonSave onPress={saveUser} disabled={loading}>
            {
              (loading) ? (
                <ActivityIndicator size={25} color='#FFF' />
              ) : (
                  <TextButtonSave>Salvar</TextButtonSave>
                )
            }
          </ButtonSave>
        </Container>
      </ContainerScroll>
    </Keyboard>
  )
}

export default SignUp
