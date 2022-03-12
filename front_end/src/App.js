import { RecoilRoot } from 'recoil';
import AppRouter from "components/Router";
import './App.css';
import GlobalStyle from "theme/GlobalStyle";
import React from "react";

const App = () => {
    return (
      <>
        <RecoilRoot>
          <GlobalStyle />
          <AppRouter />
        </RecoilRoot>
      </>
    );
  };

export default App;
