import {React, useState, forwardRef, useImperativeHandle} from "react";
import styled from "styled-components";
import { getRecipeList } from "api/CategoryApi";
import Card from "components/commons/Card";

const CardContainer = styled.div`
  display: flex;
  flex-flow: wrap;
`

const TypeButton = styled.button`
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

const Type = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    getTypeRecipe(){
      getBreadRecipe();
    }
  }))
  const [breadShow, setBreadShow] = useState(true);
  const [riceShow, setRiceShow] = useState(false);
  const [pastaShow, setPastaShow] = useState(false);
  const [dessertShow, setDessertShow] = useState(false);
  const [RecipeList, setRecipeList] = useState([]);

  const getBreadRecipe = async() => {
    setBreadShow(true);
    setRiceShow(false);
    setPastaShow(false);
    setDessertShow(false);
    const Recipe = await getRecipeList(1, "Bread");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }
  const getRiceRecipe = async() => {
    setBreadShow(false);
    setRiceShow(true);
    setPastaShow(false);
    setDessertShow(false);
    const Recipe = await getRecipeList(1, "Rice");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }
  const getPastaRecipe = async() => {
    setBreadShow(false);
    setRiceShow(false);
    setPastaShow(true);
    setDessertShow(false);
    const Recipe = await getRecipeList(1, "Pasta");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }
  const getDessertRecipe = async() => {
    setBreadShow(false);
    setRiceShow(false);
    setPastaShow(false);
    setDessertShow(true);
    const Recipe = await getRecipeList(1, "Dessert");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }
  return (
    <>
      <div>
        {breadShow ? <TypeButton onClick={getBreadRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>BREAD</TypeButton> : <TypeButton onClick={getBreadRecipe}>BREAD</TypeButton>}
        {riceShow ? <TypeButton onClick={getRiceRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>RICE</TypeButton> : <TypeButton onClick={getRiceRecipe}>RICE</TypeButton>}
        {pastaShow ? <TypeButton onClick={getPastaRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>PASTA</TypeButton> : <TypeButton onClick={getPastaRecipe}>PASTA</TypeButton>}
        {dessertShow ? <TypeButton onClick={getDessertRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>DESSERT</TypeButton> : <TypeButton onClick={getDessertRecipe}>DESSERT</TypeButton>}
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

export default Type;