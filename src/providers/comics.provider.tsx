import React, { FunctionComponent, ReactNode, useState } from 'react';
import { IComic } from '../models/comic.model';
import { ComicsContext } from '../contexts/comics.context';

type IProps = {
  children: ReactNode,
};

const ComicsProvider: FunctionComponent<IProps> = (props: IProps) => {
  const { children } = props;

  const [comics, setComics] = useState<Array<IComic>>([]);
  const [viewComics, setViewComics] = useState<Array<IComic>>([]);
  const [selectedComics, setSelectedComics] = useState<Array<IComic>>([]);

  const isComicSelected = (id: number) => (
    selectedComics.some((comic) => comic.id === id)
  );

  const filterViewComics = (text: string) => {
    const filtered = viewComics.filter((comic: IComic) => (
      comic.title.trim().toUpperCase().includes(text.trim().toUpperCase())
    ));
    setViewComics(filtered);
  };

  const resetFilterdViewComics = () => {
    setViewComics([...comics]);
  };

  const updateComics = (value: Array<IComic>) => {
    const contatened = comics.concat(value);
    const nomRepeated = contatened.filter((v, i, a) => a.findIndex((t) => (t.id === v.id)) === i);
    setComics([...nomRepeated]);
    setViewComics([...nomRepeated]);
  };

  const updateSelectedComics = (id: number) => {
    if (!isComicSelected(id)) {
      setSelectedComics((previous: Array<IComic>) => {
        const newComic = comics.filter((comic: IComic) => comic.id === id);
        previous.push(newComic[0]);
        return [...previous];
      });
    } else {
      setSelectedComics((previous: Array<IComic>) => (
        [...previous.filter((comic: IComic) => comic.id !== id)]));
    }
  };

  const contextValue = {
    comics,
    setComics,
    viewComics,
    setViewComics,
    selectedComics,
    setSelectedComics,
    filterViewComics,
    resetFilterdViewComics,
    updateSelectedComics,
    updateComics,
    isComicSelected,
  };

  return (
    <ComicsContext.Provider value={contextValue}>
      {children}
    </ComicsContext.Provider>
  );
};

export default ComicsProvider;
