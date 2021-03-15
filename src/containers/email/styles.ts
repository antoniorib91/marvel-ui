import styled from 'styled-components';
import Button from '../../components/button';
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

  @media only screen and (max-width: 48rem) {
    flex-wrap: wrap;
  }
`;

const ParagraphStyled = styled.p`
  ${ParagraphRegular};
`;

const TitleStyled = styled.h3`
  margin: 5px;
  color: ${({ theme }) => theme.colors.mainColor};
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
  position: relative;
  width: 100%;
  padding-top: 75%;
  height: 100px;
`;

const EmailContentStyled = styled.div`
  padding: 10px;

  @media only screen and (max-width: 48rem) {
    height: 250px;
    margin-bottom: 5px;
  }
`;

const EmailWrapperStyled = styled.div`
  padding: 10px;
  margin-bottom: 15px;
  display: flex;

  @media only screen and (max-width: 48rem) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  @media only screen and (min-width: 48rem) {
    margin-left: 15px;
  }
`;

const ImgContainerStyled = styled.div`
  display: flex;
  width: 100%;

  @media only screen and (max-width: 48rem) {
    max-width: 200px;
  }

  @media only screen and (min-width: 48rem) {
    width: 25%;
  }
`;

const SubTitleStyled = styled.h4`
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.textColor};

  @media only screen and (max-width: 48rem) {
    text-align: center;
  }
`;

const ButtonStyled = styled(Button)`
  @media only screen and (max-width: 48rem) {
    width: 100%;
  }
`;

export default {
  Container: ContainerStyled,
  Footer: FooterStyled,
  EmailContent: EmailContentStyled,
  EmailWrapper: EmailWrapperStyled,
  Paragraph: ParagraphStyled,
  Header: HeaderStyled,
  Title: TitleStyled,
  Subtitle: SubTitleStyled,
  Img: ImageStyled,
  ImgWrapper: ImageWrapperStyled,
  ImgContainer: ImgContainerStyled,
  TextContainer: TextContainerStyled,
  Button: ButtonStyled,
};
