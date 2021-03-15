import React, { FunctionComponent, ReactNode, useState } from 'react';
import { LoaderContext } from '../contexts/loader.context';
import Loader from '../components/loader';

type IProps = {
  children: ReactNode,
};

const LoaderProvider: FunctionComponent<IProps> = (props: IProps) => {
  const { children } = props;

  const [loading, setLoading] = useState<boolean>(false);

  const toggleLoader = () => {
    setLoading((prev) => !prev);
  };

  const contextValue = {
    loading,
    setLoading,
    toggleLoader,
  };

  return (
    <LoaderContext.Provider value={contextValue}>
      <Loader loading={loading} />
      {children}
    </LoaderContext.Provider>
  );
};

export default LoaderProvider;
