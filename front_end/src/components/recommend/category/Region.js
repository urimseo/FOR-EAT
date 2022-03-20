import {React, useState, forwardRef, useImperativeHandle } from "react";
import styled from "styled-components";
import { getRecipeList } from "api/CategoryApi";
import Card from "components/commons/Card";


const CardContainer = styled.div`
  display: flex;
  flex-flow: wrap;
`

const RegionButton = styled.button`
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

const Region = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    getRegionRecipe(){
      getEuropeRecipe();
    }
  }))
  const [europeShow, setEuropeShow] = useState(true);
  const [asiaShow, setAsiaShow] = useState(false);
  const [americaShow, setAmericaShow] = useState(false);
  const [africaShow, setAfricaShow] = useState(false);
  const [Oceaniahow, setOceaniaShow] = useState(false);
  const [RecipeList, setRecipeList] = useState([]);

  const getEuropeRecipe = async() => {
    setEuropeShow(true);
    setAsiaShow(false);
    setAmericaShow(false);
    setAfricaShow(false);
    setOceaniaShow(false);
    const Recipe = await getRecipeList(1, "Europe");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }
  const getAsiaRecipe = async() => {
    setEuropeShow(false);
    setAsiaShow(true);
    setAmericaShow(false);
    setAfricaShow(false);
    setOceaniaShow(false);
    const Recipe = await getRecipeList(1, "Asia");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }
  const getAmericaRecipe = async() => {
    setEuropeShow(false);
    setAsiaShow(false);
    setAmericaShow(true);
    setAfricaShow(false);
    setOceaniaShow(false);
    const Recipe = await getRecipeList(1, "America");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }
  const getAfricaRecipe = async() => {
    setEuropeShow(false);
    setAsiaShow(false);
    setAmericaShow(false);
    setAfricaShow(true);
    setOceaniaShow(false);
    const Recipe = await getRecipeList(1, "Africa");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }
  const getOceaniaRecipe = async() => {
    setEuropeShow(false);
    setAsiaShow(false);
    setAmericaShow(false);
    setAfricaShow(false);
    setOceaniaShow(true);
    const Recipe = await getRecipeList(1, "Oceania");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }
  return (
    <>
      <div>
        {europeShow ? <RegionButton onClick={getEuropeRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>EUROPE</RegionButton> : <RegionButton onClick={getEuropeRecipe}>EUROPE</RegionButton>}
        {asiaShow ? <RegionButton onClick={getAsiaRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>ASIA</RegionButton> : <RegionButton onClick={getAsiaRecipe}>ASIA</RegionButton>}
        {americaShow ? <RegionButton onClick={getAmericaRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>AMERICA</RegionButton> : <RegionButton onClick={getAmericaRecipe}>AMERICA</RegionButton>}
        {africaShow ? <RegionButton onClick={getAfricaRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>AFRICA</RegionButton> : <RegionButton onClick={getAfricaRecipe}>AFRICA</RegionButton>}
        {Oceaniahow ? <RegionButton onClick={getOceaniaRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>OCEANIA</RegionButton> : <RegionButton onClick={getOceaniaRecipe}>OCEANIA</RegionButton>}
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

export default Region;