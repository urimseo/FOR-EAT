import React from "react";
import styled from "styled-components";
import ReviewRecipeList from "components/accounts/mypage/ReviewRecipeList"
import WishRecipeList from "components/accounts/mypage/WishRecipeList"

const Container = styled.div`
`

const SavedRecipeList = ({RecipeList, ReviewList}) => {
  return (
    <>
      <Container>
        <WishRecipeList RecipeList={RecipeList}/> 
        <ReviewRecipeList ReviewList={ReviewList}/> 
      </Container>
    </>
  );
};

export default SavedRecipeList;
