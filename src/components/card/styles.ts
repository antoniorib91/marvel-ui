import styled from 'styled-components';

const CardStyled = styled.div`
  border: 1px solid transparent;
  border-radius: 2px;
  background: ${({ theme }) => theme.colors.mainColorContrast};
`;

export default {
  Card: CardStyled,
};
