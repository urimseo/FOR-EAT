import React, { useState } from "react";
import styled from "styled-components";
import Rating from '@mui/material/Rating';

import Typography from "components/commons/Typography";
import CalorieCard from "components/recipeDetail/CalorieCard";
import NutritionCard from "components/recipeDetail/NutritionCard";
import { likeRecipe } from "api/RecipeDetailApi";
import icon_lined_heart from "assets/img/icon_lined_heart.png"
import icon_filled_heart from "assets/img/icon_filled_heart.png"

const Container = styled.div`
  width: 45%;
  padding-inline: 1rem;
`

const Like = styled.img`
  display: flex;
  width: 4rem;
  cursor: pointer;
`

const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`
const CategoryTag = styled.div`
display: flex;
#flag {
  width: 9rem;
  height: 2rem;
  box-sizing: content-box;
  padding-right: 1rem;
  padding-top: 1rem;
  position: relative;
  background: #ED8141;
  color: white;
  font-size: 1rem;
  text-align: center;
  text-transform: uppercase;
}
#flag:after {
  content: "";
  position: absolute;
  left: 9rem;
  bottom: 0;
  width: 0;
  height: 0;
  border-right: 1rem solid #FFFFFF;
  border-top: 1.5rem solid transparent;
  border-bottom: 1.5rem solid transparent;
}
`
const TextContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  row-gap: 1rem;
  margin: 1rem 0;
  .itemTitle{
    font-weight: 600;
  }
  .nutriTitle{
    grid-template-rows: 0 0;
    font-size: 1.5rem;
    font-weight: 600;
  }
  .item{
    align-self: center;
  }
`
const CardContainer = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0.5rem;
`

const RecipeInfo = ({ name, like, toggleLike, categories, servings, prepTime, cookTime, calories, carbs, protein, fat, saturatedFat, cholesterol, sodium, fiber, sugar, rating }) => {

  return (
    <Container>
      <SpaceBetweenContainer>
        <Typography 
        ff="Playfair Display" fs="3rem" fw="600"
        ta="start" dp="flex"
        mb="1rem"
        >{name}</Typography>
        <Like src={like ? icon_filled_heart : icon_lined_heart} onClick={toggleLike} alt="" />
      </SpaceBetweenContainer>
      <SpaceBetweenContainer>
        <CategoryTag>
          <div id="flag">{(categories.length === 0 ? "DELICIOUS" : categories[0]["category_name"] )}</div>
        </CategoryTag>
        <Rating name="read-only" value={rating} readOnly />
      </SpaceBetweenContainer>
      <hr />
        <TextContainer>
          <div className="itemTitle">SERVINGS</div>
          <div className="item">{servings}</div>
          <div className="itemTitle">PREPATION TIME</div>
          <div className="item">{prepTime} MIN</div>
          <div className="itemTitle">COOKING TIME</div>
          <div className="item">{cookTime} MIN</div>
        </TextContainer>
      <hr />
        <TextContainer>
          <div className="nutriTitle">NUTRITION</div>
          <div className="item">Of Adult's Reference Intake</div>
        </TextContainer>
        <div style={{display: "grid", gridTemplateColumns:"2fr 8fr", gap: "0.5vw" }}>
          <CalorieCard title="CALORIES" grams={Math.ceil(calories)} ratio={Math.ceil(calories/667*100)} />
          <CardContainer>
            <NutritionCard title="CARBS" grams={Math.ceil(carbs)} ratio={Math.ceil(carbs/81*100)} />
            <NutritionCard title="PROTEIN" grams={Math.ceil(protein)} ratio={Math.ceil(protein/35*100)} />
            <NutritionCard title="FAT" grams={Math.ceil(fat)} ratio={Math.ceil(fat/18.5*100)} />
            <NutritionCard title="SATURATED FAT" grams={Math.ceil(saturatedFat)} ratio={Math.ceil(saturatedFat/5*100)} />
            <NutritionCard title="SODIUM" grams={Math.ceil(sodium)} ratio={Math.ceil(sodium/667*100)} />
            <NutritionCard title="SUGAR" grams={Math.ceil(sugar)} ratio={Math.ceil(sugar/16.7*100)} />
            <NutritionCard title="FIBER" grams={Math.ceil(fiber)} ratio={Math.ceil(fiber/8.3*100)} />
            <NutritionCard title="CHOLESTEROL" grams={Math.ceil(cholesterol)} ratio={Math.ceil(cholesterol/100*100)} />
          </CardContainer>
        </div>
    </Container>
  )
}

export default RecipeInfo;