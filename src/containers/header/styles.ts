import styled from 'styled-components';
import { IStyled } from '../../models/styled.model';
import { ReactComponent as MarvelSVG } from '../../assets/svgs/marvel.svg';

const HeaderStyled = styled.header<IStyled>`
  position: absolute;
  width: 100%;
  border-bottom: 1px solid white;
  background-color: ${({ theme }) => theme.colors.mainBackground};
`;

const LogoStyled = styled(MarvelSVG)`
  margin: 15px;
`;

export default {
  Header: HeaderStyled,
  Logo: LogoStyled,
};
