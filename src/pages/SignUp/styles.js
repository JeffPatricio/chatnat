import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Keyboard = styled.KeyboardAvoidingView`
  flex: 1;
  background: #6aa84f;
  padding: 15px;
`;

export const ContainerScroll = styled.ScrollView.attrs({ showsVerticalScrollIndicator: false })`
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #FFF;
  align-self: stretch;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 50px;
`;

export const ContainerImage = styled.View`
  align-items: center;
`;

export const ButtonEditImage = styled(RectButton)`
  position: absolute;
  justify-content: center;
  align-items: center;
  background: #bbb;
  height: 34px;
  width: 34px;
  bottom: 0;
  right: 0;
  border-radius: 17px; 
`;

export const Input = styled.TextInput.attrs({ placeholderTextColor: '#999' })`
  align-self: stretch;
  height: 35px;
  background: #FFF;
  border-radius: 20px;
  padding: 0 15px;
  border: 1px solid #ddd;
  margin-top: 25px;
`;

export const ButtonSave = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #009E0F;
  height: 35px;
  margin-top: 40px;
  margin-bottom: 10px;
  padding: 0 80px;
  border-radius: 20px;
`;

export const TextButtonSave = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #FFF;
`;

export const ImagePerfil = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 90px;
`;


