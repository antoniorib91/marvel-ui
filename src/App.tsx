import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from 'styled-react-modal';
import { Container } from 'react-awesome-styled-grid';
import Main from './containers/main';
import Theme from './styles/theme';
import ComicsProvider from './providers/comics.provider';
import ModalBackground from './components/styled/modal-background';
import LoaderProvider from './providers/loader.provider';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={Theme}>
      <ModalProvider backgroundComponent={ModalBackground}>
        <LoaderProvider>
          <ComicsProvider>
            <Container fluid>
              <Main />
            </Container>
          </ComicsProvider>
        </LoaderProvider>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
