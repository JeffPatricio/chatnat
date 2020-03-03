import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const ContainerChat = styled.View`
  flex: 1;
  padding: 0px 8px;
  align-items: center;
  background: #FFF;
  padding-bottom: 60px;
`;

export const ContainerInput = styled.View`
  flex-direction: row;
  align-items: center;
  position: absolute;
  z-index: 5;
  bottom: 15px;
  width: 100%;
`;

export const ChatEmpty = styled.View`
  flex: 1;
  padding: 8px;
  align-items: center;
  justify-content: center;
`;

export const ChatEmptyTitle = styled.Text`
  font-size: 18px;
  color: #bbb;
`;

export const History = styled.FlatList.attrs({ showsVerticalScrollIndicator: false })`
  flex: 1;
  align-self: stretch;
  background: #FFF;
  padding-top: 5px;
`;

export const Input = styled.TextInput.attrs({ placeholderTextColor: '#999' })`
  height: 40px;
  background: #FFF;
  border-radius: 20px;
  padding: 0 15px;
  border: 1px solid #bbb;
  width: 85%;
  elevation: 3;
`;

export const ButtonSend = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #5e35b1;
  height: 42px;
  width: 42px;
  border-radius: 21px;
  position: absolute;
  right: 5px;
  elevation: 4;
`;

export const LoadingTitle = styled.Text`
  font-size: 12px;
  color: #bbb;
`;

