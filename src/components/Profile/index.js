import React, { useState, useEffect } from 'react';
import { ToastAndroid, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import ImagePicker from 'react-native-image-picker';
import ImgToBase64 from 'react-native-image-base64';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Keyboard, Title, ContainerImage, ButtonEditImage, Input, ButtonSave, TextButtonSave, ContainerScroll, Container, ImagePerfil } from './styles';
import Alert from '../Alert';

const Profile = ({ updating, perfil, setPerfil }) => {

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [showActionsImage, setShowActionsImage] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (updating) {
      setName(perfil.name)
      setImage(perfil.image)
    }
  }, [])

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
    setLoading(true)
    const id = updating ? perfil.id : Math.random().toString(36).substr(2, 9) + Math.random().toString(36).substr(2, 9)
    try {
      await AsyncStorage.setItem('perfil', JSON.stringify({ name, image, id }))
      if (!updating) {
        ToastAndroid.show('Usuário criado com sucesso', ToastAndroid.SHORT)
        return setPerfil({ name, image, id })
      }
      ToastAndroid.show('Perfil atualizado com sucesso', ToastAndroid.SHORT)
      setLoading(false)
      setPerfil({ name, image, id })
    } catch {
      ToastAndroid.show(`Ocorreu um erro ao ${updating ? 'atualizar o perfil' : 'criar o usuário'}`, ToastAndroid.SHORT)
      setLoading(false)
    }
  }

  return (
    <Keyboard behavior='height' enabled updating={updating}>
      {
        (showActionsImage) && (
          <Alert options={[{
            name: 'Alterar imagem',
            action: () => handleChoosePhoto()
          },
          {
            name: 'Remover imagem',
            action: () => {
              setImage('');
              setShowActionsImage(false);
            }
          }]} setVisible={setShowActionsImage} />
        )
      }
      <ContainerScroll>
        <Container>
          {
            (!updating) && (<Title>Criar conta</Title>)
          }
          <ContainerImage updating={updating}>
            {
              (image.length) ? (
                <ImagePerfil source={{ uri: image }} updating={updating} />
              ) : (
                  <Icon name='user-circle-o' size={170} color={updating ? '#bbb' : '#FFF'} />
                )
            }
            {
              (!loading) && (
                <ButtonEditImage onPress={() => setShowActionsImage(true)} updating={updating}>
                  <Icon name='pencil' size={20} color='#FFF' />
                </ButtonEditImage>
              )
            }
          </ContainerImage>
          <Input
            keyboardType='default'
            autoCorrect={false}
            autoCapitalize='sentences'
            placeholder='Nome'
            value={name}
            onChangeText={text => setName(text)}
            returnKeyType='send'
            editable={!loading}
            updating={updating}
          />
          <ButtonSave onPress={saveUser} disabled={loading} updating={updating}>
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
    </Keyboard >
  )
}

export default Profile
