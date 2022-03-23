import React from "react";
import styled from "styled-components";
import IngredientSelect from "components/recommend/Ingredient/IngredientSelect"


const Container = styled.div`
  margin: 0 10vw;
  min-height: 100vh;
`

const Title = styled.div`
  font-family: Playfair Display;
  font-size: 3rem;
  margin-top: 4rem;
  font-weight: 600;
`

const BorderLine = styled.div`
  width: 7%;
  margin-top: 1rem;
  border-bottom: 1px solid black;
`

const Ingredient = () => {
  return (
    <>
      <Container>
        <Title>Select From Below</Title>
        <BorderLine />
        <IngredientSelect />
      </Container>
    </>
  );
};

export default Ingredient;
