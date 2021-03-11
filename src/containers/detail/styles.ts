import styled from 'styled-components';
import ParagraphRegular from '../../styles/fonts/paragraph';

const ContainerStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  
  @media only screen and (max-width: 48rem) {
    flex-wrap: wrap;
  }
`;

const LeftContentStyled = styled.div`
  display: flex;
  margin: 10px;

  @media only screen and (max-width: 48rem) {
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: 20px 10px;
  }
`;

const RightContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const ParagraphStyled = styled.p`
  ${ParagraphRegular};
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
  background-color: ${({ theme }) => theme.colors.mainColorBackground};
`;

export default {
  Container: ContainerStyled,
  LContent: LeftContentStyled,
  RContent: RightContentStyled,
  Footer: FooterStyled,
  Paragraph: ParagraphStyled,
  Img: ImageStyled,
};
