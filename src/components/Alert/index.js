import React, { useState, Fragment } from 'react';
import { Container, ContainerAlert, ContainerOptions, Title, Option, OptionText } from './styles';

const ChoiseDeleteImage = ({ options, setVisible }) => {
  return (
    <Container onPress={() => setVisible(false)}>
      <ContainerAlert>
        <ContainerOptions>
          <Title>Selecione uma ação</Title>
        </ContainerOptions>
        {
          options.map(option => (
            <ContainerOptions key={Math.random().toString(36).substr(2, 9)} >
              <Option onPress={() => option.action()}>
                <OptionText>{option.name}</OptionText>
              </Option>
            </ContainerOptions>
          ))
        }
      </ContainerAlert>
    </Container>
  )
}

export default ChoiseDeleteImage;
