

import { createGlobalStyle } from 'styled-components';


type GlobalStylesProps = {
    body: string,
    text: string
}

export const GlobalStyles = createGlobalStyle<{ theme: GlobalStylesProps }>`
   *,
   *::before,
   *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family:Poppins,sans-serif; 
    }

    html {
        font-size: 10px;
        scroll-behavior: smooth;
    }

    body {
        background-color: ${props => props.theme.body};
        color:${props => props.theme.text};

    }
`