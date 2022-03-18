import { React, useState } from "react";
import styled from "styled-components";
import SubIngredient from "components/recommend/category/SubIngredient";

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

const ButtonContainer = styled.p`
  display: flex;
`

const Ingredient = () => {
  const [meatShow, setMeatShow] = useState(false);
  const [seafoodShow, setSeafoodShow] = useState(false);
  const [vegetableShow, setVegetableShow] = useState(false);

  const getMeatRecipe = () => {
    setMeatShow(true);
    setSeafoodShow(false);
    setVegetableShow(false);
  }
  const getSeafoodRecipe = () => {
    setSeafoodShow(true);
    setMeatShow(false);
    setVegetableShow(false);
  }
  const getVegetableRecipe = () => {
    setVegetableShow(true);
    setSeafoodShow(false);
    setMeatShow(false);
  }
  return (
    <>
      {meatShow ? <IngredientButton onClick={getMeatRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>MEAT</IngredientButton> : <IngredientButton onClick={getMeatRecipe}>MEAT</IngredientButton>}
      {seafoodShow ? <IngredientButton onClick={getSeafoodRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>SEAFOOD</IngredientButton> : <IngredientButton onClick={getSeafoodRecipe}>SEAFOOD</IngredientButton>}
      {vegetableShow ? <IngredientButton onClick={getVegetableRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>VEGETABLE</IngredientButton> : <IngredientButton onClick={getVegetableRecipe}>VEGETABLE</IngredientButton>} 
      <ButtonContainer>
        {meatShow ? <SubIngredient /> : null}
      </ButtonContainer>
    </>
  );
};

export default Ingredient;