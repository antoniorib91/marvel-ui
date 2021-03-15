import React, {
  ChangeEvent, FunctionComponent,
  MouseEvent, useState,
} from 'react';
import { isValidEmail } from '@brazilian-utils/brazilian-utils';
import Modal from '../../components/modal';
import Input from '../../components/inputs/input';
import { useComicsContext } from '../../contexts/comics.context';
import { IComic } from '../../models/comic.model';
import S from './styles';

type IProps = {
  open: boolean,
  onClose: (e: MouseEvent<HTMLButtonElement>) => void,
  onSend: (e: MouseEvent<HTMLButtonElement>) => void,
};

const Email: FunctionComponent<IProps> = (props: IProps): JSX.Element => {
  const {
    open, onClose, onSend,
  } = props;

  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(true);
  const [emailTouched, setEmailTouched] = useState<boolean>(false);

  const { selectedComics } = useComicsContext();

  const getThumbnail = (comic: IComic) => (
    `${comic.thumbnail.path}/portrait_fantastic.${comic.thumbnail.extension}`
  );

  const resetFieldsOnCloseModal = () => {
    setEmail('');
    setEmailError(true);
    setEmailTouched(false);
  };

  const handleOnInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleOnInputBlur = () => {
    setEmailTouched(true);
    setEmailError(!isValidEmail(email));
  };

  const handleOnSend = (e: MouseEvent<HTMLButtonElement>) => {
    resetFieldsOnCloseModal();
    onSend(e);
  };

  const handleOnClose = (e: MouseEvent<HTMLButtonElement>) => {
    resetFieldsOnCloseModal();
    onClose(e);
  };

  return (
    <Modal open={open}>
      <S.Header>
        <S.Title>Send E-mail</S.Title>
        <Input
          id="email"
          placeholder="john.doe@teste.com"
          label="E-mail"
          type="email"
          value={email}
          error={emailTouched && emailError}
          message="Invalid E-mail"
          onBlur={handleOnInputBlur}
          onChange={handleOnInputChange}
        />
      </S.Header>
      <S.Container>
        <S.EmailContent>
          {
          selectedComics && selectedComics.length > 0
            && selectedComics.map((comic: IComic) => (
              <S.EmailWrapper key={`comic-email${comic.id}`}>
                <S.ImgContainer>
                  <S.ImgWrapper>
                    <S.Img
                      src={getThumbnail(comic)}
                      alt={comic.title}
                    />
                  </S.ImgWrapper>
                </S.ImgContainer>
                <S.TextContainer>
                  <S.Subtitle>
                    {comic.title}
                  </S.Subtitle>
                  <S.Paragraph
                    dangerouslySetInnerHTML={{ __html: comic.description || 'This comic dont have description registered.' }}
                  />
                </S.TextContainer>
              </S.EmailWrapper>
            ))
        }
        </S.EmailContent>
      </S.Container>
      <S.Footer>
        <S.Button
          type="button"
          onClick={handleOnSend}
          disabled={emailError}
        >
          Enviar
        </S.Button>
        <S.Button
          type="button"
          secondary
          onClick={handleOnClose}
        >
          Voltar
        </S.Button>
      </S.Footer>
    </Modal>
  );
};

export default Email;
