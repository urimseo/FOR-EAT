import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 10vw;
  min-height: 100vh;
`

const CardContainer = styled.div`
  display: flex;
  flex-flow: wrap;
`

const Title = styled.div`
  font-family: Playfair Display;
  font-size: 64px;
  margin-top: 3rem;
`

const BorderLine = styled.div`
  width: 100%;
  margin: 1rem 0;
  border-bottom: 1px solid black;
`

const Feed = () => {
  return (
    <>
      <Container>
        <Title>FOR:YOU</Title>
        <BorderLine />
        <CardContainer>
        </CardContainer>
      </Container>
    </>
  );
};

export default Feed;
