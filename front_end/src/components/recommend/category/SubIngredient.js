import { React, useState } from "react";
import styled from "styled-components";

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
  const [beafShow, setBeafShow] = useState(false);
  const [porkShow, setporkShow] = useState(false);
  const [lambShow, setLambShow] = useState(false);
  const [poultryShow, setPoultryShow] = useState(false);
  const [chickenShow, setChickenShow] = useState(false);

  const getBeefRecipe = () => {
    setBeafShow(true);
    setporkShow(false);
    setLambShow(false);
    setPoultryShow(false);
    setChickenShow(false);
  }
  const getPorkRecipe = () => {
    setBeafShow(false);
    setporkShow(true);
    setLambShow(false);
    setPoultryShow(false);
    setChickenShow(false);
  }
  const getLambRecipe = () => {
    setBeafShow(false);
    setporkShow(false);
    setLambShow(true);
    setPoultryShow(false);
    setChickenShow(false);
  }
  const getPoultryRecipe = () => {
    setBeafShow(false);
    setporkShow(false);
    setLambShow(false);
    setPoultryShow(true);
    setChickenShow(false);
  }
  const getChickenRecipe = () => {
    setBeafShow(false);
    setporkShow(false);
    setLambShow(false);
    setPoultryShow(false);
    setChickenShow(true);
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