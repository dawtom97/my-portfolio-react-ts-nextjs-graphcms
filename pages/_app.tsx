import type { AppProps } from 'next/app';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import { darkTheme, lightTheme } from '../styles/theme';
import '@fontsource/open-sans/400.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<string>('light');
  const themeToggler = () => (theme === 'light' ? setTheme('dark') : setTheme('light'));

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
