import React, {
  ChangeEvent, FunctionComponent, useState, memo,
} from 'react';

import S from './styles';
import Input from '../../components/inputs/input';
import { useComicsContext } from '../../contexts/comics.context';

const Header: FunctionComponent = () => {
  const [searchText, setSearchText] = useState<string>('');

  const { filterViewComics, resetFilterdViewComics } = useComicsContext();

  const clearFilterOnInputLengthIsZero = (value: string) => {
    if (value.length === 0) {
      resetFilterdViewComics();
    }
  };

  const filterComicsWhenInputLengthIsMoreThanThree = (value: string) => {
    if (value.length > 3) {
      filterViewComics(value);
    }
  };

  const handleOnInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    filterComicsWhenInputLengthIsMoreThanThree(event.target.value);
    clearFilterOnInputLengthIsZero(event.target.value);
  };

  return (
    <S.Header>
      <S.LContainer>
        <S.Logo />
      </S.LContainer>
      <S.RContainer>
        <Input
          id="search"
          placeholder="Search for some comics here"
          value={searchText}
          onChange={handleOnInputChange}
        />
      </S.RContainer>
    </S.Header>
  );
};
export default memo(Header);
