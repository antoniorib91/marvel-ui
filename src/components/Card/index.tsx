import React, { FunctionComponent, ReactNode } from 'react';
import S from './styles';

type IProps = {
  children: ReactNode
};

const Card: FunctionComponent<IProps> = (props: IProps) => {
  const { children } = props;
  return (
    <S.Card>
      { children }
    </S.Card>
  );
};

export default Card;
