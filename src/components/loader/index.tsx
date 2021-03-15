import React, { FunctionComponent } from 'react';
import S from './styles';

type IProps = {
  loading?: boolean,
};

const defaultProps = {
  loading: false,
};

const Loader: FunctionComponent<IProps> = (props: IProps) => {
  const { loading } = props;
  return (
    <>
      {
        loading && (
          <S.Container>
            <S.Ring>
              <div />
              <div />
              <div />
              <div />
            </S.Ring>
          </S.Container>
        )
      }
    </>
  );
};

Loader.defaultProps = defaultProps;

export default Loader;
