import styled, { css } from 'styled-components';
import ParagraphRegular from '../../../styles/fonts/paragraph';
import { HintBold, HintRegular } from '../../../styles/fonts/hint';

interface IProps {
  error?: string,
  typing?: string,
  className?: string
  display?: string,
  hasLabel?: string,
}

const CssInputBorderFocus = css`
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  border: 2px solid ${({ theme }) => theme.colors.mainColor};
`;

const CssInputBorderError = css`
  border: 1px solid ${({ theme }) => theme.colors.statusColorProblem};
`;

const CssInputBorderNormal = css`
  border: 1px solid ${({ theme }) => theme.colors.textColorDisabled};
`;

const CssInputBorderTyping = css`
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  border: 2px solid ${({ theme }) => theme.colors.statusColorAlert};
`;

const CssInputBorderOnFocus = ({ typing }: IProps) => (
  typing === 'true' ? CssInputBorderTyping : CssInputBorderFocus
);

const InputLabelStyled = styled.label<IProps>`
  display: ${({ display }) => (display === 'true' ? 'block' : 'none')};
  top: -29px;
  left: 0; 
  right: 0;
  position: relative;
  z-index: 0;
  cursor: text;
  padding: 0 12px 8px 12px;
  transition: .2s ease-in-out;
  color: ${({ theme }) => theme.colors.textColorSecondary};
  ${ParagraphRegular};
`;

const InputSpanMessageStyled = styled.span<IProps>`
  display: ${({ error }) => (error === 'true' ? 'block' : 'none')};
  position: absolute;
  color: ${({ theme }) => theme.colors.statusColorProblem};
  width: 100%;
  bottom: -5px;
  left: 12px;
  ${HintRegular};
`;

const InputStyled = styled.input<IProps>`
  outline: none;
  transition: .2s ease-in-out;
  box-sizing: border-box;
  padding: 8px 12px 8px 12px;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  font-size: 16px;
  caret-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.textColor};
  ${({ error }) => (error === 'true' ? CssInputBorderError : CssInputBorderNormal)};
  ${ParagraphRegular};

  &:disabled {
    cursor: not-allowed;

    &  ~ label {
      cursor: not-allowed;
      color: ${({ theme }) => theme.colors.textColorDisabled};
    }
  }

  &:read-only {
    pointer-events: none;
    border: 1px solid ${({ theme }) => theme.colors.textColorContrast};
    background-color: ${({ theme }) => theme.colors.textColorContrast};
    color: ${({ theme }) => theme.colors.textColorSecondary};

    & ~ label {
      top: -47px;
      left: 10px; 
      font-size: 12px;
      padding: 0 5px 0px 5px;
      pointer-events: none;
      color: ${({ theme, error }) => (error === 'true' ? theme.colors.statusColorProblem : theme.colors.mainColor)};
      background-color:  ${({ theme }) => theme.colors.mainColorContrast};
      ${HintBold};
    }
  }

  &::placeholder {
    opacity: ${({ hasLabel }) => (hasLabel && hasLabel === 'true' ? 0 : 1)};
    transition: .2s ease-in-out;
  }

  &:focus {
    ${({ error }) => (error === 'true' ? CssInputBorderError : CssInputBorderOnFocus)};
    :empty {
      &::placeholder {
        opacity: 1;
        transition: .2s ease-in-out;
      }
    }
  }

 
`;

const InputWrapperStyled = styled.div<IProps>`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-top: 12px;
  width: 100%;
  height: 40px;
  padding: 4px 0 8px 0;

  input:not([value=""]):not(:focus):invalid ~ label {
    top: -47px;
    left: 10px; 
    font-size: 12px;
    padding: 0 5px 0px 5px;
    pointer-events: none;
    color: ${({ theme, error }) => (error === 'true' ? theme.colors.statusColorProblem : theme.colors.mainColor)};
    background-color:  ${({ theme }) => theme.colors.mainColorContrast};
  }


  input:valid ~ label,
  input:focus ~ label {
    top: -47px;
    left: 10px; 
    font-size: 12px;
    padding: 0 5px 0px 5px;
    pointer-events: none;
    color: ${({ theme, error }) => (error === 'true' ? theme.colors.statusColorProblem : theme.colors.mainColor)};
    background-color:  ${({ theme }) => theme.colors.mainColorContrast};
  }
`;

export default {
  Wrapper: InputWrapperStyled,
  Input: InputStyled,
  Message: InputSpanMessageStyled,
  Label: InputLabelStyled,
};
