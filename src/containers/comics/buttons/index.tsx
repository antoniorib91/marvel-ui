import React, { FunctionComponent, MouseEvent, memo } from 'react';
import { Row, Col } from 'react-awesome-styled-grid';
import { useComicsContext } from '../../../contexts/comics.context';
import Button from '../../../components/button';
import S from './styles';

type IProps = {
  isLoading: boolean,
  onClickLoad: (e: MouseEvent<HTMLButtonElement>) => void,
  onClickSend: (e: MouseEvent<HTMLButtonElement>) => void,
};

const Buttons: FunctionComponent<IProps> = (props: IProps) => {
  const { isLoading, onClickLoad, onClickSend } = props;
  const { selectedComics } = useComicsContext();
  return (
    <Row>
      <Col justify="center" align="center">
        <S.ButtonsContainer>
          <Button
            id="button-more-comics"
            type="button"
            disabled={isLoading}
            onClick={onClickLoad}
          >
            Load More Comics
          </Button>
          <Button
            id="button-more-comics"
            type="button"
            secondary
            disabled={selectedComics.length === 0}
            onClick={onClickSend}
          >
            Send e-mail
          </Button>
        </S.ButtonsContainer>
      </Col>
    </Row>
  );
};

export default memo(Buttons);
