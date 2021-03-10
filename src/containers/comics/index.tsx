import React, { FunctionComponent } from 'react';
import Card from '../../components/Card';

import S from './styles';

interface IProps {
  comics: Array<any>
}

const Comics: FunctionComponent<IProps> = (props: IProps) => {
  const { comics } = props;

  return (
    <S.Container>
      {
        comics.length > 0 && comics.map((comic) => (
          <Card key={`comic-${comic.id}`}>
            <span>{ comic.title }</span>
          </Card>
        ))
      }
    </S.Container>
  );
};

export default Comics;
