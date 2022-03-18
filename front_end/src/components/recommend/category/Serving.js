import {React, useState} from "react";
import styled from "styled-components";

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

const Servings = () => {
  const [oneRecipeShow, setOneRecipeShow] = useState(false);
  const [twoRecipeShow, setTwoRecipeShow] = useState(false);
  const [fourRecipeShow, setFourRecipeShow] = useState(false);
  const [partyRecipeShow, setPartyRecipeShow] = useState(false);

  const getOneRecipe = () => {
    setOneRecipeShow(true);
    setTwoRecipeShow(false);
    setFourRecipeShow(false);
    setPartyRecipeShow(false);
  }
  const getTwoRecipe = () => {
    setOneRecipeShow(false);
    setTwoRecipeShow(true);
    setFourRecipeShow(false);
    setPartyRecipeShow(false);
  }
  const getFourRecipe = () => {
    setOneRecipeShow(false);
    setTwoRecipeShow(false);
    setFourRecipeShow(true);
    setPartyRecipeShow(false);
  }
  const getPartyRecipe = () => {
    setOneRecipeShow(false);
    setTwoRecipeShow(false);
    setFourRecipeShow(false);
    setPartyRecipeShow(true);
  }
  return (
    <>
      {oneRecipeShow ? <ServingsButton onClick={getOneRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>ONE</ServingsButton> : <ServingsButton onClick={getOneRecipe}>ONE</ServingsButton>}
      {twoRecipeShow ? <ServingsButton onClick={getTwoRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>TWO</ServingsButton> : <ServingsButton onClick={getTwoRecipe}>TWO</ServingsButton>}
      {fourRecipeShow ? <ServingsButton onClick={getFourRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>FOUR</ServingsButton> : <ServingsButton onClick={getFourRecipe}>FOUR</ServingsButton>}
      {partyRecipeShow ? <ServingsButton onClick={getPartyRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>PARTY</ServingsButton> : <ServingsButton onClick={getPartyRecipe}>PARTY</ServingsButton>}
    </>
  );
};

export default Servings;