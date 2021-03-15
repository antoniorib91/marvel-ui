import React, {
  FunctionComponent, useState, useEffect, memo,
} from 'react';
import { AxiosError, AxiosResponse } from 'axios';
import { Row, Col } from 'react-awesome-styled-grid';
import RestComics from '../../rest/marvel/rest-comics';
import { IResponse } from '../../models/response.model';
import { IComic } from '../../models/comic.model';
import Comics from '../comics';
import Header from '../header';
import Footer from '../footer';
import S from './styles';
import Pagination from '../../services/pagination.service';
import Detail from '../detail';
import Email from '../email';
import { useComicsContext } from '../../contexts/comics.context';
import { useLoaderContext } from '../../contexts/loader.context';

const emptyComic = {
  creators: { available: 0 },
  thumbnail: { path: '' },
} as IComic;

const defaultErrorMessage = 'An unexpected error has occurred!';

const Main: FunctionComponent = () => {
  const [comic, setComic] = useState<IComic>({ ...emptyComic });
  const [copyright, setCopyright] = useState<string>('');
  const [firstLoad, setFirstLoad] = useState<boolean>(true);
  const [openDetail, setOpenDetail] = useState<boolean>(false);
  const [openEmail, setOpenEmail] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const { loading, toggleLoader } = useLoaderContext();

  const { comics, updateComics } = useComicsContext();

  const handleResponseSucess = (response: AxiosResponse<IResponse>) => {
    const res = response.data;
    Pagination.totalOfItens = res.data.total;
    toggleLoader();
    setError(false);
    updateComics(res.data.results);
  };

  const handleResponseError = (err: AxiosError) => {
    setError(true);
    toggleLoader();
    if (err.response) {
      setErrorMessage(`${err.response.data.code} - ${err.response.data.status}`);
    }
  };

  const getComics = () => {
    toggleLoader();
    setError(false);
    RestComics.getComics()
      .then(handleResponseSucess)
      .catch(handleResponseError);
  };

  const handleOnClickLoad = () => {
    getComics();
  };

  const handleOnClickSend = () => {
    setOpenEmail(true);
  };

  const handleOnClickDetail = (comicToEdit: IComic) => {
    setComic(comicToEdit);
    setOpenDetail(true);
  };

  const handleOnSendEmail = () => {
    setOpenEmail(false);
  };

  useEffect(() => {
    const handleError = (err: AxiosError) => {
      setError(true);
      toggleLoader();
      if (err.response) {
        setErrorMessage(`${err.response.data.code} - ${err.response.data.status}`);
      }
    };

    const getComicsInitial = () => {
      toggleLoader();
      RestComics.getComics()
        .then((response) => {
          const res = response.data;
          toggleLoader();
          updateComics(res.data.results);
          setCopyright(res.attributionText);
          Pagination.totalOfItens = res.data.total;
        })
        .catch(handleError);
    };
    if (firstLoad) {
      getComicsInitial();
      setFirstLoad(false);
    }
  }, [firstLoad, updateComics, toggleLoader]);

  return (
    <>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <S.Container>
            { (comics.length > 0 && !error) && (
              <Comics
                isLoading={loading}
                onClickLoad={handleOnClickLoad}
                onClickSend={handleOnClickSend}
                onClickDetail={handleOnClickDetail}
              />
            )}
            {
              error && (
                <S.Message>
                  {defaultErrorMessage}
                  {' '}
                  {errorMessage}
                </S.Message>
              )
            }
            <Detail
              open={openDetail}
              comic={comic}
              onClose={() => setOpenDetail(false)}
            />
            <Email
              open={openEmail}
              onSend={handleOnSendEmail}
              onClose={() => setOpenEmail(false)}
            />
          </S.Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer
            copyright={copyright}
          />
        </Col>
      </Row>
    </>
  );
};

export default memo(Main);
