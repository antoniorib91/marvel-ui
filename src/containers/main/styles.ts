import styled from 'styled-components';

const ContainerStyled = styled.div`
  margin-top: 90px;
  min-height: calc(100vh - 150px);

  @media only screen and (max-width: 48rem) {
    margin-top: 165px;
  }

`;

export default {
  Container: ContainerStyled,
};
