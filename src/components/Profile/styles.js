import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Keyboard = styled.KeyboardAvoidingView`
  flex: 1;
  background: ${props => props.updating ? '#FFF' : '#5e35b1'};
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
  margin-top: 100px;
  margin-bottom: 50px;
`;

export const ContainerImage = styled.View`
  align-items: center;
  margin-top: ${props => props.updating ? '100px' : '0px'};
`;

export const ButtonEditImage = styled(RectButton)`
  position: absolute;
  justify-content: center;
  align-items: center;
  background: ${ props => props.updating ? '#5e35b1' : '#bbb'};
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
  background: ${ props => props.updating ? '#5e35b1' : '#009688'};
  height: 35px;
  margin-top: 40px;
  margin-bottom: 10px;
  padding: 0 80px;
  border-radius: 20px;
  opacity: ${ props => props.disabled ? 0.7 : 1};
`;

export const TextButtonSave = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #FFF;
`;

export const ImagePerfil = styled.Image`
  width: 170px;
  height: 170px;
  border-radius: 85px;
`;


