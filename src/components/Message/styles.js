import styled from 'styled-components/native';

export const Container = styled.View`
  align-self: stretch;
`;

export const ContainerMessage = styled.View`
  background: #eee;
  border: 1px solid #ccc;
  align-self: ${props => props.myMessage ? 'flex-end' : 'flex-start'};
  padding: 15px;
  border-radius: 20px;
  margin-bottom: 5px;
  max-width: 260px;
`;

export const TextMessage = styled.Text`
  font-size: 12px;
  color: #333;
`;
