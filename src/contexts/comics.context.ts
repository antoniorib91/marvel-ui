import {
  createContext, useContext,
} from 'react';
import { IComic } from '../models/comic.model';

type IContextProps = {
  comics: Array<IComic>,
  setComics: (value: Array<IComic>) => void,
  viewComics: Array<IComic>,
  setViewComics: (value: Array<IComic>) => void,
  selectedComics: Array<IComic>,
  setSelectedComics: (value: Array<IComic>) => void,
  filterViewComics: (value: string) => void,
  resetFilterdViewComics: () => void,
  updateSelectedComics: (id: number) => void,
  updateComics: (value: Array<IComic>) => void,
  isComicSelected: (id: number) => boolean,
};

const defaultContext: IContextProps = {
  comics: [],
  setComics: () => {},
  viewComics: [],
  setViewComics: () => {},
  selectedComics: [],
  setSelectedComics: () => {},
  filterViewComics: () => {},
  resetFilterdViewComics: () => {},
  updateSelectedComics: () => {},
  updateComics: () => {},
  isComicSelected: () => false,
};

export const ComicsContext = createContext(defaultContext);

export const useComicsContext = (): IContextProps => (
  useContext(ComicsContext)
);
