import styled from 'styled-components';
import { IStyled } from '../../models/styled.model';
import { ReactComponent as MarvelSVG } from '../../assets/svgs/marvel.svg';

const HeaderStyled = styled.header<IStyled>`
  position: absolute;
  left: 0;
  width: 100%;
  border-bottom: 1px solid white;
  background-color: ${({ theme }) => theme.colors.mainColorBackground};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const LabelSearchStyled = styled.label`
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 10px;
  cursor: pointer;

  @media only screen and (max-width: 48rem) {
    padding-top: 10px;
  }
`;

const LeftContainerStyled = styled.div`
  display: flex;
  
  @media only screen and (max-width: 48rem) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

const RightContainerStyled = styled.div`
  display: flex;

  @media only screen and (min-width: 48rem) {
    width: 100%;
    max-width: 400px;
    margin: 5px 10px 0 10px;
  }

  @media only screen and (max-width: 48rem) {
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: 0 15px;
  }
`;

const LogoStyled = styled(MarvelSVG)`
  margin: 15px;
`;

export default {
  Header: HeaderStyled,
  Logo: LogoStyled,
  LContainer: LeftContainerStyled,
  RContainer: RightContainerStyled,
  Label: LabelSearchStyled,
};
