import React, { FunctionComponent, MouseEvent, memo } from 'react';
import Button from '../../components/button';
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

  const getThumbnail = () => (
    `${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`
  );

  const getCreatorsNames = () => (
    comic.creators.available > 1 ? comic.creators.items.map((creator) => creator.name).join(', ') : comic.creators.items[0].name
  );

  return (
    <Modal open={open}>
      <S.Container>
        <S.LContent>
          <S.Img src={getThumbnail()} alt="Comic first page" />
        </S.LContent>
        <S.RContent>
          <h4>{comic.title}</h4>
          <S.Paragraph dangerouslySetInnerHTML={{ __html: comic.description || 'This comic dont have description registered.' }} />
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
        </S.RContent>
      </S.Container>
      <S.Footer>
        <Button
          type="button"
          secondary
          onClick={onClose}
        >
          Voltar
        </Button>
      </S.Footer>
    </Modal>
  );
};

export default memo(Detail);
