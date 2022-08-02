import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import { lightTheme } from '../styles/theme';
import '@fontsource/open-sans/400.css';
import { SoundContextProvider } from '../src/context/SoundContext';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider theme={lightTheme}>
      <SoundContextProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </SoundContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
