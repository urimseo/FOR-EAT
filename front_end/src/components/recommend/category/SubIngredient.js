import { React, useState, forwardRef, useImperativeHandle } from "react";
import styled from "styled-components";
import { getRecipeList } from "api/CategoryApi";
import Card from "components/commons/Card";


const CardContainer = styled.div`
  display: flex;
  flex-flow: wrap;
`

const SubIngredientButton = styled.button`
  display: inline-block;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  background-color: white;
  margin: 0.5rem 0 0 0;
  padding-inline: 1rem;
  border: none;
  border-radius: 10rem;
  height: 2rem;
`

const SubIngredient = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    getSubIngredientRecipe(){
      getBeefRecipe();
    }
  }))
  const [beafShow, setBeafShow] = useState(true);
  const [porkShow, setporkShow] = useState(false);
  const [lambShow, setLambShow] = useState(false);
  const [poultryShow, setPoultryShow] = useState(false);
  const [chickenShow, setChickenShow] = useState(false);
  const [RecipeList, setRecipeList] = useState([]);

  const getBeefRecipe = async() => {
    setBeafShow(true);
    setporkShow(false);
    setLambShow(false);
    setPoultryShow(false);
    setChickenShow(false);
    const Recipe = await getRecipeList(1, "Beef");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }
  const getPorkRecipe = async() => {
    setBeafShow(false);
    setporkShow(true);
    setLambShow(false);
    setPoultryShow(false);
    setChickenShow(false);
    const Recipe = await getRecipeList(1, "Pork");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }
  const getLambRecipe = async() => {
    setBeafShow(false);
    setporkShow(false);
    setLambShow(true);
    setPoultryShow(false);
    setChickenShow(false);
    const Recipe = await getRecipeList(1, "Lamb");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }
  const getPoultryRecipe = async() => {
    setBeafShow(false);
    setporkShow(false);
    setLambShow(false);
    setPoultryShow(true);
    setChickenShow(false);
    const Recipe = await getRecipeList(1, "Poultry");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }
  const getChickenRecipe = async() => {
    setBeafShow(false);
    setporkShow(false);
    setLambShow(false);
    setPoultryShow(false);
    setChickenShow(true);
    const Recipe = await getRecipeList(1, "Chicken");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }

  return (
    <>
      <div>
        {beafShow ? <SubIngredientButton onClick={getBeefRecipe} style={{color: "#ED8141"}}>BEEF</SubIngredientButton> : <SubIngredientButton onClick={getBeefRecipe}>BEEF</SubIngredientButton>}
        {porkShow ? <SubIngredientButton onClick={getPorkRecipe} style={{color: "#ED8141"}}>PORK</SubIngredientButton> : <SubIngredientButton onClick={getPorkRecipe}>PORK</SubIngredientButton>}
        {lambShow? <SubIngredientButton onClick={getLambRecipe} style={{color: "#ED8141"}}>LAMB</SubIngredientButton> : <SubIngredientButton onClick={getLambRecipe}>LAMB</SubIngredientButton>}
        {poultryShow ? <SubIngredientButton onClick={getPoultryRecipe} style={{color: "#ED8141"}}>POULTRY</SubIngredientButton> : <SubIngredientButton onClick={getPoultryRecipe}>POULTRY</SubIngredientButton>}
        {chickenShow ? <SubIngredientButton onClick={getChickenRecipe} style={{color: "#ED8141"}}>CHICKEN</SubIngredientButton> : <SubIngredientButton onClick={getChickenRecipe}>CHICKEN</SubIngredientButton>}
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


export default SubIngredient;