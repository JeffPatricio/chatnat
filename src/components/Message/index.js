import React from 'react';
import { Container, TextMessage, ContainerMessage } from './styles';

const MeMessage = ({ text, myMessage }) => {
  return (
    <Container>
      <ContainerMessage myMessage={myMessage}>
        {
          (myMessage) && (<TextMessage>{text}</TextMessage>)
        }
        {
          (!myMessage) && (<TextMessage>{text}</TextMessage>)
        }
      </ContainerMessage>
    </Container>
  )
}

export default MeMessage;
