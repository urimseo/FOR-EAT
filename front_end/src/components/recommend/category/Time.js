import {React, useState, forwardRef, useImperativeHandle} from "react";
import styled from "styled-components";
import { getRecipeList } from "api/CategoryApi";
import Card from "components/commons/Card";

const CardContainer = styled.div`
  display: flex;
  flex-flow: wrap;
`

const TimeButton = styled.button`
  display: inline-block;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  background-color: white;
  margin: 0 1rem 0 0;
  padding-inline: 1rem;
  border: none;
  border-radius: 10rem;
  height: 2rem;
`

const Time = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    getTimeRecipe(){
      get30minRecipe();
    }
  }))
  const [time30minShow, set30minShow] = useState(true);
  const [time60minShow, set60minShow] = useState(false);
  const [time120minShow, set120minShow] = useState(false);
  const [time180minShow, set180minShow] = useState(false);
  const [time24hoursShow, set24hoursShow] = useState(false);
  const [RecipeList, setRecipeList] = useState([]);


  const get30minRecipe = async() => {
    set30minShow(true);
    set60minShow(false);
    set120minShow(false);
    set180minShow(false);
    set24hoursShow(false);
    const Recipe = await getRecipeList(1, "30min");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }
  const get60minRecipe = async() => {
    set30minShow(false);
    set60minShow(true);
    set120minShow(false);
    set180minShow(false);
    set24hoursShow(false);
    const Recipe = await getRecipeList(1, "60min");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }
  const get120minRecipe = async() => {
    set30minShow(false);
    set60minShow(false);
    set120minShow(true);
    set180minShow(false);
    set24hoursShow(false);
    const Recipe = await getRecipeList(1, "120min");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }
  const get180minRecipe = async() => {
    set30minShow(false);
    set60minShow(false);
    set120minShow(false);
    set180minShow(true);
    set24hoursShow(false);
    const Recipe = await getRecipeList(1, "180min");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }
  const get24hoursRecipe = async() => {
    set30minShow(false);
    set60minShow(false);
    set120minShow(false);
    set180minShow(false);
    set24hoursShow(true);
    const Recipe = await getRecipeList(1, "24hours");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }
  return (
    <>
      <div>
        {time30minShow ? <TimeButton onClick={get30minRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>30MIN</TimeButton> : <TimeButton onClick={get30minRecipe}>30MIN</TimeButton>}
        {time60minShow ? <TimeButton onClick={get60minRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>1HOURS</TimeButton> : <TimeButton onClick={get60minRecipe}>1HOURS</TimeButton>}
        {time120minShow ? <TimeButton onClick={get120minRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>2HOURS</TimeButton> : <TimeButton onClick={get120minRecipe}>2HOURS</TimeButton>}
        {time180minShow ? <TimeButton onClick={get180minRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>3HOURS</TimeButton> : <TimeButton onClick={get180minRecipe}>3HOURS</TimeButton>}
        {time24hoursShow ? <TimeButton onClick={get24hoursRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>24HOURS</TimeButton> : <TimeButton onClick={get24hoursRecipe}>24HOURS</TimeButton>}
      </div>  
      <CardContainer>
        {RecipeList.map((Recipe, index) => ( 
          <Card
            key={Recipe.recipe_seq}
            index={index}
            recipeImg={Recipe.images}
            recipeName={Recipe.name}
            // recipeCategory={recipe.summary}
            recipeCalorie={Recipe.calories}
          />
        ))}
      </CardContainer>
    </>
  );
});

export default Time;