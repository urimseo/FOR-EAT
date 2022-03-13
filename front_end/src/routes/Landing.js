import React from "react";
import styled from "styled-components";
import Login from "components/accounts/login/Login"

const Container = styled.div`
  margin: 0 10vw;
`;

const Landing = () => {
  return (
    <>
      <Container>
        <Login></Login>
      </Container>
    </>
  );
};

export default Landing;
