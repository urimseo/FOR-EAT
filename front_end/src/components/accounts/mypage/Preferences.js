import React from "react";
import styled from "styled-components";
import Card from "components/commons/Card"

const Container = styled.div`
`

const Title = styled.div`
  font-family: Playfair Display;
  font-size: 64px;
  margin-top: 3rem;
`

const CardContainer = styled.div`
display: flex;
flex-flow: wrap;
`

const Preferences = () => {
  return (
    <>
      <Container>
        <Title>Preferences</Title>

        <CardContainer>
          <Card />
        </CardContainer>
      </Container>
    </>
  );
};

export default Preferences;
