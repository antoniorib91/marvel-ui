import React, { FunctionComponent, MouseEvent, memo } from 'react';
import { IComic } from '../../models/comic.model';
import { useComicsContext } from '../../contexts/comics.context';
import Buttons from './buttons';
import NotFound from './not-found';
import List from './list';

interface IProps {
  isLoading: boolean,
  onClickLoad: (e: MouseEvent<HTMLButtonElement>) => void,
  onClickSend: (e: MouseEvent<HTMLButtonElement>) => void,
  onClickDetail: (e: IComic) => void,
}

const Comics: FunctionComponent<IProps> = (props: IProps) => {
  const {
    isLoading, onClickLoad, onClickSend,
    onClickDetail,
  } = props;

  const {
    viewComics, updateSelectedComics,
  } = useComicsContext();

  const handleOnCheckComic = (id: number) => {
    updateSelectedComics(id);
  };

  return (
    <>
      {
        viewComics.length > 0 ? (
          <>
            <List
              onCheckComic={handleOnCheckComic}
              onClickDetail={onClickDetail}
            />
            <Buttons
              isLoading={isLoading}
              onClickLoad={onClickLoad}
              onClickSend={onClickSend}
            />
          </>
        ) : (
          <NotFound />
        )
      }
    </>
  );
};

export default memo(Comics);
