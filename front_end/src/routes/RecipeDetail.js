import React from "react";
import styled from "styled-components";

import RecipeInfo from "components/recipeDetail/RecipeInfo";
import Ingredient_spaghetti from "assets/img/Ingredient_spaghetti.jpg"
import CalculateCalories from "components/recipeDetail/CalculateCalories";
import IngredientDirections from "components/recipeDetail/IngredientDirections";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 6rem 12rem;
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
        <ImgWrapper>
          <Img src={Ingredient_spaghetti} />
        </ImgWrapper>
        <RecipeInfo />
        <CalculateCalories />
        <IngredientDirections />
      </Container>
    </div>
	)
};

export default RecipeDetail;