import styled from 'styled-components/native';
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.ScrollView.attrs({ showsVerticalScrollIndicator: false })`
  flex: 1;
  background: #179788;
  padding: 20px 15px 15px 15px;
`;

export const Form = styled.View`
  flex: 1;
`;

export const Input = styled.TextInput.attrs({ placeholderTextColor: '#999' })`
  flex: 1;
  height: 35px;
  background: #FFF;
  border-radius: 20px;
  padding: 0 15px;
  border: 1px solid #ddd;
  margin-bottom: 15px;
`;

export const ContainerButton = styled.View`
  align-self: stretch;
  justify-content: center;
  align-items: center;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #50DD6B;
  height: 35px;
  width: 250px;
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #FFF;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #FFF;
  align-self: stretch;
  text-align: center;
  margin-bottom: 80px;
  margin-top: 40px;
`;

export const BackToLogin = styled.Text`
  font-size: 12px;
  color: #FFF;
  align-self: stretch;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const ContainerHeader = styled.View`
  background: #179788;
  padding: 20px 15px 5px 15px;
`;
