import React, { FunctionComponent, memo } from 'react';
import S from './styles';

const NotFound: FunctionComponent = () => (
  <div>
    <S.Title>Not found results for your search.</S.Title>
  </div>
);

export default memo(NotFound);
