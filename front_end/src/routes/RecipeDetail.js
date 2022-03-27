import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import RecipeInfo from "components/recipeDetail/RecipeInfo";
import CalculateCalories from "components/recipeDetail/CalculateCalories";
import RelatedRecipeList from "components/recipeDetail/RelatedRecipeList";
import Ingredients from "components/recipeDetail/Ingredients";
import Instructions from "components/recipeDetail/Instructions";
import ReviewList from "components/recipeDetail/ReviewList";
import { getRecipeDetail, likeRecipe } from "api/RecipeDetailApi";

const Container = styled.div`
  padding: 6rem 10rem;
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

const RecipeDetail = (props) => {

  const location = useLocation();
  let recipeId = Number(location.pathname.split("/")[2]);
  const [recipe, setRecipe] = useState({}); 
  const [like, setLike] = useState(false); // recipe detail 조회할 때 User가 좋아요 했는지 정보 보여줘야됨, 아래가 맞는 코드인데 아직 
  // const [like, setLike] = useState(recipe.isUserLiked);  

  useEffect(() => {
    getRecipeDetail(recipeId).then((res) => {
      setRecipe(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])
  
  // like 정보 불러오기
  const getLike = async () => {
    await likeRecipe(recipeId) // 지금은 toggle이라서 재실행 될때마다 토글되어 보여짐;; 
  }
  
  // 화면 불러올 때 한번 실행.
  // useEffect(()=> {
  //   getLike();
  // }, [])

  const toggleLike = async () =>{
    const response = await likeRecipe(recipeId)
    console.log(response.data)  // data > data
    if (response.data) {
      setLike(!like)
    }
  }

	return (
    <div>
      <Container>
        <Wrapper>
          <ImgWrapper>
            <Img src={recipe.images} />
          </ImgWrapper>
          <RecipeInfo 
            recipeId={recipe.recipe_seq}
            recipe={recipe}
            name={recipe.name}
            toggleLike={toggleLike}  // 자식 컴포넌트에서 함수 실행하면 부모컴포넌트에서 결과 반영됨
            like={like} // useState에 있는 like 보내줌
            categories={(recipe.categories ? recipe.categories : "-")}
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
            rating={recipe.average_rating}
          />
          <CalculateCalories calories={recipe.calories}/>
          <IngredientWrapper>
            <Ingredients ingredients={recipe.ingredient_raw} />
            <Instructions instructions={recipe.instructions}/>
          </IngredientWrapper>
        </Wrapper>
        <Wrapper jc="center">
          <RelatedRecipeList />
          <ReviewList recipeId={recipeId}/>
        </Wrapper>
      </Container>
    </div>
	)
};

export default RecipeDetail;