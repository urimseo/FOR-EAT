import React from "react";
import styled from "styled-components";
import Card from "components/commons/Card"
import ReviewRecipeList from "components/accounts/mypage/ReviewRecipeList"

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

const SavedRecipeList = () => {
  return (
    <>
      <Container>
        <Title>My Wish Recipes</Title>
        
        <CardContainer>
          <Card />
        </CardContainer>

        <ReviewRecipeList /> 
      </Container>
    </>
  );
};

export default SavedRecipeList;
