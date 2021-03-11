import styled from 'styled-components';
import ParagraphRegular from '../../styles/fonts/paragraph';

const FooterStyled = styled.footer`
  margin-top: 10px;
  width: 100%;
  margin-bottom: 10px;
  text-align: center;

`;

const LinkStyled = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textColor};
  ${ParagraphRegular};

  &:hover {
    text-decoration: underline;
  }
`;

export default {
  Footer: FooterStyled,
  Link: LinkStyled,
};
