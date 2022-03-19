import {React, useState} from "react";
import styled from "styled-components";
import { getRecipeList } from "api/CategoryApi";

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

const Type = () => {
  const [breadShow, setBreadShow] = useState(true);
  const [riceShow, setRiceShow] = useState(false);
  const [pastaShow, setPastaShow] = useState(false);
  const [dessertShow, setDessertShow] = useState(false);

  const getBreadRecipe = async() => {
    setBreadShow(true);
    setRiceShow(false);
    setPastaShow(false);
    setDessertShow(false);
    const result = await getRecipeList(1, "Bread");
    if (result) {
      console.log(result)
    }
  }
  const getRiceRecipe = async() => {
    setBreadShow(false);
    setRiceShow(true);
    setPastaShow(false);
    setDessertShow(false);
    const result = await getRecipeList(1, "Rice");
    if (result) {
      console.log(result)
    }
  }
  const getPastaRecipe = async() => {
    setBreadShow(false);
    setRiceShow(false);
    setPastaShow(true);
    setDessertShow(false);
    const result = await getRecipeList(1, "Pasta");
    if (result) {
      console.log(result)
    }
  }
  const getDessertRecipe = async() => {
    setBreadShow(false);
    setRiceShow(false);
    setPastaShow(false);
    setDessertShow(true);
    const result = await getRecipeList(1, "Dessert");
    if (result) {
      console.log(result)
    }
  }
  return (
    <>
      {breadShow ? <TypeButton onClick={getBreadRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>BREAD</TypeButton> : <TypeButton onClick={getBreadRecipe}>BREAD</TypeButton>}
      {riceShow ? <TypeButton onClick={getRiceRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>RICE</TypeButton> : <TypeButton onClick={getRiceRecipe}>RICE</TypeButton>}
      {pastaShow ? <TypeButton onClick={getPastaRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>PASTA</TypeButton> : <TypeButton onClick={getPastaRecipe}>PASTA</TypeButton>}
      {dessertShow ? <TypeButton onClick={getDessertRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>DESSERT</TypeButton> : <TypeButton onClick={getDessertRecipe}>DESSERT</TypeButton>}
    </>
  );
};

export default Type;