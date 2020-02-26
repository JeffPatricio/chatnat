import React from 'react';
import { Container, ContainerAlert, ContainerOptions, Title, Option } from './styles';

const ChoiseDeleteImage = ({ options }) => {

  return (
    <Container>
      <ContainerAlert>
        <ContainerOptions>
          <Title>Selecione uma ação</Title>
        </ContainerOptions>
        {
          options.map(option => (
            <ContainerOptions key={Math.random().toString(36).substr(2, 9)} onPress={option.action}>
              <Option>{option.name}</Option>
            </ContainerOptions>
          ))
        }
      </ContainerAlert>
    </Container>
  )
}

export default ChoiseDeleteImage;
