import styled from 'styled-components';
import Card from '../card';
import Checkbox from '../inputs/checkbox';
import ParagraphRegular from '../../styles/fonts/paragraph';
import { EyeIcon } from '../../styles/icons';

type IProps = {
  checked?: boolean,
};

const FooterContainerStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.mainColor};
  position: relative;
  top: -12px;
  left: 15px;
  border-radius: 2px;
`;

const ParagraphStyled = styled.p`
  margin: 10px;
  color: ${({ theme }) => theme.colors.textColorContrast};
  ${ParagraphRegular};
`;

const ImageWrapperStyled = styled.div`
  width: 100%;
  position: relative;
  padding-top: 75%;
  background-color: ${({ theme }) => theme.colors.mainColorBackground};
`;

const ImageContainerStyled = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
`;

const ImageStyled = styled.img<IProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: -webkit-filter 0.2s ease-in-out 0s;
  transition: filter 0.2s ease-in-out 0s;
  transition: filter 0.2s ease-in-out 0s,-webkit-filter 0.2s ease-in-out 0s;
  -webkit-filter: grayscale(.5);
  -moz-filter: grayscale(.5);
  -ms-filter: grayscale(.5);
  -o-filter: grayscale(.5);
  filter: ${({ checked }) => (checked && checked.toString() === 'true' ? 'grayscale(0)' : 'grayscale(.5)')};
`;

const CheckboxStyled = styled(Checkbox)`
  label {
    display: block;
    top: 20px;
    right: -30px;
    transform-origin: 50% 50%;
    transform: translate(-50%, -50%) ${({ checked }) => (checked && checked.toString() === 'true' ? 'scale(1) ' : 'scale(0)')};
    transition: .1s;
    transition-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
  }

  ${ImageStyled} {
    filter: ${({ checked }) => (checked && checked.toString() === 'true' ? 'grayscale(0)' : 'grayscale(.5)')};
  }
`;

const IconStyled = styled(EyeIcon)`
  position: absolute;
  z-index: 1;
  top: 60px;
  right: -30px;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  cursor: pointer;
  transform-origin: 50% 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: .1s;
  transition-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
  background-color: ${({ theme }) => theme.colors.mainColor};
  border: 2px solid ${({ theme }) => theme.colors.textColorDisabled};
`;

const ActionsContainerStyled = styled.div`
  position: relative;
`;

const CardStyled = styled(Card)`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 5px;

  &:hover {
    ${CheckboxStyled} {
      label {
        transition-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        transform: translate(-50%, -50%) scale(1);
        transition: .2s;
      }
    }

    ${ImageStyled} {
      filter: grayscale(0);
    }

    ${IconStyled} {
      transition-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
      transform: translate(-50%, -50%) scale(1);
      transition: .2s;
    }
  }

  @media only screen and (min-width: 48rem) {
    max-width: 220px;
    max-height: 380px;
  }

  @media only screen and (min-width: 1rem) {
    max-width: 185px;
    height: 380px;
  }
`;

export default {
  Card: CardStyled,
  Img: ImageStyled,
  ImgWrapper: ImageWrapperStyled,
  ImgContainer: ImageContainerStyled,
  Footer: FooterContainerStyled,
  Paragraph: ParagraphStyled,
  Checkbox: CheckboxStyled,
  Icon: IconStyled,
  Actions: ActionsContainerStyled,
};
