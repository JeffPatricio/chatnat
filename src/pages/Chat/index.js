import React, { useState, useEffect, Fragment } from 'react';
import { ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SocketIOClient from 'socket.io-client';
import { Container, ContainerChat, ChatEmpty, History, Input, ButtonSend, ContainerInput, ChatEmptyTitle, LoadingTitle } from './styles';
import HeaderMain from '../../components/HeaderMain';
import Message from '../../components/Message';

const Chat = ({ perfil, navigation }) => {

  navigation.setOptions({ headerShown: false })

  const [messages, setMessages] = useState([])
  const [textMessage, setTextMessage] = useState('')
  const [socket, setSocket] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const connection = await SocketIOClient('https://chatnat-app.herokuapp.com/', { forceNew: true, autoConnect: true });
      if (connection) {
        connection.on('previousMessages', data => {
          setMessages(data)
          setLoading(false)
        })

        connection.on('receivedMessage', data => {
          console.log(data)
          // setMessages([...messages, data])
        })
        // connection.on('testreceived', data => {
        //   console.log(data)
        //   // setMessages([...messages, data])
        // })
        connection.on('broadcast', data => {
          console.log(data)
          setMessages([...messages, data])
        })

        connection.on('errorMessage', data => {
          ToastAndroid.show(data, ToastAndroid.SHORT)
        })
        connection.on('error', data => {
          console.log(data)
          ToastAndroid.show('Erro na conexão', ToastAndroid.SHORT)
          connection.disconnect()
        })

        connection.on('disconnect', () => {
          ToastAndroid.show('O cliente foi desconectado', ToastAndroid.SHORT)
        })

        setSocket(connection)
      }
    })()
  }, [])

  const sendMessage = () => {
    socket.emit('sendMessage', { idUser: perfil.id, text: textMessage })
    setTextMessage('')
  }

  return (
    <Container>
      <HeaderMain perfil={perfil} navigation={navigation} />
      <ContainerChat>
        {
          (messages.length > 0) && (
            <History
              data={messages}
              initialScrollIndex={messages.length - 1}
              keyExtractor={message => message.id}
              renderItem={({ item }) => (<Message text={item.message} myMessage={true} />)}
            />
          )
        }
        {
          (messages.length === 0) && (
            <ChatEmpty>
              {
                (loading) && (
                  <LoadingTitle>Carregando mensagens...</LoadingTitle>
                )
              }
              {
                (!loading) && (
                  <Fragment>
                    <Icon name='comments' size={60} color='#bbb' />
                    <ChatEmptyTitle>Não há mensagens</ChatEmptyTitle>
                  </Fragment>
                )
              }
            </ChatEmpty>
          )
        }

        <ContainerInput>
          <Input
            autoCorrect={true}
            autoCapitalize='sentences'
            placeholder='Digite sua mensagem...'
            returnKeyType='send'
            value={textMessage}
            onChangeText={text => setTextMessage(text)}
          />
          <ButtonSend onPress={sendMessage}>
            <Icon name='send' size={20} color='#FFF' />
          </ButtonSend>
        </ContainerInput>
      </ContainerChat>
    </Container >
  )
}

export default Chat;
