import React, { FunctionComponent } from 'react';
import { IComic } from '../../models/comic.model';
import S from './styles';

interface IProps {
  comic: IComic
  checked?: boolean
  onCheck: (id: number) => void,
  onDetail: (e: IComic) => void,
}

const defaultProps = {
  checked: false,
};

const ComicCard: FunctionComponent<IProps> = (props: IProps) => {
  const {
    comic, onCheck, checked, onDetail,
  } = props;

  const getThumbnail = () => (
    `${comic.thumbnail.path}/portrait_fantastic.${comic.thumbnail.extension}`
  );

  return (
    <S.Card>
      <S.Actions>
        <S.Checkbox
          id={`checkbox-${comic.id}`}
          checked={checked}
          onChange={() => onCheck(comic.id)}
        />
        <S.Icon
          onClick={() => onDetail(comic)}
        />
      </S.Actions>
      <S.ImgContainer>
        <S.ImgWrapper>
          <S.Img
            checked={checked}
            src={getThumbnail()}
          />
        </S.ImgWrapper>
      </S.ImgContainer>
      <S.Footer>
        <S.Paragraph>
          { comic.title }
        </S.Paragraph>
      </S.Footer>
    </S.Card>
  );
};

ComicCard.defaultProps = defaultProps;

export default ComicCard;
