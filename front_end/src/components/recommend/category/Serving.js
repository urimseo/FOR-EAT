import {React, useState, forwardRef, useImperativeHandle} from "react";
import styled from "styled-components";
import { getRecipeList } from "api/CategoryApi";
import Card from "components/commons/Card";


const CardContainer = styled.div`
  display: flex;
  flex-flow: wrap;
`

const ServingsButton = styled.button`
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

const Servings = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    getServingsRecipe(){
      getOneRecipe();
    }
  }))
  const [oneRecipeShow, setOneRecipeShow] = useState(true);
  const [twoRecipeShow, setTwoRecipeShow] = useState(false);
  const [fourRecipeShow, setFourRecipeShow] = useState(false);
  const [partyRecipeShow, setPartyRecipeShow] = useState(false);
  const [RecipeList, setRecipeList] = useState([]);

  const getOneRecipe = async() => {
    setOneRecipeShow(true);
    setTwoRecipeShow(false);
    setFourRecipeShow(false);
    setPartyRecipeShow(false);
    const Recipe = await getRecipeList(1, "One");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }
  const getTwoRecipe = async() => {
    setOneRecipeShow(false);
    setTwoRecipeShow(true);
    setFourRecipeShow(false);
    setPartyRecipeShow(false);
    const Recipe = await getRecipeList(1, "Two");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }
  const getFourRecipe = async () => {
    setOneRecipeShow(false);
    setTwoRecipeShow(false);
    setFourRecipeShow(true);
    setPartyRecipeShow(false);
    const Recipe = await getRecipeList(1, "Four");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }
  const getPartyRecipe = async() => {
    setOneRecipeShow(false);
    setTwoRecipeShow(false);
    setFourRecipeShow(false);
    setPartyRecipeShow(true);
    const Recipe = await getRecipeList(1, "Party");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }
  return (
    <>
      <div>
        {oneRecipeShow ? <ServingsButton onClick={getOneRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>ONE</ServingsButton> : <ServingsButton onClick={getOneRecipe}>ONE</ServingsButton>}
        {twoRecipeShow ? <ServingsButton onClick={getTwoRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>TWO</ServingsButton> : <ServingsButton onClick={getTwoRecipe}>TWO</ServingsButton>}
        {fourRecipeShow ? <ServingsButton onClick={getFourRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>FOUR</ServingsButton> : <ServingsButton onClick={getFourRecipe}>FOUR</ServingsButton>}
        {partyRecipeShow ? <ServingsButton onClick={getPartyRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>PARTY</ServingsButton> : <ServingsButton onClick={getPartyRecipe}>PARTY</ServingsButton>}
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

export default Servings;