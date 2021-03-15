import styled from 'styled-components';
import { BaseModalBackground } from 'styled-react-modal';

const ModalBackground = styled(BaseModalBackground)`
  @media only screen and (max-width: 48rem) {
    width: 100%;
    height: 100%;
  }
`;

export default ModalBackground;
