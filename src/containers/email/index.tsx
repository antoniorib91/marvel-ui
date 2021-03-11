import React, {
  ChangeEvent, FunctionComponent,
  MouseEvent, useState,
} from 'react';
import { isValidEmail } from '@brazilian-utils/brazilian-utils';
import { useComicsContext } from '../../contexts/comics.context';
import { IComic } from '../../models/comic.model';
import Modal from '../../components/modal';
import Button from '../../components/button';
import Input from '../../components/inputs/input';
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
        {
          selectedComics && selectedComics.length > 0
            && selectedComics.map((comic: IComic) => (
              <S.EmailContent key={`comic-email${comic.id}`}>
                <img
                  src={getThumbnail(comic)}
                  alt={comic.title}
                />
                <S.RContent>
                  <h4>{comic.title}</h4>
                  <S.Paragraph dangerouslySetInnerHTML={{ __html: comic.description || 'This comic dont have description registered.' }} />
                </S.RContent>
              </S.EmailContent>
            ))
        }
      </S.Container>
      <S.Footer>
        <Button
          type="button"
          onClick={handleOnSend}
          disabled={emailError}
        >
          Enviar
        </Button>
        <Button
          type="button"
          secondary
          onClick={handleOnClose}
        >
          Voltar
        </Button>
      </S.Footer>
    </Modal>
  );
};

export default Email;
