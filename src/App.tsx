import React from 'react';
import { ThemeProvider } from 'styled-components';
import Main from './containers/main';
import Theme from './styles/theme';
import S from './styles';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={Theme}>
      <S.Container>
        <Main />
      </S.Container>
    </ThemeProvider>
  );
}

export default App;
