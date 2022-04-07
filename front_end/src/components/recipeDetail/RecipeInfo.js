import React, { useState, useEffect } from "react";
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
  padding-inline: 2rem;
`

const Like = styled.img`
  display: flex;
  width: 3rem;
  cursor: pointer;
`

const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const CategoryTag = styled.div`
display: flex;
#flag {
  width: 9rem;
  height: 1.7rem;
  box-sizing: content-box;
  padding-right: 1rem;
  padding-top: 0.8rem;
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
  border-top: 1.3rem solid transparent;
  border-bottom: 1.3rem solid transparent;
}
`
const TextContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 1rem 0;
  .itemTitle{
    font-weight: 600;
    margin: 0.4rem 0;
  }
  .nutriTitle{
    grid-template-rows: 0 0;
    grid-row: 1 / span 3;
    font-size: 1.5rem;
    font-weight: 600;
    vertical-align: center;
  }
  .item{
    align-self: center;
  }
  .itemWarn {
    align-self: center;
    color: #ED8141;
    font-weight: 500;
  }
`
const CardContainer = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0.5rem;
`

const RecipeInfo = ({ 
  recipe_seq, name, categories, servings, serving_size, liked, allergy,
  prep_time, cook_time, calories, carbohydrate_content, protein_content, fat_content, 
  saturated_fat_content, cholesterol_content, sodium_content, fiber_content, sugar_content, average_rating }) => {
  
  const [ like, setLike ] = useState() 

  const toggleLike = async () =>{
    const response = await likeRecipe(recipe_seq)
    if (response) {
      setLike(!like)
    }
  }

  useEffect(() => {
    setLike(liked);
  }, [liked])

  useEffect(() => {
    setLike(like)
  }, [like])


  return (
    <Container>
      <SpaceBetweenContainer>
        <Typography 
        ff="Playfair Display" fs="2.5rem" fw="600"
        ta="start" dp="flex"
        mb="1rem"
        >{name}</Typography>
        <Like src={ like ? icon_filled_heart : icon_lined_heart } 
        onClick={toggleLike} alt="" />
      </SpaceBetweenContainer>
      <SpaceBetweenContainer>
        <CategoryTag>
          <div id="flag">{(categories.length === 0 ? "DELICIOUS" : categories[0]["category_name"] )}</div>
        </CategoryTag>
        <Rating name="read-only" value={average_rating ? average_rating : null} readOnly />
      </SpaceBetweenContainer>
      <hr />
        <TextContainer>
          <div className="itemTitle">ALLERGIES</div>
          <div className="itemWarn">
            { allergy ? allergy.length > 0 ?
              allergy.map((item) => (`${item.allergy_name} `)) : "NOT RELEVANT" : "NOT RELEVANT"
            }
          </div>
          <div className="itemTitle">SERVINGS</div>
          <div className="item">{servings}</div>
          <div className="itemTitle">PREPATION TIME</div>
          <div className="item">{prep_time} MIN</div>
          <div className="itemTitle">COOKING TIME</div>
          <div className="item">{cook_time} MIN</div>
        </TextContainer>
      <hr />
        <TextContainer>
          <div className="nutriTitle">NUTRITION</div>
          <div className="item">Of Adult's Reference Intake</div>
          <div className="item">Serving Size : {serving_size}</div>
        </TextContainer>
        <div style={{display: "grid", gridTemplateColumns:"2fr 8fr", gap: "0.5vw" }}>
          <CalorieCard title="CALORIES" grams={Math.ceil(calories)} ratio={Math.ceil(calories/667*100)} />
          <CardContainer>
            <NutritionCard title="CARBS" grams={Math.ceil(carbohydrate_content)} ratio={Math.ceil(carbohydrate_content/81*100)} />
            <NutritionCard title="PROTEIN" grams={Math.ceil(protein_content)} ratio={Math.ceil(protein_content/35*100)} />
            <NutritionCard title="FAT" grams={Math.ceil(fat_content)} ratio={Math.ceil(fat_content/18.5*100)} />
            <NutritionCard title="SATURATED FAT" grams={Math.ceil(saturated_fat_content)} ratio={Math.ceil(saturated_fat_content/5*100)} />
            <NutritionCard title="SODIUM" grams={Math.ceil(sodium_content)} ratio={Math.ceil(sodium_content/833*100)} />
            <NutritionCard title="SUGAR" grams={Math.ceil(sugar_content)} ratio={Math.ceil(sugar_content/16.7*100)} />
            <NutritionCard title="FIBER" grams={Math.ceil(fiber_content)} ratio={Math.ceil(fiber_content/8.3*100)} />
            <NutritionCard title="CHOLESTEROL" grams={Math.ceil(cholesterol_content)} ratio={Math.ceil(cholesterol_content/100*100)} />
          </CardContainer>
        </div>
    </Container>
  )
}

export default RecipeInfo;