import React, { FunctionComponent } from 'react';
import S from './styles';

interface IProps {
  comic: any,
}

const Detail: FunctionComponent<IProps> = (props: IProps): JSX.Element => {
  const { comic } = props;
  return (
    <S.Container>
      <h5>{ comic.title }</h5>
    </S.Container>
  );
};

export default Detail;
