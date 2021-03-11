import React, { FunctionComponent } from 'react';
import S from './styles';

type IProps = {
  copyright: string,
};

const Footer: FunctionComponent<IProps> = (props: IProps) => {
  const { copyright } = props;
  return (
    <S.Footer>
      <S.Link href="http://marvel.com" target="_blank" rel="noreferrer">
        { copyright }
      </S.Link>
    </S.Footer>
  );
};

export default Footer;
