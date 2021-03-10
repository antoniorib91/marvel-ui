import styled from 'styled-components';
import { IStyled } from './models/styled.model';

const ContainerStyled = styled.div<IStyled>`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.mainBackground};
  display: flex;
`;

export default {
  Container: ContainerStyled,
};
