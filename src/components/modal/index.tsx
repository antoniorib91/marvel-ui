import React, { FunctionComponent, ReactNode } from 'react';
import S from './styles';

type IProps = {
  open: boolean,
  children: ReactNode,
};

const Modal: FunctionComponent<IProps> = (props: IProps) => {
  const { open, children } = props;
  return (
    <S.Modal
      isOpen={open}
    >
      { children }
    </S.Modal>
  );
};

export default Modal;
