import React from "react";
import styled from "styled-components";

import RecipeInfo from "components/recipeDetail/RecipeInfo";
import Ingredient_spaghetti from "assets/img/Ingredient_spaghetti.jpg"
import CalculateCalories from "components/recipeDetail/CalculateCalories";
import IngredientDirections from "components/recipeDetail/IngredientDirections";
import RelatedRecipeList from "components/recipeDetail/RelatedRecipeList";

const Container = styled.div`
  padding: 6rem 12rem;
`
const Wrapper = styled.div`
  display: flex;
  justify-content:${(props) => (props.jc ? props.jc : "center")};
  flex-wrap: wrap;
`
const ImgWrapper = styled.div`
  width: 45%;
  overflow: hidden;
  margin: 0 1rem; 
  background-position: center;
`
const Img = styled.img`
  width: 100%;
  hight: 100%;
  object-fit: cover;
`
const RecipeDetail = () => {
	return (
    <div>
      <Container>
        <Wrapper>
          <ImgWrapper>
            <Img src={Ingredient_spaghetti} />
          </ImgWrapper>
          <RecipeInfo />
          <CalculateCalories />
          <IngredientDirections />
        </Wrapper>
        <Wrapper jc="start">
          <RelatedRecipeList />
        </Wrapper>
      </Container>
    </div>
	)
};

export default RecipeDetail;