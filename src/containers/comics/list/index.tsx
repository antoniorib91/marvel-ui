import React, { FunctionComponent, memo } from 'react';
import { Row, Col } from 'react-awesome-styled-grid';
import { useComicsContext } from '../../../contexts/comics.context';
import { IComic } from '../../../models/comic.model';
import ComicCard from '../../../components/comic-card';

type IProps = {
  onClickDetail: (e: IComic) => void,
  onCheckComic: (id: number) => void,
};

const List: FunctionComponent<IProps> = (props: IProps) => {
  const { onClickDetail, onCheckComic } = props;
  const { viewComics, isComicSelected } = useComicsContext();
  return (
    <Row>
      {
        viewComics.map((comic: IComic) => (
          <Col
            xs={4}
            sm={2}
            lg={2}
            align="center"
            justify="center"
            key={`comic-${comic.id}`}
          >
            <ComicCard
              comic={comic}
              checked={isComicSelected(comic.id)}
              onCheck={onCheckComic}
              onDetail={() => onClickDetail(comic)}
            />
          </Col>
        ))
      }
    </Row>
  );
};

export default memo(List);
