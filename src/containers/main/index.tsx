import React, {
  FunctionComponent, useState, useEffect, memo,
} from 'react';
import { AxiosResponse } from 'axios';
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

const emptyComic = {
  creators: { available: 0 },
  thumbnail: { path: '' },
} as IComic;

const Main: FunctionComponent = () => {
  const [comic, setComic] = useState<IComic>({ ...emptyComic });
  const [copyright, setCopyright] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [firstLoad, setFirstLoad] = useState<boolean>(true);
  const [openDetail, setOpenDetail] = useState<boolean>(false);
  const [openEmail, setOpenEmail] = useState<boolean>(false);

  const { comics, updateComics } = useComicsContext();

  const handleResponseSucess = (response: AxiosResponse<IResponse>) => {
    const res = response.data;
    Pagination.totalOfItens = res.data.total;
    updateComics(res.data.results);
    setIsLoading(false);
  };

  // const handleResponseError = (err: Error) => {
  //   console.log(err);
  // };

  const getComics = () => {
    setIsLoading(true);
    RestComics.getComics()
      .then(handleResponseSucess);
    // .catch(handleResponseError);
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
    const getComicsInitial = () => {
      RestComics.getComics()
        .then((response) => {
          const res = response.data;
          updateComics(res.data.results);
          setCopyright(res.attributionText);
          Pagination.totalOfItens = res.data.total;
        });
      // .catch((err) => console.log(err));
    };
    if (firstLoad) {
      getComicsInitial();
      setFirstLoad(false);
    }
  }, [firstLoad, updateComics]);

  return (
    <>
      <Row>
        <Col>
          <Header />
          <S.Container>
            { comics.length > 0 && (
              <Comics
                isLoading={isLoading}
                onClickLoad={handleOnClickLoad}
                onClickSend={handleOnClickSend}
                onClickDetail={handleOnClickDetail}
              />
            )}
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
        <Footer
          copyright={copyright}
        />
      </Row>
    </>
  );
};

export default memo(Main);
