import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "components/commons/Card";
import Pagination from "react-js-pagination";
import "assets/css/Pagination.css";

const Container = styled.div`
`

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-family: Playfair Display;
`

const Title = styled.div`
  display: flex;
  font-family: Playfair Display;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  font-size: 32px;
  font-weight: 600;
`

const See = styled.a`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-left: auto;
  text-decoration: none;
  color: #ed8141;
  font-family : Work Sans;
`

const CardContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-flow: wrap;
  min-width: 10vh;
`

const Sub = styled.div`
  height: 26rem;
  margin-top: 1rem;
  font-size: 20px;
  font-weight: bold;
`

const WishRecipeList = ({RecipeList, UserInfo}) => {
  return (
    <>
      <Container>
        <Top>
          <Title>My Wish Recipes</Title>
        {RecipeList.length !== 0 ?
          <See href={'/' + UserInfo + '/mypage/likes'}>See all →</See>
          :null}
        </Top>
        
      {RecipeList.length !== 0 ? 
        <CardContainer>
        {RecipeList.map((recipe, index) => (
          <Card
            key={recipe.recipe_seq}
            recipeSeq={recipe.recipe_seq}
            index={index}
            recipeImg={recipe.images}
            recipeName={recipe.name}
            recipeKeywords={(recipe.keywords.length > 1 ? [recipe.keywords[0].keyword_name, recipe.keywords[1].keyword_name] : recipe.keywords[0].keyword_name)}
            recipeCalorie={recipe.calories}
          />
        ))}
      </CardContainer> : <Sub>Please choose the recipe.</Sub>
      }
      </Container>
    </>
  );
};

export default WishRecipeList;