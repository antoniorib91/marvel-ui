import { css } from 'styled-components';
import Modal from 'styled-react-modal';
import { IDefaultStyledProps } from '../../models/default-styled-props.model';

const CssModal = css`
  display: flex;
  flex-direction: column;
  width: 100%;

  background-color: ${({ theme }: IDefaultStyledProps) => theme.colors.mainColorContrast};
  border-radius: 4px;
  padding: 10px;
  justify-content: space-around;

  @media only screen and (min-width: 48rem) {
    min-height: 400px;
    min-width: 300px;
    max-width: 900px;
  }

  @media only screen and (max-width: 48rem) {
    margin: 10px;
  }
`;

const ModalStyled = Modal.styled`
  ${CssModal};
`;

export default {
  Modal: ModalStyled,
};
