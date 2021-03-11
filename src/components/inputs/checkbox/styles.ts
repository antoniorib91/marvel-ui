import styled, { css } from 'styled-components';

interface IProps {
  checked?: boolean,
}

const CssLabelChecked = css`
  border-color: ${({ theme }) => theme.colors.textColorContrast};
  &:after {
    border-color: ${({ theme }) => theme.colors.textColorContrast};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.textColorDisabled};

    &:after {
      border-color: ${({ theme }) => theme.colors.textColorDisabled}
    }
  }
`;

const LabelStyled = styled.label<IProps>`
  background-color: ${({ theme }) => theme.colors.mainColor};
  border: 2px solid ${({ theme }) => theme.colors.textColorDisabled};
  border-radius: 50%;
  cursor: pointer;
  height: 35px;
  right: -20px;
  position: absolute;
  top: 0;
  width: 35px;
  z-index: 2;

  &:after {
    border: 6px solid ${({ theme }) => theme.colors.textColorDisabled};
    z-index: 1;
    border-top: none;
    border-right: none;
    content: "";
    height: 5px;
    left: 7px;
    position: absolute;
    top: 10px;
    transform: rotate(-45deg);
    width: 16px;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.textColorContrast};

    &:after {
      border-color: ${({ theme }) => theme.colors.textColorContrast}
    }
  }

  ${({ checked }) => (checked && checked.toString() === 'true' ? CssLabelChecked : '')}
`;

const InputWrapperStyled = styled.div`
  position: relative;

  input[type="checkbox"] {
    visibility: hidden;
  }
`;

const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export default {
  Wrapper: InputWrapperStyled,
  Container: InputContainerStyled,
  Label: LabelStyled,
};
