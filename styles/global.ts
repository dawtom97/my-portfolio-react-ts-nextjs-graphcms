

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
    .spinner-wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #262728;
  z-index: 9999;

}
.spinner {
  transform: translate(-50%,-50%);
  height:60px;
  width:60px;
  margin:0px auto;
  -webkit-animation: rotation .6s infinite linear;
  -moz-animation: rotation .6s infinite linear;
  -o-animation: rotation .6s infinite linear;
  animation: rotation .6s infinite linear;
  border-left:6px solid rgba(251,63,92,.15);
  border-right:6px solid rgba(251,63,92,.15);
  border-bottom:6px solid rgba(251,63,92,.15);
  border-top:6px solid rgba(251,63,92,.8);
  border-radius:100%;
}

.spinner-shadow, .spinner-shadow-second {  
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(251,63,92);
  z-index: 998;
}

.spinner-shadow-second {
  background-color: #262728;
  z-index: 999;
}



@-webkit-keyframes rotation {
  from {-webkit-transform: rotate(0deg);}
  to {-webkit-transform: rotate(359deg);}
}
@-moz-keyframes rotation {
  from {-moz-transform: rotate(0deg);}
  to {-moz-transform: rotate(359deg);}
}
@-o-keyframes rotation {
  from {-o-transform: rotate(0deg);}
  to {-o-transform: rotate(359deg);}
}
@keyframes rotation {
  from {transform: rotate(0deg);}
  to {transform: rotate(359deg);}
}
    
`