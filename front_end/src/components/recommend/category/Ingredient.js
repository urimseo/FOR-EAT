import { React, useState, forwardRef, useImperativeHandle, useRef } from "react";
import styled from "styled-components";
import SubIngredient from "components/recommend/category/SubIngredient";
import { getRecipeList } from "api/CategoryApi";
import Card from "components/commons/Card";


const CardContainer = styled.div`
  display: flex;
  flex-flow: wrap;
`

const IngredientButton = styled.button`
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

const Ingredient = forwardRef((props, ref) => {
  const childSubIngredient = useRef();

  useImperativeHandle(ref, () => ({
    getIngredientRecipe(){
      childSubIngredient.current.getSubIngredientRecipe();
    }
  }))
  const [meatShow, setMeatShow] = useState(true);
  const [seafoodShow, setSeafoodShow] = useState(false);
  const [vegetableShow, setVegetableShow] = useState(false);
  const [RecipeList, setRecipeList] = useState([]);

  const getMeatRecipe = async() => {
    setMeatShow(true);
    setSeafoodShow(false);
    setVegetableShow(false);
    const Recipe = await getRecipeList(1, "Beef");
    if (Recipe) {
      childSubIngredient.current.getSubIngredientRecipe();
    }
  }
  const getSeafoodRecipe = async() => {
    setSeafoodShow(true);
    setMeatShow(false);
    setVegetableShow(false);
    const Recipe = await getRecipeList(1, "Seafood");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }
  const getVegetableRecipe = async() => {
    setVegetableShow(true);
    setSeafoodShow(false);
    setMeatShow(false);
    const Recipe = await getRecipeList(1, "Vegetable");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }
  return (
    <>
      <div>
        {meatShow ? <IngredientButton onClick={getMeatRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>MEAT</IngredientButton> : <IngredientButton onClick={getMeatRecipe}>MEAT</IngredientButton>}
        {seafoodShow ? <IngredientButton onClick={getSeafoodRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>SEAFOOD</IngredientButton> : <IngredientButton onClick={getSeafoodRecipe}>SEAFOOD</IngredientButton>}
        {vegetableShow ? <IngredientButton onClick={getVegetableRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>VEGETABLE</IngredientButton> : <IngredientButton onClick={getVegetableRecipe}>VEGETABLE</IngredientButton>} 
        {meatShow ? <SubIngredient ref={childSubIngredient}/> : null}
      </div>
      { meatShow ? null : 
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
      }
    </>
  );
});

export default Ingredient;