import {
  createContext, useContext,
} from 'react';

export const ComicsContext = createContext({});

export const useComicsContext = (): any => (
  useContext(ComicsContext)
);
