import React from "react";
import styled from "styled-components";
import ReviewRecipeList from "components/accounts/mypage/ReviewRecipeList"
import WishRecipeList from "components/accounts/mypage/WishRecipeList"

const Container = styled.div`
`

const SavedRecipeList = () => {
  return (
    <>
      <Container>
        <WishRecipeList /> 
        <ReviewRecipeList /> 
      </Container>
    </>
  );
};

export default SavedRecipeList;
