import Navbar from "components/layout/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;


const Home = () => {
  return (
    <>
      <Container>
        <SubContainer>
          <Navbar />
          <Outlet />
        </SubContainer>
      </Container>
    </>
  );
};

export default Home;
