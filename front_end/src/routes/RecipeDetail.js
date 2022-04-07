import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import RecipeInfo from "components/recipeDetail/RecipeInfo";
import CalculateCalories from "components/recipeDetail/CalculateCalories";
import RelatedRecipeList from "components/recipeDetail/RelatedRecipeList";
import Ingredients from "components/recipeDetail/Ingredients";
import Instructions from "components/recipeDetail/Instructions";
import ReviewList from "components/recipeDetail/ReviewList";
import KeywordList from "components/recipeDetail/KeywordList";
import { getRecipeDetail } from "api/RecipeDetailApi";


const Container = styled.div`
  padding: 6rem 10rem;
  display: grid;
  grid-template-columns: 1fr;
`

const Wrapper = styled.div`
  display: flex;
  justify-content:${(props) => (props.jc ? props.jc : "center")};
  flex-wrap: wrap;
`

const ImgWrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-position: center;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const IngredientWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const RecipeDetail = (props) => {

  const location = useLocation();
  let recipeId = Number(location.pathname.split("/")[2]);
  
  const [ recipe, setRecipe ] = useState([])

  const getRecipe = async () => {
    const result = await getRecipeDetail(recipeId);
    setRecipe(result)
  }


  useEffect(() => {
    getRecipe();
  }, [recipeId]) // recipeId 변경될 때마다 실행됨(RecipeDetail에서 Card선택시 새로고침 안 되는 문제 해결)

  
	return (
    <div>
      <Container>
        <Wrapper>
          <div style={{display: "flex", flexDirection: "column", maxWidth:"35%"}}>
          <ImgWrapper>
            <Img src={recipe.images} />
          </ImgWrapper>
            <KeywordList keywords={recipe.keywords}/>
          </div>
          <RecipeInfo 
            categories={(recipe.categories ? recipe.categories : "-")}
            {...recipe}
          />
          <CalculateCalories calories={recipe.calories}/>
          <IngredientWrapper>
            <Ingredients ingredients={recipe.ingredient_raw} />
            <Instructions instructions={recipe.instructions}/>
          </IngredientWrapper>
        </Wrapper>
        <Wrapper jc="center">
            <RelatedRecipeList 
              ingredients_recommend={recipe.ingredients_recommend}
              nutrient_recommend={recipe.nutrient_recommend}
            /> 

          <ReviewList recipeId={recipeId}/>
        </Wrapper>
      </Container>
    </div>
	)
};

export default RecipeDetail;