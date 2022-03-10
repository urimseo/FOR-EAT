import { RecoilRoot } from 'recoil';
import AppRouter from "components/Router";
import './App.css';
import React from "react";

const App = () => {
    return (
      <>
        <RecoilRoot>
          <AppRouter />
        </RecoilRoot>
      </>
    );
  };

export default App;
