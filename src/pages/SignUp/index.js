import React, { useState } from 'react';
import { ToastAndroid } from 'react-native';
import { Keyboard, Title, ContainerImage, ButtonEditImage, Input, ButtonSave, TextButtonSave, ContainerScroll, Container, ImagePerfil } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import ImgToBase64 from 'react-native-image-base64';
import ChoiseDeleteImage from '../../components/ChoiseDeleteImage';

const SignUp = () => {

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [showActionsImage, setShowActionsImage] = useState(false)

  const handleChoosePhoto = () => {
    ImagePicker.launchImageLibrary({ noData: true }, response => {
      if (response.uri) {
        ImgToBase64.getBase64String(response.uri).then(base64 => {
          setImage(`data:${response.type};base64,${base64}`)
        }).catch(err => {
          ToastAndroid.show('Ocorreu um erro ao atualizar a imagem', ToastAndroid.SHORT)
          console.log(err)
        })
        console.log(response)
      }
    })
  }

  return (
    <Keyboard behavior='height' enabled>
      {
        (showActionsImage) && (<ChoiseDeleteImage options={[
          { name: "Alterar imagem", action: () => { } },
          { name: "Remover imagem", action: () => { } }
        ]} />)
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
            <ButtonEditImage onPress={() => setShowActionsImage(true)}>
              <Icon name='pencil' size={20} color='#FFF' />
            </ButtonEditImage>
          </ContainerImage>
          <Input
            keyboardType='default'
            autoCorrect={false}
            autoCapitalize='words'
            placeholder='Nome'
            value={name}
            onChangeText={text => setName(text)}
            returnKeyType='send'
          />
          <ButtonSave>
            <TextButtonSave>Salvar</TextButtonSave>
          </ButtonSave>
          {/* <Image
        style={{
          width: 51,
          height: 51,
          resizeMode: 'contain',
        }}
        source={{
          uri:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      /> */}
        </Container>
      </ContainerScroll>
    </Keyboard>
  )
}

export default SignUp
