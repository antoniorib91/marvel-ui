import React, { FunctionComponent, MouseEvent, memo } from 'react';
import Modal from '../../components/modal';
import { IComic } from '../../models/comic.model';
import S from './styles';

type IProps = {
  open: boolean
  comic: IComic,
  onClose: (e: MouseEvent) => void,
};

const Detail: FunctionComponent<IProps> = (props: IProps): JSX.Element => {
  const { comic, open, onClose } = props;
  const noDescriptionMsg = 'This comic dont have description registered.';

  const getThumbnail = () => (
    `${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`
  );

  const getCreatorsNames = () => (
    comic.creators.available > 1
      ? comic.creators.items.map((creator) => creator.name).join(', ')
      : comic.creators.items[0].name
  );

  return (
    <Modal open={open}>
      <S.Header>
        <S.Title>Comic Detail</S.Title>
      </S.Header>
      <S.Container>
        <S.ImgContainer>
          <S.ImgWrapper>
            <S.Img src={getThumbnail()} alt="Comic first page image" />
          </S.ImgWrapper>
        </S.ImgContainer>
        <S.TextContainer>
          <S.Subtitle>{comic.title}</S.Subtitle>
          <S.TextContainerScrollable>
            <S.Paragraph
              dangerouslySetInnerHTML={{ __html: comic.description || noDescriptionMsg }}
            />
            <S.Paragraph>
              { comic.creators.available > 0 && (
              <strong>
                Created By:
                {' '}
                {getCreatorsNames()}
                .
              </strong>
              ) }
            </S.Paragraph>
          </S.TextContainerScrollable>
        </S.TextContainer>
      </S.Container>
      <S.Footer>
        <S.Button
          type="button"
          secondary
          onClick={onClose}
        >
          Voltar
        </S.Button>
      </S.Footer>
    </Modal>
  );
};

export default memo(Detail);
