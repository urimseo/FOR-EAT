import SearchBar from "components/layout/SearchBar";
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
          <SearchBar />
          <Outlet />
        </SubContainer>
      </Container>
    </>
  );
};

export default Home;
