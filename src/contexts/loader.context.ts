import {
  createContext, useContext,
} from 'react';

type IContextProps = {
  loading: boolean,
  setLoading: (value: boolean) => void,
  toggleLoader: () => void,
};

const defaultContext = {
  loading: false,
  setLoading: () => {},
  toggleLoader: () => {},
};

export const LoaderContext = createContext<IContextProps>(defaultContext);

export const useLoaderContext = (): IContextProps => (
  useContext(LoaderContext)
);
