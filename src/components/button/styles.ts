import styled, { css } from 'styled-components';
import CtaRegular from '../../styles/fonts/cta';
import { IDefaultStyledProps } from '../../models/default-styled-props.model';

type IProps = {
  secondary?: boolean,
};

const CssPrimary = ({ theme }: IDefaultStyledProps) => css`
  background-color: ${theme.colors.mainColor};
  color: ${theme.colors.textColorContrast};
  border: 1px solid ${theme.colors.mainColor};


  &:hover {
    opacity: 0.8;
    background-color: ${theme.colors.mainColorContrast};
    color: ${theme.colors.mainColor};
    border: 1px solid ${theme.colors.mainColor};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;

    &:hover {
      background-color: ${theme.colors.mainColor};
      color: ${theme.colors.textColorContrast};
    }
  }
`;

const CssSecondary = ({ theme }: IDefaultStyledProps) => css`
  background-color: ${theme.colors.mainColorContrast};
  color: ${theme.colors.mainColor};
  border: 1px solid ${theme.colors.mainColor};

  &:hover {
    background-color: ${theme.colors.mainColorContrast};
    color: ${theme.colors.mainColorBackground};
    border: 1px solid ${theme.colors.mainColorBackground};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;

    &:hover {
      background-color: ${theme.colors.mainColorContrast};
      color: ${theme.colors.mainColor};
      border: 1px solid ${theme.colors.mainColor};
    }
  }
`;

const getCss = ({ secondary }: IProps) => (secondary && secondary.toString() === 'true'
  ? CssSecondary
  : CssPrimary);

const ButtonStyled = styled.button<IProps>`
  border: none;
  outline: none;
  padding: 15px;
  min-width: 120px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.textColorContrast};
  margin: 5px;
  cursor: pointer;
  ${CtaRegular}
  ${getCss}
`;

export default {
  Button: ButtonStyled,
};
