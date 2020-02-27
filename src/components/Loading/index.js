import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container } from './styles';

const Loading = ({ size, color }) => {
  return (
    <Container>
      <ActivityIndicator size={size} color={color} />
    </Container>
  )
}

export default Loading;
