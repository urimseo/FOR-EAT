import React from "react";
import styled from "styled-components";
import ReviewRecipeList from "components/accounts/mypage/ReviewRecipeList";
import WishRecipeList from "components/accounts/mypage/WishRecipeList";

const Container = styled.div``;

const SavedRecipeList = ({ RecipeList, ReviewList, UserInfo }) => {
  return (
    <>
      <Container>
        <WishRecipeList RecipeList={RecipeList} UserInfo={UserInfo} />
        <ReviewRecipeList ReviewList={ReviewList} UserInfo={UserInfo} />
      </Container>
    </>
  );
};

export default SavedRecipeList;