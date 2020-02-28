import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const ContainerChat = styled.View`
  flex: 1;
  padding: 8px;
  align-items: center;
`;

export const ContainerInput = styled.View`
  flex-direction: row;
  align-items: center;
  position: absolute;
  z-index: 5;
  bottom: 10px;
  width: 100%;
`;

export const History = styled.ScrollView`
  flex: 1;
  align-self: stretch;
`;

export const Input = styled.TextInput.attrs({ placeholderTextColor: '#999' })`
  height: 40px;
  background: #FFF;
  border-radius: 20px;
  padding: 0 15px;
  border: 1px solid #ddd;
  width: 85%;
`;

export const ButtonSend = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #5e35b1;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  position: absolute;
  right: 5px;
`;

