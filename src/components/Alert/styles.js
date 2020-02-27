import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.TouchableHighlight`
  position: absolute;
  height: 106%;
  width: 110%;
  background: rgba(0,0,0,0.8);
  z-index: 5;
  align-items: center;
  justify-content: center;
`;

export const ContainerAlert = styled.View`
  padding: 10px 15px 15px 10px;
  align-items: center;
  background: #fff;
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin: 10px 40px 40px 40px;
`;

export const ContainerOptions = styled.View`
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-color: #333;
  align-self: stretch;
  align-items: center;
  justify-content: center;
`;

export const Option = styled.TouchableOpacity`
  margin: 12px;
  align-self: stretch;
  text-align: center;
  align-items: center;
  justify-content :center;
`;

export const OptionText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;