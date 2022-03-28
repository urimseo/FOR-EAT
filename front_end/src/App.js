import { RecoilRoot } from 'recoil';
import AppRouter from "components/Router";
import './App.css';
import GlobalStyle from "theme/GlobalStyle";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    return (
      <>
        <RecoilRoot>
          <GlobalStyle />
          <AppRouter />
          
          <ToastContainer style={{ width: "400px", textAlign: "center" }} />
        </RecoilRoot>
      </>
    );
  };

export default App;
