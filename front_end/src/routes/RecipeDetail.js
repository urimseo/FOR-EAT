import { React, useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import RecipeInfo from "components/recipeDetail/RecipeInfo";
import CalculateCalories from "components/recipeDetail/CalculateCalories";
import RelatedRecipeList from "components/recipeDetail/RelatedRecipeList";
import Ingredients from "components/recipeDetail/Ingredients";
import Instructions from "components/recipeDetail/Instructions";
import ReviewForm from "components/recipeDetail/ReviewForm";
import { getRecipeDetail } from "api/RecipeDetailApi";

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
  height: 100%;
  object-fit: cover;
`
const IngredientWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const RecipeDetail = () => {

  const location = useLocation();
  let recipeId = Number(location.pathname.split("/")[2]);
  const [recipe, setRecipe] = useState(getRecipeDetail(recipeId)); 

  useEffect(() => {
    getRecipeDetail(recipeId).then((res) => {
      setRecipe(res)
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

	return (
    <div>
      <Container>
        <Wrapper>
          <ImgWrapper>
            <Img src={recipe.images} />
          </ImgWrapper>
          <RecipeInfo 
            recipeId={recipeId}
            recipe={recipe}
            name={recipe.name}
            categories={recipe.categories}
            servings={recipe.servings}
            prepTime={recipe.prep_time}
            cookTime={recipe.cook_time}
            calories={recipe.calories}
            carbs={recipe.carbohydrate_content}
            protein={recipe.protein_content}
            fat={recipe.fat_content}
            saturatedFat={recipe.saturated_fat_content}
            cholesterol={recipe.cholesterol_content}
            sodium={recipe.sodium_content}
            fiber={recipe.fiber_content}
            sugar={recipe.sugar_content}
          />
          <CalculateCalories calories={recipe.calories}/>
          <IngredientWrapper>
            <Ingredients ingredients={recipe.ingredient_raw} />
            <Instructions instructions={recipe.instructions}/>
          </IngredientWrapper>
        </Wrapper>
        <Wrapper jc="start">
          <RelatedRecipeList />
        </Wrapper>
        <ReviewForm />
      </Container>
    </div>
	)
};

export default RecipeDetail;