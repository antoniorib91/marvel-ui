import styled from 'styled-components';
import Button from '../../../components/button';

const ButtonsContainerStyled = styled.div`
  margin: 35px 0;
`;

const ButtonStyled = styled(Button)`
  @media only screen and (max-width: 48rem) {
    width: 100%;
    padding: 15px 4px;
  }
`;

export default {
  ButtonsContainer: ButtonsContainerStyled,
  Button: ButtonStyled,
};
