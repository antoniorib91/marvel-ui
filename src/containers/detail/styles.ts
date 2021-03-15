import styled from 'styled-components';

import ParagraphRegular from '../../styles/fonts/paragraph';
import Button from '../../components/button';

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  margin-bottom: 10px;
`;

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  
  @media only screen and (max-width: 48rem) {
    flex-wrap: wrap;
  }
`;

const ImgContainerStyled = styled.div`
  width: 100%;
  margin: 10px 0px;
  margin-left: 30%;
  margin-right: 30%;
  @media only screen and (min-width: 48rem) {
    width: 40%;
    margin: 10px 0px;
    margin-top: auto;
    margin-bottom: auto;
    padding: 0 40px 0 0;
  }
`;

const TextContainerStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 48rem) {
    height: 200px;
  }
`;

const TextContainerScrollableStyled = styled.div`
  overflow-x: auto;
`;

const TitleStyled = styled.h3`
  margin: 5px;
  color: ${({ theme }) => theme.colors.mainColor};
`;

const SubtitleStyled = styled.h4`
  font-family: ${({ theme }) => theme.font.family};
  font-weight: ${({ theme }) => theme.font.weights.bold};
  text-align: left;
  
  @media only screen and (max-width: 48rem) {
    text-align: center;
  }
`;

const ParagraphStyled = styled.p`
  ${ParagraphRegular};
  word-wrap: break-word;
  color: ${({ theme }) => theme.colors.textColor};
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

const ImageStyled = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ImageWrapperStyled = styled.div`
  width: 100%;
  position: relative;
  padding-top: 75%;
  background-color: ${({ theme }) => theme.colors.mainColorBackground};
  height: 120px;

  @media only screen and (max-width: 48rem) {
    height: 100px;
  }
`;

const ButtonStyled = styled(Button)`
  @media only screen and (max-width: 48rem) {
    width: 100%;
  }
`;

export default {
  Header: HeaderStyled,
  Container: ContainerStyled,
  Title: TitleStyled,
  Subtitle: SubtitleStyled,
  Footer: FooterStyled,
  Paragraph: ParagraphStyled,
  Img: ImageStyled,
  Button: ButtonStyled,
  ImgWrapper: ImageWrapperStyled,
  ImgContainer: ImgContainerStyled,
  TextContainer: TextContainerStyled,
  TextContainerScrollable: TextContainerScrollableStyled,
};
