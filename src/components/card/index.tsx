import React, { FunctionComponent, ReactNode } from 'react';
import S from './styles';

type IProps = {
  children?: ReactNode,
  className?: string,
};

const defaultProps: IProps = {
  children: <></>,
  className: '',
};

const Card: FunctionComponent<IProps> = (props: IProps) => {
  const { children, className } = props;
  return (
    <S.Card className={className}>
      { children }
    </S.Card>
  );
};

Card.defaultProps = defaultProps;

export default Card;
