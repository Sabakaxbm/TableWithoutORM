import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.div<{ isActive: boolean }>`
  padding: 10px;
  font-size: 16px;
  background-color: ${(props) => (props.isActive ? '#56433d' : 'bisque')};
`;
