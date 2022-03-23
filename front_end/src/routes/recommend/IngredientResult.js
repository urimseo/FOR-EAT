import React from "react";
import styled from "styled-components";

import IngredientResultCard from "components/recommend/Ingredient/IngredientResultCard";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const IngredientResult = () => {
  return (
    <Container>
        <IngredientResultCard />
        <IngredientResultCard />
    </Container>
  )
}

export default IngredientResult;