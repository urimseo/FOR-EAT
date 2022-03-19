import { React, useState } from "react";
import styled from "styled-components";
import { getRecipeList } from "api/CategoryApi";

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

const SubIngredient = () => {
  const [beafShow, setBeafShow] = useState(true);
  const [porkShow, setporkShow] = useState(false);
  const [lambShow, setLambShow] = useState(false);
  const [poultryShow, setPoultryShow] = useState(false);
  const [chickenShow, setChickenShow] = useState(false);

  const getBeefRecipe = async() => {
    setBeafShow(true);
    setporkShow(false);
    setLambShow(false);
    setPoultryShow(false);
    setChickenShow(false);
    const result = await getRecipeList(1, "Beef");
    if (result) {
      console.log(result)
    }
  }
  const getPorkRecipe = async() => {
    setBeafShow(false);
    setporkShow(true);
    setLambShow(false);
    setPoultryShow(false);
    setChickenShow(false);
    const result = await getRecipeList(1, "Pork");
    if (result) {
      console.log(result)
    }
  }
  const getLambRecipe = async() => {
    setBeafShow(false);
    setporkShow(false);
    setLambShow(true);
    setPoultryShow(false);
    setChickenShow(false);
    const result = await getRecipeList(1, "Lamb");
    if (result) {
      console.log(result)
    }
  }
  const getPoultryRecipe = async() => {
    setBeafShow(false);
    setporkShow(false);
    setLambShow(false);
    setPoultryShow(true);
    setChickenShow(false);
    const result = await getRecipeList(1, "Poultry");
    if (result) {
      console.log(result)
    }
  }
  const getChickenRecipe = async() => {
    setBeafShow(false);
    setporkShow(false);
    setLambShow(false);
    setPoultryShow(false);
    setChickenShow(true);
    const result = await getRecipeList(1, "Chicken");
    if (result) {
      console.log(result)
    }
  }

  return (
    <>
      {beafShow ? <SubIngredientButton onClick={getBeefRecipe} style={{color: "#ED8141"}}>BEEF</SubIngredientButton> : <SubIngredientButton onClick={getBeefRecipe}>BEEF</SubIngredientButton>}
      {porkShow ? <SubIngredientButton onClick={getPorkRecipe} style={{color: "#ED8141"}}>PORK</SubIngredientButton> : <SubIngredientButton onClick={getPorkRecipe}>PORK</SubIngredientButton>}
      {lambShow? <SubIngredientButton onClick={getLambRecipe} style={{color: "#ED8141"}}>LAMB</SubIngredientButton> : <SubIngredientButton onClick={getLambRecipe}>LAMB</SubIngredientButton>}
      {poultryShow ? <SubIngredientButton onClick={getPoultryRecipe} style={{color: "#ED8141"}}>POULTRY</SubIngredientButton> : <SubIngredientButton onClick={getPoultryRecipe}>POULTRY</SubIngredientButton>}
      {chickenShow ? <SubIngredientButton onClick={getChickenRecipe} style={{color: "#ED8141"}}>CHICKEN</SubIngredientButton> : <SubIngredientButton onClick={getChickenRecipe}>CHICKEN</SubIngredientButton>}
    </>
  );
};


export default SubIngredient;