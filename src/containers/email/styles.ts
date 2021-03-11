import styled from 'styled-components';
import ParagraphRegular from '../../styles/fonts/paragraph';

const ContainerStyled = styled.div`
  display: flex;
  overflow-y: auto;
  overflow-x: auto;
  flex-direction: column;
  max-height: 400px;
`;

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  margin-bottom: 10px;
`;

const FooterStyled = styled.footer`
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
  position: relative;
  bottom: 0;
  padding-top: 10px;
  border-top: 1px solid ${({ theme }) => theme.colors.mainColor};
`;

const EmailContentStyled = styled.div`
  padding: 10px;
  display: flex;
`;

const ParagraphStyled = styled.p`
  ${ParagraphRegular};
`;

const RContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

const TitleStyled = styled.h3`
  margin: 5px;
  color: ${({ theme }) => theme.colors.mainColor};
`;

export default {
  Container: ContainerStyled,
  Footer: FooterStyled,
  EmailContent: EmailContentStyled,
  Paragraph: ParagraphStyled,
  RContent: RContentStyled,
  Header: HeaderStyled,
  Title: TitleStyled,
};
