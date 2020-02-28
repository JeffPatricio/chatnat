import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  background: #5e35b1;
  height: 60px;
  shadowColor: #000;
  shadowOpacity: 0.9;
  shadowRadius: 7.49px;
  elevation: 12;
`;

export const ContainerImage = styled.TouchableHighlight`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  position: absolute;
  left: 15px;
  margin-top: auto;
`;

export const ImagePerfil = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #FFF;
`;